const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const app = read("app.js");
const html = read("index.html");
const css = read("styles.css");
const combined = `${app}\n${html}\n${css}`;

const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const forbiddenProjects = [
  "TM2500 GEN8",
  "TM2500 DYNAMIS",
  "TM2500-RPS",
  "TM2500-JEREH",
  "TM2500-EQ",
  "SOLAR",
  "LM6000 PF",
  "LM6000 PC",
  "LMS100 PB",
  "LMS100 Package",
  "LMS100 Demo",
];

for (const project of forbiddenProjects) {
  assert(!combined.includes(project), `Forbidden project reference remains: ${project}`);
}

const requiredProjects = ["TM2500 XPRESS", "LM6000 EQP", "LM6000 Allestec", "LMS100 PA"];
for (const project of requiredProjects) {
  assert(combined.includes(project), `Required project missing: ${project}`);
}

const forbiddenPatterns = [
  [/startsWith\(["']LMS100["']\)/, "LMS100 routing must not use startsWith."],
  [/includes\(["']LMS100["']\)/, "LMS100 routing must not use includes."],
  [/startsWith\(["']LM6000["']\)/, "LM6000 routing must not use startsWith."],
  [/includes\(["']LM6000["']\)/, "LM6000 routing must not use includes."],
  [/projectScopedTags\["LMS100"\]/, "LMS100 PA must not use generic projectScopedTags['LMS100']."],
  [/projectDeviceDefinitions\["LMS100"\]/, "LMS100 PA must not use generic projectDeviceDefinitions['LMS100']."],
  [/projectNamespaces\.LMS100/, "LMS100 PA must not use projectNamespaces.LMS100."],
  [/\bHS-3091\b/, "TM2500 manual release must use HS-3092 / HS-3093, not HS-3091."],
  [/\bHS_3091\b/, "TM2500 manual release must use HS-3092 / HS-3093, not HS_3091."],
  [/\bHS-6391\b/, "Unknown pull station HS-6391 must not remain in code."],
  [/\bHS_6391\b/, "Unknown pull station HS_6391 must not remain in code."],
];

for (const [pattern, message] of forbiddenPatterns) {
  assert(!pattern.test(combined), message);
}

const idMatches = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = [...new Set(idMatches.filter((id, index) => idMatches.indexOf(id) !== index))];
assert(duplicateIds.length === 0, `Duplicate HTML ids found: ${duplicateIds.join(", ")}`);

const deviceMatches = [...html.matchAll(/\bdata-device="([^"]+)"/g)].map((match) => match[1]);
const htmlDevices = new Set(deviceMatches);

const requiredTagsByProject = {
  "TM2500 XPRESS": ["HS-3092", "HS-3093", "TS-3003", "TS-3014", "AE-3004A", "AE-3004B", "AE-3004C", "AE-3029", "AE-3030"],
  "LM6000 ALLESTEC": ["LM6-AE-3029", "LM6-AE-3030", "AE-6304A", "AE-6304B", "AE-6304C", "AE-6313", "HS-6308", "HS-6309", "HS-6312"],
  "LM6000 EQP": ["AE-6304A", "AE-6304B", "AE-6304C", "AE-6313", "AE-3029", "AE-3030", "HS-6308", "HS-6309", "HS-6312"],
  "LMS100 PA": ["LMS100-AE-3004", "LMS100-AE-3007", "LMS100-AE-3015", "LMS100-AE-3029", "LMS100-AE-3030", "LMS100-AE-3031", "LMS100-HS-3070"],
};

for (const [project, tags] of Object.entries(requiredTagsByProject)) {
  for (const tag of tags) {
    assert(htmlDevices.has(tag) || app.includes(`"${tag}"`), `${project} missing required tag: ${tag}`);
  }
}

const routeKeys = ["tm2500", "lm6000Allestec", "lm6000Eqp", "lms100", "blank"];
for (const route of routeKeys) {
  assert(app.includes(`${route}: {`), `Project route missing: ${route}`);
}

assert(css.includes("#lm6000-allestec-view .countdown-box.allestec-countdown-box"), "Allestec countdown positioning must be scoped by view id.");
assert(css.includes("#lm6000-view .countdown-box.allestec-countdown-box"), "LM6000 EQP countdown positioning must be scoped by view id.");
assert(css.includes("#lms100-view .countdown-box.allestec-countdown-box"), "LMS100 countdown positioning must be scoped by view id.");
assert(!/\.countdown-box\s*\{[\s\S]*?transform:\s*scale/.test(css), "Countdown box must not be scaled by responsive breakpoint.");

if (failures.length) {
  console.error("Architecture validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Architecture validation passed.");
