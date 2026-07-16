const fallbackDevices = {
  "AE-3004A": { type: "CGS Combustible Gas Detector", status: "Normal", value: "0% LEL", address: "Loop 1 / Node 03", area: "Turbine Enclosure", mode: "Virtual" },
  "AE-3004B": { type: "CGS Combustible Gas Detector", status: "Normal", value: "0% LEL", address: "Loop 1 / Node 04", area: "Turbine Enclosure", mode: "Virtual" },
  "AE-3004C": { type: "CGS Combustible Gas Detector", status: "Normal", value: "0% LEL", address: "Loop 1 / Node 05", area: "Turbine Enclosure", mode: "Virtual" },
  "AE-3029": { type: "IR Gas Detector", status: "Normal", value: "0% LEL", address: "Loop 1 / Node 29", area: "Exhaust Stack", mode: "Virtual" },
  "AE-3030": { type: "IR Gas Detector", status: "Normal", value: "0% LEL", address: "Loop 1 / Node 30", area: "Exhaust Stack", mode: "Virtual" },
  "EDIO-1": { type: "EQP EDIO Module", status: "Normal", value: "Inputs Ready", address: "Loop 1 / Node EDIO-1", area: "Turbine Enclosure I/O", mode: "Virtual" },
  "EDIO-2": { type: "EQP EDIO Module", status: "Normal", value: "Outputs Ready", address: "Loop 1 / Node EDIO-2", area: "Turbine Enclosure I/O", mode: "Virtual" },
  "TS-3003": { type: "Thermal Detector", status: "Normal", value: "Ready", address: "EDIO-1 / CH4 with TS-3014", area: "Turbine Enclosure", mode: "Virtual" },
  "TS-3014": { type: "Thermal Detector", status: "Normal", value: "Ready", address: "EDIO-1 / CH4 with TS-3003", area: "Turbine Enclosure", mode: "Virtual" },
  "HS-3081": { type: "LOTO / Suppression Inhibit", status: "Normal", value: "Ready", address: "Hardwired / Not on EDIO topology", area: "Front Door", mode: "Virtual" },
  "HS-3040": { type: "Horn Acknowledge Switch", status: "Normal", value: "Ready", address: "EDIO-1 / CH8", area: "Front Door", mode: "Virtual" },
  "HS-3091": { type: "Spare / Drawing Reference", status: "Normal", value: "Ready", address: "Not used for TM2500 manual release", area: "Reference", mode: "Virtual" },
  "HS-3092": { type: "Manual Aerosol Release Station", status: "Normal", value: "Ready", address: "EDIO-1 / CH1 with HS-3093", area: "Lower Door", mode: "Virtual" },
  "HS-3093": { type: "Manual Aerosol Release Station", status: "Normal", value: "Ready", address: "EDIO-1 / CH1 with HS-3092", area: "Upper Door", mode: "Virtual" },
  "YSA-3006A": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "EDIO-1 / CH3", area: "Top Enclosure", mode: "Virtual" },
  "YSA-3006B": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "EDIO-1 / CH2", area: "Front Lower", mode: "Virtual" },
  "YSL-3042": { type: "Strobe Light", status: "Normal", value: "Ready", address: "EDIO-1 / CH7", area: "Turbine Enclosure / Left of AE-3004A", mode: "Virtual" },
  "YSL-3036": { type: "Strobe Light", status: "Normal", value: "Ready", address: "EDIO-1 / CH6", area: "Lower Stack Side", mode: "Virtual" },
  "YSL-3041": { type: "Beacon / Strobe", status: "Normal", value: "Ready", address: "EDIO-1 / CH5", area: "Upper Stack Side", mode: "Virtual" },
  "YSZ-3171": { type: "Virtual Stat-X Aerosol Output", status: "Normal", value: "Ready", address: "EDIO-2 / CH5", area: "Upper Enclosure Corner", mode: "Virtual" },
  "YSZ-3172": { type: "Virtual Stat-X Aerosol Output", status: "Normal", value: "Ready", address: "EDIO-2 / CH6", area: "Lower Enclosure Corner", mode: "Virtual" },
  "ALARM LO GAS": { type: "S3 Logic Alarm Summary", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
  "ALARM HI GAS SHTDN": { type: "S3 Logic Alarm Summary", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
  "FIRE/GAS MON SHUTDWN": { type: "S3 Logic Relay", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
  "GENERAL ALARM": { type: "S3 Logic Relay", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
  "AGENT RELEASED": { type: "S3 Logic Relay", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
  "AGENT RELEASE SUPPR": { type: "S3 Logic Relay", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
  "RLY-1": { type: "Relay Output", status: "Normal", value: "Fire & Gas Monitor Shutdown", address: "Relay 1", area: "EQP Controller", mode: "Virtual" },
  "RLY-2": { type: "Relay Output", status: "Normal", value: "Critical Path / Vent Fan Shutdown", address: "Relay 2", area: "EQP Controller", mode: "Virtual" },
  "RLY-3": { type: "Relay Output", status: "Normal", value: "Low Gas Alarm", address: "Relay 3", area: "EQP Controller", mode: "Virtual" },
  "RLY-4": { type: "Relay Output", status: "Normal", value: "High Gas Shutdown", address: "Relay 4", area: "EQP Controller", mode: "Virtual" },
  "RLY-5": { type: "Relay Output", status: "Normal", value: "Agent Release Circuit 1", address: "Relay 5", area: "EQP Controller", mode: "Virtual" },
  "RLY-6": { type: "Relay Output", status: "Normal", value: "Agent Release Circuit 2", address: "Relay 6", area: "EQP Controller", mode: "Virtual" },
  "RLY-7": { type: "Relay Output", status: "Normal", value: "Fault Output", address: "Relay 7", area: "EQP Controller", mode: "Virtual" },
  "RLY-8": { type: "Relay Output", status: "Normal", value: "Spare", address: "Relay 8", area: "EQP Controller", mode: "Virtual" },
  "LED-RELEASE-TESTER": { type: "Virtual LED Release Tester", status: "Normal", value: "De-Energized", address: "Release Test Board", area: "Training Bench", mode: "Virtual" },
  "EQP-001": { type: "Eagle Quantum Premier Controller", status: "Normal", value: "Online", address: "Controller / Node 01", area: "Fire Panel", mode: "Real / Virtual Lab" },
  "ALL-800": { type: "Allestec 800 Conventional Controller", status: "Normal", value: "Online", address: "Conventional Panel", area: "Allestec Control Panel", mode: "Real / Virtual Lab" },
  "YSL-6345": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Conventional Output", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "HS-6308": { type: "Manual CO2 Release Station", status: "Normal", value: "Ready", address: "3.9K EOL Release Input", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "HS-6309": { type: "Manual CO2 Release Station", status: "Normal", value: "Ready", address: "3.9K EOL Release Input", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "TS-6310": { type: "Heat Detector", status: "Normal", value: "Ready", address: "3.9K EOL Heat Zone", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "YSA-6347": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "Conventional Output", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "BE-6311": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "3.9K EOL Flame Zone", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "AE-6313": { type: "Gas Detector 4-20mA", status: "Normal", value: "0% LEL", address: "Analog Gas Channel", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "TS-6307": { type: "Heat Detector", status: "Normal", value: "Ready", address: "3.9K EOL Heat Zone", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "YSA-6306": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "Conventional Output", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "HS-6312": { type: "Manual CO2 Release Station", status: "Normal", value: "Ready", address: "3.9K EOL Release Input", area: "Generator / Gearbox Enclosure", mode: "Virtual" },
  "TS-6303": { type: "Heat Detector", status: "Normal", value: "Ready", address: "3.9K EOL Heat Zone", area: "Turbine Enclosure", mode: "Virtual" },
  "YSL-6336": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Conventional Output", area: "Turbine Enclosure", mode: "Virtual" },
  "AE-6304A": { type: "Gas Detector 4-20mA", status: "Normal", value: "0% LEL", address: "Analog Gas Channel", area: "Turbine Enclosure", mode: "Virtual" },
  "AE-6304B": { type: "Gas Detector 4-20mA", status: "Normal", value: "0% LEL", address: "Analog Gas Channel", area: "Turbine Enclosure", mode: "Virtual" },
  "AE-6304C": { type: "Gas Detector 4-20mA", status: "Normal", value: "0% LEL", address: "Analog Gas Channel", area: "Turbine Enclosure", mode: "Virtual" },
  "LM6-AE-3029": { type: "IR Gas Detector", status: "Normal", value: "0% LEL", address: "Analog IR Gas Channel", area: "LM6000 Exhaust / IR Gas", mode: "Virtual" },
  "LM6-AE-3030": { type: "IR Gas Detector", status: "Normal", value: "0% LEL", address: "Analog IR Gas Channel", area: "LM6000 Exhaust / IR Gas", mode: "Virtual" },
  "BE-6300": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "3.9K EOL Flame Zone", area: "Turbine Enclosure", mode: "Virtual" },
  "BE-6302": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "3.9K EOL Flame Zone", area: "Turbine Enclosure", mode: "Virtual" },
  "BE-6335": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "3.9K EOL Flame Zone", area: "Turbine Enclosure", mode: "Virtual" },
  "YSL-6344": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Conventional Output", area: "Turbine Enclosure", mode: "Virtual" },
  "YSL-6306": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Conventional Output", area: "Turbine Enclosure", mode: "Virtual" },
  "TS-6314": { type: "Heat Detector", status: "Normal", value: "Ready", address: "3.9K EOL Heat Zone", area: "Turbine Enclosure", mode: "Virtual" },
  "YSA-6346": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "Conventional Output", area: "Turbine Enclosure", mode: "Virtual" },
  "HS-6305": { type: "Horn Acknowledge Switch", status: "Normal", value: "Ready", address: "3.9K EOL Horn Acknowledge Input", area: "CO2 Skid / Horn Ack", mode: "Virtual" },
  "HS-6363": { type: "CO2 Purge Switch", status: "Normal", value: "Ready", address: "Relay Input / CO2 Purge Reset", area: "CO2 Skid", mode: "Virtual" },
  "FD-GEN-1": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "Relay Input / Flame Zone GEN", area: "Generator Enclosure", mode: "Virtual" },
  "YSA-GEN": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "Relay Output / GEN Horn", area: "Generator Enclosure", mode: "Virtual" },
  "YSL-GEN": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Relay Output / GEN Strobe", area: "Generator Enclosure", mode: "Virtual" },
  "TS-GEN-1": { type: "Heat Detector", status: "Normal", value: "Ready", address: "3.9K EOL / Heat Zone GEN", area: "Generator Enclosure", mode: "Virtual" },
  "AE-GEN-1": { type: "Gas Detector 4-20mA", status: "Normal", value: "0% LEL", address: "Waveshare AO / GEN Gas", area: "Generator Enclosure", mode: "Virtual" },
  "HS-GEN": { type: "Manual CO2 Release Station", status: "Normal", value: "Ready", address: "Relay Input / GEN Release", area: "Generator Enclosure", mode: "Virtual" },
  "FD-TURB-1": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "Relay Input / Flame Zone T1", area: "Turbine Enclosure", mode: "Virtual" },
  "FD-TURB-2": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "Relay Input / Flame Zone T2", area: "Turbine Enclosure", mode: "Virtual" },
  "YSL-TURB-1": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Relay Output / T1 Strobe", area: "Turbine Enclosure", mode: "Virtual" },
  "YSL-TURB-2": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Relay Output / T2 Strobe", area: "Turbine Enclosure", mode: "Virtual" },
  "YSA-TURB": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "Relay Output / Turbine Horn", area: "Turbine Enclosure", mode: "Virtual" },
  "AE-TURB-1": { type: "Gas Detector 4-20mA", status: "Normal", value: "0% LEL", address: "Waveshare AO / T1 Gas", area: "Turbine Enclosure", mode: "Virtual" },
  "AE-TURB-2": { type: "Gas Detector 4-20mA", status: "Normal", value: "0% LEL", address: "Waveshare AO / T2 Gas", area: "Turbine Enclosure", mode: "Virtual" },
  "TS-TURB-1": { type: "Heat Detector", status: "Normal", value: "Ready", address: "3.9K EOL / Heat Zone T1", area: "Turbine Enclosure", mode: "Virtual" },
  "TS-TURB-2": { type: "Heat Detector", status: "Normal", value: "Ready", address: "3.9K EOL / Heat Zone T2", area: "Turbine Enclosure", mode: "Virtual" },
  "HS-TURB": { type: "Manual CO2 Release Station", status: "Normal", value: "Ready", address: "Relay Input / Turbine Release", area: "Turbine Enclosure", mode: "Virtual" },
  "SOV-6359": { type: "CO2 Main Release Solenoid", status: "Normal", value: "Ready", address: "Relay Output / Main CO2 Solenoid 1", area: "CO2 Skid", mode: "Virtual" },
  "SOV-6360": { type: "CO2 Main Release Solenoid", status: "Normal", value: "Ready", address: "Relay Output / Main CO2 Solenoid 2", area: "CO2 Skid", mode: "Virtual" },
  "SOV-6361": { type: "CO2 Reserve Release Solenoid", status: "Normal", value: "Ready", address: "Relay Output / Reserve CO2 Solenoid 1", area: "CO2 Skid", mode: "Virtual" },
  "SOV-6362": { type: "CO2 Reserve Release Solenoid", status: "Normal", value: "Ready", address: "Relay Output / Reserve CO2 Solenoid 2", area: "CO2 Skid", mode: "Virtual" },
  "ZS-6364": { type: "CO2 Block Valve Limit Switch", status: "Normal", value: "Open / Release Enabled", address: "Relay Input / Block Valve ZS-6364", area: "CO2 Skid", mode: "Virtual" },
  "PSH-6348A": { type: "CO2 Pressure Switch High", status: "Normal", value: "Normal Pressure", address: "Relay Input / Upstream CO2 Pressure Switch", area: "CO2 Skid", mode: "Virtual" },
  "PSHH-6348B": { type: "CO2 Pressure Switch High-High", status: "Normal", value: "Normal Pressure", address: "Relay Input / Discharge Pressure Confirm", area: "CO2 Skid", mode: "Virtual" },
  "CO2-BLOCK": { type: "CO2 Block Valve Alias", status: "Normal", value: "Open / Release Enabled", address: "Alias for ZS-6364", area: "CO2 Skid", mode: "Virtual" },
  "CO2-PSH": { type: "CO2 Pressure Switch Alias", status: "Normal", value: "Normal Pressure", address: "Alias for PSHH-6348B", area: "CO2 Skid", mode: "Virtual" },
  "OUT-HIGH-GAS-TURBINE": { type: "High Gas Turbine", status: "Normal", value: "Ready", address: "I/O DI16", area: "Turbine Alarm Outputs", mode: "I/O Feedback" },
  "OUT-LOW-GAS-TURBINE": { type: "Low Gas Turbine", status: "Normal", value: "Ready", address: "I/O DI15", area: "Turbine Alarm Outputs", mode: "I/O Feedback" },
  "OUT-HIGH-GAS-GENERATOR": { type: "High Gas Generator", status: "Normal", value: "Ready", address: "I/O DI18", area: "Generator Alarm Outputs", mode: "I/O Feedback" },
  "OUT-LOW-GAS-GENERATOR": { type: "Low Gas Generator", status: "Normal", value: "Ready", address: "I/O DI17", area: "Generator Alarm Outputs", mode: "I/O Feedback" },
};

const defaultS3Logic = {
  project: "LM2500 Xpress",
  source: "Embedded fallback from LM2500 Xpress.s3n",
  gasSetpoints: {
    "AE-3004A": { low: "15% LEL", high: "25% LEL" },
    "AE-3004B": { low: "15% LEL", high: "25% LEL" },
    "AE-3004C": { low: "15% LEL", high: "25% LEL" },
    "AE-3029": { low: "5% LEL", high: "10% LEL" },
    "AE-3030": { low: "5% LEL", high: "10% LEL" },
  },
  aliases: {
    "TS-3003": "TS-3003-3014",
    "TS-3014": "TS-3003-3014",
    "HS-3092": "HS-3092,3093",
    "HS-3093": "HS-3092,3093",
  },
  rules: [
    {
      id: "CommonAlarm",
      description: "Any fire, gas alarm drives horns and strobes.",
      whenAny: ["AE-3004A", "AE-3004B", "AE-3004C", "AE-3029", "AE-3030", "HS-3092,3093", "TS-3003-3014"],
      statuses: ["Low Gas", "High Gas", "Fire Alarm", "Alarm Active"],
      outputs: ["YSA-3006A", "YSA-3006B", "YSL-3036", "YSL-3041", "YSL-3042"],
    },
    {
      id: "ALARM LO GAS",
      description: "Low gas alarm summary.",
      whenAny: ["AE-3004A", "AE-3004B", "AE-3004C", "AE-3029", "AE-3030"],
      statuses: ["Low Gas"],
      outputs: ["ALARM LO GAS"],
    },
    {
      id: "ALARM HI GAS SHTDN",
      description: "High gas shutdown alarm summary.",
      whenAny: ["AE-3004A", "AE-3004B", "AE-3004C", "AE-3029", "AE-3030"],
      statuses: ["High Gas"],
      outputs: ["ALARM HI GAS SHTDN", "FIRE/GAS MON SHUTDWN", "GENERAL ALARM"],
    },
    {
      id: "AEROSOL RELEASE",
      description: "Virtual aerosol release logic from S3. No physical suppression is connected.",
      whenAny: ["HS-3092,3093", "TS-3003-3014"],
      statuses: ["Fire Alarm", "Alarm Active"],
      outputs: ["YSZ-3171", "YSZ-3172", "AGENT RELEASED", "AGENT RELEASE SUPPR"],
    },
  ],
};

const defaultTrainingTimeline = [
  { time: 0, message: "Welcome to the TM2500 XPRESS Automatic Fire and Gas Functional Test." },
  { time: 2, message: "Training timeline is active. HMI graphical sequence has started." },
  { time: 5, message: "The Fire and Gas Protection System is operating normally." },
  { time: 12, message: "Initiating Automatic Functional Test." },
  { time: 18, message: "Testing Manual Aerosol Suppression Release Stations HS-3092 and HS-3093." },
  { time: 23, device: "HS-3092", action: "Input Active", message: "Activating HS-3092." },
  { time: 48, message: "Aerosol release command generated." },
  { time: 55, device: "EQP-001", action: "Reset", message: "Resetting the system." },
  { time: 64, device: "HS-3093", action: "Input Active", message: "Activating HS-3093." },
  { time: 78, device: "EQP-001", action: "Reset", message: "Resetting the system after HS-3093 test." },
  { time: 88, message: "Testing Heat Detectors TS-3003 and TS-3014." },
  { time: 94, device: "TS-3003", action: "Fire", message: "Activating TS-3003." },
  { time: 108, device: "EQP-001", action: "Reset", message: "Resetting the system after TS-3003 test." },
  { time: 116, device: "TS-3014", action: "Fire", message: "Activating TS-3014." },
  { time: 130, device: "EQP-001", action: "Reset", message: "Resetting the system after TS-3014 test." },
  { time: 140, message: "Testing gas detection alarm and shutdown logic." },
  { time: 146, device: "AE-3004A", action: "Low Gas", message: "Gas detector AE-3004A low gas alarm test." },
  { time: 156, device: "AE-3004A", action: "High Gas", message: "Gas detector AE-3004A high gas shutdown test. Gas does not release Stat-X." },
  { time: 168, device: "EQP-001", action: "Reset", message: "Resetting gas alarm test." },
  { time: 178, device: "HS-3081", action: "Inhibit", message: "LOTO / suppression inhibit test active. Release outputs are blocked." },
  { time: 190, device: "EQP-001", action: "Reset", message: "Automatic functional test complete." }
];

const descriptiveTrainingSequence = [
  { say: "Welcome to the TM2500 XPRESS Automatic Fire and Gas Functional Test." },
  { say: "The Fire and Gas Protection System is operating normally. The Fire Panel indicates Normal. All field devices are online." },
  { say: "Initiating Automatic Functional Test." },
  { say: "Testing Manual Aerosol Suppression Release Stations HS-3092 and HS-3093." },
  { say: "Activating HS-3092.", device: "HS-3092", action: "Input Active", actionAfterSpeech: true },
  { say: "The Fire Panel enters Fire Alarm. All notification devices activate. Fire and Gas Monitor Shutdown is initiated. Critical Path is initiated. The Stat-X release countdown begins." },
  { say: "Horn Acknowledge Switch HS-3040 is activated.", device: "HS-3040", action: "Acknowledge", actionAfterSpeech: true },
  { say: "Audible notification is silenced. Visual notification remains active. Countdown in progress. Shutdown outputs remain active. Suppression system remains armed." },
  { waitFor: "release", say: "Aerosol release command generated. Suppression sequence complete." },
  { say: "Resetting the system.", device: "EQP-001", action: "Reset", actionAfterSpeech: true },
  { say: "The Fire Panel returns to Normal." },
  { say: "Activating HS-3093.", device: "HS-3093", action: "Input Active", actionAfterSpeech: true },
  { say: "The second manual release station has initiated the same fire alarm, shutdown, notification, and Stat-X countdown sequence." },
  { waitFor: "release", say: "Aerosol release command generated from HS-3093. Suppression sequence complete." },
  { say: "Resetting the system.", device: "EQP-001", action: "Reset", actionAfterSpeech: true },
  { say: "Testing Heat Detectors TS-3003 and TS-3014." },
  { say: "Activating TS-3003.", device: "TS-3003", action: "Fire", actionAfterSpeech: true },
  { say: "The Fire Panel enters Fire Alarm. Notification devices activate. Shutdown sequence begins. Countdown in progress." },
  { waitFor: "release", say: "Thermal detector release sequence complete. TS-3003 auto resets after Stat-X discharge." },
  { say: "Resetting the system.", device: "EQP-001", action: "Reset", actionAfterSpeech: true },
  { say: "Activating TS-3014.", device: "TS-3014", action: "Fire", actionAfterSpeech: true },
  { say: "The second thermal detector starts the same fire alarm and countdown sequence." },
  { waitFor: "release", say: "Thermal detector release sequence complete. TS-3014 auto resets after Stat-X discharge." },
  { say: "Resetting the system.", device: "EQP-001", action: "Reset", actionAfterSpeech: true },
  { say: "Testing gas detection alarm and shutdown logic. Gas detectors do not release Stat-X." },
  { say: "Gas detector AE-3004A low gas alarm test.", device: "AE-3004A", action: "Low Gas", actionAfterSpeech: true },
  { say: "Low gas alarm is active. Relay 3 Low Gas Alarm is active. Stat-X release remains inactive." },
  { say: "Gas detector AE-3004A high gas shutdown test.", device: "AE-3004A", action: "High Gas", actionAfterSpeech: true },
  { say: "High gas shutdown is active. Relay 4 High Gas Shutdown is active. Gas detection does not start the Stat-X countdown." },
  { say: "Resetting enclosure gas alarm test.", device: "EQP-001", action: "Reset", actionAfterSpeech: true },
  { say: "Testing exhaust duct infrared gas detectors AE-3029 and AE-3030. These detectors alarm at 5 percent LEL and high alarm at 10 percent LEL." },
  { say: "IR gas detector AE-3029 first gas alarm test at 5 percent LEL.", device: "AE-3029", action: "Low Gas", actionAfterSpeech: true },
  { say: "AE-3029 first gas alarm is active. Stat-X release remains inactive." },
  { say: "IR gas detector AE-3029 second gas alarm test at 10 percent LEL.", device: "AE-3029", action: "High Gas", actionAfterSpeech: true },
  { say: "AE-3029 second gas alarm is active. This is an alarm and shutdown condition only. Stat-X release remains inactive." },
  { say: "Resetting AE-3029 IR gas detector test.", device: "EQP-001", action: "Reset", actionAfterSpeech: true },
  { say: "IR gas detector AE-3030 first gas alarm test at 5 percent LEL.", device: "AE-3030", action: "Low Gas", actionAfterSpeech: true },
  { say: "AE-3030 first gas alarm is active. Stat-X release remains inactive." },
  { say: "IR gas detector AE-3030 second gas alarm test at 10 percent LEL.", device: "AE-3030", action: "High Gas", actionAfterSpeech: true },
  { say: "AE-3030 second gas alarm is active. This is an alarm and shutdown condition only. Stat-X release remains inactive." },
  { say: "Resetting exhaust IR gas detector test.", device: "EQP-001", action: "Reset", actionAfterSpeech: true },
  { say: "Testing LOTO and suppression inhibit.", device: "HS-3081", action: "Inhibit", actionAfterSpeech: true },
  { say: "Suppression is inhibited. EDIO 2 is shown inhibited, and release outputs are blocked." },
  { say: "Resetting the system.", device: "EQP-001", action: "Reset", actionAfterSpeech: true },
  { say: "Automatic functional test complete. The system has returned to Normal." }
];

const allestecDescriptiveTrainingSequence = [
  { say: "Welcome to the LM6000 Allestec Automatic Fire and Gas and CO2 Suppression Functional Test." },
  { say: "The Allestec conventional fire and gas panel is normal. Panel alarms, system alarms, and system trouble are clear." },
  { say: "This test is for the LM6000 Allestec CO2 system only. It does not use the TM2500 EQP or Stat-X logic." },
  { say: "Testing turbine enclosure gas detector AE-6304A at low gas level.", device: "AE-6304A", action: "Low Gas", actionAfterSpeech: true },
  { say: "Low gas alarm for the turbine is active. Horns and strobes activate. CO2 release is not allowed from gas detection." },
  { say: "Testing turbine enclosure gas detector AE-6304A at high gas shutdown level.", device: "AE-6304A", action: "High Gas", actionAfterSpeech: true },
  { say: "High gas shutdown for the turbine is active. CO2 release remains inactive because gas detection never releases CO2." },
  { say: "Resetting gas detector test.", device: "ALL-800", action: "Reset", actionAfterSpeech: true },
  { say: "Testing generator gas detector AE-6313 at low gas level.", device: "AE-6313", action: "Low Gas", actionAfterSpeech: true },
  { say: "Generator low gas alarm is active. Horns and strobes activate, and CO2 release remains inactive." },
  { say: "Testing generator gas detector AE-6313 at high gas shutdown level.", device: "AE-6313", action: "High Gas", actionAfterSpeech: true },
  { say: "Generator high gas alarm is active. CO2 release remains inactive." },
  { say: "Resetting generator gas detector test.", device: "ALL-800", action: "Reset", actionAfterSpeech: true },
  { say: "Testing exhaust infrared gas detector AE-3029 at five percent LEL.", device: "LM6-AE-3029", action: "Low Gas", actionAfterSpeech: true },
  { say: "AE-3029 first gas alarm is active. This gas alarm does not start the CO2 timer." },
  { say: "Testing exhaust infrared gas detector AE-3029 at ten percent LEL.", device: "LM6-AE-3029", action: "High Gas", actionAfterSpeech: true },
  { say: "AE-3029 second gas alarm is active. CO2 release remains inactive." },
  { say: "Resetting exhaust infrared gas detector test.", device: "ALL-800", action: "Reset", actionAfterSpeech: true },
  { say: "Testing manual CO2 release station HS-6308.", device: "HS-6308", action: "Input Active", actionAfterSpeech: true },
  { say: "Manual release is active. Horns and strobes activate. The main CO2 discharge timer starts for thirty seconds." },
  { say: "Horn acknowledge switch HS-6305 is activated.", device: "HS-6305", action: "Acknowledge", actionAfterSpeech: true },
  { say: "The horns are silenced. Strobes remain active until the pressure switch is reset or the panel is reset after the condition is clear." },
  { waitFor: "release", say: "CO2 discharge sequence complete. Main solenoids operated after thirty seconds, and reserve solenoids operated after ninety seconds." },
  { say: "Resetting the Allestec panel.", device: "ALL-800", action: "Reset", actionAfterSpeech: true },
  { say: "Testing thermal detector TS-6303.", device: "TS-6303", action: "Fire", actionAfterSpeech: true },
  { say: "Thermal detector alarm starts the CO2 release timer. Horns and strobes activate." },
  { waitFor: "release", say: "Thermal detector CO2 release sequence complete." },
  { say: "Resetting after thermal detector test.", device: "ALL-800", action: "Reset", actionAfterSpeech: true },
  { say: "Testing generator flame detector BE-6311.", device: "BE-6311", action: "Fire", actionAfterSpeech: true },
  { say: "The generator flame detector operates as a direct fire release input. CO2 timer starts." },
  { waitFor: "release", say: "Generator flame detector CO2 release sequence complete." },
  { say: "Resetting after generator flame detector test.", device: "ALL-800", action: "Reset", actionAfterSpeech: true },
  { say: "Testing turbine flame detector two out of three voting. Activating BE-6300.", device: "BE-6300", action: "Fire", actionAfterSpeech: true },
  { say: "One turbine flame detector is active. Strobes activate, but CO2 release does not start until a second turbine flame detector operates." },
  { say: "Activating BE-6302.", device: "BE-6302", action: "Fire", actionAfterSpeech: true },
  { say: "Two turbine flame detectors are active. Horns and strobes activate, and the CO2 release timer starts." },
  { waitFor: "release", say: "Turbine flame detector two out of three CO2 release sequence complete." },
  { say: "Resetting after turbine flame detector test.", device: "ALL-800", action: "Reset", actionAfterSpeech: true },
  { say: "Testing CO2 block valve ZS-6364 closed condition.", device: "ZS-6364", action: "Toggle Block Valve", actionAfterSpeech: true },
  { say: "Block valve closed creates inhibit condition F4. CO2 release is blocked while the valve is closed." },
  { say: "Opening the CO2 block valve and resetting the system.", device: "ZS-6364", action: "Toggle Block Valve", actionAfterSpeech: true },
  { say: "Final reset.", device: "ALL-800", action: "Reset", actionAfterSpeech: true },
  { say: "LM6000 Allestec automatic functional test complete. The system has returned to Normal." }
];

function getActiveTrainingSequence() {
  return isAllestecProjectName(selectedProject) ? allestecDescriptiveTrainingSequence : descriptiveTrainingSequence;
}

const realTestProfiles = {
  controller: {
    testType: "EQP Controller",
    profile: "TEST_EQP.s3n",
    path: "S3 Profiles/TEST_EQP.s3n",
    expected: "Controller online, LON clean, Modbus ready",
    note: "Base testboard profile for checking the EQP controller before loading a specific device profile."
  },
  gas: {
    testType: "CGS / UD10 Gas Detector",
    profile: "TEST_UD10.s3n",
    path: "S3 Profiles/TEST_UD10.s3n",
    expected: "One UD10 / gas device on EQP LON test terminals",
    note: "Use this profile for UD10 / gas detector bench testing. If the physical detector is not connected, EQP should show missing device or LON fault for training."
  },
  irGas: {
    testType: "IR Gas Detector",
    profile: "TEST_IR.s3n",
    path: "S3 Profiles/TEST_IR.s3n",
    expected: "One IR gas detector on EQP LON test terminals",
    note: "Use for PIRECL / IR gas detector style testing."
  },
  flame: {
    testType: "Flame Detector",
    profile: "Not used for TM2500 XPRESS",
    path: "",
    expected: "No flame detector profile assigned for TM2500 XPRESS",
    note: "TM2500 XPRESS uses EQP, EDIO, UD10/gas, and IR profiles only. Flame detector profiles can be assigned later for LM6000/LMS100 or another package."
  },
  edio: {
    testType: "EDIO Module",
    profile: "TEST_EDIO.s3n",
    path: "S3 Profiles/TEST_EDIO.s3n",
    expected: "One EDIO module with selected input/output wiring",
    note: "Use for hardwired switches, horns, strobes and release output training."
  },
  dcio: {
    testType: "DCIO Module",
    profile: "Not used for TM2500 XPRESS",
    path: "",
    expected: "No DCIO profile assigned for TM2500 XPRESS",
    note: "TM2500 XPRESS uses EDIO for the current hardwired I/O testboard profile."
  },
  hardwiredInput: {
    testType: "EDIO Input Device",
    profile: "TEST_EDIO.s3n",
    path: "S3 Profiles/TEST_EDIO.s3n",
    expected: "Device wired into EDIO input channel",
    note: "For manual station, thermal switch, LOTO or acknowledge switch testing."
  },
  hardwiredOutput: {
    testType: "EDIO Output Device",
    profile: "TEST_EDIO.s3n",
    path: "S3 Profiles/TEST_EDIO.s3n",
    expected: "Device wired into EDIO output channel",
    note: "For horn, strobe and LED output training."
  },
  release: {
    testType: "Virtual / LED Release Output",
    profile: "TEST_EDIO.s3n",
    path: "S3 Profiles/TEST_EDIO.s3n",
    expected: "Release output connected only to LED tester",
    note: "No suppression agent is connected. Use only for release circuit indication."
  },
  logic: {
    testType: "HMI Logic Only",
    profile: "No S3 profile required",
    path: "",
    expected: "Virtual logic point",
    note: "This point is calculated inside the HMI and does not require a real LON device."
  }
};

function cloneConfig(config) {
  return JSON.parse(JSON.stringify(config));
}

let devices = { ...fallbackDevices };
let deviceInfoConfig = { project: {}, devices: {} };
let s3Logic = cloneConfig(defaultS3Logic);
let projectConfig = {
  name: "TM2500 / LM2500 Xpress Fire & Gas Demo",
  controller: "EQP-001",
  description: "EQP test cell virtual device database."
};

const projectNamespaces = {
  "TM2500 XPRESS": "TM2500_XPRESS",
  "TM2500 / LM2500 XPRESS": "TM2500_XPRESS",
  "LM6000 ALLESTEC": "LM6000_ALLESTEC",
  "LM6000 EQP": "LM6000_EQP",
  "LMS100": "LMS100",
};

const projectScopedTags = {
  "LM6000 ALLESTEC": new Set([
    "ALL-800",
    "AE-6304A", "AE-6304B", "AE-6304C", "LM6-AE-3029", "LM6-AE-3030",
    "BE-6300", "BE-6302", "BE-6335", "TS-6303", "TS-6314", "YSL-6306", "YSL-6336", "YSA-6306", "YSA-6346",
    "AE-6313", "BE-6311", "TS-6307", "TS-6310", "HS-6308", "HS-6309", "HS-6312", "YSA-6347", "YSL-6344", "YSL-6345",
    "HS-6305", "HS-6363", "SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362", "ZS-6364", "PSH-6348A", "PSHH-6348B", "CO2-BLOCK", "CO2-PSH",
    "OUT-HIGH-GAS-TURBINE", "OUT-LOW-GAS-TURBINE", "OUT-HIGH-GAS-GENERATOR", "OUT-LOW-GAS-GENERATOR",
  ]),
  "LM6000 EQP": new Set([
    "EQP-FPP", "FIRE-PANEL",
    "EDIO1-JB19", "EDIO2-JB18", "EDIO3-JB20",
    "AE-6304A", "AE-6304B", "AE-6304C", "AE-6313", "AE-3029", "AE-3030",
    "BE-6300", "BE-6302", "BE-6311", "BE-6335", "BE-6336",
    "TS-6303", "TS-6314", "TS-6307", "TS-6310",
    "HS-6305", "HS-6308", "HS-6309", "HS-6312", "HS-6363",
    "YSA-6306", "YSA-6346", "YSA-6347",
    "YSL-6301", "YSL-6336", "YSL-6344", "YSL-6345",
    "SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362",
    "ZS-6364", "PSH-6357", "PSHH-6348",
    "GENERAL_ALARM", "FIRE_GAS_SHOUTDOWN", "ALARM_LEL_TURBINE", "SHOUTDOWN_LEL_TUR",
    "ALARM_LEL_GEN", "SHOUTDOWN_LEL_GEN", "AGENT_RELEASE", "CO2_AGENT_RELEASE",
  ]),
  "LMS100": new Set([
    "LMS100-PANEL",
    "LMS100-AE-1001", "LMS100-AE-1002", "LMS100-AE-1003",
    "LMS100-BE-1001", "LMS100-BE-1002", "LMS100-BE-1003",
    "LMS100-TS-1001", "LMS100-TS-1002",
    "LMS100-YSA-1001", "LMS100-YSA-1002",
    "LMS100-YSL-1001", "LMS100-YSL-1002",
  ]),
};

const projectDeviceDefinitions = {
  "LMS100": {
    "LMS100-PANEL": { type: "LMS100 Fire & Gas Panel", status: "Normal", value: "Online", address: "LMS100 preliminary controller", area: "Turbine Package", mode: "Virtual" },
    "LMS100-AE-1001": { type: "Gas Detector", status: "Normal", value: "0% LEL", address: "Pending drawing assignment", area: "Turbine Enclosure", mode: "Virtual", highAlarm: "15% LEL", highHighAlarm: "25% LEL" },
    "LMS100-AE-1002": { type: "Gas Detector", status: "Normal", value: "0% LEL", address: "Pending drawing assignment", area: "Turbine Enclosure", mode: "Virtual", highAlarm: "15% LEL", highHighAlarm: "25% LEL" },
    "LMS100-AE-1003": { type: "Gas Detector", status: "Normal", value: "0% LEL", address: "Pending drawing assignment", area: "Turbine Enclosure", mode: "Virtual", highAlarm: "15% LEL", highHighAlarm: "25% LEL" },
    "LMS100-BE-1001": { type: "Flame Detector", status: "Normal", value: "Ready", address: "Pending drawing assignment", area: "Turbine Enclosure", mode: "Virtual" },
    "LMS100-BE-1002": { type: "Flame Detector", status: "Normal", value: "Ready", address: "Pending drawing assignment", area: "Turbine Enclosure", mode: "Virtual" },
    "LMS100-BE-1003": { type: "Flame Detector", status: "Normal", value: "Ready", address: "Pending drawing assignment", area: "Turbine Enclosure", mode: "Virtual" },
    "LMS100-TS-1001": { type: "Thermal Detector", status: "Normal", value: "Ready", address: "Pending drawing assignment", area: "Turbine Enclosure", mode: "Virtual" },
    "LMS100-TS-1002": { type: "Thermal Detector", status: "Normal", value: "Ready", address: "Pending drawing assignment", area: "Turbine Enclosure", mode: "Virtual" },
    "LMS100-YSA-1001": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "Pending output assignment", area: "Turbine Enclosure", mode: "Virtual" },
    "LMS100-YSA-1002": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "Pending output assignment", area: "Turbine Enclosure", mode: "Virtual" },
    "LMS100-YSL-1001": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Pending output assignment", area: "Turbine Enclosure", mode: "Virtual" },
    "LMS100-YSL-1002": { type: "Strobe Light", status: "Normal", value: "Ready", address: "Pending output assignment", area: "Turbine Enclosure", mode: "Virtual" },
  },
  "LM6000 EQP": {
    "EQP-FPP": { type: "Eagle Quantum Premier Controller", status: "Normal", value: "Online", address: "S3: SHELL_LM6000_1457 / FPP", area: "Fire Panel", mode: "Virtual" },
    "FIRE-PANEL": { type: "EQP Fire Panel Status", status: "Normal", value: "Normal", address: "S3 status group", area: "Fire Panel", mode: "Virtual" },
    "EDIO1-JB19": { type: "EQP EDIO Module", status: "Normal", value: "Online", address: "LON EDIO 1 / JB19 / Address #18", area: "Turbine Skid", mode: "Virtual" },
    "EDIO2-JB18": { type: "EQP EDIO Module", status: "Normal", value: "Online", address: "LON EDIO 2 / JB18 / Address #19", area: "Generator Skid", mode: "Virtual" },
    "EDIO3-JB20": { type: "EQP EDIO Module", status: "Normal", value: "Online", address: "LON EDIO 3 / JB20 / Address #20", area: "CO2 Skid", mode: "Virtual" },
    "AE-6304A": { type: "UD10 / Combustible Gas Detector", status: "Normal", value: "0% LEL", address: "LON Address #9", area: "Turbine Enclosure", mode: "Virtual", highAlarm: "15% LEL", highHighAlarm: "25% LEL" },
    "AE-6304B": { type: "UD10 / Combustible Gas Detector", status: "Normal", value: "0% LEL", address: "LON Address #10", area: "Turbine Enclosure", mode: "Virtual", highAlarm: "15% LEL", highHighAlarm: "25% LEL" },
    "AE-6304C": { type: "UD10 / Combustible Gas Detector", status: "Normal", value: "0% LEL", address: "LON Address #11", area: "Turbine Enclosure", mode: "Virtual", highAlarm: "15% LEL", highHighAlarm: "25% LEL" },
    "AE-6313": { type: "UD10 / Combustible Gas Detector", status: "Normal", value: "0% LEL", address: "LON Address #14", area: "Generator Enclosure", mode: "Virtual", highAlarm: "15% LEL", highHighAlarm: "25% LEL" },
    "AE-3029": { type: "IR Gas Detector", status: "Normal", value: "0% LEL", address: "LON Address #15", area: "Turbine Exhaust", mode: "Virtual", highAlarm: "5% LEL", highHighAlarm: "10% LEL" },
    "AE-3030": { type: "IR Gas Detector", status: "Normal", value: "0% LEL", address: "LON Address #16", area: "Turbine Exhaust", mode: "Virtual", highAlarm: "5% LEL", highHighAlarm: "10% LEL" },
    "BE-6300": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "LON Address #17", area: "Turbine Enclosure", mode: "Virtual" },
    "BE-6302": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "LON Address #21", area: "Turbine Enclosure", mode: "Virtual" },
    "BE-6311": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "LON Address #20", area: "Generator Enclosure", mode: "Virtual" },
    "BE-6335": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "LON Address #18", area: "Turbine Enclosure", mode: "Virtual" },
    "BE-6336": { type: "X3301 Flame Detector", status: "Normal", value: "Ready", address: "LON Address #19", area: "Turbine Enclosure", mode: "Virtual" },
    "TS-6303": { type: "Thermal Detector", status: "Normal", value: "Ready", address: "EDIO1-JB19 / Turbine thermal input", area: "Turbine Enclosure", mode: "Virtual" },
    "TS-6314": { type: "Thermal Detector", status: "Normal", value: "Ready", address: "EDIO1-JB19 / Turbine thermal input", area: "Turbine Enclosure", mode: "Virtual" },
    "TS-6307": { type: "Thermal Detector", status: "Normal", value: "Ready", address: "EDIO2-JB18 / Generator thermal input", area: "Generator Enclosure", mode: "Virtual" },
    "TS-6310": { type: "Thermal Detector", status: "Normal", value: "Ready", address: "EDIO2-JB18 / Generator thermal input", area: "Generator Enclosure", mode: "Virtual" },
    "HS-6305": { type: "Horn Acknowledge Switch", status: "Normal", value: "Ready", address: "EDIO1-JB19 / Horn acknowledge input", area: "Turbine Background", mode: "Virtual" },
    "HS-6308": { type: "CO2 Manual Release Station", status: "Normal", value: "Ready", address: "EDIO2-JB18 / Manual release input", area: "Generator / Package", mode: "Virtual" },
    "HS-6309": { type: "CO2 Manual Release Station", status: "Normal", value: "Ready", address: "EDIO2-JB18 / Manual release input", area: "Generator / Package", mode: "Virtual" },
    "HS-6312": { type: "CO2 Manual Release Station", status: "Normal", value: "Ready", address: "EDIO2-JB18 / Manual release input", area: "Generator / Package", mode: "Virtual" },
    "HS-6363": { type: "CO2 Purge Switch", status: "Normal", value: "Ready", address: "EDIO3-JB20 / CO2 purge reset", area: "CO2 Skid", mode: "Virtual" },
    "YSA-6306": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "EDIO1-JB19 / Turbine outside horn", area: "Turbine Enclosure", mode: "Virtual" },
    "YSA-6346": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "EDIO1-JB19 / Turbine inside horn", area: "Turbine Enclosure", mode: "Virtual" },
    "YSA-6347": { type: "Fire & Gas Horn", status: "Normal", value: "Ready", address: "EDIO2-JB18 / Generator outside horn", area: "Generator Enclosure", mode: "Virtual" },
    "YSL-6301": { type: "Strobe Light", status: "Normal", value: "Ready", address: "EDIO1-JB19 / Turbine outside beacon", area: "Turbine Enclosure", mode: "Virtual" },
    "YSL-6336": { type: "Strobe Light", status: "Normal", value: "Ready", address: "EDIO1-JB19 / Turbine outside beacon", area: "Turbine Enclosure", mode: "Virtual" },
    "YSL-6344": { type: "Strobe Light", status: "Normal", value: "Ready", address: "EDIO2-JB18 / Generator inside beacon #1", area: "Generator Enclosure", mode: "Virtual" },
    "YSL-6345": { type: "Strobe Light", status: "Normal", value: "Ready", address: "EDIO2-JB18 / Generator inside beacon #2", area: "Generator Enclosure", mode: "Virtual" },
    "SOV-6359": { type: "CO2 Main Release Solenoid", status: "Normal", value: "Ready", address: "EDIO3-JB20 / Main operated valve release", area: "CO2 Skid", mode: "Virtual" },
    "SOV-6360": { type: "CO2 Main Release Solenoid", status: "Normal", value: "Ready", address: "EDIO3-JB20 / Main operated valve release", area: "CO2 Skid", mode: "Virtual" },
    "SOV-6361": { type: "CO2 Extended Release Solenoid", status: "Normal", value: "Ready", address: "EDIO3-JB20 / Extended reserve release", area: "CO2 Skid", mode: "Virtual" },
    "SOV-6362": { type: "CO2 Extended Release Solenoid", status: "Normal", value: "Ready", address: "EDIO3-JB20 / Extended reserve release", area: "CO2 Skid", mode: "Virtual" },
    "ZS-6364": { type: "CO2 Block Valve Limit Switch", status: "Normal", value: "Open / Release Enabled", address: "EDIO3-JB20 / Block valve status", area: "CO2 Skid", mode: "Virtual" },
    "PSH-6357": { type: "CO2 Pressure Switch", status: "Normal", value: "Normal Pressure", address: "EDIO3-JB20 / CO2 pressure switch", area: "CO2 Skid", mode: "Virtual" },
    "PSHH-6348": { type: "CO2 Pressure Switch High-High", status: "Normal", value: "Normal Pressure", address: "EDIO3-JB20 / CO2 discharge pressure", area: "CO2 Skid", mode: "Virtual" },
    "GENERAL_ALARM": { type: "EQP Logic Output", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
    "FIRE_GAS_SHOUTDOWN": { type: "EQP Logic Output", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
    "ALARM_LEL_TURBINE": { type: "EQP Logic Output", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
    "SHOUTDOWN_LEL_TUR": { type: "EQP Logic Output", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
    "ALARM_LEL_GEN": { type: "EQP Logic Output", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
    "SHOUTDOWN_LEL_GEN": { type: "EQP Logic Output", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
    "AGENT_RELEASE": { type: "EQP Logic Output", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
    "CO2_AGENT_RELEASE": { type: "EQP Logic Output", status: "Normal", value: "Ready", address: "S3 Logic", area: "Controller Logic", mode: "Virtual" },
  },
};

const displayTagAliases = {
  "LM6-AE-3029": "AE-3029",
  "LM6-AE-3030": "AE-3030",
};

const projectDeviceAliases = {
  "LM6000 ALLESTEC": {
    "AE-3029": "LM6-AE-3029",
    "AE-3030": "LM6-AE-3030",
  },
};

function getProjectNamespace(projectName = selectedProject || projectConfig.name) {
  const normalized = (projectName || "").toUpperCase();
  if (normalized.includes("LM6000") && normalized.includes("ALLESTEC")) return projectNamespaces["LM6000 ALLESTEC"];
  if (normalized.includes("LM6000") && normalized.includes("EQP")) return projectNamespaces["LM6000 EQP"];
  if (normalized.includes("LMS100")) return projectNamespaces.LMS100;
  return projectNamespaces["TM2500 XPRESS"];
}

function getDeviceRawTag(deviceId = "") {
  return String(deviceId).includes("::") ? String(deviceId).split("::").pop() : String(deviceId);
}

function getDeviceDisplayTag(deviceId = "") {
  const rawTag = getDeviceRawTag(deviceId);
  return devices[deviceId]?.displayTag || displayTagAliases[rawTag] || rawTag;
}

function getProjectScopedKey(rawTag, projectName = selectedProject) {
  return `${getProjectNamespace(projectName)}::${rawTag}`;
}

function shouldScopeDeviceForProject(rawTag, projectName = selectedProject) {
  const normalized = (projectName || "").toUpperCase();
  if (normalized.includes("LM6000") && normalized.includes("ALLESTEC")) {
    return projectScopedTags["LM6000 ALLESTEC"].has(rawTag);
  }
  if (normalized.includes("LM6000") && normalized.includes("EQP")) {
    return projectScopedTags["LM6000 EQP"].has(rawTag);
  }
  if (normalized.includes("LMS100")) {
    return projectScopedTags["LMS100"].has(rawTag);
  }
  return false;
}

function getProjectRawTag(rawTag, projectName = selectedProject) {
  const normalized = (projectName || "").toUpperCase();
  if (normalized.includes("LM6000") && normalized.includes("ALLESTEC")) {
    return projectDeviceAliases["LM6000 ALLESTEC"][rawTag] || rawTag;
  }
  return rawTag;
}

function ensureProjectDevice(rawTag, projectName = selectedProject) {
  rawTag = getProjectRawTag(rawTag, projectName);
  const scopedKey = getProjectScopedKey(rawTag, projectName);
  if (devices[scopedKey]) return scopedKey;
  const source = projectDeviceDefinitions[projectName]?.[rawTag] || projectDeviceDefinitions[getLayoutProjectName(projectName)]?.[rawTag] || devices[rawTag] || fallbackDevices[rawTag];
  if (!source) return rawTag;
  devices[scopedKey] = {
    ...cloneConfig(source),
    tag: rawTag,
    displayTag: displayTagAliases[rawTag] || rawTag,
    projectNamespace: getProjectNamespace(projectName),
  };
  return scopedKey;
}

function resolveDeviceId(deviceId, projectName = selectedProject) {
  const rawTag = getProjectRawTag(getDeviceRawTag(deviceId), projectName);
  if (String(deviceId).includes("::") && devices[deviceId]) return deviceId;
  if (shouldScopeDeviceForProject(rawTag, projectName)) return ensureProjectDevice(rawTag, projectName);
  return devices[deviceId] ? deviceId : rawTag;
}

const deviceFunctions = {
  "EQP-001": ["Fire", "Inhibit", "Supervisory", "Fault", "LON Fault", "Low Gas", "High Gas", "Silence", "Acknowledge", "Reset"],
  "EQP-FPP": ["Fire", "Supervisory", "Fault", "LON Fault", "Low Gas", "High Gas", "Silence", "Acknowledge", "Reset"],
  "FIRE-PANEL": ["Fire", "Supervisory", "Fault", "LON Fault", "Low Gas", "High Gas", "Silence", "Acknowledge", "Reset"],
  "SOV-6359": ["Output On", "Output Off", "Reset"],
  "SOV-6360": ["Output On", "Output Off", "Reset"],
  "SOV-6361": ["Output On", "Output Off", "Reset"],
  "SOV-6362": ["Output On", "Output Off", "Reset"],
  "ZS-6364": ["Normal", "Inhibit", "Fault", "Offline"],
  "PSH-6348A": ["Normal", "Input Active", "Fault", "Offline"],
  "PSHH-6348B": ["Normal", "Input Active", "Fault", "Offline"],
  "PSH-6357": ["Normal", "Input Active", "Fault", "Offline"],
  "PSHH-6348": ["Normal", "Input Active", "Fault", "Offline"],
  "HS-6305": ["Normal", "Acknowledge", "Fault", "Offline"],
  "HS-6363": ["Reset", "Input Active", "Fault"],
  gas: ["Normal", "Low Gas", "High Gas", "Fault", "Offline"],
  thermal: ["Normal", "Fire", "Fault", "Offline"],
  horn: ["Output On", "Output Off", "Silence"],
  strobe: ["Output On", "Output Off", "Test"],
  switch: ["Normal", "Input Active", "Inhibit", "Reset"],
  aerosol: ["Virtual Output", "Timer", "Abort", "Reset"],
  edio: ["Normal", "Input Active", "Output On", "Output Off", "Fault", "Offline"],
};

const graphicInputActions = {
  "HS-3040": "Acknowledge",
  "HS-3081": "Inhibit",
  "ZS-6364": "Toggle Block Valve",
  "PSH-6348A": "Input Active",
  "PSHH-6348B": "Input Active",
  "PSH-6357": "Input Active",
  "PSHH-6348": "Input Active",
  "CO2-BLOCK": "Inhibit",
  "CO2-PSH": "Input Active",
  "HS-6305": "Acknowledge",
  "HS-6363": "Input Active",
  "SOV-6359": "Output On",
  "SOV-6360": "Output On",
  "SOV-6361": "Output On",
  "SOV-6362": "Output On",
};

const graphicDeviceGroups = {
  "TS-3003-3014": ["TS-3003", "TS-3014"],
  "HS-3092,3093": ["HS-3092", "HS-3093"],
};

const aerosolReleaseOutputs = ["YSZ-3171", "YSZ-3172", "AGENT RELEASED", "AGENT RELEASE SUPPR"];
const hornOutputTags = ["YSA-3006A", "YSA-3006B"];
const strobeOutputTags = ["YSL-3036", "YSL-3041", "YSL-3042"];
const allestecHornTags = ["YSA-6347", "YSA-6306", "YSA-6346"];
const allestecStrobeTags = ["YSL-6345", "YSL-6336", "YSL-6344", "YSL-6306"];
const allestecTurbineGasTags = ["AE-6304A", "AE-6304B", "AE-6304C", "LM6-AE-3029", "LM6-AE-3030"];
const allestecGeneratorGasTags = ["AE-6313"];
const allestecGasOutputAlarmTags = {
  turbineHigh: "OUT-HIGH-GAS-TURBINE",
  turbineLow: "OUT-LOW-GAS-TURBINE",
  generatorHigh: "OUT-HIGH-GAS-GENERATOR",
  generatorLow: "OUT-LOW-GAS-GENERATOR",
};
const allestecTurbineFlameTags = ["BE-6300", "BE-6302", "BE-6335"];
const lm6000EqpHornTags = ["YSA-6306", "YSA-6346", "YSA-6347"];
const lm6000EqpStrobeTags = ["YSL-6301", "YSL-6336", "YSL-6344", "YSL-6345"];
const lm6000EqpTurbineGasTags = ["AE-6304A", "AE-6304B", "AE-6304C", "AE-3029", "AE-3030"];
const lm6000EqpGeneratorGasTags = ["AE-6313"];
const lm6000EqpFireTags = ["BE-6300", "BE-6302", "BE-6311", "BE-6335", "BE-6336"];
const lm6000EqpReleaseSourceTags = ["TS-6303", "TS-6314", "TS-6307", "TS-6310", "HS-6308", "HS-6309", "HS-6312", ...lm6000EqpFireTags];
const lm6000EqpCo2OutputTags = ["SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362", "AGENT_RELEASE", "CO2_AGENT_RELEASE"];
const manualReleaseTags = ["HS-3092", "HS-3093"];
const thermalReleaseTags = ["TS-3003", "TS-3014"];
const enclosureGasTags = ["AE-3004A", "AE-3004B", "AE-3004C"];
const exhaustGasTags = ["AE-3029", "AE-3030"];
const edioChannelMap = {
  "EDIO-1": [
    "CH1 HS-3092 / HS-3093",
    "CH2 YSA-3006B",
    "CH3 YSA-3006A",
    "CH4 TS-3003 / TS-3014",
    "CH5 YSL-3041",
    "CH6 YSL-3036",
    "CH7 YSL-3042",
    "CH8 HS-3040"
  ],
  "EDIO-2": [
    "CH1 Spare",
    "CH2 Spare",
    "CH3 Spare",
    "CH4 Spare",
    "CH5 YSZ-3171",
    "CH6 YSZ-3172",
    "CH7 Spare",
    "CH8 Spare"
  ]
};
const faultStatuses = new Set(["Fault", "Offline", "LON Fault", "Trouble"]);
const relayOutputs = {
  relay1: { tag: "RLY-1", label: "Fire & Gas Monitor Shutdown" },
  relay2: { tag: "RLY-2", label: "Critical Path / Vent Fan Shutdown" },
  relay3: { tag: "RLY-3", label: "Low Gas Alarm" },
  relay4: { tag: "RLY-4", label: "High Gas Shutdown" },
  relay5: { tag: "RLY-5", label: "Agent Release Circuit 1" },
  relay6: { tag: "RLY-6", label: "Agent Release Circuit 2" },
  relay7: { tag: "RLY-7", label: "Fault Output" },
  relay8: { tag: "RLY-8", label: "Spare" },
};

const statusClass = {
  Normal: "ok",
  "Low Gas": "red-text",
  "High Gas": "red-text",
  "Fire Alarm": "red-text",
  Fire: "red-text",
  Trouble: "orange-text",
  Fault: "orange-text",
  Offline: "gray-text",
  "LON Fault": "orange-text",
  "Output Active": "red-text",
  "Alarm Active": "red-text",
  Supervisory: "yellow-text",
  Inhibit: "yellow-text",
};

const alarmStatuses = new Set(["Low Gas", "High Gas", "Fire", "Fire Alarm", "Trouble", "Fault", "Offline", "LON Fault", "Alarm Active", "Supervisory", "Inhibit"]);
const layoutStorageKey = "eqp-hmi-layout-v1";
const projectDeviceLayoutStoragePrefix = "eqp-project-device-layout-v1";
const allestecLayoutStorageKey = "eqp-lm6000-allestec-device-layout-v2";
const allestecGraphicLayoutStorageKey = "eqp-lm6000-allestec-graphic-layout-v4";
const allestecSystemModeStorageKey = "eqp-lm6000-allestec-system-mode-v1";
const allestecCommsMapStorageKey = "eqp-lm6000-allestec-comms-map-v2";
const adminPasswordKey = "eqp-admin-password";
let selectedDeviceId = "AE-3004B";
let currentInfoDeviceId = "";
let currentRole = "Guest";
let layoutEditMode = false;
let allestecMoveMode = false;
let activeLayoutEditProject = "";
let allestecGraphicEditMode = false;
let selectedEditElement = null;
let dragState = null;
let allestecDragState = null;
let allestecGraphicDragState = null;
let aerosolCountdownSeconds = null;
let aerosolTimerId = null;
let aerosolReleased = false;
let aerosolTimerPaused = false;
let releaseBlockedByInhibit = false;
let releaseResetHold = false;
let lastReleaseInitiator = "";
let allestecCo2Stage = "idle";
let allestecCo2TimerId = null;
let allestecCo2CountdownSeconds = null;
let lm6000EqpCo2Stage = "idle";
let lm6000EqpCo2TimerId = null;
let lm6000EqpCo2CountdownSeconds = null;
let hornLatched = false;
let strobeLatched = false;
let hornAudio = null;
let hornSoundActive = false;
let hornsSilenced = false;
let operatorTestMode = true;
let trainingAutoTestActive = false;
let trainingNarrationAudio = null;
let trainingSpeechUtterance = null;
let trainingRunId = 0;
let trainingScriptLines = [];
let trainingTimeline = [];
let executedTrainingSteps = new Set();
let trainingPausedForRelease = false;
let trainingStepIndex = 0;
let trainingPaused = false;
let trainingStepRunning = false;
let trainingTimers = [];
let trainingWatchdogId = null;
let trainingTimelineOffsetSeconds = Number(localStorage.getItem("eqp-training-offset-seconds") || "0");
let fullscreenAttempted = false;

async function requestPlatformFullscreen() {
  if (document.fullscreenElement || fullscreenAttempted) return;
  fullscreenAttempted = true;
  try {
    await document.documentElement.requestFullscreen?.();
  } catch {
    fullscreenAttempted = false;
  }
}

async function exitPlatformFullscreen() {
  if (!document.fullscreenElement) return;
  try {
    await document.exitFullscreen?.();
  } catch {
    // Browser may already be exiting fullscreen.
  }
}
const layoutState = JSON.parse(localStorage.getItem(layoutStorageKey) || "{}");
const eventHistory = [
  { time: "20:51:08", tag: "AE-3004B", message: "AE-3004B entered Low Gas Alarm at 15.0% LEL." },
  { time: "20:50:44", tag: "TS-3003", message: "TS-3003 Fire Alarm activated." },
  { time: "20:50:43", tag: "YSZ-3171", message: "Virtual aerosol countdown started." },
  { time: "20:49:12", tag: "HS-3081", message: "HS-3081 LOTO / inhibit switch active." },
  { time: "20:48:55", tag: "EQP-001", message: "EQP Controller online." },
];

function getGroupedDevices(element) {
  return (element.dataset.devices || element.dataset.device || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .map((tag) => devices[resolveDeviceId(tag)])
    .filter(Boolean);
}

const turbinePackages = {
  tm2500: ["TM2500 XPRESS", "TM2500 GEN8", "TM2500", "TM2500 DYNAMIS", "TM2500-RPS", "TM2500-JEREH", "TM2500-EQ", "SOLAR"],
  lm6000: ["LM6000 EQP", "LM6000 Allestec", "LM6000 PF", "LM6000 PC"],
  lms100: ["LMS100 PA", "LMS100 PB", "LMS100 Package", "LMS100 Demo"],
};
const turbineFamilies = [
  { id: "tm2500", label: "TM2500" },
  { id: "lm6000", label: "LM6000" },
  { id: "lms100", label: "LMS100" },
];
let selectedFamily = "";
let selectedProject = "";
let allestecSystemMode = localStorage.getItem(allestecSystemModeStorageKey) || "virtual";
let slideIndex = 0;
let currentViewName = "package";
const viewHistory = [];
let deviceTableClickTimer = null;
let lastDeviceTableClick = { tag: "", time: 0 };
let slideshow = {
  intervalMs: 5000,
  slides: [
    { src: "assets/slideshow/1-3-1500x1125.jpg", title: "1 3 1500X1125", caption: "Project reference image" },
    { src: "assets/slideshow/1.jpg", title: "1", caption: "Project reference image" },
    { src: "assets/slideshow/20200129_152105.jpg", title: "20200129 152105", caption: "Project reference image" },
    { src: "assets/slideshow/20221128_135424.jpg", title: "20221128 135424", caption: "Project reference image" },
    { src: "assets/slideshow/26.png", title: "26", caption: "Project reference image" },
    { src: "assets/slideshow/3.jpg", title: "3", caption: "Project reference image" },
    { src: "assets/slideshow/baterias.jpg", title: "Baterias", caption: "Project reference image" },
    { src: "assets/slideshow/BESS.jpg", title: "Bess", caption: "Project reference image" },
    { src: "assets/slideshow/BLESS BATERIAS.jpg", title: "Bless Baterias", caption: "Project reference image" },
    { src: "assets/slideshow/co2.jpg", title: "Co2", caption: "Project reference image" },
    { src: "assets/slideshow/CONTROL ROOM.jpg", title: "Control Room", caption: "Project reference image" },
    { src: "assets/slideshow/CONTROL.jpg", title: "Control", caption: "Project reference image" },
    { src: "assets/slideshow/GAS TURBINE.jpg", title: "Gas Turbine", caption: "Project reference image" },
    { src: "assets/slideshow/GE TURBINE.jpg", title: "Ge Turbine", caption: "Project reference image" },
    { src: "assets/slideshow/ge_lm2500_xpress.jpg", title: "Ge Lm2500 Xpress", caption: "Project reference image" },
    { src: "assets/slideshow/ge_splash.avif", title: "Ge Splash", caption: "Project reference image" },
    { src: "assets/slideshow/GE20LM2500XPRESS.jpg", title: "Ge20lm2500xpress", caption: "Project reference image" },
    { src: "assets/slideshow/hidroelectrica.jpg", title: "Hidroelectrica", caption: "Project reference image" },
    { src: "assets/slideshow/IMG_3989-1024x768.jpg", title: "Img 3989 1024X768", caption: "Project reference image" },
    { src: "assets/slideshow/LM.jpg", title: "Lm", caption: "Project reference image" },
    { src: "assets/slideshow/LM6000.jpg", title: "Lm6000", caption: "Project reference image" },
    { src: "assets/slideshow/lm9000_lateral.jpg", title: "Lm9000 Lateral", caption: "Project reference image" },
    { src: "assets/slideshow/LMS100.jpg", title: "Lms100", caption: "Project reference image" },
    { src: "assets/slideshow/mariposa_power_plant.png", title: "Mariposa Power Plant", caption: "Project reference image" },
    { src: "assets/slideshow/POWER PLANT 2.jpg", title: "Power Plant 2", caption: "Project reference image" },
    { src: "assets/slideshow/POWER PLANT1.jpg", title: "Power Plant1", caption: "Project reference image" },
    { src: "assets/slideshow/PWR_050115_DG_GE_Splash.avif", title: "Pwr 050115 Dg Ge Splash", caption: "Project reference image" },
    { src: "assets/slideshow/SAM_3869.JPG", title: "Sam 3869", caption: "Project reference image" },
    { src: "assets/slideshow/Screenshot 2026-06-15 080630.png", title: "Screenshot 2026 06 15 080630", caption: "Project reference image" },
    { src: "assets/slideshow/sharm_el_sheikh_ge.avif", title: "Sharm El Sheikh Ge", caption: "Project reference image" },
    { src: "assets/slideshow/sharm-el-sheikh-power-plant-.avif", title: "Sharm El Sheikh Power Plant", caption: "Project reference image" },
    { src: "assets/slideshow/TM2500 GEN.jpg", title: "Tm2500 Gen", caption: "Project reference image" },
    { src: "assets/slideshow/tm2500_xpress_power_plant.avif", title: "Tm2500 Xpress Power Plant", caption: "Project reference image" },
    { src: "assets/slideshow/tm2500.jpg", title: "Tm2500", caption: "Project reference image" },
    { src: "assets/slideshow/TM2500XPRESS POWER PLANT.avif", title: "Tm2500xpress Power Plant", caption: "Project reference image" },
    { src: "assets/slideshow/TM8.jpg", title: "Tm8", caption: "Project reference image" },
    { src: "assets/slideshow/XPRESS.jpg", title: "Xpress", caption: "Project reference image" },
  ],
};

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function warmUpSpeechVoices() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function getSeverityClass(status) {
  if (["Low Gas", "High Gas", "Fire", "Fire Alarm", "Alarm Active", "Output Active"].includes(status)) return "red";
  if (["Supervisory", "Inhibit"].includes(status)) return "yellow";
  if (["Trouble", "Fault", "LON Fault"].includes(status)) return "orange";
  if (status === "Offline") return "gray";
  return "green";
}

function isVisualAlarmState(device) {
  const type = (device?.type || "").toLowerCase();
  if (type.includes("horn") && device?.value === "Silenced") return false;
  return ["Low Gas", "High Gas", "Fire", "Fire Alarm", "Alarm Active", "Output Active"].includes(device?.status);
}

function getDeviceTier(device) {
  if (isVisualAlarmState(device)) return "alarm";
  if (["Trouble", "Fault", "LON Fault"].includes(device?.status)) return "trouble";
  if (["Supervisory", "Inhibit"].includes(device?.status)) return "supervisory";
  if (device?.status === "Offline") return "offline";
  return "normal";
}

function getTextClass(status) {
  return statusClass[status] || "";
}

function isAdmin() {
  return currentRole === "Administrator";
}

function setAccessMessage(message) {
  const startStatus = document.getElementById("start-menu-status");
  if (startStatus) startStatus.textContent = message;
  const editorMessage = document.getElementById("device-editor-message");
  if (editorMessage) editorMessage.textContent = message;
}

function updateAccessState() {
  const admin = isAdmin();
  document.body.classList.toggle("admin-unlocked", admin);
  const roleText = admin ? "Administrator" : "Guest / Test Mode";
  const startOperator = document.getElementById("start-operator-status");
  if (startOperator) startOperator.textContent = `Operator: ${roleText}`;
  const hmiOperator = document.getElementById("hmi-operator-status");
  if (hmiOperator) hmiOperator.textContent = `OPERATOR: ${roleText.toUpperCase()}`;
  const lockBanner = document.getElementById("admin-lock-banner");
  if (lockBanner) lockBanner.textContent = admin ? "ADMIN MODE - Editing enabled." : "CONFIG LOCKED - Administrator login required to edit configuration.";

  document.querySelectorAll("#device-editor input:not(#editor-tag), #device-editor select").forEach((field) => {
    field.disabled = !admin;
  });
  document.querySelectorAll("#device-save, #device-revert, #device-save-json, #layout-smaller, #layout-larger, #layout-reset, #edit-layout-toggle, .admin-only").forEach((button) => {
    button.disabled = !admin;
  });
  document.querySelectorAll(".action-button").forEach((button) => {
    button.disabled = button.dataset.realDisabled === "true";
  });
  if (!admin && layoutEditMode) setLayoutEditMode(false);
}

function requireAdmin(actionName = "make changes") {
  if (isAdmin()) return true;
  setAccessMessage(`CONFIG LOCKED - Administrator login required to ${actionName}.`);
  return false;
}

function adminLogin() {
  const password = window.prompt("Administrator password");
  if (password === null) return;
  const savedPassword = localStorage.getItem(adminPasswordKey) || "admin";
  if (password === savedPassword) {
    currentRole = "Administrator";
    updateAccessState();
    addEvent("SYSTEM", "Administrator login.");
    setAccessMessage("ADMIN MODE - Editing enabled.");
    renderAll();
    return;
  }
  currentRole = "Guest";
  updateAccessState();
  addEvent("SYSTEM", "Failed administrator login.");
  setAccessMessage("Invalid administrator password. System remains read only.");
}

function changeAdminPassword() {
  if (!requireAdmin("change administrator password")) return;
  const currentPassword = window.prompt("Current administrator password");
  if (currentPassword === null) return;
  const savedPassword = localStorage.getItem(adminPasswordKey) || "admin";
  if (currentPassword !== savedPassword) {
    setAccessMessage("Current password is incorrect.");
    addEvent("SYSTEM", "Failed administrator password change.");
    return;
  }

  const newPassword = window.prompt("New administrator password");
  if (newPassword === null) return;
  if (newPassword.trim().length < 4) {
    setAccessMessage("New password must be at least 4 characters.");
    return;
  }

  const confirmPassword = window.prompt("Confirm new administrator password");
  if (confirmPassword === null) return;
  if (newPassword !== confirmPassword) {
    setAccessMessage("New password confirmation does not match.");
    return;
  }

  localStorage.setItem(adminPasswordKey, newPassword);
  addEvent("SYSTEM", "Administrator password changed.");
  setAccessMessage("Administrator password changed.");
}

function logout() {
  currentRole = "Guest";
  updateAccessState();
  addEvent("SYSTEM", "Operator logout. Read only mode enabled.");
  setAccessMessage("Logged out. System is read only.");
  renderAll();
}

function getDeviceInfo(tag) {
  return deviceInfoConfig.devices?.[tag] || {};
}

function ensureDeviceInfo(tag) {
  deviceInfoConfig.devices ||= {};
  deviceInfoConfig.devices[tag] ||= {
    manufacturer: "TBD",
    manufacturerPartNumber: "",
    gePartNumber: "",
    wfePartNumber: "",
    manuals: [],
    wiring: [],
    photos: [],
    procedures: [],
    specs: [],
    videos: []
  };
  return deviceInfoConfig.devices[tag];
}

async function saveDeviceInfoDatabase() {
  if (!window.eqpApp?.saveDeviceInfo) {
    addEvent(currentInfoDeviceId || "INFO", "Browser prototype: device info changes are in memory only. Use Electron to save references.");
    return false;
  }
  await window.eqpApp.saveDeviceInfo(deviceInfoConfig);
  return true;
}

function getS3Signal(tag) {
  const rawTag = getDeviceRawTag(tag);
  return s3Logic.aliases?.[rawTag] || rawTag;
}

function getRealProfileKey(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  const rawTag = getDeviceRawTag(deviceId);
  const type = (device?.type || "").toLowerCase();
  if (!device) return "logic";
  if (type.includes("controller")) return "controller";
  if (rawTag === "YSZ-3171" || rawTag === "YSZ-3172") return "release";
  if (type.includes("horn") || type.includes("strobe") || type.includes("beacon")) return "hardwiredOutput";
  if (type.includes("thermal") || type.includes("switch") || type.includes("station") || type.includes("inhibit")) return "hardwiredInput";
  if (type.includes("ir gas")) return "irGas";
  if (type.includes("gas")) return "gas";
  if (type.includes("flame")) return "flame";
  if (type.includes("edio")) return "edio";
  if (type.includes("dcio")) return "dcio";
  if (type.includes("aerosol") || type.includes("release tester")) return "release";
  return "logic";
}

function getRealTestProfile(deviceId) {
  return realTestProfiles[getRealProfileKey(deviceId)] || realTestProfiles.logic;
}

function isLonAddressableDevice(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  const rawTag = getDeviceRawTag(deviceId);
  const type = (device?.type || "").toLowerCase();
  if (rawTag === "YSZ-3171" || rawTag === "YSZ-3172") return true;
  if (
    type.includes("horn") ||
    type.includes("strobe") ||
    type.includes("beacon") ||
    type.includes("thermal") ||
    type.includes("switch") ||
    type.includes("station") ||
    type.includes("inhibit")
  ) {
    return false;
  }
  return Boolean(device) && (
    type.includes("controller") ||
    type.includes("gas") ||
    type.includes("flame") ||
    type.includes("edio") ||
    type.includes("dcio") ||
    type.includes("aim") ||
    type.includes("sam") ||
    type.includes("ud10")
  );
}

function shouldEvaluateS3Logic(sourceTag) {
  if (isAllestecProject()) return false;
  sourceTag = resolveDeviceId(sourceTag);
  const device = devices[sourceTag];
  const type = (device?.type || "").toLowerCase();
  return !(
    type.includes("horn") ||
    type.includes("strobe") ||
    type.includes("beacon") ||
    (type.includes("aerosol") && !type.includes("station")) ||
    type.includes("logic")
  );
}

function isS3SignalActive(signal, statuses) {
  return Object.entries(devices).some(([tag, device]) => {
    if (!isDeviceInCurrentProject(tag, device)) return false;
    const mapped = getS3Signal(tag);
    return mapped === signal && statuses.includes(device.status);
  });
}

function setDeviceOutput(tag, status, value) {
  tag = resolveDeviceId(tag);
  if (!devices[tag]) return;
  devices[tag].status = status;
  devices[tag].value = value;
}

function setRelay(relayKey, active, activeValue = relayOutputs[relayKey]?.label || "Active") {
  const relay = relayOutputs[relayKey];
  if (!relay || !devices[relay.tag]) return;
  devices[relay.tag].status = active ? "Output Active" : "Normal";
  devices[relay.tag].value = active ? activeValue : relay.label;
}

function isDeviceStatus(tag, statuses) {
  tag = resolveDeviceId(tag);
  return statuses.includes(devices[tag]?.status);
}

function isAnyActive(tags, statuses) {
  return tags.some((tag) => isDeviceStatus(tag, statuses));
}

function getActiveTags(tags, statuses) {
  return tags.filter((tag) => isDeviceStatus(tag, statuses));
}

function isLotoActive() {
  if (isAllestecProject()) return false;
  return isDeviceStatus("HS-3081", ["Inhibit"]);
}

function hasTroubleCondition() {
  return getCurrentProjectDeviceEntries().some(([tag, device]) => {
    if (tag.startsWith("RLY-") || aerosolReleaseOutputs.includes(tag) || hornOutputTags.includes(tag) || strobeOutputTags.includes(tag)) return false;
    return faultStatuses.has(device.status);
  });
}

function ensureControlDevices() {
  Object.entries(fallbackDevices).forEach(([tag, device]) => {
    if (tag.startsWith("RLY-") || tag === "LED-RELEASE-TESTER" || tag === "ALL-800" || tag.startsWith("CO2-") || /^(AE|BE|HS|TS|YSA|YSL)-6/.test(tag)) {
      devices[tag] ||= { ...device };
    }
  });
}

function mergeDeviceDatabase(configDevices) {
  const incomingDevices = configDevices && typeof configDevices === "object" ? configDevices : {};
  return {
    ...fallbackDevices,
    ...incomingDevices,
  };
}

function updateAerosolCountdownDisplay() {
  const box = document.getElementById("aerosol-countdown-box");
  const value = document.getElementById("aerosol-countdown");
  const label = document.getElementById("aerosol-countdown-label");
  const packageView = document.getElementById("package-view");
  if (!box || !value || !label) return;

  box.classList.toggle("countdown-active", aerosolCountdownSeconds !== null && !aerosolReleased);
  box.classList.toggle("countdown-released", aerosolReleased);
  box.classList.toggle("countdown-blocked", releaseBlockedByInhibit);
  packageView?.classList.toggle("aerosol-smoke-active", aerosolReleased);

  if (aerosolReleased) {
    value.textContent = "RELEASED";
    label.textContent = "Agent Release Command Active";
    return;
  }

  if (releaseBlockedByInhibit) {
    value.textContent = "BLOCKED";
    label.textContent = "SUPPRESSION INHIBITED";
    return;
  }

  if (releaseResetHold) {
    value.textContent = "RESET";
    label.textContent = "Waiting for initiating device to clear";
    return;
  }

  if (aerosolCountdownSeconds !== null) {
    value.textContent = `00:${String(aerosolCountdownSeconds).padStart(2, "0")}`;
    label.textContent = aerosolTimerPaused ? "Pre-discharge timer paused" : "Pre-discharge timer running";
    return;
  }

  value.textContent = "READY";
  label.textContent = "YSZ-3171 / YSZ-3172";
}

function setAerosolReleaseOutputs(status, value) {
  aerosolReleaseOutputs.forEach((tag) => {
    if (!devices[tag]) return;
    devices[tag].status = status;
    devices[tag].value = value;
  });
}

function autoResetThermalDetectorsAfterRelease() {
  const resetTags = thermalReleaseTags.filter((tag) => ["Fire Alarm", "Alarm Active"].includes(devices[tag]?.status));
  resetTags.forEach((tag) => {
    devices[tag].status = "Normal";
    devices[tag].value = "Ready";
  });
  if (resetTags.length) {
    addEvent("SYSTEM", `Thermal detector(s) auto-reset after Stat-X discharge: ${resetTags.join(", ")}.`);
  }
}

function completeAerosolCountdown(sourceTag = "S3 LOGIC") {
  if (aerosolTimerId) {
    clearInterval(aerosolTimerId);
    aerosolTimerId = null;
  }
  aerosolCountdownSeconds = null;
  aerosolTimerPaused = false;
  aerosolReleased = true;
  releaseBlockedByInhibit = false;
  setAerosolReleaseOutputs("Alarm Active", "Agent Released");
  setRelay("relay5", true, "Agent Release Circuit 1 Active");
  setRelay("relay6", true, "Agent Release Circuit 2 Active");
  setDeviceOutput("LED-RELEASE-TESTER", "Output Active", "Energized");
  addEvent(sourceTag, "Virtual agent release activated after 30 second countdown.");
  autoResetThermalDetectorsAfterRelease();
  applyS3Logic(sourceTag);
  resumeTrainingAfterRelease();
  renderAll();
}

function startAerosolCountdown(sourceTag = "S3 LOGIC") {
  if (aerosolReleased || aerosolTimerId || releaseResetHold || releaseBlockedByInhibit) return;
  if (aerosolCountdownSeconds === null) {
    aerosolCountdownSeconds = 30;
    addEvent(sourceTag, "Virtual aerosol 30 second countdown started.");
  } else if (aerosolTimerPaused) {
    addEvent(sourceTag, `Virtual aerosol countdown resumed at ${aerosolCountdownSeconds} seconds.`);
  }
  aerosolTimerPaused = false;
  setAerosolReleaseOutputs("Alarm Active", `Pre-Discharge 00:${String(aerosolCountdownSeconds).padStart(2, "0")}`);
  updateAerosolCountdownDisplay();

  aerosolTimerId = window.setInterval(() => {
    if (aerosolTimerPaused || releaseBlockedByInhibit) return;
    aerosolCountdownSeconds -= 1;
    setAerosolReleaseOutputs("Alarm Active", `Pre-Discharge 00:${String(aerosolCountdownSeconds).padStart(2, "0")}`);
    if (aerosolCountdownSeconds <= 0) {
      completeAerosolCountdown(sourceTag);
      return;
    }
    renderAll();
  }, 1000);
}

function pauseAerosolCountdown(sourceTag = "S3 LOGIC") {
  if (aerosolTimerId) {
    clearInterval(aerosolTimerId);
    aerosolTimerId = null;
  }
  if (aerosolCountdownSeconds !== null && !aerosolReleased) {
    aerosolTimerPaused = true;
    setAerosolReleaseOutputs("Alarm Active", `Paused 00:${String(aerosolCountdownSeconds).padStart(2, "0")}`);
    addEvent(sourceTag, `Virtual aerosol countdown paused at ${aerosolCountdownSeconds} seconds.`);
  }
  updateAerosolCountdownDisplay();
}

function cancelAerosolCountdown(resetOutputs = false) {
  if (aerosolTimerId) {
    clearInterval(aerosolTimerId);
    aerosolTimerId = null;
  }
  aerosolCountdownSeconds = null;
  aerosolReleased = false;
  aerosolTimerPaused = false;
  releaseBlockedByInhibit = false;
  if (resetOutputs) setAerosolReleaseOutputs("Normal", "Ready");
  updateAerosolCountdownDisplay();
}

function createHornAudio() {
  const audio = new Audio("./assets/audio/fire-alarm-sound.m4a");
  audio.loop = false;
  audio.volume = 0.75;
  audio.preload = "auto";
  audio.onended = () => {
    if (!hornSoundActive || hornsSilenced) return;
    audio.currentTime = 0;
    audio.play().catch(() => {
      hornSoundActive = false;
      addEvent("SYSTEM", "Horn audio could not restart.");
    });
  };
  return audio;
}

function prepareHornAudioOnFirstInteraction() {
  const unlock = () => {
    hornAudio ||= createHornAudio();
    hornAudio.muted = true;
    hornAudio.play()
      .then(() => {
        hornAudio.pause();
        hornAudio.currentTime = 0;
        hornAudio.muted = false;
      })
      .catch(() => {
        hornAudio.muted = false;
      });
  };
  document.addEventListener("pointerdown", unlock, { once: true });
  document.addEventListener("keydown", unlock, { once: true });
}

function startHornSound() {
  if (hornSoundActive || hornsSilenced) return;
  if (!hornAudio || hornAudio.error) hornAudio = createHornAudio();
  hornAudio.muted = false;
  hornAudio.volume = 0.75;
  hornAudio.currentTime = 0;

  hornAudio.play()
    .then(() => {
      hornSoundActive = true;
    })
    .catch(() => {
      hornSoundActive = false;
      addEvent("SYSTEM", "Browser blocked fire alarm audio. Click once on the HMI and activate the horn again.");
    });
}

function stopHornSound() {
  if (hornAudio) {
    hornAudio.pause();
    hornAudio.currentTime = 0;
  }
  hornSoundActive = false;
}

function updateHornSound() {
  const activeHornTags = isAllestecProject()
    ? allestecHornTags.map((tag) => resolveDeviceId(tag))
    : isLm6000EqpProject()
      ? lm6000EqpHornTags.map((tag) => resolveDeviceId(tag))
      : hornOutputTags;
  const hornActive = activeHornTags.some((tag) => devices[tag]?.status === "Output Active" && devices[tag]?.value !== "Silenced");
  if (hornActive) startHornSound();
  else stopHornSound();
}

function updateLm6000EqpCo2Display() {
  const box = document.getElementById("lm6000-eqp-co2-countdown-box");
  const value = document.getElementById("lm6000-eqp-co2-countdown");
  const label = document.getElementById("lm6000-eqp-co2-countdown-label");
  if (!box || !value || !label) return;
  box.classList.toggle("countdown-active", ["main-delay", "main", "reserve"].includes(lm6000EqpCo2Stage));
  box.classList.toggle("countdown-released", lm6000EqpCo2Stage === "complete");
  if (lm6000EqpCo2Stage === "main-delay") {
    value.textContent = `00:${String(lm6000EqpCo2CountdownSeconds || 0).padStart(2, "0")}`;
    label.textContent = "Main CO2 pre-discharge";
  } else if (lm6000EqpCo2Stage === "main") {
    const minutes = Math.floor((lm6000EqpCo2CountdownSeconds || 0) / 60);
    const seconds = (lm6000EqpCo2CountdownSeconds || 0) % 60;
    value.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
    label.textContent = "Main bank discharging";
  } else if (lm6000EqpCo2Stage === "reserve") {
    const minutes = Math.floor((lm6000EqpCo2CountdownSeconds || 0) / 60);
    const seconds = (lm6000EqpCo2CountdownSeconds || 0) % 60;
    value.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
    label.textContent = "Extended reserve discharging";
  } else if (lm6000EqpCo2Stage === "complete") {
    value.textContent = "RELEASED";
    label.textContent = "Main and extended CO2 complete";
  } else {
    value.textContent = "READY";
    label.textContent = "LM6000 EQP CO2";
  }
  renderLm6000EqpCo2VisualState();
}

function renderLm6000EqpCo2VisualState() {
  const view = document.getElementById("lm6000-view");
  if (!view) return;
  const blockClosed = ["Inhibit", "Trouble", "Fault", "Offline"].includes(devices[resolveDeviceId("ZS-6364")]?.status);
  view.classList.toggle("co2-flow-blocked", blockClosed);
  view.classList.toggle("co2-pre-discharge", lm6000EqpCo2Stage === "main-delay");
  view.classList.toggle("co2-main-discharging", lm6000EqpCo2Stage === "main");
  view.classList.toggle("co2-main-empty", lm6000EqpCo2Stage === "reserve" || lm6000EqpCo2Stage === "complete");
  view.classList.toggle("co2-reserve-discharging", lm6000EqpCo2Stage === "reserve");
  view.classList.toggle("co2-reserve-empty", lm6000EqpCo2Stage === "complete");
}

function resetLm6000EqpCo2(sourceTag = "EQP-FPP") {
  if (lm6000EqpCo2TimerId) clearInterval(lm6000EqpCo2TimerId);
  lm6000EqpCo2TimerId = null;
  lm6000EqpCo2Stage = "idle";
  lm6000EqpCo2CountdownSeconds = null;
  lm6000EqpCo2OutputTags.forEach((tag) => setDeviceOutput(tag, "Normal", "Ready"));
  addEvent(sourceTag, "LM6000 EQP CO2 sequence reset.");
  updateLm6000EqpCo2Display();
}

function startLm6000EqpCo2(sourceTag = selectedDeviceId) {
  if (lm6000EqpCo2Stage !== "idle") return;
  lm6000EqpCo2Stage = "main-delay";
  lm6000EqpCo2CountdownSeconds = 30;
  setDeviceOutput("AGENT_RELEASE", "Alarm Active", "Main pre-discharge 00:30");
  setDeviceOutput("CO2_AGENT_RELEASE", "Alarm Active", "CO2 release pending");
  addEvent(sourceTag, "LM6000 EQP CO2 30 second main release countdown started.");
  updateLm6000EqpCo2Display();
  if (lm6000EqpCo2TimerId) clearInterval(lm6000EqpCo2TimerId);
  lm6000EqpCo2TimerId = window.setInterval(() => {
    if (lm6000EqpCo2Stage === "main-delay") {
      lm6000EqpCo2CountdownSeconds = Math.max(0, lm6000EqpCo2CountdownSeconds - 1);
      setDeviceOutput("AGENT_RELEASE", "Alarm Active", `Main pre-discharge 00:${String(lm6000EqpCo2CountdownSeconds).padStart(2, "0")}`);
      if (lm6000EqpCo2CountdownSeconds <= 0) {
        lm6000EqpCo2Stage = "main";
        lm6000EqpCo2CountdownSeconds = 90;
        setDeviceOutput("SOV-6359", "Output Active", "Main CO2 release");
        setDeviceOutput("SOV-6360", "Output Active", "Main CO2 release");
        setDeviceOutput("PSHH-6348", "Alarm Active", "CO2 discharge pressure confirmed");
        addEvent(sourceTag, "LM6000 EQP main CO2 solenoids SOV-6359 and SOV-6360 energized.");
      }
    } else if (lm6000EqpCo2Stage === "main") {
      lm6000EqpCo2CountdownSeconds = Math.max(0, lm6000EqpCo2CountdownSeconds - 1);
      if (lm6000EqpCo2CountdownSeconds <= 0) {
        lm6000EqpCo2Stage = "reserve";
        lm6000EqpCo2CountdownSeconds = 90;
        setDeviceOutput("SOV-6361", "Output Active", "Extended CO2 release");
        setDeviceOutput("SOV-6362", "Output Active", "Extended CO2 release");
        addEvent(sourceTag, "LM6000 EQP extended reserve CO2 solenoids SOV-6361 and SOV-6362 energized.");
      }
    } else if (lm6000EqpCo2Stage === "reserve") {
      lm6000EqpCo2CountdownSeconds = Math.max(0, lm6000EqpCo2CountdownSeconds - 1);
      if (lm6000EqpCo2CountdownSeconds <= 0) {
        lm6000EqpCo2Stage = "complete";
        lm6000EqpCo2CountdownSeconds = null;
        clearInterval(lm6000EqpCo2TimerId);
        lm6000EqpCo2TimerId = null;
        setDeviceOutput("CO2_AGENT_RELEASE", "Output Active", "Main and extended CO2 released");
        addEvent(sourceTag, "LM6000 EQP CO2 release sequence complete.");
      }
    }
    updateLm6000EqpCo2Display();
    queueEqpOnTestSync();
    renderAll();
  }, 1000);
}

function applyLm6000EqpLogic(sourceTag = selectedDeviceId) {
  getCurrentProjectDeviceEntries();
  const releaseActive = lm6000EqpReleaseSourceTags.some((tag) => {
    const status = devices[resolveDeviceId(tag)]?.status;
    return ["Fire Alarm", "Alarm Active", "Input Active"].includes(status);
  });
  const lowGasTurbine = lm6000EqpTurbineGasTags.some((tag) => devices[resolveDeviceId(tag)]?.status === "Low Gas");
  const highGasTurbine = lm6000EqpTurbineGasTags.some((tag) => devices[resolveDeviceId(tag)]?.status === "High Gas");
  const lowGasGen = lm6000EqpGeneratorGasTags.some((tag) => devices[resolveDeviceId(tag)]?.status === "Low Gas");
  const highGasGen = lm6000EqpGeneratorGasTags.some((tag) => devices[resolveDeviceId(tag)]?.status === "High Gas");
  const commonAlarm = releaseActive || lowGasTurbine || highGasTurbine || lowGasGen || highGasGen;

  lm6000EqpHornTags.forEach((tag) => setDeviceOutput(tag, commonAlarm && !hornsSilenced ? "Output Active" : "Normal", commonAlarm && !hornsSilenced ? "Sounding" : "Ready"));
  lm6000EqpStrobeTags.forEach((tag) => setDeviceOutput(tag, commonAlarm ? "Output Active" : "Normal", commonAlarm ? "Flashing" : "Ready"));
  setDeviceOutput("GENERAL_ALARM", commonAlarm ? "Alarm Active" : "Normal", commonAlarm ? "Any fire/gas alarm" : "Ready");
  setDeviceOutput("FIRE_GAS_SHOUTDOWN", commonAlarm ? "Output Active" : "Normal", commonAlarm ? "Fire/Gas monitor shutdown" : "Ready");
  setDeviceOutput("ALARM_LEL_TURBINE", lowGasTurbine ? "Alarm Active" : "Normal", lowGasTurbine ? "Low gas turbine" : "Ready");
  setDeviceOutput("SHOUTDOWN_LEL_TUR", highGasTurbine ? "Alarm Active" : "Normal", highGasTurbine ? "High gas turbine shutdown" : "Ready");
  setDeviceOutput("ALARM_LEL_GEN", lowGasGen ? "Alarm Active" : "Normal", lowGasGen ? "Low gas generator" : "Ready");
  setDeviceOutput("SHOUTDOWN_LEL_GEN", highGasGen ? "Alarm Active" : "Normal", highGasGen ? "High gas generator shutdown" : "Ready");

  if (releaseActive) startLm6000EqpCo2(sourceTag);
  updateLm6000EqpCo2Display();
  queueEqpOnTestSync();
}

function applyS3Logic(sourceTag = selectedDeviceId) {
  if (isLm6000EqpProject()) {
    applyLm6000EqpLogic(sourceTag);
    return;
  }
  ensureControlDevices();

  const manualActiveTags = getActiveTags(manualReleaseTags, ["Alarm Active", "Input Active"]);
  const thermalActiveTags = getActiveTags(thermalReleaseTags, ["Fire Alarm", "Alarm Active"]);
  const lowGasActive = isAnyActive([...enclosureGasTags, ...exhaustGasTags], ["Low Gas"]);
  const highGasActive = isAnyActive([...enclosureGasTags, ...exhaustGasTags], ["High Gas"]);
  const releaseConditionActive = manualActiveTags.length > 0 || thermalActiveTags.length > 0;
  const fireOrGasAlarmActive = releaseConditionActive || lowGasActive || highGasActive;
  const lotoActive = isLotoActive();
  const troubleActive = hasTroubleCondition();

  if (releaseResetHold && !releaseConditionActive) {
    releaseResetHold = false;
    addEvent("SYSTEM", "Release reset hold cleared. New activation will start a new countdown.");
  }

  if (fireOrGasAlarmActive) {
    hornLatched = true;
    strobeLatched = true;
  }

  hornOutputTags.forEach((tag) => {
    if (!devices[tag]) return;
    devices[tag].status = hornLatched ? "Output Active" : "Normal";
    devices[tag].value = hornLatched ? (hornsSilenced ? "Silenced" : "Slow Whoop Active") : "Ready";
  });

  strobeOutputTags.forEach((tag) => {
    if (!devices[tag]) return;
    devices[tag].status = strobeLatched ? "Output Active" : "Normal";
    devices[tag].value = strobeLatched ? "Flashing" : "Ready";
  });

  setRelay("relay1", releaseConditionActive, "Fire & Gas Monitor Shutdown Active");
  setRelay("relay2", releaseConditionActive, "Critical Path / Vent Fan Shutdown Active");
  setRelay("relay3", lowGasActive, "Low Gas Alarm Active");
  setRelay("relay4", highGasActive, "High Gas Shutdown Active");
  setRelay("relay7", troubleActive, "Fault Output Active");
  setRelay("relay8", false);

  setDeviceOutput("ALARM LO GAS", lowGasActive ? "Alarm Active" : "Normal", lowGasActive ? "Low Gas Alarm Active" : "Ready");
  setDeviceOutput("ALARM HI GAS SHTDN", highGasActive ? "Alarm Active" : "Normal", highGasActive ? "High Gas Shutdown Active" : "Ready");
  setDeviceOutput("FIRE/GAS MON SHUTDWN", releaseConditionActive ? "Alarm Active" : "Normal", releaseConditionActive ? "Shutdown Active" : "Ready");
  setDeviceOutput("GENERAL ALARM", fireOrGasAlarmActive ? "Alarm Active" : "Normal", fireOrGasAlarmActive ? "General Alarm Active" : "Ready");

  if (lotoActive) {
    setDeviceOutput("EDIO-2", "Offline", "Suppression Inhibited / EDIO Offline");
    releaseBlockedByInhibit = releaseConditionActive || aerosolCountdownSeconds !== null || aerosolReleased;
    setRelay("relay5", false);
    setRelay("relay6", false);
    setAerosolReleaseOutputs("Inhibit", releaseBlockedByInhibit ? "Release Blocked by LOTO" : "Suppression Inhibited");
    setDeviceOutput("LED-RELEASE-TESTER", "Normal", "De-Energized");
    if (releaseBlockedByInhibit) {
      pauseAerosolCountdown(sourceTag);
      addEvent(sourceTag, "Agent release blocked by suppression inhibit / LOTO.");
    }
  } else {
    if (["Inhibit", "Offline"].includes(devices["EDIO-2"]?.status) && devices["EDIO-2"]?.value?.includes("Suppression Inhibited")) {
      setDeviceOutput("EDIO-2", "Normal", "Outputs Ready");
    }
    releaseBlockedByInhibit = false;
    if (releaseConditionActive && !releaseResetHold && !aerosolReleased) {
      lastReleaseInitiator = [...manualActiveTags, ...thermalActiveTags].join(", ");
      startAerosolCountdown(sourceTag);
    } else if (!releaseConditionActive && aerosolCountdownSeconds !== null && !aerosolReleased) {
      pauseAerosolCountdown(sourceTag);
    }

    if (!aerosolReleased) {
      setRelay("relay5", false);
      setRelay("relay6", false);
      if (aerosolCountdownSeconds === null) {
        setAerosolReleaseOutputs("Normal", "Ready");
        setDeviceOutput("LED-RELEASE-TESTER", "Normal", "De-Energized");
      }
    }
  }

  updateAerosolCountdownDisplay();
  queueEqpOnTestSync();
}

function renderDeviceVideos(info) {
  const videoList = document.getElementById("device-video-list");
  const videoPlayer = document.getElementById("device-info-video");
  const videos = Array.isArray(info.videos) ? info.videos : [];
  if (!videoList || !videoPlayer) return;

  videoPlayer.removeAttribute("src");
  videoPlayer.load();

  if (!videos.length) {
    videoList.textContent = "No videos assigned to this device.";
    return;
  }

  videoList.innerHTML = videos
    .map((video, index) => `<button class="video-item" type="button" data-video-index="${index}">${video.title || `Video ${index + 1}`}<span>${video.description || ""}</span></button>`)
    .join("");
}

function renderDocumentList(elementId, items, emptyMessage) {
  const list = document.getElementById(elementId);
  if (!list) return;
  const docs = Array.isArray(items) ? items : [];
  if (!docs.length) {
    list.textContent = emptyMessage;
    return;
  }
  list.innerHTML = docs
    .map((item) => `<button class="document-item" type="button" data-file="${item.file || ""}">${item.title || "Document"}<span>${item.description || item.file || ""}</span></button>`)
    .join("");
}

function showInfoPanel(topic) {
  document.querySelectorAll(".info-panel").forEach((panel) => {
    panel.classList.toggle("active-info-panel", panel.dataset.infoPanel === topic);
  });
}

function setActiveInfoTopic(topic) {
  document.querySelectorAll(".info-topic").forEach((button) => {
    button.classList.toggle("active-info-topic", button.dataset.infoTopic === topic);
  });
  showInfoPanel(topic);
}

function getFunctions(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  if (!device) return ["Normal", "Fault", "Offline"];
  const type = device.type.toLowerCase();
  const rawTag = getDeviceRawTag(deviceId);
  return (
    deviceFunctions[deviceId] ||
    deviceFunctions[rawTag] ||
    (type.includes("horn") ? deviceFunctions.horn : null) ||
    (type.includes("strobe") || type.includes("beacon") ? deviceFunctions.strobe : null) ||
    (type.includes("edio") ? deviceFunctions.edio : null) ||
    (type.includes("switch") || type.includes("station") || type.includes("inhibit") ? deviceFunctions.switch : null) ||
    (type.includes("aerosol") ? deviceFunctions.aerosol : null) ||
    (type.includes("gas") ? deviceFunctions.gas : null) ||
    (type.includes("thermal") ? deviceFunctions.thermal : null) ||
    ["Normal", "Fault", "Offline"]
  );
}

function addEvent(tag, message) {
  const deviceId = devices[resolveDeviceId(tag)] ? resolveDeviceId(tag) : tag;
  eventHistory.unshift({ time: nowTime(), tag: getDeviceDisplayTag(deviceId), deviceId, message });
  eventHistory.splice(20);
  renderEvents();
}

function selectDevice(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  if (!devices[deviceId]) return;
  selectedDeviceId = deviceId;
  renderAll();
}

let gasSliderApplyTimer = null;

function isGasDevice(deviceId) {
  const device = devices[resolveDeviceId(deviceId)];
  return (device?.type || "").toLowerCase().includes("gas");
}

function parsePercentText(text, fallback = 0) {
  const match = String(text || "").match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]) : fallback;
}

function getGasPercent(deviceId) {
  const device = devices[resolveDeviceId(deviceId)];
  return Math.max(0, Math.min(100, parsePercentText(device?.value, 0)));
}

function getGasSetpoints(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  const rawTag = getDeviceRawTag(deviceId);
  const irStack = rawTag === "AE-3029" || rawTag === "AE-3030" || rawTag === "LM6-AE-3029" || rawTag === "LM6-AE-3030";
  const lowFallback = irStack ? 5 : 15;
  const highFallback = irStack ? 10 : 25;
  return {
    low: parsePercentText(s3Logic.gasSetpoints?.[rawTag]?.low || devices[deviceId]?.highAlarm, lowFallback),
    high: parsePercentText(s3Logic.gasSetpoints?.[rawTag]?.high || devices[deviceId]?.highHighAlarm, highFallback),
  };
}

function getGasStatusFromPercent(deviceId, percent) {
  const setpoints = getGasSetpoints(deviceId);
  if (percent >= setpoints.high) return "High Gas";
  if (percent >= setpoints.low) return "Low Gas";
  return "Normal";
}

function renderGasSlider() {
  const card = document.getElementById("gas-slider-card");
  const slider = document.getElementById("gas-level-slider");
  const readout = document.getElementById("gas-slider-readout");
  const downButton = document.getElementById("gas-level-down");
  const upButton = document.getElementById("gas-level-up");
  if (!card || !slider || !readout) return;
  if (!isGasDevice(selectedDeviceId)) {
    card.hidden = true;
    return;
  }

  const percent = getGasPercent(selectedDeviceId);
  const setpoints = getGasSetpoints(selectedDeviceId);
  const device = devices[selectedDeviceId];
  card.hidden = false;
  slider.disabled = device?.mode === "Real" && !isAllestecProject();
  if (downButton) downButton.disabled = slider.disabled || percent <= 0;
  if (upButton) upButton.disabled = slider.disabled || percent >= 100;
  slider.value = String(percent);
  readout.textContent = `${percent}% LEL`;
  document.getElementById("gas-low-setpoint").textContent = `LOW ${setpoints.low}%`;
  document.getElementById("gas-high-setpoint").textContent = `HIGH ${setpoints.high}%`;
}

function setGasPercent(deviceId, percent) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  if (!device || !isGasDevice(deviceId)) return;
  const level = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  const value = `${level}% LEL`;
  const nextStatus = getGasStatusFromPercent(deviceId, level);
  const previousStatus = device.status;

  if (device.mode === "Real" && !isAllestecProject()) {
    addEvent(deviceId, `${getDeviceDisplayTag(deviceId)} is in Real mode. Gas slider command ignored.`);
    renderAll();
    return;
  }

  if (isAllestecHardwareMode()) {
    device.value = value;
    device.status = nextStatus;
    if (previousStatus !== nextStatus) {
      addEvent(deviceId, `${getDeviceDisplayTag(deviceId)} gas command set to ${value}. Waiting for ${getAllestecSystemModeLabel()} feedback.`);
    }
    renderAll();
    return;
  }

  if (nextStatus === "Normal") {
    device.status = "Normal";
    device.value = value;
    if (previousStatus !== "Normal") {
      addEvent(deviceId, `${getDeviceDisplayTag(deviceId)} gas level returned to Normal (${value}).`);
      if (shouldEvaluateS3Logic(deviceId)) applyS3Logic(deviceId);
    }
    renderAll();
    return;
  }

  if (previousStatus !== nextStatus) {
    setDeviceState(deviceId, nextStatus, value);
    return;
  }

  device.value = value;
  renderAll();
}

function queueGasSliderUpdate(percent) {
  const sliderDeviceId = selectedDeviceId;
  window.clearTimeout(gasSliderApplyTimer);
  gasSliderApplyTimer = window.setTimeout(() => {
    if (selectedDeviceId === sliderDeviceId) setGasPercent(sliderDeviceId, percent);
  }, 80);
  queuePhysicalGasAnalogOutput(percent, sliderDeviceId);
}

function stepGasSlider(delta) {
  const slider = document.getElementById("gas-level-slider");
  if (!slider || slider.disabled || !isGasDevice(selectedDeviceId)) return;
  const nextValue = Math.max(0, Math.min(100, Math.round(Number(slider.value) || 0) + delta));
  slider.value = String(nextValue);
  const readout = document.getElementById("gas-slider-readout");
  if (readout) readout.textContent = `${nextValue}% LEL`;
  setGasPercent(selectedDeviceId, nextValue);
  queuePhysicalGasAnalogOutput(nextValue, selectedDeviceId);
}

function renderSelectedDevice() {
  if (isAllestecProject()) applyAllestecSystemModeToDevices();
  selectedDeviceId = resolveDeviceId(selectedDeviceId);
  const device = devices[selectedDeviceId];
  const displayTag = getDeviceDisplayTag(selectedDeviceId);
  document.getElementById("detail-tag").textContent = displayTag;
  document.getElementById("detail-type").textContent = device.type;
  document.getElementById("detail-mode").textContent = device.mode;
  document.getElementById("detail-address").textContent = device.address;
  document.getElementById("detail-status").textContent = device.status;
  document.getElementById("detail-status").className = isVisualAlarmState(device) ? getTextClass(device.status) : device.status === "Normal" || device.value === "Silenced" ? "ok" : getTextClass(device.status);
  document.getElementById("detail-value").textContent = device.value;
  document.getElementById("detail-area").textContent = device.area;
  document.getElementById("detail-last-event").textContent = eventHistory.find((event) => event.deviceId === selectedDeviceId || event.tag === displayTag)?.time || "--:--:--";

  const dot = document.getElementById("detail-status-dot");
  dot.className = `status-dot ${getSeverityClass(device.status)}`;
  const modeActions = document.querySelector(".mode-actions");
  const lonAddressable = isLonAddressableDevice(selectedDeviceId);
  if (modeActions) modeActions.hidden = isAllestecProject() || !lonAddressable;
  document.getElementById("set-virtual-mode").classList.toggle("active-mode", lonAddressable && device.mode.includes("Virtual"));
  document.getElementById("set-real-mode").classList.toggle("active-mode", lonAddressable && device.mode === "Real");
  renderRealTestProfile();
  renderAllestecSystemModePanel();
  renderGasSlider();

  const rawSelectedTag = getDeviceRawTag(selectedDeviceId);
  const functions = edioChannelMap[rawSelectedTag] || getFunctions(selectedDeviceId);
  const actionFunctions = edioChannelMap[rawSelectedTag] ? ["Normal", "Fault", "Offline"] : getFunctions(selectedDeviceId);
  document.getElementById("detail-functions").innerHTML = functions.map((item) => `<span>${item}</span>`).join("");
  document.getElementById("device-actions").innerHTML = actionFunctions
    .map((item) => `<button type="button" class="action-button" data-action="${item}" data-real-disabled="${device.mode === "Real" ? "true" : "false"}" ${device.mode === "Real" ? "disabled" : ""}>${item}</button>`)
    .join("");

  document.querySelectorAll(".field-device").forEach((button) => {
    button.classList.toggle("selected", resolveDeviceId(button.dataset.device) === selectedDeviceId);
  });
  document.querySelectorAll(".device-badge").forEach((badge) => {
    badge.classList.toggle("selected-device-badge", resolveDeviceId(badge.dataset.device) === selectedDeviceId);
  });
}

function getNormalDeviceValue(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  const type = (device?.type || "").toLowerCase();
  if (type.includes("gas")) return "0% LEL";
  if (type.includes("controller")) return "Online";
  if (type.includes("edio") || type.includes("dcio")) return "Module Online";
  return "Ready";
}

function renderRealTestProfile() {
  const device = devices[selectedDeviceId];
  const profile = getRealTestProfile(selectedDeviceId);
  const realMode = device?.mode === "Real";
  const card = document.getElementById("real-test-card");
  if (!card || !device || !profile) return;
  if (isAllestecProject()) {
    card.hidden = true;
    return;
  }
  const lonAddressable = isLonAddressableDevice(selectedDeviceId);

  card.hidden = !lonAddressable;
  if (!lonAddressable) return;
  card.classList.toggle("real-active", realMode);
  document.getElementById("real-test-state").textContent = realMode ? "REAL" : "VIRTUAL";
  document.getElementById("real-test-profile").textContent = profile.profile;
  document.getElementById("real-test-type").textContent = profile.testType;
  document.getElementById("real-test-address").textContent = profile.expected;
  document.getElementById("real-test-eqp").textContent = realMode ? (device.status === "Normal" ? "Ready / Online" : "Waiting / Fault") : "Standby";
  document.getElementById("real-test-note").textContent = realMode
    ? profile.note
    : "Switch to REAL to prepare the matching S3 profile for this device.";

  const openButton = document.getElementById("open-s3-profile");
  const confirmButton = document.getElementById("confirm-real-ready");
  if (openButton) openButton.disabled = !realMode || !profile.path;
  if (confirmButton) confirmButton.disabled = !realMode;
}

function setDeviceState(deviceId, status, value) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  if (!device) return;
  const type = (device.type || "").toLowerCase();
  if (status !== "Normal" && !type.includes("horn") && !type.includes("strobe") && !type.includes("beacon")) {
    hornsSilenced = false;
  }
  const allestecReleaseBlocked = isAllestecProject()
    && isAllestecReleaseSource(deviceId)
    && ["Alarm Active", "Fire Alarm", "Fire", "Output Active"].includes(status)
    && allestecSystemMode !== "virtual";
  device.status = status;
  device.value = value;
  addEvent(deviceId, `${getDeviceDisplayTag(deviceId)} changed to ${status}${value ? ` (${value})` : ""}.`);
  if (isAllestecProject() && ["Low Gas", "High Gas", "Fire", "Fire Alarm", "Alarm Active", "Output Active"].includes(status)) {
    const rawTag = getDeviceRawTag(deviceId);
    const isGasOnly = (device.type || "").toLowerCase().includes("gas");
    const isTurbineFlameVote = allestecTurbineFlameTags.includes(rawTag);

    if (isGasOnly) {
      setAllestecNotificationOutputs(true, hornsSilenced);
      renderAll();
      return;
    }

    if (isTurbineFlameVote) {
      const activeFlames = getAllestecActiveTurbineFlameCount();
      if (activeFlames >= 2) {
        setAllestecNotificationOutputs(true, hornsSilenced);
        startAllestecCo2Discharge(deviceId);
        return;
      }
      setAllestecStrobeOutputs(true);
      addEvent(deviceId, "Single turbine flame detector active. Waiting for 2-out-of-3 flame vote before CO2 release.");
      renderAll();
      return;
    }

    setAllestecNotificationOutputs(true, hornsSilenced);
    if (allestecReleaseBlocked) {
      addEvent(deviceId, "CO2 discharge simulation timer active in HMI. Physical CO2 output remains a simulation.");
    }
    if (isAllestecReleaseSource(rawTag)) {
      startAllestecCo2Discharge(deviceId);
      return;
    }
    renderAll();
    return;
  }
  if (isAllestecProject() && isAllestecReleaseSource(deviceId) && ["Alarm Active", "Fire", "Fire Alarm", "Output Active"].includes(status)) {
    startAllestecCo2Discharge(deviceId);
    return;
  }
  if (shouldEvaluateS3Logic(deviceId)) applyS3Logic(deviceId);
  renderAll();
}

function resetDevice(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  if (!device) return;
  const type = device.type.toLowerCase();
  if (getDeviceRawTag(deviceId) === "HS-6363") {
    if (isLm6000EqpProject()) resetLm6000EqpCo2(deviceId);
    else resetAllestecCo2Discharge(deviceId);
    return;
  }
  device.status = "Normal";
  device.value = type.includes("gas") ? "0% LEL" : type.includes("controller") ? "Online" : "Ready";
  addEvent(deviceId, `${getDeviceDisplayTag(deviceId)} reset to Normal.`);
  if (shouldEvaluateS3Logic(deviceId)) applyS3Logic(deviceId);
  renderAll();
}

function getGraphicInputAction(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  const rawTag = getDeviceRawTag(deviceId);
  const type = (device?.type || "").toLowerCase();
  if (!device) return null;
  if (graphicInputActions[deviceId]) return graphicInputActions[deviceId];
  if (graphicInputActions[rawTag]) return graphicInputActions[rawTag];
  if (type.includes("gas")) return "Low Gas";
  if (type.includes("thermal") || type.includes("heat") || type.includes("flame")) return "Fire";
  if (type.includes("horn") || type.includes("strobe") || type.includes("solenoid")) return "Output On";
  if (type.includes("switch") || type.includes("station") || type.includes("inhibit")) return "Input Active";
  return null;
}

function triggerGraphicInput(deviceId) {
  deviceId = resolveDeviceId(deviceId);
  const device = devices[deviceId];
  if (!device || device.mode === "Real") return false;
  const action = getGraphicInputAction(deviceId);
  if (!action) return false;

  if (isAllestecHardwareMode()) {
    selectedDeviceId = deviceId;
    if (canWriteAllestecPanel1Relay(deviceId)) {
      writeAllestecPanel1Relay(deviceId, true);
      device.status = "Supervisory";
      device.value = "Panel 1 input sent - waiting for panel feedback";
      addEvent(deviceId, `${getDeviceDisplayTag(deviceId)} Panel 1 input command sent. Waiting for Allestec panel feedback before activating horns/strobes.`);
      renderAll();
      return true;
    }
    addEvent(deviceId, `${getDeviceDisplayTag(deviceId)} is assigned to ${getAllestecSystemModeLabel()}. Waiting for real module/panel input; virtual double-click simulation is disabled.`);
    renderAll();
    return true;
  }

  if (alarmStatuses.has(device.status) || ["Output Active", "Alarm Active"].includes(device.status)) {
    if (isAllestecProject()) {
      selectedDeviceId = deviceId;
      addEvent(deviceId, `${getDeviceDisplayTag(deviceId)} remains latched. Use panel RESET or the required reset/purge switch.`);
      renderAll();
      return true;
    }
    resetDevice(deviceId);
    return true;
  }

  selectedDeviceId = deviceId;
  applyFunction(action);
  return true;
}

function acknowledgeAllAlarms() {
  const active = Object.entries(devices).filter(([, device]) => alarmStatuses.has(device.status));
  addEvent("SYSTEM", `${active.length} active alarm(s) acknowledged.`);
  pulseEqpOnTestCommand("Acknowledge");
  renderAll();
}

function silenceAllOutputs() {
  hornsSilenced = true;
  Object.entries(devices).forEach(([tag, device]) => {
    const type = device.type.toLowerCase();
    if (type.includes("horn") && ["Alarm Active", "Output Active"].includes(device.status)) {
      device.value = "Silenced";
    }
  });
  addEvent("SYSTEM", "Audible horns silenced. Strobes remain active until reset.");
  pulseEqpOnTestCommand("Silence");
  stopHornSound();
  renderAll();
}

function resetAllDevices() {
  if (isAllestecProject()) {
    resetAllestecPanel();
    return;
  }
  if (isLm6000EqpProject()) {
    resetLm6000EqpCo2("EQP-FPP");
    hornsSilenced = false;
    stopHornSound();
    getCurrentProjectDeviceEntries().forEach(([tag, device]) => {
      const type = (device.type || "").toLowerCase();
      device.status = "Normal";
      device.value = type.includes("gas") ? "0% LEL" : type.includes("controller") ? "Online" : type.includes("edio") ? "Module Online" : "Ready";
    });
    lm6000EqpHornTags.forEach((tag) => setDeviceOutput(tag, "Normal", "Ready"));
    lm6000EqpStrobeTags.forEach((tag) => setDeviceOutput(tag, "Normal", "Ready"));
    addEvent("EQP-FPP", "LM6000 EQP panel reset complete. System returned to NORMAL.");
    pulseEqpOnTestCommand("Reset");
    queueEqpOnTestSync();
    renderAll();
    return;
  }
  cancelAerosolCountdown(true);
  resetAllestecCo2Discharge("SYSTEM");
  releaseResetHold = false;
  releaseBlockedByInhibit = false;
  aerosolReleased = false;
  aerosolTimerPaused = false;
  hornLatched = false;
  hornsSilenced = false;
  strobeLatched = false;
  stopHornSound();
  if (!isAllestecProject()) {
    hornOutputTags.forEach((tag) => setDeviceOutput(tag, "Normal", "Ready"));
    strobeOutputTags.forEach((tag) => setDeviceOutput(tag, "Normal", "Ready"));

    aerosolReleaseOutputs.forEach((tag) => {
      const type = (devices[tag]?.type || "").toLowerCase();
      setDeviceOutput(tag, "Normal", type.includes("gas") ? "0% LEL" : "Ready");
    });
    ["relay1", "relay2", "relay3", "relay4", "relay5", "relay6", "relay8"].forEach((relayKey) => setRelay(relayKey, false));
    setDeviceOutput("LED-RELEASE-TESTER", "Normal", "De-Energized");
  }

  Object.entries(devices).forEach(([tag, device]) => {
    if (isAllestecProject() && !isAllestecDeviceId(tag)) return;
    if (!isAllestecProject() && isAllestecDeviceId(tag)) return;
    if (tag.startsWith("RLY-") || tag === "LED-RELEASE-TESTER" || hornOutputTags.includes(tag) || strobeOutputTags.includes(tag) || aerosolReleaseOutputs.includes(tag)) return;
    const type = device.type.toLowerCase();
    device.status = "Normal";
    device.value = type.includes("gas") ? "0% LEL" : type.includes("controller") ? "Online" : "Ready";
  });

  if (!isAllestecProject()) setRelay("relay7", false);
  addEvent("SYSTEM", "Panel reset complete. System returned to NORMAL.");
  pulseEqpOnTestCommand("Reset");
  if (!isAllestecProject()) applyS3Logic("EQP-001");
  renderAll();
}

function setSelectedMode(mode) {
  selectedDeviceId = resolveDeviceId(selectedDeviceId);
  const device = devices[selectedDeviceId];
  if (isAllestecProject()) {
    addEvent("ALL-800", "LM6000 Allestec uses system mode. Use ON BOARD PANEL, ON TEST PANEL, or VIRTUAL PANEL.");
    renderAll();
    return;
  }
  if (!isLonAddressableDevice(selectedDeviceId)) {
    addEvent(selectedDeviceId, `${getDeviceDisplayTag(selectedDeviceId)} is hardwired/non-LON. Real test profile is not required.`);
    renderAll();
    return;
  }
  const profile = getRealTestProfile(selectedDeviceId);
  device.mode = mode;

  if (mode === "Real") {
    const type = (device.type || "").toLowerCase();
    if (!type.includes("controller") && !type.includes("logic")) {
      device.status = "Offline";
      device.value = "Waiting for S3 profile / physical device";
    }
    addEvent(selectedDeviceId, `${getDeviceDisplayTag(selectedDeviceId)} switched to REAL test mode. Required S3 profile: ${profile.profile}.`);
  } else {
    device.status = "Normal";
    device.value = getNormalDeviceValue(selectedDeviceId);
    addEvent(selectedDeviceId, `${getDeviceDisplayTag(selectedDeviceId)} returned to VIRTUAL simulation mode.`);
  }

  if (shouldEvaluateS3Logic(selectedDeviceId)) applyS3Logic(selectedDeviceId);
  renderAll();
}

function isAllestecProject() {
  return isAllestecProjectName(selectedProject);
}

function isLm6000EqpProject(projectName = selectedProject) {
  return normalizeProjectName(projectName) === "LM6000 EQP";
}

function isAllestecHardwareMode() {
  return isAllestecProject() && allestecSystemMode !== "virtual";
}

const allestecPanel1RelayTags = new Set([
  "BE-6300",
  "BE-6302",
  "BE-6335",
  "BE-6311",
  "TS-6303",
  "TS-6314",
  "TS-6307",
  "TS-6310",
  "HS-6308",
  "HS-6309",
  "HS-6312",
  "HS-6363",
  "HS-6305",
  "PSH-6348A",
  "PSHH-6348B",
  "ZS-6364",
]);

function canWriteAllestecPanel1Relay(deviceId) {
  return isAllestecProject() && allestecSystemMode === "panel" && allestecPanel1RelayTags.has(getDeviceRawTag(deviceId));
}

async function writeAllestecPanel1Relay(deviceId, state = true) {
  const rawTag = getDeviceRawTag(deviceId);
  try {
    const response = await fetch(`http://127.0.0.1:8765/relay?tag=${encodeURIComponent(rawTag)}&state=${state ? "on" : "off"}`);
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || `HTTP ${response.status}`);
    addEvent(deviceId, `Relay Module-1 CH${result.channel} ${state ? "closed" : "opened"} for ${rawTag}.`);
    return true;
  } catch (error) {
    addEvent(deviceId, `Relay Module-1 command failed for ${rawTag}: ${error.message}. Start relay_bridge.js and verify 192.168.1.200:4196.`);
    return false;
  } finally {
    renderAll();
  }
}

async function resetAllestecPanel1Relays() {
  try {
    const response = await fetch("http://127.0.0.1:8765/reset");
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || `HTTP ${response.status}`);
    addEvent("ALL-800", "Relay Module-1 reset command sent. All Panel 1 relay outputs opened.");
    return true;
  } catch (error) {
    addEvent("ALL-800", `Relay Module-1 reset failed: ${error.message}. Start relay_bridge.js and verify 192.168.1.200:4196.`);
    return false;
  } finally {
    renderAll();
  }
}

function isAllestecDeviceId(tag) {
  const rawTag = getDeviceRawTag(tag);
  return projectScopedTags["LM6000 ALLESTEC"].has(rawTag) || rawTag === "ALL-800" || rawTag.startsWith("CO2-") || /^(AE|BE|HS|TS|YSA|YSL)-6/.test(rawTag);
}

function isDeviceInCurrentProject(tag, device = devices[tag]) {
  if (isAllestecProject()) {
    if (device?.projectNamespace) return device.projectNamespace === getProjectNamespace();
    return isAllestecDeviceId(tag);
  }
  if (isLm6000EqpProject()) {
    if (device?.projectNamespace) return device.projectNamespace === getProjectNamespace();
    return projectScopedTags["LM6000 EQP"].has(getDeviceRawTag(tag));
  }
  if (getProjectFamily() === "lms100") {
    if (device?.projectNamespace) return device.projectNamespace === getProjectNamespace();
    return projectScopedTags["LMS100"].has(getDeviceRawTag(tag));
  }
  if (device?.projectNamespace) return device.projectNamespace === getProjectNamespace();
  return !isAllestecDeviceId(tag);
}

function getCurrentProjectDeviceEntries() {
  if (isAllestecProject()) {
    return Array.from(projectScopedTags["LM6000 ALLESTEC"])
      .map((rawTag) => {
        const scopedKey = ensureProjectDevice(rawTag, "LM6000 Allestec");
        return [scopedKey, devices[scopedKey]];
      })
      .filter(([, device]) => Boolean(device));
  }
  if (isLm6000EqpProject()) {
    return Array.from(projectScopedTags["LM6000 EQP"])
      .map((rawTag) => {
        const scopedKey = ensureProjectDevice(rawTag, "LM6000 EQP");
        return [scopedKey, devices[scopedKey]];
      })
      .filter(([, device]) => Boolean(device));
  }
  if (getProjectFamily() === "lms100") {
    return Array.from(projectScopedTags["LMS100"])
      .map((rawTag) => {
        const scopedKey = ensureProjectDevice(rawTag, "LMS100");
        return [scopedKey, devices[scopedKey]];
      })
      .filter(([, device]) => Boolean(device));
  }
  return Object.entries(devices).filter(([tag, device]) => isDeviceInCurrentProject(tag, device));
}

function getAllestecSystemModeLabel(mode = allestecSystemMode) {
  const labels = {
    panel: "PANEL 1",
    "test-board": "PANEL 2",
    virtual: "PANEL 3",
  };
  return labels[mode] || labels.virtual;
}

function getAllestecPanelDescription(mode = allestecSystemMode) {
  const descriptions = {
    panel: "On board Panel",
    "test-board": "Test Panel",
    virtual: "Virtual",
  };
  return descriptions[mode] || descriptions.virtual;
}

function getAllestecDeviceModeLabel() {
  if (allestecSystemMode === "panel") return "On Board Panel";
  if (allestecSystemMode === "test-board") return "On Test Panel";
  return "Virtual Panel";
}

function applyAllestecSystemModeToDevices() {
  Object.entries(devices).forEach(([tag, device]) => {
    if (!isAllestecDeviceId(tag)) return;
    device.mode = getAllestecDeviceModeLabel();
    if (tag === "ALL-800") {
      device.status = "Normal";
      device.value = allestecSystemMode === "virtual" ? "Virtual panel" : "Online";
    }
  });
}

function setAllestecSystemMode(mode) {
  if (mode !== "virtual" && allestecCo2Stage !== "idle") resetAllestecCo2Discharge("ALL-800");
  allestecSystemMode = mode;
  localStorage.setItem(allestecSystemModeStorageKey, allestecSystemMode);
  applyAllestecSystemModeToDevices();
  addEvent("ALL-800", `LM6000 Allestec system mode set to ${getAllestecSystemModeLabel()}.`);
  renderAll();
}

function renderAllestecSystemModePanel() {
  const card = document.getElementById("allestec-system-mode-card");
  if (!card) return;
  const active = isAllestecProject();
  card.hidden = !active;
  if (!active) return;
  card.querySelectorAll("[data-allestec-mode]").forEach((button) => {
    button.classList.toggle("active-mode", button.dataset.allestecMode === allestecSystemMode);
  });
  const note = document.getElementById("allestec-system-mode-note");
  if (note) {
    const notes = {
      panel: "On board panel connected to conversion modules.",
      "test-board": "Temporary test panel connected to conversion modules.",
      virtual: "Complete LM6000 Allestec panel simulated in software.",
    };
    note.textContent = notes[allestecSystemMode] || notes.virtual;
  }
  const title = document.getElementById("allestec-panel-mode-title");
  if (title) title.textContent = getAllestecPanelDescription();
}

function isAllestecReleaseSource(deviceId) {
  const rawTag = getDeviceRawTag(deviceId);
  return [
    "HS-6309",
    "HS-6312",
    "HS-6308",
    "TS-6303",
    "TS-6310",
    "TS-6307",
    "TS-6314",
    "BE-6311",
  ].includes(rawTag);
}

function getAllestecActiveTurbineFlameCount() {
  return allestecTurbineFlameTags.filter((tag) => {
    const device = devices[resolveDeviceId(tag)];
    return ["Fire", "Fire Alarm", "Alarm Active", "Output Active"].includes(device?.status);
  }).length;
}

function isAllestecBlockValveClosed() {
  return ["Inhibit", "Trouble", "Fault", "Offline"].includes(devices[resolveDeviceId("ZS-6364")]?.status || devices[resolveDeviceId("CO2-BLOCK")]?.status);
}

function setAllestecCo2SolenoidState(bank, active) {
  const tags = bank === "main" ? ["SOV-6359", "SOV-6360"] : ["SOV-6361", "SOV-6362"];
  tags.forEach((tag) => setDeviceOutput(tag, active ? "Alarm Active" : "Normal", active ? `${bank.toUpperCase()} CO2 solenoid energized` : "Ready"));
}

function setAllestecNotificationOutputs(active, silenceHorns = false) {
  allestecHornTags.forEach((tag) => {
    const status = active && !silenceHorns ? "Output Active" : "Normal";
    setDeviceOutput(tag, status, active && silenceHorns ? "Silenced" : active ? "On" : "Ready");
  });
  allestecStrobeTags.forEach((tag) => setDeviceOutput(tag, active ? "Output Active" : "Normal", active ? "Flashing" : "Ready"));
  if (active && !silenceHorns) startHornSound();
  else stopHornSound();
}

function setAllestecStrobeOutputs(active) {
  allestecStrobeTags.forEach((tag) => setDeviceOutput(tag, active ? "Output Active" : "Normal", active ? "Flashing" : "Ready"));
  allestecHornTags.forEach((tag) => {
    const horn = devices[resolveDeviceId(tag)];
    if (horn?.status === "Output Active") return;
    setDeviceOutput(tag, "Normal", "Ready");
  });
  const hornActive = allestecHornTags.some((tag) => devices[resolveDeviceId(tag)]?.status === "Output Active");
  if (!hornActive) stopHornSound();
}

function setAllestecHornOutputs(active) {
  allestecHornTags.forEach((tag) => setDeviceOutput(tag, active ? "Output Active" : "Normal", active ? "On" : "Ready"));
  if (active) startHornSound();
  else stopHornSound();
}

function setAllestecGasGroupState(group, level, active) {
  const tags = group === "generator" ? allestecGeneratorGasTags : allestecTurbineGasTags;
  tags.forEach((tag) => {
    const resolved = resolveDeviceId(tag);
    const device = devices[resolved];
    if (!device) return;
    device.ioGasInputs ||= {};
    if (active) {
      device.ioGasInputs[level] = true;
      device.status = level === "High" ? "High Gas" : "Low Gas";
      device.value = level === "High" ? "25% LEL" : "15% LEL";
      return;
    }
    delete device.ioGasInputs[level];
    if (device.ioGasInputs.High) {
      device.status = "High Gas";
      device.value = "25% LEL";
      return;
    }
    if (device.ioGasInputs.Low) {
      device.status = "Low Gas";
      device.value = "15% LEL";
    }
  });
}

function setAllestecIoDrivenOutput(tags, active, status = "Output Active", activeValue = "On") {
  tags.forEach((tag) => setDeviceOutput(tag, active ? status : "Normal", active ? activeValue : "Ready"));
}

function applyAllestecIoInputs(moduleName, di) {
  const previous = allestecIoLastStates[moduleName] || {};
  const moduleLabel = moduleName === "io2" ? "I/O Module-2" : "I/O Module-1";
  const changes = [];
  ["DI11", "DI12", "DI13", "DI14", "DI15", "DI16", "DI17", "DI18"].forEach((point) => {
    const active = Boolean(di?.[point]);
    if (previous[point] !== active) changes.push(`${point} ${active ? "ON" : "OFF"}`);
    previous[point] = active;
  });
  allestecIoLastStates[moduleName] = previous;

  setAllestecCo2SolenoidState("main", previous.DI11);
  setAllestecCo2SolenoidState("reserve", previous.DI12);
  setAllestecIoDrivenOutput(allestecStrobeTags, previous.DI13, "Output Active", "Flashing");
  setAllestecIoDrivenOutput(allestecHornTags, previous.DI14, "Output Active", "On");
  const di15Alarm = !previous.DI15;
  const di16Alarm = !previous.DI16;
  const di17Alarm = !previous.DI17;
  const di18Alarm = !previous.DI18;
  setAllestecIoDrivenOutput([allestecGasOutputAlarmTags.turbineLow], di15Alarm, "Low Gas", "Low Gas Turbine");
  setAllestecIoDrivenOutput([allestecGasOutputAlarmTags.turbineHigh], di16Alarm, "High Gas", "High Gas Turbine");
  setAllestecIoDrivenOutput([allestecGasOutputAlarmTags.generatorLow], di17Alarm, "Low Gas", "Low Gas Generator");
  setAllestecIoDrivenOutput([allestecGasOutputAlarmTags.generatorHigh], di18Alarm, "High Gas", "High Gas Generator");

  if (previous.DI14) startHornSound();
  else if (!allestecHornTags.some((tag) => devices[resolveDeviceId(tag)]?.status === "Output Active")) stopHornSound();
  if (changes.length) addEvent(moduleName.toUpperCase(), `${moduleLabel}: ${changes.join(", ")}`);
  renderAll();
}

async function pollAllestecIoModule(moduleName) {
  try {
    const response = await fetch(`${allestecIoBridgeUrl}/inputs?module=${moduleName}`, { cache: "no-store" });
    const payload = await response.json();
    if (!response.ok || payload.ok === false) throw new Error(payload.error || `HTTP ${response.status}`);
    const activeInputs = Array.isArray(payload.activeInputs) && payload.activeInputs.length ? payload.activeInputs.join(", ") : "none";
    moduleConnectionStatus[moduleName] = `Connected: ${payload.host}:${payload.port}. FC${payload.functionCode}@${payload.startAddress}. Active inputs: ${activeInputs}.`;
    applyAllestecIoInputs(moduleName, payload.di);
  } catch (error) {
    moduleConnectionStatus[moduleName] = `I/O bridge not connected: ${error.message}`;
    if (selectedCommsModule === moduleName) renderModuleConnectionConfig(moduleName);
  }
}

function startAllestecIoPolling() {
  if (allestecIoPollTimer) clearInterval(allestecIoPollTimer);
  allestecIoPollTimer = setInterval(() => {
    if (!isAllestecHardwareMode()) return;
    if (allestecSystemMode === "panel") pollAllestecIoModule("io1");
    if (allestecSystemMode === "test-board") pollAllestecIoModule("io2");
  }, 1000);
}

async function startBridgesForAllestecPanel(mode = allestecSystemMode) {
  if (!["panel", "test-board"].includes(mode)) return;
  const target = mode === "panel" ? "panel1" : "panel2";
  try {
    await requestBridgeManagerStart(target);
    addEvent("COMMS", `Bridge manager started hardware services for ${target.toUpperCase()}.`);
  } catch (error) {
    addEvent("COMMS", `Bridge manager is not running. Start HMI with "START HMI AUTO BRIDGES - CLICK ME.cmd". ${error.message}`);
  }
}

function getAllestecFaultCode() {
  const mainFault = ["SOV-6359", "SOV-6360"].some((tag) => faultStatuses.has(devices[resolveDeviceId(tag)]?.status));
  if (mainFault) return { code: "F1", label: "Main solenoid trouble" };
  const reserveFault = ["SOV-6361", "SOV-6362"].some((tag) => faultStatuses.has(devices[resolveDeviceId(tag)]?.status));
  if (reserveFault) return { code: "F2", label: "Reserve solenoid trouble" };
  if (allestecCo2Stage === "idle" && ["Alarm Active", "Output Active", "Supervisory"].includes(devices[resolveDeviceId("PSHH-6348B")]?.status)) return { code: "F3", label: "PSHH-6348B active - purge required" };
  if (isAllestecBlockValveClosed()) return { code: "F4", label: "Block valve ZS-6364 closed" };
  return null;
}

function resetAllestecPanel() {
  if (allestecSystemMode === "panel") {
    resetAllestecPanel1Relays();
  }
  const pressureActive = ["Alarm Active", "Output Active", "Supervisory"].includes(devices[resolveDeviceId("PSHH-6348B")]?.status);
  if (pressureActive) {
    if (allestecCo2TimerId) clearInterval(allestecCo2TimerId);
    allestecCo2TimerId = null;
    allestecCo2Stage = "idle";
    allestecCo2CountdownSeconds = null;
    ["SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362"].forEach((tag) => setDeviceOutput(tag, "Normal", "Ready"));
  }
  getCurrentProjectDeviceEntries().forEach(([tag, device]) => {
    const rawTag = getDeviceRawTag(tag);
    if (["PSHH-6348B", "PSH-6348A", "SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362"].includes(rawTag)) return;
    const type = (device.type || "").toLowerCase();
    if (type.includes("horn")) {
      device.status = "Normal";
      device.value = "Ready";
      return;
    }
    if (type.includes("strobe") || type.includes("beacon")) {
      device.status = pressureActive ? "Output Active" : "Normal";
      device.value = pressureActive ? "Flashing" : "Ready";
      return;
    }
    device.status = "Normal";
    device.value = type.includes("gas") ? "0% LEL" : type.includes("controller") ? "Online" : "Ready";
  });
  if (!pressureActive) resetAllestecCo2Discharge("SYSTEM");
  addEvent("ALL-800", pressureActive ? "Panel reset complete. Strobes remain active because PSHH-6348B is active. Use HS-6363 purge switch." : "Panel reset complete. LM6000 Allestec returned to normal.");
  renderAll();
}

function setAllestecCo2OutputState(active, sourceTag = "SYSTEM") {
  if (!active) {
    ["SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362"].forEach((tag) => setDeviceOutput(tag, "Normal", "Ready"));
    setDeviceOutput("PSH-6348A", "Normal", "Normal Pressure");
    setDeviceOutput("PSHH-6348B", "Normal", "Normal Pressure");
    setDeviceOutput("CO2-PSH", "Normal", "Normal Pressure");
  }
  const sourceRawTag = getDeviceRawTag(sourceTag);
  if (devices[resolveDeviceId(sourceTag)] && !["CO2-PSH", "PSH-6348A", "PSHH-6348B", "SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362"].includes(sourceRawTag)) {
    const resolvedSource = resolveDeviceId(sourceTag);
    devices[resolvedSource].status = active ? devices[resolvedSource].status : "Normal";
  }
}

function startAllestecCo2Discharge(sourceTag = selectedDeviceId) {
  if (!isAllestecProject()) return;
  if (isAllestecBlockValveClosed()) {
    addEvent(sourceTag, "CO2 discharge blocked by closed/block valve.");
    renderAllestecCo2VisualState();
    return;
  }
  if (allestecCo2Stage !== "idle") return;
  allestecCo2Stage = "main-delay";
  allestecCo2CountdownSeconds = 30;
  setAllestecCo2OutputState(false, "SYSTEM");
  addEvent(sourceTag, "CO2 MAIN 30 second pre-discharge delay started.");

  if (allestecCo2TimerId) clearInterval(allestecCo2TimerId);

  allestecCo2TimerId = window.setInterval(() => {
    if (allestecCo2Stage === "main-delay") {
      allestecCo2CountdownSeconds = Math.max(0, allestecCo2CountdownSeconds - 1);
      if (allestecCo2CountdownSeconds <= 0) {
        allestecCo2Stage = "main";
        allestecCo2CountdownSeconds = 90;
        setAllestecCo2SolenoidState("main", true);
        setDeviceOutput("PSH-6348A", "Alarm Active", "CO2 Header Pressure Active");
        setDeviceOutput("PSHH-6348B", "Alarm Active", "Discharge Pressure Confirmed");
        setDeviceOutput("CO2-PSH", "Alarm Active", "Discharge Pressure Confirmed");
        addEvent("SOV-6359/SOV-6360", "CO2 MAIN bank solenoids energized after 30 seconds. Turbine and generator nozzles flowing.");
      }
    } else if (allestecCo2Stage === "main") {
      allestecCo2CountdownSeconds = Math.max(0, allestecCo2CountdownSeconds - 1);
      if (allestecCo2CountdownSeconds <= 0) {
        allestecCo2Stage = "reserve";
        allestecCo2CountdownSeconds = 90;
        setAllestecCo2SolenoidState("reserve", true);
        addEvent("SOV-6361/SOV-6362", "CO2 RESERVE bank solenoids energized after 90 seconds.");
      }
    } else if (allestecCo2Stage === "reserve") {
      allestecCo2CountdownSeconds = Math.max(0, allestecCo2CountdownSeconds - 1);
      if (allestecCo2CountdownSeconds <= 0) {
        allestecCo2Stage = "complete";
        allestecCo2CountdownSeconds = null;
        clearInterval(allestecCo2TimerId);
        allestecCo2TimerId = null;
        addEvent("CO2-SKID", "CO2 discharge simulation complete. Enclosures filled.");
      }
    }
    renderAll();
  }, 1000);

  renderAll();
}

function resetAllestecCo2Discharge(sourceTag = "HS-6363") {
  if (!isAllestecProject() && allestecCo2Stage === "idle") return;
  const wasActive = allestecCo2Stage !== "idle";
  if (allestecCo2TimerId) clearInterval(allestecCo2TimerId);
  allestecCo2TimerId = null;
  allestecCo2Stage = "idle";
  allestecCo2CountdownSeconds = null;
  setAllestecCo2OutputState(false, sourceTag);
  if (getDeviceRawTag(sourceTag) === "HS-6363") setAllestecNotificationOutputs(false);
  if (wasActive || sourceTag !== "SYSTEM") addEvent(sourceTag, "CO2 discharge simulation reset / purge complete.");
  renderAll();
}

function renderAllestecCo2CountdownDisplay() {
  const box = document.getElementById("allestec-co2-countdown-box");
  const value = document.getElementById("allestec-co2-countdown");
  const label = document.getElementById("allestec-co2-countdown-label");
  if (!box || !value || !label) return;

  box.classList.toggle("countdown-active", allestecCo2Stage === "main-delay" || allestecCo2Stage === "main" || allestecCo2Stage === "reserve");
  box.classList.toggle("countdown-released", allestecCo2Stage === "complete");
  box.classList.toggle("countdown-blocked", isAllestecBlockValveClosed());

  const faultCode = getAllestecFaultCode();
  if (faultCode) {
    value.textContent = faultCode.code;
    label.textContent = faultCode.label;
    return;
  }

  if (allestecCo2Stage === "main-delay") {
    value.textContent = `00:${String(allestecCo2CountdownSeconds || 0).padStart(2, "0")}`;
    label.textContent = "MAIN pre-discharge delay";
    return;
  }

  if (allestecCo2Stage === "main") {
    const minutes = Math.floor((allestecCo2CountdownSeconds || 0) / 60);
    const seconds = (allestecCo2CountdownSeconds || 0) % 60;
    value.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    label.textContent = "MAIN bank discharging";
    return;
  }

  if (allestecCo2Stage === "reserve") {
    const minutes = Math.floor((allestecCo2CountdownSeconds || 0) / 60);
    const seconds = (allestecCo2CountdownSeconds || 0) % 60;
    value.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    label.textContent = "Reserve bank discharging";
    return;
  }

  if (allestecCo2Stage === "complete") {
    value.textContent = "DISCHARGED";
    label.textContent = "CO2 enclosure fill complete";
    return;
  }

  if (isAllestecBlockValveClosed()) {
    value.textContent = "BLOCKED";
    label.textContent = "Block valve / trouble active";
    return;
  }

  value.textContent = "READY";
  label.textContent = "MAIN / RESERVE";
}

function renderAllestecCo2VisualState() {
  const view = document.getElementById("lm6000-allestec-view");
  if (!view) return;
  const blockClosed = isAllestecBlockValveClosed();
  view.classList.toggle("co2-flow-blocked", blockClosed);
  view.classList.toggle("co2-pre-discharge", allestecCo2Stage === "main-delay");
  view.classList.toggle("co2-main-discharging", allestecCo2Stage === "main");
  view.classList.toggle("co2-main-empty", allestecCo2Stage === "reserve" || allestecCo2Stage === "complete");
  view.classList.toggle("co2-reserve-discharging", allestecCo2Stage === "reserve");
  view.classList.toggle("co2-reserve-empty", allestecCo2Stage === "complete");
}

async function openSelectedS3Profile() {
  const profile = getRealTestProfile(selectedDeviceId);
  if (!profile.path) {
    addEvent(selectedDeviceId, `${selectedDeviceId} does not require an S3 profile.`);
    renderAll();
    return;
  }

  if (window.eqpApp?.openPath) {
    try {
      const result = await window.eqpApp.openPath(profile.path);
      if (result) {
        addEvent(selectedDeviceId, `S3 profile could not be opened automatically: ${profile.path}. ${result}`);
      } else {
        addEvent(selectedDeviceId, `Opening S3 profile: ${profile.path}.`);
      }
    } catch (error) {
      addEvent(selectedDeviceId, `S3 profile open command failed: ${profile.path}.`);
    }
  } else {
    addEvent(selectedDeviceId, `Browser prototype: open this S3 profile manually: ${profile.path}.`);
  }
  renderAll();
}

function confirmRealDeviceReady() {
  selectedDeviceId = resolveDeviceId(selectedDeviceId);
  const device = devices[selectedDeviceId];
  if (!device || device.mode !== "Real") return;
  device.status = "Normal";
  device.value = getNormalDeviceValue(selectedDeviceId);
  addEvent(selectedDeviceId, `${getDeviceDisplayTag(selectedDeviceId)} EQP/device ready confirmed for REAL test mode.`);
  if (shouldEvaluateS3Logic(selectedDeviceId)) applyS3Logic(selectedDeviceId);
  renderAll();
}

function applyFunction(action) {
  selectedDeviceId = resolveDeviceId(selectedDeviceId);
  const device = devices[selectedDeviceId];
  if (!device) return;
  const type = device.type.toLowerCase();
  const rawTag = getDeviceRawTag(selectedDeviceId);
  const irStack = rawTag === "AE-3029" || rawTag === "AE-3030" || rawTag === "LM6-AE-3029" || rawTag === "LM6-AE-3030";

  if (rawTag === "EQP-001" || rawTag === "EQP-FPP" || rawTag === "FIRE-PANEL") {
    if (action === "Acknowledge") {
      acknowledgeAllAlarms();
      return;
    }
    if (action === "Silence") {
      silenceAllOutputs();
      return;
    }
    if (action === "Reset") {
      resetAllDevices();
      return;
    }
  }

  if (rawTag === "ALL-800") {
    if (action === "Acknowledge") {
      acknowledgeAllAlarms();
      return;
    }
    if (action === "Silence") {
      silenceAllOutputs();
      return;
    }
    if (action === "Reset") {
      resetAllDevices();
      return;
    }
  }

  if (device.mode === "Real") {
    addEvent(selectedDeviceId, `${getDeviceDisplayTag(selectedDeviceId)} is in Real mode. Manual simulation command ignored.`);
    return;
  }

  if (isAllestecProject() && rawTag === "ZS-6364" && action === "Toggle Block Valve") {
    const closed = ["Inhibit", "Trouble", "Fault", "Offline"].includes(device.status);
    setDeviceState(selectedDeviceId, closed ? "Normal" : "Inhibit", closed ? "Open / Release Enabled" : "Closed / CO2 Release Blocked");
    return;
  }

  if (isLm6000EqpProject() && rawTag === "ZS-6364" && (action === "Input Active" || action === "Inhibit")) {
    const closed = ["Inhibit", "Trouble", "Fault", "Offline"].includes(device.status);
    setDeviceState(selectedDeviceId, closed ? "Normal" : "Inhibit", closed ? "Open / Release Enabled" : "Closed / CO2 Release Blocked");
    return;
  }

  if (isAllestecProject() && rawTag === "HS-6363" && action === "Input Active") {
    resetAllestecCo2Discharge("SYSTEM");
    device.status = "Supervisory";
    device.value = "Purge Switch Active";
    addEvent(selectedDeviceId, "HS-6363 purge switch active. CO2 pressure/reset circuit cleared.");
    renderAll();
    return;
  }

  if (isLm6000EqpProject() && rawTag === "HS-6363" && action === "Input Active") {
    resetLm6000EqpCo2(selectedDeviceId);
    device.status = "Supervisory";
    device.value = "Purge Switch Active";
    addEvent(selectedDeviceId, "HS-6363 purge switch active. LM6000 EQP CO2 pressure/reset circuit cleared.");
    renderAll();
    return;
  }

  if (action === "Acknowledge") {
    if (rawTag === "HS-3040" || type.includes("horn acknowledge")) {
      setDeviceState(selectedDeviceId, "Supervisory", "Horn Acknowledge");
      silenceAllOutputs();
      return;
    }
    addEvent(selectedDeviceId, `${getDeviceDisplayTag(selectedDeviceId)} alarm acknowledged by Administrator.`);
    return;
  }
  if (isAllestecProject() && ["SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362", "HS-6363"].includes(rawTag) && (action === "Output Off" || action === "Reset" || action === "Normal")) {
    resetAllestecCo2Discharge(selectedDeviceId);
    return;
  }
  if (isLm6000EqpProject() && ["SOV-6359", "SOV-6360", "SOV-6361", "SOV-6362", "HS-6363"].includes(rawTag) && (action === "Output Off" || action === "Reset" || action === "Normal")) {
    resetLm6000EqpCo2(selectedDeviceId);
    return;
  }
  if (action === "Reset" || action === "Normal") {
    resetDevice(selectedDeviceId);
    return;
  }
  if (action === "Silence") {
    setDeviceState(selectedDeviceId, type.includes("controller") ? "Normal" : device.status, "Silenced");
    return;
  }
  if (isAllestecHardwareMode()) {
    addEvent(selectedDeviceId, `${getDeviceDisplayTag(selectedDeviceId)} is assigned to ${getAllestecSystemModeLabel()}. Command must come from the real panel/module I/O, not virtual simulation.`);
    renderAll();
    return;
  }
  if (action === "Low Gas") {
    setDeviceState(selectedDeviceId, "Low Gas", s3Logic.gasSetpoints?.[rawTag]?.low || device.highAlarm || `${irStack ? 5 : 15}% LEL`);
    return;
  }
  if (action === "High Gas") {
    setDeviceState(selectedDeviceId, "High Gas", s3Logic.gasSetpoints?.[rawTag]?.high || device.highHighAlarm || `${irStack ? 10 : 25}% LEL`);
    return;
  }
  if (action === "Fire") {
    setDeviceState(selectedDeviceId, "Fire Alarm", "Active");
    return;
  }
  if (action === "Fault" || action === "LON Fault" || action === "Supervisory" || action === "Inhibit") {
    setDeviceState(selectedDeviceId, action, "Active");
    return;
  }
  if (action === "Offline") {
    setDeviceState(selectedDeviceId, "Offline", "No Communication");
    return;
  }
  if (action === "Output On" || action === "Virtual Output" || action === "Timer" || action === "Test") {
    setDeviceState(selectedDeviceId, action === "Test" ? "Output Active" : "Alarm Active", action === "Timer" ? "00:30" : "On");
    return;
  }
  if (action === "Output Off" || action === "Abort") {
    resetDevice(selectedDeviceId);
    return;
  }
  if (action === "Input Active") {
    if (rawTag === "HS-3081") {
      setDeviceState(selectedDeviceId, "Inhibit", "Suppression Inhibited");
      return;
    }
    setDeviceState(selectedDeviceId, "Alarm Active", "Input Active");
  }
}

function getAllestecDeviceStatus(rawTag) {
  const deviceId = resolveDeviceId(rawTag, "LM6000 ALLESTEC");
  return devices[deviceId]?.status || "Normal";
}

function isAnyAllestecStatusActive(tags, statuses) {
  return tags.some((tag) => statuses.includes(getAllestecDeviceStatus(tag)));
}

function isAllestecOutputAlarmActive(tag) {
  return ["Output Active", "Low Gas", "High Gas"].includes(devices[resolveDeviceId(tag)]?.status);
}

function getAllestecBannerItems(active) {
  const outputLikeTags = new Set([
    ...allestecHornTags,
    ...allestecStrobeTags,
    ...Object.values(allestecGasOutputAlarmTags),
    "SOV-6359",
    "SOV-6360",
    "SOV-6361",
    "SOV-6362",
    "PSH-6348A",
    "PSHH-6348B",
    "ZS-6364",
    "CO2-BLOCK",
    "CO2-PSH",
  ]);
  const initiating = active.find(([tag]) => !outputLikeTags.has(getDeviceRawTag(tag)));
  const items = [];

  if (initiating) {
    const [tag, device] = initiating;
    items.push({
      className: getSeverityClass(device.status),
      text: `${device.status.toUpperCase()}: ${getDeviceDisplayTag(tag)} ${device.value}`,
    });
  }

  const fireShutdownSources = ["HS-6308", "HS-6309", "HS-6312", "TS-6303", "TS-6310", "TS-6307", "TS-6314", "BE-6311"];
  if (isAnyAllestecStatusActive(fireShutdownSources, ["Fire", "Fire Alarm", "Alarm Active"]) || getAllestecActiveTurbineFlameCount() >= 2) {
    items.push({ className: "red", text: "FIRE AND GAS MONITOR SHUTDOWN" });
  }
  const turbineOutputLow = isAllestecOutputAlarmActive(allestecGasOutputAlarmTags.turbineLow);
  const turbineOutputHigh = isAllestecOutputAlarmActive(allestecGasOutputAlarmTags.turbineHigh);
  const generatorOutputLow = isAllestecOutputAlarmActive(allestecGasOutputAlarmTags.generatorLow);
  const generatorOutputHigh = isAllestecOutputAlarmActive(allestecGasOutputAlarmTags.generatorHigh);
  if (isAnyAllestecStatusActive(allestecTurbineGasTags, ["Low Gas", "High Gas"]) || turbineOutputLow || turbineOutputHigh) {
    items.push({ className: "orange", text: "GAS ALARM TURBINE" });
  }
  if (isAnyAllestecStatusActive(allestecGeneratorGasTags, ["Low Gas", "High Gas"]) || generatorOutputLow || generatorOutputHigh) {
    items.push({ className: "orange", text: "GAS ALARM GEN" });
  }
  if (isAnyAllestecStatusActive([...allestecTurbineGasTags, ...allestecGeneratorGasTags], ["High Gas"]) || turbineOutputHigh || generatorOutputHigh) {
    items.push({ className: "red", text: "GAS SHUTDOWN" });
  }

  return items;
}

function renderAlarmBanner() {
  const active = getCurrentProjectDeviceEntries().filter(([, device]) => alarmStatuses.has(device.status));
  const ticker = document.getElementById("alarm-ticker");
  const bannerItems = isAllestecProject()
    ? getAllestecBannerItems(active)
    : active.map(([tag, device]) => ({
        className: getSeverityClass(device.status),
        text: `${device.status.toUpperCase()}: ${getDeviceDisplayTag(tag)} ${device.value}`,
      }));

  ticker.innerHTML = bannerItems.length
    ? bannerItems.map((item) => `<span class="alarm-item ${item.className}">${item.text}</span>`).join("")
    : '<span class="alarm-item green">NO ACTIVE ALARMS</span>';

  const fire = active.filter(([, device]) => device.status === "Fire Alarm").length;
  const gas = active.filter(([, device]) => device.status === "Low Gas" || device.status === "High Gas").length;
  const trouble = active.filter(([, device]) => ["Trouble", "Fault", "Offline", "LON Fault"].includes(device.status)).length;
  const supervisory = active.filter(([, device]) => ["Supervisory", "Inhibit"].includes(device.status)).length;
  document.getElementById("alarm-counts").innerHTML = `
    <span class="count ${fire ? "red" : "green"}">${fire} FIRE</span>
    <span class="count ${gas ? "red" : "green"}">${gas} GAS</span>
    <span class="count ${trouble ? "orange" : "green"}">${trouble} TRBL</span>
    <span class="count ${supervisory ? "yellow" : "green"}">${supervisory} SUPV</span>
  `;
}

function renderAlarmSummary() {
  const table = document.getElementById("alarm-summary-table");
  const rows = getCurrentProjectDeviceEntries()
    .filter(([, device]) => alarmStatuses.has(device.status))
    .map(([tag, device]) => {
      const displayTag = getDeviceDisplayTag(tag);
      const lastEvent = eventHistory.find((event) => event.deviceId === tag || event.tag === displayTag);
      return `<div>${lastEvent?.time || "--:--:--"}</div><div>${displayTag}</div><div class="${getTextClass(device.status)}">${device.status}</div><div>Active</div><div>${device.mode}</div>`;
    })
    .join("");
  table.innerHTML = `<div class="table-header">TIME</div><div class="table-header">TAG</div><div class="table-header">TYPE</div><div class="table-header">STATUS</div><div class="table-header">MODE</div>${rows || "<div>--</div><div>System</div><div>Normal</div><div>No Active Alarms</div><div>Virtual</div>"}`;
}

function renderEvents() {
  const list = document.getElementById("event-history-list");
  list.innerHTML = eventHistory.map((event) => `<div><span>${event.time}</span> ${event.message}</div>`).join("");
}

function setStatusText(elementId, text, className) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.textContent = text;
  element.className = className;
}

function renderSystemStatus() {
  ensureControlDevices();
  const activeAlarms = getCurrentProjectDeviceEntries().some(([, device]) => ["Low Gas", "High Gas", "Fire Alarm", "Alarm Active", "Output Active"].includes(device.status));
  const troubleActive = hasTroubleCondition();
  const lotoActive = isLotoActive();
  const panelStatus = releaseBlockedByInhibit ? "INHIBITED" : aerosolReleased ? "RELEASE ACTIVE" : activeAlarms ? "ALARM" : troubleActive ? "TROUBLE" : lotoActive ? "INHIBIT" : "NORMAL";
  const panelClass = panelStatus === "NORMAL" ? "ok" : panelStatus === "TROUBLE" || panelStatus === "INHIBIT" || panelStatus === "INHIBITED" ? "warn" : "red-text";

  setStatusText("panel-status", panelStatus, panelClass);
  if (isAllestecProject()) {
    const rows = document.querySelectorAll(".left-panel .metric-row");
    const generalAlarm = activeAlarms;
    const systemAlarm = getCurrentProjectDeviceEntries().some(([, device]) => ["Fire Alarm", "Alarm Active", "Output Active"].includes(device.status));
    if (rows[1]) rows[1].innerHTML = `<span>General Alarm</span><b class="${generalAlarm ? "red-text" : "ok"}" id="loop-status">${generalAlarm ? "ACTIVE" : "NORMAL"}</b>`;
    if (rows[2]) rows[2].innerHTML = `<span>System Alarm</span><b class="${systemAlarm ? "red-text" : "ok"}" id="modbus-status">${systemAlarm ? "ACTIVE" : "NORMAL"}</b>`;
    if (rows[5]) rows[5].innerHTML = `<span>System Trouble</span><b class="${troubleActive ? "warn" : "ok"}" id="led-tester-status">${troubleActive ? "ACTIVE" : "NORMAL"}</b>`;
  } else {
    const rows = document.querySelectorAll(".left-panel .metric-row");
    if (rows[1]) rows[1].innerHTML = `<span>Loop 1</span><b class="ok" id="loop-status">ONLINE</b>`;
    if (rows[2]) rows[2].innerHTML = `<span>Modbus RTU</span><b class="standby" id="modbus-status">STANDBY</b>`;
    if (rows[5]) rows[5].innerHTML = `<span>LED Tester</span><b class="ok" id="led-tester-status">DE-ENERGIZED</b>`;
    setStatusText("led-tester-status", devices["LED-RELEASE-TESTER"]?.status === "Output Active" ? "ENERGIZED" : "DE-ENERGIZED", devices["LED-RELEASE-TESTER"]?.status === "Output Active" ? "red-text" : "ok");
  }
  setStatusText("inhibit-status", lotoActive ? "SUPPRESSION INHIBITED" : "CLEAR", lotoActive ? "warn" : "ok");
  setStatusText("release-command-status", releaseBlockedByInhibit ? "BLOCKED" : aerosolReleased ? "COMMAND ACTIVE" : aerosolCountdownSeconds !== null ? "COUNTDOWN" : "READY", releaseBlockedByInhibit ? "warn" : aerosolReleased || aerosolCountdownSeconds !== null ? "red-text" : "ok");

  const relayGrid = document.getElementById("relay-status-grid");
  if (relayGrid) {
    if (isAllestecProject()) {
      const isStatus = (tags, statuses) => tags.some((tag) => statuses.includes(devices[resolveDeviceId(tag)]?.status));
      const relays = [
        ["R1", "General Alarm", activeAlarms],
        ["R2", "System Trouble", troubleActive],
        ["R3", "Low Gas Alarm Turbine", isAllestecOutputAlarmActive(allestecGasOutputAlarmTags.turbineLow)],
        ["R4", "High Gas Alarm Turbine", isAllestecOutputAlarmActive(allestecGasOutputAlarmTags.turbineHigh)],
        ["R5", "Low Gas Alarm Generator", isAllestecOutputAlarmActive(allestecGasOutputAlarmTags.generatorLow)],
        ["R6", "High Gas Alarm Generator", isAllestecOutputAlarmActive(allestecGasOutputAlarmTags.generatorHigh)],
      ];
      relayGrid.innerHTML = relays
        .map(([tag, label, active]) => `<div class="relay-row ${active ? "active" : ""}"><b>${tag}</b><span>${label}</span><em class="relay-state">${active ? "ACTIVE" : "NORMAL"}</em></div>`)
        .join("");
      return;
    }
    relayGrid.innerHTML = Object.entries(relayOutputs)
      .map(([relayKey, relay], index) => {
        const device = devices[relay.tag];
        const active = device?.status === "Output Active" || device?.status === "Alarm Active";
        const trouble = device?.status === "Inhibit" || device?.status === "Fault";
        return `<div class="relay-row ${active ? "active" : ""} ${trouble ? "trouble" : ""}"><b>R${index + 1}</b><span>${relay.label}</span><em class="relay-state">${active ? "ACTIVE" : trouble ? "BLOCK" : "NORMAL"}</em></div>`;
      })
      .join("");
  }
}

function renderDeviceLibrary() {
  const table = document.getElementById("device-library-table");
  const rows = getCurrentProjectDeviceEntries()
    .map(([tag, device]) => {
      const selectedClass = tag === selectedDeviceId ? " selected-row-cell" : "";
      const displayTag = getDeviceDisplayTag(tag);
      return [
        `<div class="device-cell${selectedClass}" data-device="${tag}">${displayTag}</div>`,
        `<div class="device-cell${selectedClass}" data-device="${tag}">${device.type}</div>`,
        `<div class="device-cell${selectedClass}" data-device="${tag}">${device.area}</div>`,
        `<div class="device-cell${selectedClass}" data-device="${tag}">${device.mode}</div>`,
        `<div class="device-cell${selectedClass} ${getTextClass(device.status)}" data-device="${tag}">${device.status}</div>`
      ].join("");
    })
    .join("");
  table.innerHTML = `<div class="table-header">TAG</div><div class="table-header">TYPE</div><div class="table-header">AREA</div><div class="table-header">MODE</div><div class="table-header">STATUS</div>${rows}`;
  renderDeviceEditor();
}

function setEditorMessage(message, isWarning = false) {
  const messageNode = document.getElementById("device-editor-message");
  if (!messageNode) return;
  messageNode.textContent = message;
  messageNode.classList.toggle("yellow-text", isWarning);
}

function renderDeviceEditor() {
  const device = devices[selectedDeviceId];
  if (!device || !document.getElementById("editor-tag")) return;
  document.getElementById("editor-tag").value = getDeviceDisplayTag(selectedDeviceId);
  document.getElementById("editor-type").value = device.type || "";
  document.getElementById("editor-address").value = device.address || "";
  document.getElementById("editor-area").value = device.area || "";
  document.getElementById("editor-mode").value = device.mode || "Virtual";
  document.getElementById("editor-status").value = device.status || "Normal";
  document.getElementById("editor-value").value = device.value || "";
  document.getElementById("editor-high").value = device.highAlarm || "";
  document.getElementById("editor-high-high").value = device.highHighAlarm || "";
  setEditorMessage(`${getDeviceDisplayTag(selectedDeviceId)} ready for editing.`);
  updateAccessState();
}

function applyDeviceEditor() {
  if (!requireAdmin("edit device configuration")) return;
  const tag = selectedDeviceId;
  if (!devices[tag]) return;
  const displayTag = document.getElementById("editor-tag").value.trim() || getDeviceDisplayTag(tag);
  devices[tag] = {
    ...devices[tag],
    displayTag,
    type: document.getElementById("editor-type").value.trim(),
    address: document.getElementById("editor-address").value.trim(),
    area: document.getElementById("editor-area").value.trim(),
    mode: document.getElementById("editor-mode").value,
    status: document.getElementById("editor-status").value,
    value: document.getElementById("editor-value").value.trim(),
  };

  const highAlarm = document.getElementById("editor-high").value.trim();
  const highHighAlarm = document.getElementById("editor-high-high").value.trim();
  if (highAlarm) devices[tag].highAlarm = highAlarm;
  else delete devices[tag].highAlarm;
  if (highHighAlarm) devices[tag].highHighAlarm = highHighAlarm;
  else delete devices[tag].highHighAlarm;

  addEvent(tag, `${displayTag} device configuration updated by ENGINEER.`);
  renderAll();
  setEditorMessage(`${displayTag} updated in HMI memory.`);
}

async function saveDeviceDatabase() {
  if (!requireAdmin("save device database")) return;
  const allestecSaved = getAllestecLayoutState();
  document.querySelectorAll("#lm6000-allestec-view .device-badge[data-device]").forEach((element) => {
    allestecSaved[element.dataset.device] = getAllestecDeviceTransform(element);
  });
  saveAllestecLayoutState(allestecSaved);
  localStorage.setItem("eqp-last-project-save", new Date().toISOString());
  const payload = {
    project: projectConfig,
    devices,
  };

  if (!window.eqpApp?.saveDevices) {
    addEvent("PROJECT", "Project saved to browser storage. Electron file save will be used in the installer build.");
    setEditorMessage("Project saved to browser storage. Use Electron later for JSON file save.", true);
    return;
  }

  try {
    await window.eqpApp.saveDevices(payload);
    addEvent("EQP-001", "Device database saved to config/devices.json.");
    setEditorMessage("devices.json saved.");
  } catch (error) {
    setEditorMessage("Unable to save devices.json.", true);
  }
}

function updateBadges() {
  document.querySelectorAll(".device-badge, .allestec-html-device").forEach((badge) => {
    const resolvedId = resolveDeviceId(badge.dataset.device);
    const device = devices[resolvedId];
    if (!device) return;
    const type = (device.type || "").toLowerCase();
    badge.classList.remove("normal-badge", "lowgas-badge", "alarm-badge", "trouble-badge", "supervisory-badge", "offline-badge", "strobe-flash");
    badge.classList.add(`${getDeviceTier(device)}-badge`);
    if ((type.includes("strobe") || type.includes("beacon")) && device.status === "Output Active" && device.value !== "Silenced") {
      badge.classList.add("strobe-flash");
    }

    const value = badge.querySelector(".badge-value");
    if (value) value.textContent = device.value;
  });

  document.querySelectorAll(".topology-node, .controller-node").forEach((node) => {
    const resolvedId = resolveDeviceId(node.dataset.device);
    const device = devices[resolvedId];
    if (!device) return;
    node.classList.remove("normal", "lowgas", "alarm", "trouble", "supervisory", "offline", "active", "selected-topology-node");
    node.classList.add(getDeviceTier(device));
    node.classList.toggle("selected-topology-node", resolvedId === selectedDeviceId);
  });

  document.querySelectorAll(".wired-point").forEach((point) => {
    if (point.classList.contains("spare")) return;
    const pointDevices = getGroupedDevices(point);
    if (!pointDevices.length) return;
    point.classList.remove("normal", "alarm", "trouble", "supervisory", "offline", "selected-wired-point");
    const tierRank = { alarm: 4, trouble: 3, supervisory: 2, offline: 1, normal: 0 };
    const worstTier = pointDevices.reduce((worst, device) => {
      const tier = getDeviceTier(device);
      return tierRank[tier] > tierRank[worst] ? tier : worst;
    }, "normal");
    point.classList.add(worstTier);
    const rawSelected = getDeviceRawTag(selectedDeviceId);
    point.classList.toggle("selected-wired-point", (point.dataset.devices || point.dataset.device || "").includes(rawSelected));
  });
}

function renderAll() {
  updateProjectHeading();
  updateOperatorTestButton();
  renderTrainingOffset();
  renderTrainingTransport();
  renderSelectedDevice();
  renderAlarmBanner();
  renderAlarmSummary();
  renderEvents();
  renderSystemStatus();
  renderDeviceLibrary();
  updateBadges();
  updateAerosolCountdownDisplay();
  renderAllestecCo2VisualState();
  renderAllestecCo2CountdownDisplay();
  updateLm6000EqpCo2Display();
  updateHornSound();
  if (!allestecDragState && !allestecGraphicDragState) {
    applyAllProjectDeviceLayouts();
    applyAllestecGraphicLayoutState();
  }
}

function renderStartMenu() {
  const menu = document.getElementById("family-tabs");
  if (!selectedFamily) {
    document.getElementById("selected-project-label").textContent = "Select turbine family";
    menu.innerHTML = turbineFamilies
      .map((family) => `<button class="family-tab" type="button" data-family="${family.id}">${family.label}</button>`)
      .join("");
    return;
  }

  const familyLabel = turbineFamilies.find((family) => family.id === selectedFamily)?.label || selectedFamily.toUpperCase();
  document.getElementById("selected-project-label").textContent = `${familyLabel} models`;
  menu.innerHTML = [
    '<button class="family-tab back-button" type="button" data-action="back">BACK</button>',
    ...turbinePackages[selectedFamily].map((name) => `<button class="family-tab" type="button" data-project="${name}">${name}</button>`),
  ].join("");
}

function getProjectDisplayName() {
  if (selectedProject) return selectedProject;
  return projectConfig.name || "TM2500 / LM2500 XPRESS";
}

function normalizeProjectName(projectName = selectedProject) {
  return String(projectName || "").trim().toUpperCase();
}

function getProjectFamily(projectName = selectedProject) {
  const name = normalizeProjectName(projectName);
  if (name.startsWith("LM6000")) return "lm6000";
  if (name.startsWith("LMS100")) return "lms100";
  return "tm2500";
}

function isAllestecProjectName(projectName = selectedProject) {
  return normalizeProjectName(projectName) === "LM6000 ALLESTEC";
}

const projectViewRoutes = {
  tm2500: {
    package: "package",
    topology: "topology",
    drawing: "drawing",
  },
  lm6000Allestec: {
    package: "lm6000-allestec",
    topology: "allestec-topology",
    drawing: "allestec-drawing",
  },
  lm6000Eqp: {
    package: "lm6000",
    topology: "lm6000-eqp-topology",
    drawing: "lm6000-eqp-drawing",
  },
  lms100: {
    package: "lms100",
    topology: "project-placeholder",
    drawing: "project-placeholder",
  },
  blank: {
    package: "project-placeholder",
    topology: "project-placeholder",
    drawing: "project-placeholder",
    alarms: "project-placeholder",
    events: "project-placeholder",
    devices: "project-placeholder",
    comms: "project-placeholder",
    reports: "project-placeholder",
    admin: "project-placeholder",
  },
};

function isDevelopedProject(projectName = selectedProject) {
  const name = normalizeProjectName(projectName);
  return name === "TM2500 XPRESS" || name === "LM6000 EQP" || name === "LM6000 ALLESTEC" || name.startsWith("LMS100");
}

function getProjectRouteKey(projectName = selectedProject) {
  const name = normalizeProjectName(projectName);
  if (!isDevelopedProject(projectName)) return "blank";
  if (name === "TM2500 XPRESS") return "tm2500";
  if (name === "LM6000 ALLESTEC") return "lm6000Allestec";
  if (name === "LM6000 EQP") return "lm6000Eqp";
  if (name.startsWith("LMS100")) return "lms100";
  return "blank";
}

function getTargetViewName(viewName, projectName = selectedProject) {
  const route = projectViewRoutes[getProjectRouteKey(projectName)] || projectViewRoutes.tm2500;
  return route[viewName] || viewName;
}

function getDefaultDeviceForProject(projectName = selectedProject) {
  const name = normalizeProjectName(projectName);
  if (name === "LM6000 ALLESTEC") return "ALL-800";
  if (name === "LM6000 EQP") return ensureProjectDevice("EQP-FPP", "LM6000 EQP");
  if (name.startsWith("LMS100")) return ensureProjectDevice("LMS100-PANEL", "LMS100");
  return "EQP-001";
}

function updateProjectHeading() {
  const heading = document.getElementById("hmi-project-heading");
  const systemId = document.querySelector(".system-id");
  if (!heading) return;

  const projectName = getProjectDisplayName();
  heading.textContent = `${projectName.toUpperCase()} FIRE & GAS OVERVIEW`;
  const family = getProjectFamily(projectName);
  if (systemId) {
    systemId.textContent = family === "lm6000" ? "LM6000 TEST CELL" : family === "lms100" ? "LMS100 TEST CELL" : "EQP TEST CELL";
  }
}

function renderProjectPlaceholder() {
  const title = document.getElementById("placeholder-project-title");
  const note = document.getElementById("placeholder-project-note");
  if (!title || !note) return;
  const projectName = getProjectDisplayName();
  title.textContent = `${projectName.toUpperCase()} FIRE & GAS SYSTEM`;
  note.textContent = `${projectName} does not have a configured HMI, topology, device list, communications map, or logic yet. It is intentionally blank so it cannot inherit TM2500 XPRESS, LM6000 EQP, or LM6000 ALLESTEC data by mistake.`;
}

function updateOperatorTestButton() {
  const button = document.getElementById("operator-test-mode");
  if (!button) return;
  button.classList.toggle("active", operatorTestMode);
  button.classList.toggle("stop-mode", trainingAutoTestActive);
  button.textContent = trainingAutoTestActive ? "STOP AUTO TEST" : "OPERATOR TEST MODE";
}

function renderSlide() {
  if (!slideshow.slides.length) return;
  if (slideIndex >= slideshow.slides.length) slideIndex = 0;
  const slide = slideshow.slides[slideIndex];
  if (!slide) return;
  document.getElementById("start-slide-image").src = slide.src;
  document.getElementById("start-slide-title").textContent = slide.title || "Project Reference";
  document.getElementById("start-slide-caption").textContent = slide.caption || "";
}

function getSlideTitleFromSrc(src) {
  const filename = String(src || "").split("/").pop() || "Project Reference";
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase()) || "Project Reference";
}

function normalizeSlide(slide) {
  if (typeof slide === "string") {
    return { src: slide, title: getSlideTitleFromSrc(slide), caption: "Project reference image" };
  }
  return {
    src: slide?.src || "",
    title: slide?.title || getSlideTitleFromSrc(slide?.src),
    caption: slide?.caption || "",
  };
}

function canLoadSlideImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(false);
      return;
    }
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

async function getLoadableSlides(slides) {
  const normalizedSlides = (Array.isArray(slides) ? slides : []).map(normalizeSlide).filter((slide) => slide.src);
  const results = await Promise.all(normalizedSlides.map(async (slide) => ((await canLoadSlideImage(slide.src)) ? slide : null)));
  return results.filter(Boolean);
}

async function loadSlideshow() {
  let loadedSlideshow = null;
  try {
    if (window.eqpApp?.listSlideshowImages) {
      const slides = await window.eqpApp.listSlideshowImages();
      if (slides.length) {
        loadedSlideshow = { intervalMs: 5000, slides };
      }
    }

    if (!loadedSlideshow) {
      const response = await fetch("./config/slideshow.json");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const config = await response.json();
      if (Array.isArray(config.slides) && config.slides.length) loadedSlideshow = config;
    }
  } catch (error) {
    // Keep the built-in fallback list so file:// prototypes still rotate.
  }

  const candidateSlideshow = loadedSlideshow || slideshow;
  const validSlides = await getLoadableSlides(candidateSlideshow.slides);
  if (validSlides.length) {
    slideshow = {
      intervalMs: candidateSlideshow.intervalMs || 5000,
      slides: validSlides,
    };
  }
  slideIndex = 0;
  renderSlide();
  if (slideshow.slides.length > 1) window.setInterval(() => {
    slideIndex = (slideIndex + 1) % slideshow.slides.length;
    renderSlide();
  }, slideshow.intervalMs || 5000);
}

async function loadTrainingScript() {
  try {
    const response = await fetch("./config/training-script.txt");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    trainingScriptLines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    addEvent("TRAINING", `Loaded automatic training script with ${trainingScriptLines.length} lines.`);
  } catch (error) {
    trainingScriptLines = [];
    addEvent("TRAINING", "Automatic training script not loaded.");
  }
}

async function loadTrainingTimeline() {
  try {
    const response = await fetch("./config/training-timeline.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const timeline = await response.json();
    trainingTimeline = Array.isArray(timeline)
      ? timeline
          .map((step, index) => ({ ...step, id: step.id || `step-${index}`, time: Number(step.time) || 0 }))
          .sort((a, b) => a.time - b.time)
      : [];
    addEvent("TRAINING", `Loaded training timeline with ${trainingTimeline.length} synchronized steps.`);
  } catch (error) {
    trainingTimeline = defaultTrainingTimeline
      .map((step, index) => ({ ...step, id: step.id || `default-step-${index}`, time: Number(step.time) || 0 }))
      .sort((a, b) => a.time - b.time);
    addEvent("TRAINING", `Training timeline file not loaded. Using embedded fallback with ${trainingTimeline.length} steps.`);
  }
}

function openProject(projectName) {
  selectedProject = projectName || "TM2500 XPRESS";
  selectedFamily = getProjectFamily(selectedProject);
  if (typeof setAllestecMoveMode === "function") setAllestecMoveMode(false);
  openHmiFromStart();
}

function openHmiFromStart() {
  document.getElementById("start-window").classList.add("hmi-hidden");
  document.getElementById("hmi-shell").classList.remove("hmi-hidden");
  if (!selectedProject) selectedProject = "TM2500 XPRESS";
  selectedFamily = getProjectFamily(selectedProject);
  viewHistory.length = 0;
  currentViewName = "package";
  selectedDeviceId = getDefaultDeviceForProject();
  if (isAllestecProject()) applyAllestecSystemModeToDevices();
  updateProjectHeading();
  addEvent(selectedDeviceId, `${selectedProject} project opened.`);
  showView("package", false);
  renderAll();
}

function showStartWindow() {
  document.getElementById("hmi-shell").classList.add("hmi-hidden");
  document.getElementById("start-window").classList.remove("hmi-hidden");
  selectedFamily = "";
  selectedProject = "";
  viewHistory.length = 0;
  currentViewName = "package";
  renderStartMenu();
}

function renderDeviceInfoWindow(tag, tagGroup = [tag]) {
  const device = devices[tag];
  if (!device) return;
  const groupDevices = tagGroup.map((groupTag) => [groupTag, devices[groupTag]]).filter(([, groupDevice]) => groupDevice);
  const info = getDeviceInfo(tag);
  const isGroup = groupDevices.length > 1;
  const pdfDocuments = [...(info.manuals || []), ...(info.procedures || []), ...(info.specs || [])];
  currentInfoDeviceId = tag;
  document.getElementById("device-info-title").textContent = isGroup ? `${tagGroup.join(" / ")} - Channel Information` : `${tag} - Device Information`;
  document.getElementById("device-info-kicker").textContent = isGroup ? "Grouped EDIO Channel" : `${info.manufacturer || "TBD Manufacturer"} / ${device.area || "Project Area"}`;
  document.getElementById("device-info-heading").textContent = isGroup ? `${tagGroup.join(" / ")} Reference` : `${tag} Reference`;
  document.getElementById("info-record-tag").value = tagGroup.join(" / ");
  document.getElementById("info-record-type").value = isGroup
    ? groupDevices.map(([, groupDevice]) => groupDevice.type || "Device").join(" / ")
    : device.type || "--";
  document.getElementById("info-record-manufacturer").value = info.manufacturer || "TBD";
  document.getElementById("info-record-ge-pn").value = info.gePartNumber || device.gePartNumber || "TBD";
  document.getElementById("info-record-wfe-pn").value = info.wfePartNumber || device.wfePartNumber || "TBD";
  document.getElementById("info-record-mfg-pn").value = info.manufacturerPartNumber || device.manufacturerPartNumber || "TBD";
  document.getElementById("info-record-notes").value = info.notes || "";
  document.getElementById("device-eol-notes").value = info.eolResistor || "";
  document.getElementById("device-sticker-notes").value = info.inspectionSticker || info.shopTestProcedure || "";
  renderDocumentList("device-wiring-list", info.wiring, "No wiring documents assigned to this device.");
  renderDocumentList("device-pdf-list", pdfDocuments, "No PDF documents assigned to this device.");
  renderDocumentList("device-photo-list", info.photos, "No photos assigned to this device.");
  const documentsTopicSummary = document.querySelector('[data-info-topic="documents"] span');
  if (documentsTopicSummary) {
    const photoCount = Array.isArray(info.photos) ? info.photos.length : 0;
    documentsTopicSummary.textContent = `${pdfDocuments.length} PDF/manual(s), ${photoCount} photo(s) assigned.`;
  }
  document.getElementById("device-info-note").textContent =
    isGroup
      ? `${tagGroup.join(" / ")} share this EDIO channel. Future PDFs, shop photos, wiring references and part numbers can be linked to each device in this channel.`
      : info.notes || `${tag}: future PDFs, shop photos, wiring references and part numbers will be linked directly to this device record.`;
  renderDeviceVideos(info);
  const topicToShow = pdfDocuments.length || info.photos?.length ? "documents" : document.querySelector(".active-info-topic")?.dataset.infoTopic || "device";
  setActiveInfoTopic(topicToShow);
}

async function saveCurrentDeviceInfoFields() {
  if (!requireAdmin("edit device information")) return;
  if (!currentInfoDeviceId || !devices[currentInfoDeviceId]) return;
  const info = ensureDeviceInfo(currentInfoDeviceId);
  const typeValue = document.getElementById("info-record-type")?.value.trim();
  if (typeValue) devices[currentInfoDeviceId].type = typeValue;
  info.manufacturer = document.getElementById("info-record-manufacturer")?.value.trim() || "";
  info.gePartNumber = document.getElementById("info-record-ge-pn")?.value.trim() || "";
  info.wfePartNumber = document.getElementById("info-record-wfe-pn")?.value.trim() || "";
  info.manufacturerPartNumber = document.getElementById("info-record-mfg-pn")?.value.trim() || "";
  info.notes = document.getElementById("info-record-notes")?.value.trim() || "";
  info.eolResistor = document.getElementById("device-eol-notes")?.value.trim() || "";
  info.inspectionSticker = document.getElementById("device-sticker-notes")?.value.trim() || "";
  await saveDeviceInfoDatabase();
  if (window.eqpApp?.saveDevices) {
    await window.eqpApp.saveDevices({ project: projectConfig, devices });
  }
  addEvent(currentInfoDeviceId, `${currentInfoDeviceId} device information updated.`);
  renderAll();
  renderDeviceInfoWindow(currentInfoDeviceId);
  updateAccessState();
}

function openDeviceInfoWindow(tag, tagGroup = [tag]) {
  renderDeviceInfoWindow(tag, tagGroup);
  const infoWindow = document.getElementById("device-info-window");
  infoWindow.classList.remove("hmi-hidden", "window-minimized");
  updateAccessState();
}

async function attachDeviceReference(category) {
  if (!requireAdmin("attach device reference files")) return;
  if (!currentInfoDeviceId) return;
  if (!window.eqpApp?.attachDeviceFile) {
    addEvent(currentInfoDeviceId, "Attach file is available in the Electron application. Browser preview cannot copy local files.");
    renderAll();
    return;
  }

  try {
    const result = await window.eqpApp.attachDeviceFile({ tag: currentInfoDeviceId, category });
    if (result?.canceled || !result?.document) return;
    const info = ensureDeviceInfo(currentInfoDeviceId);
    const fieldByCategory = {
      wiring: "wiring",
      manuals: "manuals",
      photos: "photos",
      videos: "videos",
      audio: "videos"
    };
    const field = fieldByCategory[category] || "manuals";
    info[field] ||= [];
    info[field].push({
      ...result.document,
      description: category === "audio" ? "Audio instruction reference" : result.document.description
    });
    await saveDeviceInfoDatabase();
    addEvent(currentInfoDeviceId, `${result.document.title} attached to ${currentInfoDeviceId}.`);
    renderDeviceInfoWindow(currentInfoDeviceId);
    updateAccessState();
  } catch (error) {
    addEvent(currentInfoDeviceId, `Unable to attach ${category} reference.`);
  }
}

async function replaceDrawingFile() {
  if (!requireAdmin("replace project drawing")) return;
  if (!window.eqpApp?.attachDeviceFile) {
    addEvent("DRAWING", "Replace drawing is available in the Electron application. Browser preview cannot copy local files.");
    return;
  }
  const result = await window.eqpApp.attachDeviceFile({ tag: "project-drawing", category: "drawings" });
  if (result?.canceled || !result?.document?.file) return;
  const drawingFrame = document.querySelector(".drawing-pdf");
  const openLink = document.querySelector(".pdf-toolbar a");
  const title = document.querySelector(".pdf-toolbar span");
  if (drawingFrame) drawingFrame.src = result.document.file;
  if (openLink) openLink.href = result.document.file;
  if (title) title.textContent = result.document.title;
  addEvent("DRAWING", `${result.document.title} loaded as current project drawing.`);
}

function generateRealDeviceReport() {
  const device = devices[selectedDeviceId];
  const output = document.getElementById("report-output");
  if (!device || !output) return;
  const realWarning = device.mode === "Real" ? "REAL DEVICE TEST RECORD" : "VIRTUAL PREVIEW - switch device to REAL for customer report";
  const lastEvent = eventHistory.find((event) => event.tag === selectedDeviceId);
  output.innerHTML = `
    <b>${realWarning}</b><br>
    Project: ${getProjectDisplayName()}<br>
    Tag: ${selectedDeviceId}<br>
    Type: ${device.type}<br>
    Address: ${device.address}<br>
    Status: ${device.status}<br>
    Value: ${device.value}<br>
    Last Event: ${lastEvent?.time || "--"} ${lastEvent?.message || "No event recorded"}<br>
    Generated: ${new Date().toLocaleString()}
  `;
  addEvent(selectedDeviceId, `${realWarning} generated.`);
}

function showSystemPreferences() {
  const output = document.getElementById("admin-output");
  if (output) {
    output.innerHTML = `
      <b>System Preferences</b><br>
      Project: ${getProjectDisplayName()}<br>
      Operator Role: ${currentRole}<br>
      Manual Test Mode: ${operatorTestMode ? "Enabled" : "Disabled"}<br>
      Training Auto Test: ${trainingAutoTestActive ? "Running" : "Stopped"}<br>
      Training Timeline Steps: ${trainingTimeline.length}<br>
      Training Offset: ${trainingTimelineOffsetSeconds} sec<br>
      Future settings: Modbus ports, drawing folders, report templates, S3 profile library.
    `;
  }
  addEvent("ADMIN", "System preferences opened.");
}

function renderTrainingOffset() {
  const input = document.getElementById("training-offset-seconds");
  if (input) input.value = String(trainingTimelineOffsetSeconds);
}

function getTrainingStepLabel(step) {
  if (!step) return "Automatic test ready";
  if (step.device && step.action) return `${step.device} / ${step.action}`;
  if (step.waitFor) return isAllestecProjectName(selectedProject) ? "Waiting for CO2 release sequence" : "Waiting for Stat-X release sequence";
  return step.say || "Training step";
}

function renderTrainingTransport() {
  const shell = document.getElementById("hmi-shell");
  const shouldHideTransport = operatorTestMode && !trainingAutoTestActive;
  const progress = document.getElementById("training-progress");
  const playPause = document.getElementById("training-play-pause");
  const label = document.getElementById("training-progress-label");
  const title = document.getElementById("training-step-title");
  const sequence = getActiveTrainingSequence();
  const total = sequence.length;
  const displayIndex = total ? Math.min(trainingStepIndex, total - 1) : 0;

  if (shell) shell.classList.toggle("training-transport-hidden", shouldHideTransport);
  if (progress) {
    progress.max = String(Math.max(total - 1, 0));
    progress.value = String(displayIndex);
  }
  if (label) label.textContent = total ? `STEP ${displayIndex + 1} / ${total}` : "STEP 0 / 0";
  if (title) title.textContent = getTrainingStepLabel(sequence[displayIndex]);
  if (playPause) {
    playPause.textContent = trainingAutoTestActive && !trainingPaused ? "PAUSE" : "PLAY";
    playPause.classList.toggle("stop", trainingAutoTestActive && !trainingPaused);
  }
}

function saveTrainingOffset() {
  if (!requireAdmin("save training offset")) return;
  const input = document.getElementById("training-offset-seconds");
  trainingTimelineOffsetSeconds = Number(input?.value || "0") || 0;
  localStorage.setItem("eqp-training-offset-seconds", String(trainingTimelineOffsetSeconds));
  addEvent("ADMIN", `Training timeline offset saved: ${trainingTimelineOffsetSeconds} seconds.`);
}

function loadTrainingTimelineEditor() {
  const editor = document.getElementById("training-timeline-editor");
  if (!editor) return;
  editor.value = JSON.stringify(trainingTimeline, null, 2);
  addEvent("ADMIN", "Training timeline loaded into editor.");
}

async function saveTrainingTimelineEditor() {
  if (!requireAdmin("save training timeline")) return;
  const editor = document.getElementById("training-timeline-editor");
  if (!editor) return;
  try {
    const timeline = JSON.parse(editor.value);
    if (!Array.isArray(timeline)) throw new Error("Timeline must be an array.");
    trainingTimeline = timeline
      .map((step, index) => ({ ...step, id: step.id || `step-${index}`, time: Number(step.time) || 0 }))
      .sort((a, b) => a.time - b.time);
    editor.value = JSON.stringify(trainingTimeline, null, 2);
    if (window.eqpApp?.saveTrainingTimeline) {
      await window.eqpApp.saveTrainingTimeline(trainingTimeline);
      addEvent("ADMIN", "Training timeline saved to config/training-timeline.json.");
    } else {
      addEvent("ADMIN", "Browser preview: training timeline updated in memory only.");
    }
  } catch (error) {
    addEvent("ADMIN", `Training timeline JSON error: ${error.message}`);
  }
}

function clearTrainingTimers() {
  trainingTimers.forEach((timer) => window.clearTimeout(timer));
  trainingTimers = [];
  if (trainingWatchdogId) {
    window.clearInterval(trainingWatchdogId);
    trainingWatchdogId = null;
  }
}

function isReleaseTrainingStep(step) {
  return (
    (manualReleaseTags.includes(step.device) && step.action === "Input Active") ||
    (thermalReleaseTags.includes(step.device) && step.action === "Fire")
  );
}

function runTrainingTimeline(currentSeconds) {
  if (!trainingAutoTestActive) return;
  const adjustedSeconds = currentSeconds + trainingTimelineOffsetSeconds;
  let executedThisTick = 0;
  trainingTimeline.forEach((step) => {
    if (executedTrainingSteps.has(step.id) || adjustedSeconds < step.time) return;
    executedTrainingSteps.add(step.id);
    executedThisTick += 1;

    if (step.action === "waitForRelease") {
      pauseTrainingUntilRelease(step.message);
      return;
    }

    if (step.device && step.action) {
      showView("package");
      selectDevice(step.device);
      applyFunction(step.action);
      addEvent("TRAINING", `Timeline action executed: ${step.device} / ${step.action}.`);
      if (isReleaseTrainingStep(step)) {
        pauseTrainingUntilRelease("Narration paused immediately while HMI completes the 30 second Stat-X countdown.");
      }
    }
    if (step.message) addEvent("TRAINING", step.message);
  });
  if (executedThisTick) renderAll();
}

function startTrainingWatchdog() {
  if (trainingWatchdogId) window.clearInterval(trainingWatchdogId);
  trainingWatchdogId = window.setInterval(() => {
    if (!trainingAutoTestActive || !trainingNarrationAudio) return;
    runTrainingTimeline(trainingNarrationAudio.currentTime || 0);
  }, 250);
}

function pauseTrainingUntilRelease(message = "Narration paused while HMI completes 30 second release countdown.") {
  if (!trainingAutoTestActive || !trainingNarrationAudio) return;
  if (aerosolReleased) {
    addEvent("TRAINING", "Release already active. Narration continues.");
    return;
  }
  if (aerosolCountdownSeconds === null) {
    addEvent("TRAINING", "Release countdown is not active. Narration continues.");
    return;
  }
  trainingPausedForRelease = true;
  trainingNarrationAudio.pause();
  addEvent("TRAINING", message);
}

function resumeTrainingAfterRelease() {
  if (!trainingAutoTestActive || !trainingPausedForRelease || !trainingNarrationAudio) return;
  trainingPausedForRelease = false;
  addEvent("TRAINING", "Release completed. Narration resumed.");
  trainingNarrationAudio.volume = 1.0;
  trainingNarrationAudio.play().catch(() => addEvent("TRAINING", "Training narration could not resume automatically."));
}

function speakTrainingText(text, runId) {
  addEvent("TRAINING", text);
  if (!("speechSynthesis" in window) || trainingPaused) return Promise.resolve();
  window.speechSynthesis.cancel();
  return new Promise((resolve) => {
    trainingSpeechUtterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((voice) => /Jenny|Aria|Guy|Natural|Neural|Online/i.test(voice.name) && /^en/i.test(voice.lang)) ||
      voices.find((voice) => /Microsoft/i.test(voice.name) && /^en/i.test(voice.lang)) ||
      voices.find((voice) => /^en-US/i.test(voice.lang)) ||
      voices.find((voice) => /^en/i.test(voice.lang));
    if (preferredVoice) trainingSpeechUtterance.voice = preferredVoice;
    trainingSpeechUtterance.rate = 0.97;
    trainingSpeechUtterance.pitch = 0.98;
    trainingSpeechUtterance.volume = 1.0;
    trainingSpeechUtterance.onend = resolve;
    trainingSpeechUtterance.onerror = resolve;
    if (!trainingAutoTestActive || trainingPaused || runId !== trainingRunId) {
      resolve();
      return;
    }
    window.speechSynthesis.speak(trainingSpeechUtterance);
  });
}

function waitForTrainingCondition(conditionName, runId) {
  return new Promise((resolve) => {
    const started = Date.now();
    const timer = window.setInterval(() => {
      const expired = Date.now() - started > 140000;
      const releaseComplete = conditionName === "release" && (isAllestecProjectName(selectedProject) ? allestecCo2Stage === "complete" : aerosolReleased);
      if (!trainingAutoTestActive || trainingPaused || runId !== trainingRunId || releaseComplete || expired) {
        window.clearInterval(timer);
        if (expired && !releaseComplete) addEvent("TRAINING", `Training wait timed out: ${conditionName}. Continuing sequence.`);
        resolve();
      }
    }, 300);
  });
}

async function executeTrainingStep(step, runId) {
  if (!trainingAutoTestActive || trainingPaused || runId !== trainingRunId) return;
  if (step.say && step.actionAfterSpeech) await speakTrainingText(step.say, runId);
  if (!trainingAutoTestActive || trainingPaused || runId !== trainingRunId) return;
  if (step.device && step.action) {
    showView("package");
    selectDevice(step.device);
    applyFunction(step.action);
    addEvent("TRAINING", `HMI action: ${step.device} / ${step.action}.`);
  }
  if (!trainingAutoTestActive || trainingPaused || runId !== trainingRunId) return;
  if (step.waitFor) await waitForTrainingCondition(step.waitFor, runId);
  if (!trainingAutoTestActive || trainingPaused || runId !== trainingRunId) return;
  if (step.say && !step.actionAfterSpeech) await speakTrainingText(step.say, runId);
}

async function runDescriptiveTrainingSequence(runId) {
  if (trainingStepRunning) return;
  trainingStepRunning = true;
  const sequence = getActiveTrainingSequence();
  while (trainingAutoTestActive && !trainingPaused && runId === trainingRunId && trainingStepIndex < sequence.length) {
    const step = sequence[trainingStepIndex];
    renderTrainingTransport();
    await executeTrainingStep(step, runId);
    if (!trainingAutoTestActive || trainingPaused || runId !== trainingRunId) break;
    trainingStepIndex += 1;
    renderTrainingTransport();
  }
  trainingStepRunning = false;
  if (!trainingAutoTestActive || runId !== trainingRunId) return;
  if (trainingPaused || trainingStepIndex < sequence.length) {
    renderAll();
    return;
  }
  trainingAutoTestActive = false;
  operatorTestMode = true;
  trainingPaused = false;
  trainingStepIndex = 0;
  resetAllDevices();
  addEvent("TRAINING", "Descriptive automatic training sequence finished. Operator manual test mode enabled.");
  renderAll();
}

function stopTrainingAutoTest(reason = "Automatic training test stopped. Operator manual test mode enabled.") {
  clearTrainingTimers();
  trainingAutoTestActive = false;
  operatorTestMode = true;
  trainingPaused = false;
  trainingStepRunning = false;
  trainingStepIndex = 0;
  trainingPausedForRelease = false;
  executedTrainingSteps.clear();
  trainingRunId += 1;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (trainingNarrationAudio) {
    trainingNarrationAudio.pause();
    trainingNarrationAudio.currentTime = 0;
  }
  resetAllDevices();
  addEvent("TRAINING", reason);
  renderAll();
}

async function startTrainingAutoTest() {
  clearTrainingTimers();
  executedTrainingSteps.clear();
  trainingPausedForRelease = false;
  trainingPaused = false;
  trainingStepRunning = false;
  trainingStepIndex = 0;
  trainingRunId += 1;
  const runId = trainingRunId;
  trainingAutoTestActive = true;
  operatorTestMode = false;
  showView("package");
  resetAllDevices();
  if (trainingNarrationAudio) {
    trainingNarrationAudio.pause();
    trainingNarrationAudio.currentTime = 0;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  addEvent("TRAINING", `${getProjectDisplayName()} automatic Fire and Gas functional test started. HMI controls the narration sequence.`);
  runDescriptiveTrainingSequence(runId);
  renderAll();
}

function pauseTrainingAutoTest() {
  if (!trainingAutoTestActive) return;
  trainingPaused = true;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  const sequence = getActiveTrainingSequence();
  addEvent("TRAINING", `Automatic training paused at step ${Math.min(trainingStepIndex + 1, sequence.length)}.`);
  renderAll();
}

function resumeTrainingAutoTest() {
  if (!trainingAutoTestActive) {
    startTrainingAutoTest();
    return;
  }
  if (!trainingPaused) {
    pauseTrainingAutoTest();
    return;
  }
  trainingPaused = false;
  trainingRunId += 1;
  trainingStepRunning = false;
  const runId = trainingRunId;
  const sequence = getActiveTrainingSequence();
  addEvent("TRAINING", `Automatic training resumed at step ${Math.min(trainingStepIndex + 1, sequence.length)}.`);
  runDescriptiveTrainingSequence(runId);
  renderAll();
}

function seekTrainingStep(nextIndex) {
  const sequence = getActiveTrainingSequence();
  const total = sequence.length;
  const clamped = Math.max(0, Math.min(Number(nextIndex) || 0, total - 1));
  clearTrainingTimers();
  trainingRunId += 1;
  trainingAutoTestActive = true;
  trainingPaused = true;
  trainingStepRunning = false;
  operatorTestMode = false;
  trainingStepIndex = clamped;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  resetAllDevices();
  showView("package");
  addEvent("TRAINING", `Training timeline moved to step ${clamped + 1}: ${getTrainingStepLabel(sequence[clamped])}.`);
  renderAll();
}

function moveTrainingStep(delta) {
  seekTrainingStep(trainingStepIndex + delta);
}

function toggleOperatorTestMode() {
  if (trainingAutoTestActive) {
    stopTrainingAutoTest();
    return;
  }
  operatorTestMode = !operatorTestMode;
  addEvent("SYSTEM", operatorTestMode ? "Operator manual test mode enabled." : "Operator manual test mode disabled.");
  renderAll();
}

const startMenuMessages = {
  "new-session": "New simulation session ready.",
  "open-project": "Open Project: select a turbine family or model from the bottom bar.",
  "save-project": "Project save prepared. Editable device/layout storage is available in the Electron app.",
  "close-project": "Project closed. Returned to the package selection screen.",
  "exit-app": "Exit command selected. The installed application will close from here later.",
  "project-browser": "Project Browser active.",
  "import-drawings": "Drawing import placeholder ready for PDF, DWG export images, and plant layouts.",
  "device-library": "Device Library ready: EQP, CGS, EDIO, DCIO, AIM, SAM, horn, strobe, relay.",
  "project-settings": "Project Settings placeholder ready.",
  "modbus-setup": "Modbus Setup ready: RTU, TCP, baud rate, slave ID, and register map will connect here.",
  "connect-controller": "EQP Controller connection command queued.",
  "disconnect-controller": "EQP Controller disconnect command queued.",
  "scan-devices": "Device scan ready. Future scan will compare real EQP loop devices with virtual devices.",
  "comms-diagnostics": "Communications diagnostics ready.",
  search: "Search ready for tags, alarms, events, drawings, and reports.",
  login: "Administrator login requested.",
  logout: "Logged out. Read only mode enabled.",
  "change-admin-password": "Change administrator password.",
  "info-library": "Info Library ready for shop procedures, wiring references, PDFs and device photos.",
  "edit-devices-tm2500": "TM2500 device edit mode ready.",
  "edit-devices-lm6000-allestec": "LM6000 Allestec device edit mode ready.",
  "edit-devices-lm6000-eqp": "LM6000 EQP device edit mode ready.",
  "edit-devices-lms100": "LMS100 device edit mode ready.",
  "reset-simulation": "Simulation reset command ready.",
  "alarm-report": "Alarm Report viewer ready.",
  "event-report": "Event History viewer ready.",
  "fat-report": "FAT Report generator ready.",
  "export-pdf": "Export PDF command ready.",
  "help-topics": "Help Topics ready.",
  "eqp-manuals": "EQP Manuals library placeholder ready.",
  "keyboard-shortcuts": "Keyboard Shortcuts help ready.",
  about: "Wilson Fire Equipment EQP Test Cell Simulation Platform prototype.",
};

function handleStartMenuAction(action) {
  const status = document.getElementById("start-menu-status");
  if (status) status.textContent = startMenuMessages[action] || "Command selected.";

  document.querySelectorAll(".app-menu.menu-open").forEach((menu) => menu.classList.remove("menu-open"));

  if (action === "new-session") {
    resetAllDevices();
  }

  if (action === "open-project" || action === "project-browser") {
    showStartWindow();
  }

  if (action === "save-project") {
    saveDeviceDatabase();
  }

  if (action === "close-project") {
    showStartWindow();
  }

  if (action === "exit-app") {
    window.close();
  }

  if (action === "login") adminLogin();
  if (action === "logout") logout();
  if (action === "change-admin-password") changeAdminPassword();
  if (action === "reset-simulation") resetAllDevices();
  if (action === "edit-devices-tm2500") {
    openProject("TM2500 XPRESS");
    setAllestecMoveMode(true, "TM2500 XPRESS");
  }
  if (action === "edit-devices-lm6000-allestec") {
    openProject("LM6000 Allestec");
    setAllestecMoveMode(true, "LM6000 Allestec");
  }
  if (action === "edit-devices-lm6000-eqp") {
    openProject("LM6000 EQP");
    setAllestecMoveMode(true, "LM6000 EQP");
  }
  if (action === "edit-devices-lms100") {
    openProject("LMS100 PA");
    setAllestecMoveMode(true, "LMS100");
  }
  if (["alarm-report", "event-report", "fat-report", "export-pdf"].includes(action)) openViewFromMenu("reports");
  if (action === "import-drawings") openViewFromMenu("drawing");
  if (["device-library", "info-library"].includes(action)) openViewFromMenu("devices");
  if (["help-topics", "eqp-manuals"].includes(action)) openViewFromMenu("devices");
  if (["modbus-setup", "connect-controller", "disconnect-controller", "scan-devices", "comms-diagnostics"].includes(action)) openViewFromMenu("comms");
  if (action === "project-settings") openViewFromMenu("admin");
}

async function loadDeviceDatabase() {
  try {
    if (window.eqpApp?.loadDevices) {
      const config = await window.eqpApp.loadDevices();
      projectConfig = config.project || projectConfig;
      devices = mergeDeviceDatabase(config.devices);
      ensureControlDevices();
      addEvent("EQP-001", `Loaded ${Object.keys(devices).length} devices from config/devices.json.`);
      return;
    }

    const response = await fetch("./config/devices.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const config = await response.json();
    projectConfig = config.project || projectConfig;
    devices = mergeDeviceDatabase(config.devices);
    ensureControlDevices();
    addEvent("EQP-001", `Loaded ${Object.keys(devices).length} devices from config/devices.json.`);
  } catch (error) {
    devices = { ...fallbackDevices };
    ensureControlDevices();
    addEvent("EQP-001", "Using internal fallback device database.");
  }
}

async function loadDeviceInfoDatabase() {
  try {
    if (window.eqpApp?.loadDeviceInfo) {
      deviceInfoConfig = await window.eqpApp.loadDeviceInfo();
      addEvent("EQP-001", `Loaded device information library from config/device-info.json.`);
      return;
    }

    const response = await fetch(`./config/device-info.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    deviceInfoConfig = await response.json();
    addEvent("EQP-001", `Loaded device information library from config/device-info.json.`);
  } catch (error) {
    deviceInfoConfig = { project: projectConfig, devices: {} };
    addEvent("EQP-001", "Using empty device information library.");
  }
}

async function loadS3Logic() {
  try {
    const response = await fetch("./config/s3-logic.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    s3Logic = await response.json();
    addEvent("EQP-001", `Loaded S3 logic rules from config/s3-logic.json.`);
  } catch (error) {
    s3Logic = cloneConfig(defaultS3Logic);
    addEvent("EQP-001", "Using embedded S3 logic rules for file browser prototype.");
  }
}

function showView(viewName, trackHistory = true) {
  if (trackHistory && viewName !== currentViewName) {
    viewHistory.push(currentViewName);
  }
  currentViewName = viewName;
  const targetViewName = getTargetViewName(viewName, selectedProject);
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });
  document.querySelectorAll(".view-stage").forEach((view) => {
    view.classList.remove("view-active");
  });
  const target = document.getElementById(`${targetViewName}-view`);
  if (target) target.classList.add("view-active");
  if (targetViewName === "lm6000") {
    window.requestAnimationFrame(resizeLm6000SketchCanvas);
  }
  if (targetViewName === "lm6000-allestec") {
    window.requestAnimationFrame(() => {
      applyAllestecSavedLayout();
      applyAllestecGraphicLayoutState();
    });
  }
  if (targetViewName === "lms100") {
    window.requestAnimationFrame(() => applyProjectDeviceLayout("LMS100"));
  }
  if (targetViewName === "project-placeholder") {
    renderProjectPlaceholder();
  }
  if (targetViewName === "comms") {
    renderCommsMap();
  }
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.nav === viewName);
  });
}

function navigateBack() {
  showStartWindow();
}

function openViewFromMenu(viewName) {
  const hmiHidden = document.getElementById("hmi-shell").classList.contains("hmi-hidden");
  if (hmiHidden) {
    selectedProject ||= "TM2500 XPRESS";
    openHmiFromStart();
  }
  showView(viewName);
}

const lm6000SketchStorageKey = "lm6000-eqp-sketch-v1";
let lm6000SketchMode = "off";
let lm6000SketchDrawing = false;

function getLm6000SketchCanvas() {
  return document.getElementById("lm6000-sketch-canvas");
}

function resizeLm6000SketchCanvas() {
  const canvas = getLm6000SketchCanvas();
  const area = document.getElementById("lm6000-sketch-area");
  if (!canvas || !area) return;
  const previous = canvas.toDataURL("image/png");
  const rect = area.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * scale));
  canvas.height = Math.max(1, Math.floor(rect.height * scale));
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
  const context = canvas.getContext("2d");
  context.setTransform(scale, 0, 0, scale, 0, 0);
  const stored = localStorage.getItem(lm6000SketchStorageKey) || previous;
  if (!stored) return;
  const image = new Image();
  image.onload = () => context.drawImage(image, 0, 0, rect.width, rect.height);
  image.src = stored;
}

function saveLm6000Sketch() {
  const canvas = getLm6000SketchCanvas();
  if (!canvas) return;
  localStorage.setItem(lm6000SketchStorageKey, canvas.toDataURL("image/png"));
}

function setLm6000SketchMode(mode) {
  lm6000SketchMode = lm6000SketchMode === mode ? "off" : mode;
  const board = document.querySelector(".lm6000-board");
  board?.classList.toggle("sketch-pencil", lm6000SketchMode === "pencil");
  board?.classList.toggle("sketch-eraser", lm6000SketchMode === "eraser");
  document.getElementById("lm6000-pencil-toggle")?.classList.toggle("active", lm6000SketchMode === "pencil");
  document.getElementById("lm6000-eraser-toggle")?.classList.toggle("active", lm6000SketchMode === "eraser");
}

function clearLm6000Sketch() {
  const canvas = getLm6000SketchCanvas();
  if (!canvas) return;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  localStorage.removeItem(lm6000SketchStorageKey);
  addEvent("LM6000", "LM6000 sketch overlay cleared.");
}

function getCanvasPoint(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function drawLm6000SketchPoint(event) {
  const canvas = getLm6000SketchCanvas();
  if (!canvas || lm6000SketchMode === "off") return;
  const context = canvas.getContext("2d");
  const point = getCanvasPoint(event, canvas);
  context.lineCap = "round";
  context.lineJoin = "round";
  if (lm6000SketchMode === "eraser") {
    context.globalCompositeOperation = "destination-out";
    context.lineWidth = 20;
  } else {
    context.globalCompositeOperation = "source-over";
    context.strokeStyle = "#d71920";
    context.lineWidth = 4;
  }
  context.lineTo(point.x, point.y);
  context.stroke();
}

function setupLm6000SketchCanvas() {
  const canvas = getLm6000SketchCanvas();
  if (!canvas) return;
  resizeLm6000SketchCanvas();
  canvas.addEventListener("pointerdown", (event) => {
    if (lm6000SketchMode === "off") return;
    event.preventDefault();
    lm6000SketchDrawing = true;
    canvas.setPointerCapture(event.pointerId);
    const context = canvas.getContext("2d");
    const point = getCanvasPoint(event, canvas);
    context.beginPath();
    context.moveTo(point.x, point.y);
    drawLm6000SketchPoint(event);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!lm6000SketchDrawing) return;
    event.preventDefault();
    drawLm6000SketchPoint(event);
  });
  canvas.addEventListener("pointerup", (event) => {
    if (!lm6000SketchDrawing) return;
    lm6000SketchDrawing = false;
    canvas.releasePointerCapture(event.pointerId);
    saveLm6000Sketch();
  });
  canvas.addEventListener("pointercancel", () => {
    lm6000SketchDrawing = false;
    saveLm6000Sketch();
  });
}

function getSvgPoint(event, svg) {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function parseTranslate(transform) {
  const match = /translate\(([-\d.]+)[ ,]([-\d.]+)\)/.exec(transform || "");
  return {
    x: match ? Number(match[1]) : 0,
    y: match ? Number(match[2]) : 0,
  };
}

function getEditState(element) {
  const id = element.dataset.editId;
  if (!layoutState[id]) {
    const base = parseTranslate(element.getAttribute("transform"));
    layoutState[id] = { x: base.x, y: base.y, scale: 1 };
  }
  return layoutState[id];
}

function applyEditTransform(element) {
  const state = getEditState(element);
  element.setAttribute("transform", `translate(${state.x} ${state.y}) scale(${state.scale})`);
}

function saveLayoutState() {
  localStorage.setItem(layoutStorageKey, JSON.stringify(layoutState));
}

function selectEditElement(element) {
  if (selectedEditElement) selectedEditElement.classList.remove("selected-edit");
  selectedEditElement = element;
  selectedEditElement.classList.add("selected-edit");
  const selectedLabel = document.getElementById("selected-layout-item");
  if (selectedLabel) selectedLabel.textContent = `Selected: ${element.dataset.editId}`;
}

function setLayoutEditMode(enabled) {
  if (enabled && !requireAdmin("edit layout")) return;
  layoutEditMode = enabled;
  document.getElementById("package-view").classList.toggle("layout-edit-mode", enabled);
  document.querySelector(".layout-editor")?.classList.toggle("editing", enabled);
  const toggle = document.getElementById("edit-layout-toggle");
  if (toggle) toggle.textContent = enabled ? "EDITING ON" : "EDIT LAYOUT";
  if (!enabled && selectedEditElement) {
    selectedEditElement.classList.remove("selected-edit");
    selectedEditElement = null;
    const selectedLabel = document.getElementById("selected-layout-item");
    if (selectedLabel) selectedLabel.textContent = "Selected: none";
  }
}

function scaleSelected(multiplier) {
  if (!requireAdmin("edit layout")) return;
  if (!selectedEditElement) return;
  const state = getEditState(selectedEditElement);
  state.scale = Math.max(0.35, Math.min(2.5, Number((state.scale * multiplier).toFixed(2))));
  applyEditTransform(selectedEditElement);
  saveLayoutState();
}

function resetLayout() {
  if (!requireAdmin("reset layout")) return;
  localStorage.removeItem(layoutStorageKey);
  window.location.reload();
}

function getLayoutProjectName(projectName = selectedProject) {
  const normalized = normalizeProjectName(projectName);
  if (normalized === "LM6000 EQP") return "LM6000 EQP";
  if (normalized === "LM6000 ALLESTEC") return "LM6000 ALLESTEC";
  if ((projectName || "").toUpperCase().includes("LMS100")) return "LMS100";
  return "TM2500 XPRESS";
}

function getProjectDeviceLayoutStorageKey(projectName = selectedProject) {
  return `${projectDeviceLayoutStoragePrefix}-${getProjectNamespace(getLayoutProjectName(projectName)).toLowerCase()}`;
}

function getProjectDeviceLayoutState(projectName = selectedProject) {
  const key = getProjectDeviceLayoutStorageKey(projectName);
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    if (Object.keys(saved).length) return saved;
    if (getLayoutProjectName(projectName) === "LM6000 ALLESTEC") {
      return JSON.parse(localStorage.getItem(allestecLayoutStorageKey) || "{}");
    }
    return {};
  } catch {
    return {};
  }
}

function saveProjectDeviceLayoutState(state, projectName = selectedProject) {
  localStorage.setItem(getProjectDeviceLayoutStorageKey(projectName), JSON.stringify(state));
}

function getAllestecLayoutState() {
  return getProjectDeviceLayoutState("LM6000 Allestec");
}

function saveAllestecLayoutState(state) {
  saveProjectDeviceLayoutState(state, "LM6000 Allestec");
}

function getAllestecDeviceTransform(element) {
  if (!(element instanceof SVGElement) || element.classList?.contains("allestec-html-device")) {
    const scaleMatch = /scale\(([-\d.]+)\)/.exec(element.style.transform || "");
    return {
      x: parseFloat(element.style.left) || 0,
      y: parseFloat(element.style.top) || 0,
      scale: scaleMatch ? Number(scaleMatch[1]) : 1,
      unit: "%",
    };
  }
  const transform = element.getAttribute("transform") || "";
  const translate = parseTranslate(transform);
  const scaleMatch = /scale\(([-\d.]+)\)/.exec(transform);
  return {
    x: translate.x,
    y: translate.y,
    scale: scaleMatch ? Number(scaleMatch[1]) : 1,
  };
}

function setAllestecDeviceTransform(element, state) {
  if (!(element instanceof SVGElement) || element.classList?.contains("allestec-html-device")) {
    const safeX = Math.max(-105, Math.min(108, Number(state.x) || 0));
    const safeY = Math.max(-15, Math.min(108, Number(state.y) || 0));
    element.style.left = `${safeX}%`;
    element.style.top = `${safeY}%`;
    element.style.transform = state.scale && state.scale !== 1 ? `scale(${state.scale})` : "";
    return;
  }
  const scale = state.scale && state.scale !== 1 ? ` scale(${state.scale})` : "";
  element.setAttribute("transform", `translate(${state.x} ${state.y})${scale}`);
}

function getProjectLayoutViewSelector(projectName = selectedProject) {
  const layoutName = getLayoutProjectName(projectName);
  if (layoutName === "LM6000 ALLESTEC") return "#lm6000-allestec-view";
  if (layoutName === "LM6000 EQP") return "#lm6000-view";
  if (layoutName === "LMS100") return "#lms100-view";
  if (layoutName === "TM2500 XPRESS") return "#package-view";
  return "#package-view";
}

function getProjectLayoutElements(projectName = selectedProject) {
  const selector = getProjectLayoutViewSelector(projectName);
  const elements = Array.from(document.querySelectorAll(`${selector} .device-badge[data-device], ${selector} .field-device[data-device], ${selector} .eqp-controller[data-device], ${selector} .wired-point[data-device], ${selector} .allestec-html-device[data-device]`));
  return elements.filter((element) => {
    if (element.classList.contains("overlay-hidden")) return false;
    if (element.hidden) return false;
    if (element instanceof SVGElement) return true;
    const style = window.getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden") return false;
    return element.style.left || element.style.top || element.classList.contains("allestec-html-device");
  });
}

function applyProjectDeviceLayout(projectName = selectedProject) {
  const saved = getProjectDeviceLayoutState(projectName);
  getProjectLayoutElements(projectName).forEach((element) => {
    const state = saved[element.dataset.device];
    if (element instanceof SVGElement && state?.unit === "%") return;
    if (state) setAllestecDeviceTransform(element, state);
  });
}

function applyAllestecSavedLayout() {
  applyProjectDeviceLayout("LM6000 Allestec");
}

function applyAllProjectDeviceLayouts() {
  ["TM2500 XPRESS", "LM6000 Allestec", "LM6000 EQP", "LMS100"].forEach((projectName) => applyProjectDeviceLayout(projectName));
}

function setAllestecMoveStatus(text) {
  const status = document.getElementById("allestec-move-status");
  if (status) status.textContent = text;
}

function setAllestecMoveMode(enabled, projectName = selectedProject) {
  if (enabled && allestecGraphicEditMode) setAllestecGraphicEditMode(false);
  if (enabled && !requireAdmin("edit device layout")) return;
  const layoutProject = getLayoutProjectName(projectName);
  allestecMoveMode = enabled;
  activeLayoutEditProject = enabled ? layoutProject : "";
  document.querySelectorAll(".project-layout-edit-mode, .allestec-edit-mode").forEach((view) => {
    view.classList.remove("project-layout-edit-mode", "allestec-edit-mode");
  });
  const activeView = document.querySelector(getProjectLayoutViewSelector(layoutProject));
  activeView?.classList.toggle("project-layout-edit-mode", enabled);
  activeView?.classList.toggle("allestec-edit-mode", enabled);
  document.getElementById("allestec-move-toggle")?.classList.toggle("active", enabled);
  const saveButton = document.getElementById("allestec-save-layout");
  if (saveButton) saveButton.hidden = true;
  const projectSaveButton = document.getElementById("project-save-layout");
  if (projectSaveButton) {
    projectSaveButton.hidden = !enabled;
    projectSaveButton.textContent = enabled ? `SAVE LAYOUT` : "SAVE LAYOUT";
  }
  const toggle = document.getElementById("allestec-move-toggle");
  if (toggle) toggle.textContent = enabled ? "MOVING ON" : "MOVE DEVICES";
  setAllestecMoveStatus(enabled ? `Drag tags in ${layoutProject}` : "");
  if (!enabled) {
    document.querySelectorAll(".allestec-selected-edit").forEach((item) => item.classList.remove("allestec-selected-edit"));
  }
}

function saveAndCloseAllestecDeviceEditMode() {
  const projectName = activeLayoutEditProject || getLayoutProjectName(selectedProject);
  const saved = getProjectDeviceLayoutState(projectName);
  getProjectLayoutElements(projectName).forEach((element) => {
    if (saved[element.dataset.device] && element.classList.contains("overlay-hidden")) return;
    saved[element.dataset.device] = getAllestecDeviceTransform(element);
  });
  saveProjectDeviceLayoutState(saved, projectName);
  setAllestecMoveMode(false, projectName);
  setAllestecMoveStatus(`${projectName} layout saved`);
  addEvent(projectName, "Device layout saved from Tools > Layout.");
}

const commsColumns = ["detail", "panel", "channel", "device", "signal", "notes"];
const projectCommsProfiles = {
  tm2500: {
    title: "TM2500 XPRESS EQP communications",
    cards: [
      ["eqp-on-test", "EQP ON TEST", "S3 profile always loaded while controller is virtual"],
      ["modbus-rtu", "Modbus RTU", "COM12 / 19200 8N1 / Slave 1"],
      ["s3", "S3 Profiles", "EQP_ON_TEST plus device-specific profiles"],
      ["virtual", "Virtual Simulation", "Software devices only"],
    ],
    rows: [
      ["S3 profile", "TM2500 XPRESS", "Always loaded", "EQP ON TEST", "Virtual HMI to real EQP panel", "Runs while controller remains virtual"],
      ["EQP Serial Port 1", "EQP Controller", "RS485", "MODBUS Slave", "Address 1", "From S3 controller settings"],
      ["EQP RTU Settings", "HMI PC", "COM12", "19200 baud / 8N1", "Slave ID 1", "USB-RS485 FTDI adapter"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00101", "Silence", "Command bit", "Panel silence from HMI"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00102", "Ack", "Command bit", "Panel acknowledge from HMI"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00103", "Reset", "Command bit", "Panel reset from HMI"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00104 / 00105", "HS-3091 / HS-3093", "Manual release inputs", "Virtual pull stations reflected to EQP"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00106 / 00107", "TS-3003 / TS-3014", "Thermal inputs", "Virtual heat detectors reflected to EQP"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00108-00112", "LOW gas bits", "AE-3004A/B/C, AE-3029, AE-3030", "Low gas alarms reflected to EQP"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00115-00119", "HH gas bits", "AE-3004A/B/C, AE-3029, AE-3030", "High-high gas alarms reflected to EQP"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00113 / 00114", "YSZ-3171 / YSZ-3172", "Release feedback", "Virtual release reflected to EQP"],
      ["All to MODBUS", "EQP -> HMI", "00010", "EQP-FPP.Fire Alarm", "Status bit", "Readback from EQP ON TEST"],
      ["All to MODBUS", "EQP -> HMI", "00012", "EQP-FPP.High Alarm", "Status bit", "High gas readback"],
      ["All to MODBUS", "EQP -> HMI", "00018", "EQP-FPP.Low Alarm", "Status bit", "Low gas readback"],
      ["All to MODBUS", "EQP -> HMI", "00023", "EQP-FPP.New Trouble", "Status bit", "Trouble readback"],
      ["S3 profile", "Admin", "Manual open", "TEST_EDIO.s3n", "EDIO device test", "Addressable EQP module"],
      ["S3 profile", "Admin", "Manual open", "TEST_UD10.s3n", "UD10 / gas transmitter test", "Addressable EQP device"],
      ["S3 profile", "Admin", "Manual open", "TEST_IR.s3n", "IR gas detector test", "Addressable EQP device"],
      ["Virtual engine", "HMI", "Internal", "Non-connected devices", "Training simulation", "No hardware required"],
    ],
  },
  lm6000Eqp: {
    title: "LM6000 EQP communications",
    cards: [
      ["eqp", "EQP Controller", "SHELL_LM6000_1457.s3n"],
      ["lon", "LON Devices", "Addressable gas, flame, EDIO modules"],
      ["edio", "EDIO Modules", "EDIO1-JB19 / EDIO2-JB18 / EDIO3-JB20"],
      ["co2", "CO2 Logic", "Main and extended CO2 release sequence"],
    ],
    rows: [
      ["S3 profile", "LM6000 EQP", "Project file", "SHELL_LM6000_1457.s3n", "EQP addressable project", "Separate from LM6000 Allestec and TM2500"],
      ["Controller", "FIRE-PANEL / EQP-FPP", "Serial Port 1", "RS485 / Modbus", "Controller reports all addressable devices", "No Allestec relay/I/O/4-20mA conversion modules"],
      ["EQP RTU Settings", "HMI PC", "COM12", "19200 baud / 8N1", "Slave ID 1", "USB-RS485 adapter to EQP Serial Port 1"],
      ["MODBUS to Global Memory", "HMI -> EQP", "00101-00121", "Test-Board EQP_Modbus.csv", "Common EQP write map", "Used for EQP projects only"],
      ["LON", "Turbine gas", "Address #9-#11", "AE-6304A / AE-6304B / AE-6304C", "UD10 combustible gas detectors", "15% LEL alarm / 25% LEL shutdown"],
      ["LON", "Generator gas", "Address #14", "AE-6313", "UD10 combustible gas detector", "15% LEL alarm / 25% LEL shutdown"],
      ["LON", "Exhaust IR gas", "Address #15-#16", "AE-3029 / AE-3030", "IR gas detectors", "5% LEL alarm / 10% LEL shutdown"],
      ["LON", "Flame detection", "Address #17-#21", "BE-6300 / 6302 / 6311 / 6335 / 6336", "X3301 flame detectors", "Fire alarm logic from S3"],
      ["EDIO", "Turbine skid", "EDIO1-JB19", "TS-6303 / TS-6314 / HS-6305 / YSA / YSL", "Thermal, horn ack, turbine horn/strobe outputs", "Drawing page 13"],
      ["EDIO", "Generator skid", "EDIO2-JB18", "TS-6307 / TS-6310 / HS-6308 / HS-6309 / HS-6312 / YSA / YSL", "Thermal, manual release, generator horn/strobe outputs", "Drawing page 17"],
      ["EDIO", "CO2 skid", "EDIO3-JB20", "SOV-6359-6362 / PSH-6357 / PSHH-6348 / ZS-6364 / HS-6363", "CO2 solenoids, pressure switches, block valve, purge", "Drawing page 19"],
      ["Logic", "General alarm", "S3 OR logic", "Any fire/gas alarm", "Drives horns and beacons", "From P4PT1.lpd CommonAlarm"],
      ["Logic", "CO2 release", "S3 logic", "Manual/thermal/fire release sources", "Main and extended CO2 release outputs", "Gas detection does not directly release CO2"],
    ],
  },
  lms100: {
    title: "LMS100 communications",
    cards: [
      ["project", "LMS100", "Future LMS100 project profile"],
      ["modbus", "Modbus", "Project-specific map pending"],
      ["drawing", "Drawing Based", "Tags assigned from LMS100 drawings"],
      ["virtual", "Virtual", "Software simulation"],
    ],
    rows: [
      ["Project profile", "LMS100", "Pending", "LMS100 devices", "Separate from TM2500 and LM6000", "To be mapped from LMS100 drawings"],
    ],
  },
};
const allestecCommsMapDefaults = {
  relay1: [
    ["Relay Module-1", "Panel 1", "CH1", "BE-6300", "Flame detector contact", "Allestec real panel input"],
    ["Relay Module-1", "Panel 1", "CH2", "BE-6302", "Flame detector contact", "Allestec real panel input"],
    ["Relay Module-1", "Panel 1", "CH3", "BE-6335", "Flame detector contact", "Allestec real panel input"],
    ["Relay Module-1", "Panel 1", "CH4", "BE-6311", "Generator flame detector contact", "Direct fire release input"],
    ["Relay Module-1", "Panel 1", "CH5", "TS-6303 / TS-6314", "Thermal detector zone", "Shared heat detector channel"],
    ["Relay Module-1", "Panel 1", "CH6", "TS-6307 / TS-6310", "Thermal detector zone", "Shared heat detector channel"],
    ["Relay Module-1", "Panel 1", "CH7", "HS-6308 / HS-6309 / HS-6312", "Manual release stations", "CO2 release source"],
    ["Relay Module-1", "Panel 1", "CH8", "HS-6363", "Purge switch", "Pressure switch reset"],
    ["Relay Module-1", "Panel 1", "CH9", "HS-6305", "Horn acknowledge switch", "Silence horns only"],
    ["Relay Module-1", "Panel 1", "CH10", "PSH-6348A", "CO2 pressure switch", "Header pressure status"],
    ["Relay Module-1", "Panel 1", "CH11", "PSHH-6348B", "CO2 pressure switch high-high", "F3 pressure latch"],
    ["Relay Module-1", "Panel 1", "CH12", "ZS-6364", "CO2 block valve closed", "F4 inhibit"],
  ],
  relay2: [
    ["Relay Module-2", "Panel 2", "CH1", "BE-6300", "Flame detector contact", "Test panel input"],
    ["Relay Module-2", "Panel 2", "CH2", "BE-6302", "Flame detector contact", "Test panel input"],
    ["Relay Module-2", "Panel 2", "CH3", "BE-6335", "Flame detector contact", "Test panel input"],
    ["Relay Module-2", "Panel 2", "CH4", "BE-6311", "Generator flame detector contact", "Direct fire release input"],
    ["Relay Module-2", "Panel 2", "CH5", "TS-6303 / TS-6314", "Thermal detector zone", "Shared heat detector channel"],
    ["Relay Module-2", "Panel 2", "CH6", "TS-6307 / TS-6310", "Thermal detector zone", "Shared heat detector channel"],
    ["Relay Module-2", "Panel 2", "CH7", "HS-6308 / HS-6309 / HS-6312", "Manual release stations", "CO2 release source"],
    ["Relay Module-2", "Panel 2", "CH8", "HS-6363", "Purge switch", "Pressure switch reset"],
    ["Relay Module-2", "Panel 2", "CH9", "HS-6305", "Horn acknowledge switch", "Silence horns only"],
    ["Relay Module-2", "Panel 2", "CH10", "PSH-6348A", "CO2 pressure switch", "Header pressure status"],
    ["Relay Module-2", "Panel 2", "CH11", "PSHH-6348B", "CO2 pressure switch high-high", "F3 pressure latch"],
    ["Relay Module-2", "Panel 2", "CH12", "ZS-6364", "CO2 block valve closed", "F4 inhibit"],
  ],
  io1: [
    ["I/O Module-1", "Panel 1", "DI11", "SOV-6359 / SOV-6360", "Main CO2 solenoid feedback", "Main discharge at 30 seconds"],
    ["I/O Module-1", "Panel 1", "DI12", "SOV-6361 / SOV-6362", "Reserve CO2 solenoid feedback", "Reserve discharge at 90 seconds"],
    ["I/O Module-1", "Panel 1", "DI13", "YSL-6336 / YSL-6344 / YSL-6345 / YSL-6306", "Strobe outputs feedback", "Strobes active"],
    ["I/O Module-1", "Panel 1", "DI14", "YSA-6345 / YSA-6346 / YSA-6347", "Horn outputs feedback", "Horns active"],
    ["I/O Module-1", "Panel 1", "DI15", "LOW GAS TURBINE", "NC loop: closed normal / open alarm", "Low Gas Turbine"],
    ["I/O Module-1", "Panel 1", "DI16", "HIGH GAS TURBINE", "NC loop: closed normal / open alarm", "High Gas Turbine"],
    ["I/O Module-1", "Panel 1", "DI17", "LOW GAS GENERATOR", "NC loop: closed normal / open alarm", "Low Gas Generator"],
    ["I/O Module-1", "Panel 1", "DI18", "HIGH GAS GENERATOR", "NC loop: closed normal / open alarm", "High Gas Generator"],
  ],
  io2: [
    ["I/O Module-2", "Panel 2", "DI11", "SOV-6359 / SOV-6360", "Main CO2 solenoid feedback", "Main discharge at 30 seconds"],
    ["I/O Module-2", "Panel 2", "DI12", "SOV-6361 / SOV-6362", "Reserve CO2 solenoid feedback", "Reserve discharge at 90 seconds"],
    ["I/O Module-2", "Panel 2", "DI13", "YSL-6336 / YSL-6344 / YSL-6345 / YSL-6306", "Strobe outputs feedback", "Strobes active"],
    ["I/O Module-2", "Panel 2", "DI14", "YSA-6345 / YSA-6346 / YSA-6347", "Horn outputs feedback", "Horns active"],
    ["I/O Module-2", "Panel 2", "DI15", "LOW GAS TURBINE", "NC loop: closed normal / open alarm", "Low Gas Turbine"],
    ["I/O Module-2", "Panel 2", "DI16", "HIGH GAS TURBINE", "NC loop: closed normal / open alarm", "High Gas Turbine"],
    ["I/O Module-2", "Panel 2", "DI17", "LOW GAS GENERATOR", "NC loop: closed normal / open alarm", "Low Gas Generator"],
    ["I/O Module-2", "Panel 2", "DI18", "HIGH GAS GENERATOR", "NC loop: closed normal / open alarm", "High Gas Generator"],
  ],
  analog1: [
    ["4-20mA Module-1", "Panel 1", "AO1", "AE-6304A", "Gas detector simulation", "15/25% LEL"],
    ["4-20mA Module-1", "Panel 1", "AO2", "AE-6304B", "Gas detector simulation", "15/25% LEL"],
    ["4-20mA Module-1", "Panel 1", "AO3", "AE-6304C", "Gas detector simulation", "15/25% LEL"],
    ["4-20mA Module-1", "Panel 1", "AO4", "AE-6313", "Generator gas simulation", "15/25% LEL"],
    ["4-20mA Module-1", "Panel 1", "AO5", "AE-3029", "Extractor fan IR gas simulation", "5/10% LEL"],
    ["4-20mA Module-1", "Panel 1", "AO6", "AE-3030", "Extractor fan IR gas simulation", "5/10% LEL"],
    ["4-20mA Module-1", "Panel 1", "AO7", "SPARE", "Available analog output", "Not assigned"],
    ["4-20mA Module-1", "Panel 1", "AO8", "SPARE", "Available analog output", "Not assigned"],
  ],
  analog2: [
    ["4-20mA Module-2", "Panel 2", "AO1", "AE-6304A", "Gas detector simulation", "15/25% LEL"],
    ["4-20mA Module-2", "Panel 2", "AO2", "AE-6304B", "Gas detector simulation", "15/25% LEL"],
    ["4-20mA Module-2", "Panel 2", "AO3", "AE-6304C", "Gas detector simulation", "15/25% LEL"],
    ["4-20mA Module-2", "Panel 2", "AO4", "AE-6313", "Generator gas simulation", "15/25% LEL"],
    ["4-20mA Module-2", "Panel 2", "AO5", "AE-3029", "Extractor fan IR gas simulation", "5/10% LEL"],
    ["4-20mA Module-2", "Panel 2", "AO6", "AE-3030", "Extractor fan IR gas simulation", "5/10% LEL"],
    ["4-20mA Module-2", "Panel 2", "AO7", "SPARE", "Available analog output", "Not assigned"],
    ["4-20mA Module-2", "Panel 2", "AO8", "SPARE", "Available analog output", "Not assigned"],
  ],
  network: [
    ["Relay Module-1", "Panel 1", "TCP 4196", "192.168.1.200", "Modbus TCP / relay bridge", "On board panel relay outputs"],
    ["Relay Module-2", "Panel 2", "TCP 4196", "192.168.1.201", "Modbus TCP / relay bridge", "Test panel relay outputs"],
    ["I/O Module-1", "Panel 1", "TCP 502", "192.168.1.202", "Modbus TCP", "On board panel digital I/O"],
    ["I/O Module-2", "Panel 2", "TCP 502", "192.168.1.203", "Modbus TCP", "Test panel digital I/O"],
    ["4-20mA Module-1", "Panel 1", "COM16", "RS485 Slave ID TBD", "Modbus RTU", "8-Ch analog output to on board panel"],
    ["4-20mA Module-2", "Panel 2", "COM16", "RS485 Slave ID TBD", "Modbus RTU", "8-Ch analog output to test panel"],
    ["Waveshare serial", "Both Panels", "115200 8N1", "RTU bridge", "No parity / 1 stop bit", "Device port 502, web port 80"],
    ["Waveshare network", "HMI PC", "Ethernet", "Gateway 192.168.1.1", "Static IP", "Destination 192.168.1.3:4196"],
    ["Workstation", "HMI PC", "Ethernet", "192.168.10.10", "SCADA client", "Static IP recommended"],
  ],
};
let selectedCommsModule = "relay1";
let aoSerialPort = null;
let eqpOnTestSerialPort = null;
const analogSerialConfigStorageKey = "hmiAnalogSerialConfig";
let aoSerialSettings = loadAnalogSerialSettings();
let aoModbusSlaveId = aoSerialSettings.slaveId;
const moduleConnectionConfigStorageKey = "hmiModuleConnectionConfig";
const moduleConnectionStatus = {};
const moduleConnectionDefaults = {
  relay1: { label: "Relay Module-1", panel: "Panel 1", transport: "ethernet", ipAddress: "192.168.1.200", tcpPort: 4196, protocol: "Modbus TCP / relay bridge", bridgeUrl: "http://127.0.0.1:8765", autoConnect: true },
  relay2: { label: "Relay Module-2", panel: "Panel 2", transport: "ethernet", ipAddress: "192.168.1.201", tcpPort: 4196, protocol: "Modbus TCP / relay bridge", bridgeUrl: "http://127.0.0.1:8766", autoConnect: false },
  io1: { label: "I/O Module-1", panel: "Panel 1", transport: "ethernet", ipAddress: "192.168.1.202", tcpPort: 502, protocol: "Modbus TCP / I/O bridge", bridgeUrl: "http://127.0.0.1:8771", autoConnect: true },
  io2: { label: "I/O Module-2", panel: "Panel 2", transport: "ethernet", ipAddress: "192.168.1.203", tcpPort: 502, protocol: "Modbus TCP / I/O bridge", bridgeUrl: "http://127.0.0.1:8771", autoConnect: false },
  analog1: { label: "4-20mA Module-1", panel: "Panel 1", transport: "serial", portLabel: "COM16", baudRate: 9600, dataBits: 8, stopBits: 1, parity: "none", slaveId: 1, protocol: "Modbus RTU", autoConnect: true },
  analog2: { label: "4-20mA Module-2", panel: "Panel 2", transport: "serial", portLabel: "COM16", baudRate: 9600, dataBits: 8, stopBits: 1, parity: "none", slaveId: 1, protocol: "Modbus RTU", autoConnect: false },
};
const aoState = Array.from({ length: 8 }, () => ({ value: 4000, readback: "--", active: false }));
const analogOutputByGasTag = {
  "AE-6304A": 0,
  "AE-6304B": 1,
  "AE-6304C": 2,
  "AE-6313": 3,
  "AE-3029": 4,
  "LM6-AE-3029": 4,
  "AE-3030": 5,
  "LM6-AE-3030": 5,
};
let gasAnalogWriteTimer = null;
let allestecIoPollTimer = null;
const allestecIoLastStates = { io1: {}, io2: {} };
const allestecIoBridgeUrl = "http://127.0.0.1:8771";
const hmiBridgeManagerUrl = "http://127.0.0.1:8780";
const eqpOnTestSerialSettings = { portLabel: "COM12", baudRate: 19200, dataBits: 8, stopBits: 1, parity: "none", slaveId: 1 };
const eqpOnTestCommandCoils = { Silence: 101, Acknowledge: 102, Ack: 102, Reset: 103 };
const eqpOnTestDeviceCoils = {
  "HS-3091": 104,
  "HS-3092": 104,
  "HS-3093": 105,
  "TS-3003": 106,
  "TS-3014": 107,
  "AE-3004A_LOW": 108,
  "AE-3004B_LOW": 109,
  "AE-3004C_LOW": 110,
  "AE-3029_LOW": 111,
  "AE-3030_LOW": 112,
  "YSZ-3171": 113,
  "YSZ-3172": 114,
  "AE-3004A_HH": 115,
  "AE-3004B_HH": 116,
  "AE-3004C_HH": 117,
  "AE-3029_HH": 118,
  "AE-3030_HH": 119,
  SUP: 120,
  TLB: 121,
};
const eqpOnTestLastCoilStates = {};
let eqpOnTestSyncTimer = null;

function loadAnalogSerialSettings() {
  const fallback = { portLabel: "COM16", baudRate: 9600, dataBits: 8, stopBits: 1, parity: "none", slaveId: 1 };
  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem(analogSerialConfigStorageKey) || "{}")) };
  } catch (error) {
    return fallback;
  }
}

function getAnalogSerialConfig() {
  return {
    baudRate: Number(aoSerialSettings.baudRate) || 9600,
    dataBits: Number(aoSerialSettings.dataBits) || 8,
    stopBits: Number(aoSerialSettings.stopBits) || 1,
    parity: aoSerialSettings.parity || "none",
  };
}

function saveAnalogSerialSettingsFromUi() {
  const portLabel = document.getElementById("ao-port-label")?.value?.trim() || "COM16";
  const baudRate = Number(document.getElementById("ao-baud-rate")?.value) || 9600;
  const dataBits = Number(document.getElementById("ao-data-bits")?.value) || 8;
  const stopBits = Number(document.getElementById("ao-stop-bits")?.value) || 1;
  const parity = document.getElementById("ao-parity")?.value || "none";
  const slaveId = Math.max(1, Math.min(247, Number(document.getElementById("ao-slave-id")?.value) || 1));
  aoSerialSettings = { portLabel, baudRate, dataBits, stopBits, parity, slaveId };
  aoModbusSlaveId = slaveId;
  localStorage.setItem(analogSerialConfigStorageKey, JSON.stringify(aoSerialSettings));
  setAoStatus(`RS485 settings saved: ${portLabel}, ${baudRate} ${dataBits}${parity[0]?.toUpperCase() || "N"}${stopBits}, Slave ${slaveId}.`);
}

function renderAnalogSerialSettings() {
  const settings = loadAnalogSerialSettings();
  aoSerialSettings = settings;
  aoModbusSlaveId = settings.slaveId;
  const values = {
    "ao-port-label": settings.portLabel,
    "ao-baud-rate": settings.baudRate,
    "ao-data-bits": settings.dataBits,
    "ao-stop-bits": settings.stopBits,
    "ao-parity": settings.parity,
    "ao-slave-id": settings.slaveId,
  };
  Object.entries(values).forEach(([id, value]) => {
    const field = document.getElementById(id);
    if (field) field.value = String(value);
  });
  const summary = document.getElementById("ao-config-summary");
  if (summary) summary.textContent = `${settings.portLabel} / ${settings.baudRate} ${settings.dataBits}${settings.parity[0]?.toUpperCase() || "N"}${settings.stopBits} / Slave ${settings.slaveId}`;
}

function getModuleConnectionConfigs() {
  try {
    const saved = JSON.parse(localStorage.getItem(moduleConnectionConfigStorageKey) || "{}");
    const configs = Object.fromEntries(
      Object.entries(moduleConnectionDefaults).map(([id, defaults]) => [id, { ...defaults, ...(saved[id] || {}) }])
    );
    ["io1", "io2"].forEach((id) => {
      if (!configs[id].bridgeUrl) configs[id].bridgeUrl = moduleConnectionDefaults[id].bridgeUrl;
      if (configs[id].protocol === "Modbus TCP") configs[id].protocol = moduleConnectionDefaults[id].protocol;
    });
    return configs;
  } catch (error) {
    return { ...moduleConnectionDefaults };
  }
}

function getModuleConnectionConfig(moduleName = selectedCommsModule) {
  return getModuleConnectionConfigs()[moduleName] || moduleConnectionDefaults.relay1;
}

function saveModuleConnectionConfig(moduleName = selectedCommsModule) {
  const current = getModuleConnectionConfig(moduleName);
  const next = { ...current };
  if (current.transport === "serial") {
    next.portLabel = document.getElementById("module-port-label")?.value?.trim() || current.portLabel || "COM16";
    next.baudRate = Number(document.getElementById("module-baud-rate")?.value) || current.baudRate || 9600;
    next.dataBits = Number(document.getElementById("module-data-bits")?.value) || current.dataBits || 8;
    next.stopBits = Number(document.getElementById("module-stop-bits")?.value) || current.stopBits || 1;
    next.parity = document.getElementById("module-parity")?.value || current.parity || "none";
    next.slaveId = Math.max(1, Math.min(247, Number(document.getElementById("module-slave-id")?.value) || current.slaveId || 1));
    if (moduleName === "analog1" || moduleName === "analog2") {
      aoSerialSettings = {
        portLabel: next.portLabel,
        baudRate: next.baudRate,
        dataBits: next.dataBits,
        stopBits: next.stopBits,
        parity: next.parity,
        slaveId: next.slaveId,
      };
      aoModbusSlaveId = next.slaveId;
      localStorage.setItem(analogSerialConfigStorageKey, JSON.stringify(aoSerialSettings));
    }
  } else {
    next.ipAddress = document.getElementById("module-ip-address")?.value?.trim() || current.ipAddress;
    next.tcpPort = Number(document.getElementById("module-tcp-port")?.value) || current.tcpPort;
    next.protocol = document.getElementById("module-protocol")?.value?.trim() || current.protocol;
    next.bridgeUrl = document.getElementById("module-bridge-url")?.value?.trim() || current.bridgeUrl || "";
  }
  next.autoConnect = Boolean(document.getElementById("module-autoconnect")?.checked);
  const saved = getModuleConnectionConfigs();
  saved[moduleName] = next;
  localStorage.setItem(moduleConnectionConfigStorageKey, JSON.stringify(saved));
  renderModuleConnectionConfig(moduleName);
  addEvent("COMMS", `${next.label} connection config saved.`);
}

function renderModuleConnectionConfig(moduleName = selectedCommsModule) {
  const panel = document.getElementById("module-config-panel");
  const grid = document.getElementById("module-config-grid");
  if (!panel || !grid) return;
  const config = getModuleConnectionConfig(moduleName);
  const status = moduleConnectionStatus[moduleName] || "Not connected.";
  document.getElementById("module-config-title").textContent = `${config.label} Configuration`;
  document.getElementById("module-config-summary").textContent = config.transport === "serial"
    ? `${config.panel} / ${config.protocol} / ${config.portLabel} / ${config.baudRate} ${config.dataBits}${config.parity[0]?.toUpperCase() || "N"}${config.stopBits} / Slave ${config.slaveId}`
    : `${config.panel} / ${config.protocol} / ${config.ipAddress}:${config.tcpPort}`;
  document.getElementById("module-status-line").textContent = status;
  grid.innerHTML = config.transport === "serial"
    ? `
      <label>Port Label<input id="module-port-label" type="text" value="${config.portLabel || "COM16"}" /></label>
      <label>Baud Rate<input id="module-baud-rate" type="number" value="${config.baudRate || 9600}" min="1200" step="1200" /></label>
      <label>Data Bits<input id="module-data-bits" type="number" value="${config.dataBits || 8}" min="7" max="8" /></label>
      <label>Stop Bits<input id="module-stop-bits" type="number" value="${config.stopBits || 1}" min="1" max="2" /></label>
      <label>Parity<select id="module-parity"><option value="none">None</option><option value="even">Even</option><option value="odd">Odd</option></select></label>
      <label>Slave ID<input id="module-slave-id" type="number" value="${config.slaveId || 1}" min="1" max="247" /></label>
      <label class="module-check-label"><input id="module-autoconnect" type="checkbox" ${config.autoConnect ? "checked" : ""} /> Auto Connect</label>`
    : `
      <label>IP Address<input id="module-ip-address" type="text" value="${config.ipAddress || ""}" /></label>
      <label>TCP Port<input id="module-tcp-port" type="number" value="${config.tcpPort || 502}" min="1" max="65535" /></label>
      <label>Protocol<input id="module-protocol" type="text" value="${config.protocol || "Modbus TCP"}" /></label>
      <label>Bridge URL<input id="module-bridge-url" type="text" value="${config.bridgeUrl || ""}" /></label>
      <label class="module-check-label"><input id="module-autoconnect" type="checkbox" ${config.autoConnect ? "checked" : ""} /> Auto Connect</label>`;
  const parity = document.getElementById("module-parity");
  if (parity) parity.value = config.parity || "none";
}

async function checkBridgeHealth(bridgeUrl, moduleName = "") {
  const moduleQuery = moduleName === "io1" || moduleName === "io2" ? `?module=${moduleName}` : "";
  const endpoint = moduleName === "io1" || moduleName === "io2" ? "inputs" : "health";
  const response = await fetch(`${bridgeUrl.replace(/\/$/, "")}/${endpoint}${moduleQuery}`, { cache: "no-store" });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) throw new Error(payload.error || `Bridge returned HTTP ${response.status}`);
  return payload;
}

async function requestBridgeManagerStart(target, restart = false) {
  const action = restart ? "restart" : "start";
  const response = await fetch(`${hmiBridgeManagerUrl}/${action}?target=${target}`, { cache: "no-store" });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) throw new Error(payload.error || `HTTP ${response.status}`);
  return payload;
}

async function connectSelectedCommsModule() {
  saveModuleConnectionConfig(selectedCommsModule);
  const config = getModuleConnectionConfig(selectedCommsModule);
  if (config.transport === "serial") {
    try {
      await connectAnalogSerial();
      moduleConnectionStatus[selectedCommsModule] = `Connected: ${config.portLabel} ${config.baudRate} ${config.dataBits}${config.parity[0]?.toUpperCase() || "N"}${config.stopBits}, Slave ${config.slaveId}.`;
    } catch (error) {
      moduleConnectionStatus[selectedCommsModule] = `Serial not connected: ${error.message}`;
    }
  } else {
    if (config.bridgeUrl) {
      try {
        if (selectedCommsModule === "io1" || selectedCommsModule === "io2") {
          moduleConnectionStatus[selectedCommsModule] = "Restarting I/O bridge...";
          renderModuleConnectionConfig(selectedCommsModule);
          await requestBridgeManagerStart("io", true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        await checkBridgeHealth(config.bridgeUrl, selectedCommsModule);
        moduleConnectionStatus[selectedCommsModule] = `Connected through bridge ${config.bridgeUrl} to ${config.ipAddress}:${config.tcpPort}.`;
        addEvent("COMMS", `${config.label} bridge connected at ${config.bridgeUrl}.`);
      } catch (error) {
        moduleConnectionStatus[selectedCommsModule] = `Bridge not connected: ${error.message}. Start the mini PC bridge/service and verify ${config.ipAddress}:${config.tcpPort}.`;
      }
    } else {
      moduleConnectionStatus[selectedCommsModule] = `Configured for ${config.ipAddress}:${config.tcpPort}. Ethernet Modbus requires the mini PC bridge/service before live browser control.`;
      addEvent("COMMS", `${config.label} configured at ${config.ipAddress}:${config.tcpPort}.`);
    }
  }
  renderModuleConnectionConfig(selectedCommsModule);
}

function disconnectSelectedCommsModule() {
  const config = getModuleConnectionConfig(selectedCommsModule);
  moduleConnectionStatus[selectedCommsModule] = "Disconnected.";
  if (config.transport === "serial" && aoSerialPort?.readable) {
    moduleConnectionStatus[selectedCommsModule] = "Serial disconnect requested. Close/reopen the HMI if the browser keeps the USB port reserved.";
  }
  renderModuleConnectionConfig(selectedCommsModule);
  addEvent("COMMS", `${config.label} disconnected.`);
}

async function autoConnectConfiguredModules() {
  if (getCommsProfileKey() !== "lm6000Allestec") return;
  const configs = getModuleConnectionConfigs();
  for (const [moduleName, config] of Object.entries(configs)) {
    if (!config.autoConnect) continue;
    if (config.transport === "serial") {
      try {
        aoSerialSettings = {
          portLabel: config.portLabel || "COM16",
          baudRate: config.baudRate || 9600,
          dataBits: config.dataBits || 8,
          stopBits: config.stopBits || 1,
          parity: config.parity || "none",
          slaveId: config.slaveId || 1,
        };
        aoModbusSlaveId = aoSerialSettings.slaveId;
        await connectAnalogSerial({ prompt: false });
        moduleConnectionStatus[moduleName] = `Auto connected: ${aoSerialSettings.portLabel} ${aoSerialSettings.baudRate} ${aoSerialSettings.dataBits}${aoSerialSettings.parity[0]?.toUpperCase() || "N"}${aoSerialSettings.stopBits}, Slave ${aoModbusSlaveId}.`;
      } catch (error) {
        moduleConnectionStatus[moduleName] = `Auto connect waiting: ${error.message}`;
      }
    } else if (config.bridgeUrl) {
      try {
        await checkBridgeHealth(config.bridgeUrl, moduleName);
        moduleConnectionStatus[moduleName] = `Auto connected through bridge ${config.bridgeUrl}.`;
      } catch (error) {
        moduleConnectionStatus[moduleName] = `Auto connect waiting: start bridge/service for ${config.ipAddress}:${config.tcpPort}.`;
      }
    } else {
      moduleConnectionStatus[moduleName] = `Auto connect configured. Bridge/service required for ${config.ipAddress}:${config.tcpPort}.`;
    }
  }
  renderModuleConnectionConfig(selectedCommsModule);
}

function modbusCrc(bytes) {
  let crc = 0xffff;
  bytes.forEach((byte) => {
    crc ^= byte;
    for (let i = 0; i < 8; i++) crc = (crc & 1) ? ((crc >> 1) ^ 0xa001) : (crc >> 1);
  });
  return crc & 0xffff;
}

function modbusFrame(body) {
  const crc = modbusCrc(body);
  return new Uint8Array([...body, crc & 0xff, (crc >> 8) & 0xff]);
}

function modbusWriteSingleRegisterFrame(slaveId, register, value) {
  return modbusFrame([slaveId, 6, (register >> 8) & 0xff, register & 0xff, (value >> 8) & 0xff, value & 0xff]);
}

function modbusWriteSingleCoilFrame(slaveId, coilAddress, active) {
  const value = active ? 0xff00 : 0x0000;
  return modbusFrame([slaveId, 5, (coilAddress >> 8) & 0xff, coilAddress & 0xff, (value >> 8) & 0xff, value & 0xff]);
}

function modbusReadHoldingRegisterFrame(slaveId, register, qty = 1) {
  return modbusFrame([slaveId, 3, (register >> 8) & 0xff, register & 0xff, (qty >> 8) & 0xff, qty & 0xff]);
}

function modbusCrcOk(bytes) {
  if (!bytes || bytes.length < 5) return false;
  const body = bytes.slice(0, -2);
  const crc = modbusCrc([...body]);
  return (crc & 0xff) === bytes[bytes.length - 2] && ((crc >> 8) & 0xff) === bytes[bytes.length - 1];
}

function bytesToHex(bytes) {
  return [...bytes].map((byte) => byte.toString(16).toUpperCase().padStart(2, "0")).join(" ");
}

function isTm2500Project() {
  return getCommsProfileKey() === "tm2500";
}

function isEqpWriteProject() {
  return isTm2500Project() || isLm6000EqpProject();
}

function setEqpOnTestStatus(message, isError = false) {
  const status = document.getElementById("eqp-on-test-status");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("error", isError);
}

async function serialTransactionOnPort(port, frame, expectedMinLength = 5, timeoutMs = 900) {
  if (!port || !port.writable || !port.readable) throw new Error("Serial port is not connected.");
  const writer = port.writable.getWriter();
  await writer.write(frame);
  writer.releaseLock();

  const reader = port.readable.getReader();
  const chunks = [];
  const started = Date.now();
  try {
    while (Date.now() - started < timeoutMs) {
      const result = await Promise.race([
        reader.read(),
        new Promise((resolve) => setTimeout(() => resolve({ timeout: true }), 120)),
      ]);
      if (result.timeout) {
        if (chunks.reduce((sum, chunk) => sum + chunk.length, 0) >= expectedMinLength) break;
        continue;
      }
      if (result.done) break;
      if (result.value) chunks.push(result.value);
      if (chunks.reduce((sum, chunk) => sum + chunk.length, 0) >= expectedMinLength) break;
    }
  } finally {
    reader.releaseLock();
  }
  const length = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const response = new Uint8Array(length);
  let offset = 0;
  chunks.forEach((chunk) => { response.set(chunk, offset); offset += chunk.length; });
  return response;
}

async function connectEqpOnTestSerial(options = {}) {
  const promptForPort = options.prompt !== false;
  if (!("serial" in navigator)) {
    setEqpOnTestStatus("Web Serial is not available. Open this HMI in Microsoft Edge or Chrome from localhost.", true);
    throw new Error("Web Serial is not available.");
  }
  if (!eqpOnTestSerialPort && navigator.serial.getPorts) {
    const authorizedPorts = await navigator.serial.getPorts();
    eqpOnTestSerialPort = authorizedPorts[0] || null;
  }
  if (!eqpOnTestSerialPort && promptForPort) eqpOnTestSerialPort = await navigator.serial.requestPort();
  if (!eqpOnTestSerialPort) throw new Error("No authorized EQP serial port. Press CONNECT EQP COM12 and select the USB/RS485 adapter.");
  if (!eqpOnTestSerialPort.readable || !eqpOnTestSerialPort.writable) {
    await eqpOnTestSerialPort.open({
      baudRate: eqpOnTestSerialSettings.baudRate,
      dataBits: eqpOnTestSerialSettings.dataBits,
      stopBits: eqpOnTestSerialSettings.stopBits,
      parity: eqpOnTestSerialSettings.parity,
    });
  }
  setEqpOnTestStatus("EQP writer connected: COM12 / 19200 8N1 / Slave 1. Virtual EQP test inputs will be reflected to the real EQP panel.");
}

function getEqpOnTestCoilAddress(displayAddress) {
  return Math.max(0, Number(displayAddress) - 1);
}

async function writeEqpOnTestCoil(displayAddress, active, label = "") {
  if (!isEqpWriteProject()) return false;
  try {
    if (!eqpOnTestSerialPort) {
      if (!navigator.serial?.getPorts) throw new Error("Web Serial is not available.");
      const ports = await navigator.serial.getPorts();
      eqpOnTestSerialPort = ports[0] || null;
      if (!eqpOnTestSerialPort) return false;
    }
    await connectEqpOnTestSerial({ prompt: false });
    const frame = modbusWriteSingleCoilFrame(eqpOnTestSerialSettings.slaveId, getEqpOnTestCoilAddress(displayAddress), active);
    const response = await serialTransactionOnPort(eqpOnTestSerialPort, frame, 8);
    if (!modbusCrcOk(response)) throw new Error(`CRC failed. RX ${bytesToHex(response)}`);
    setEqpOnTestStatus(`EQP write ${label || `coil ${String(displayAddress).padStart(5, "0")}`} = ${active ? "ON" : "OFF"}.`);
    return true;
  } catch (error) {
    setEqpOnTestStatus(`EQP write failed: ${error.message}`, true);
    addEvent("COMMS", `EQP write failed${label ? ` (${label})` : ""}: ${error.message}`);
    return false;
  }
}

async function pulseEqpOnTestCommand(commandName) {
  if (!isEqpWriteProject()) return;
  const displayAddress = eqpOnTestCommandCoils[commandName];
  if (!displayAddress) return;
  const label = `${commandName} ${String(displayAddress).padStart(5, "0")}`;
  const ok = await writeEqpOnTestCoil(displayAddress, true, label);
  if (ok) window.setTimeout(() => writeEqpOnTestCoil(displayAddress, false, `${label} clear`), 450);
}

function buildEqpOnTestCoilStates() {
  const state = {};
  const active = (tag, statuses) => statuses.includes(devices[resolveDeviceId(tag)]?.status);
  const activeAny = (tags, statuses) => tags.some((tag) => active(tag, statuses));
  if (isLm6000EqpProject()) {
    state["HS-3091"] = activeAny(["HS-6308", "HS-6309", "HS-6312"], ["Alarm Active", "Input Active", "Fire Alarm"]);
    state["HS-3093"] = false;
    state["TS-3003"] = activeAny(["TS-6303", "TS-6314"], ["Fire Alarm", "Alarm Active"]);
    state["TS-3014"] = activeAny(["TS-6307", "TS-6310"], ["Fire Alarm", "Alarm Active"]);
    [
      ["AE-3004A", "AE-6304A"],
      ["AE-3004B", "AE-6304B"],
      ["AE-3004C", "AE-6304C"],
      ["AE-3029", "AE-3029"],
      ["AE-3030", "AE-3030"],
    ].forEach(([coilTag, deviceTag]) => {
      state[`${coilTag}_LOW`] = active(deviceTag, ["Low Gas"]);
      state[`${coilTag}_HH`] = active(deviceTag, ["High Gas"]);
    });
    state["YSZ-3171"] = activeAny(["SOV-6359", "SOV-6360"], ["Alarm Active", "Output Active"]);
    state["YSZ-3172"] = activeAny(["SOV-6361", "SOV-6362"], ["Alarm Active", "Output Active"]);
    state.SUP = activeAny(["ZS-6364"], ["Inhibit", "Supervisory"]);
    state.TLB = hasTroubleCondition();
    return state;
  }
  state["HS-3092"] = active("HS-3092", ["Alarm Active", "Input Active"]);
  state["HS-3093"] = active("HS-3093", ["Alarm Active", "Input Active"]);
  state["TS-3003"] = active("TS-3003", ["Fire Alarm", "Alarm Active"]);
  state["TS-3014"] = active("TS-3014", ["Fire Alarm", "Alarm Active"]);
  ["AE-3004A", "AE-3004B", "AE-3004C", "AE-3029", "AE-3030"].forEach((tag) => {
    state[`${tag}_LOW`] = active(tag, ["Low Gas"]);
    state[`${tag}_HH`] = active(tag, ["High Gas"]);
  });
  state["YSZ-3171"] = active("YSZ-3171", ["Alarm Active", "Output Active"]);
  state["YSZ-3172"] = active("YSZ-3172", ["Alarm Active", "Output Active"]);
  state.SUP = active("HS-3081", ["Inhibit", "Supervisory"]) || active("HS-3040", ["Supervisory"]);
  state.TLB = hasTroubleCondition();
  return state;
}

async function syncEqpOnTestCoils() {
  if (!isEqpWriteProject()) return;
  const next = buildEqpOnTestCoilStates();
  for (const [key, value] of Object.entries(next)) {
    if (eqpOnTestLastCoilStates[key] === value) continue;
    eqpOnTestLastCoilStates[key] = value;
    const displayAddress = eqpOnTestDeviceCoils[key];
    if (displayAddress) await writeEqpOnTestCoil(displayAddress, value, `${key} ${String(displayAddress).padStart(5, "0")}`);
  }
}

function queueEqpOnTestSync() {
  if (!isEqpWriteProject()) return;
  window.clearTimeout(eqpOnTestSyncTimer);
  eqpOnTestSyncTimer = window.setTimeout(() => {
    syncEqpOnTestCoils();
  }, 120);
}

function setAoStatus(message, isError = false) {
  const status = document.getElementById("ao-status");
  const gasStatus = document.getElementById("gas-output-status");
  if (status) {
    status.textContent = message;
    status.style.color = isError ? "#ff6b6b" : "";
  }
  if (gasStatus) {
    gasStatus.textContent = message;
    gasStatus.style.color = isError ? "#ff6b6b" : "";
  }
}

function gasPercentToAnalogValue(percent) {
  const safePercent = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  return Math.round(4000 + ((safePercent / 100) * 8000));
}

function getAnalogRegisterForGasDevice(deviceId = selectedDeviceId) {
  const resolvedId = resolveDeviceId(deviceId);
  const rawTag = getDeviceRawTag(resolvedId);
  if (Object.prototype.hasOwnProperty.call(analogOutputByGasTag, resolvedId)) return analogOutputByGasTag[resolvedId];
  if (Object.prototype.hasOwnProperty.call(analogOutputByGasTag, rawTag)) return analogOutputByGasTag[rawTag];
  return null;
}

function queuePhysicalGasAnalogOutput(percent, deviceId = selectedDeviceId) {
  const register = getAnalogRegisterForGasDevice(deviceId);
  const displayTag = getDeviceDisplayTag(deviceId);
  if (register === null) {
    const status = document.getElementById("gas-output-status");
    if (status) status.textContent = `${displayTag} has no 4-20 mA output mapped.`;
    return;
  }
  if (!aoSerialPort || !aoSerialPort.readable || !aoSerialPort.writable) {
    const status = document.getElementById("gas-output-status");
    if (status) status.textContent = `Press PANEL 1 or PANEL 2 to connect RS485, then move ${displayTag} again.`;
    return;
  }
  const safePercent = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  const value = gasPercentToAnalogValue(safePercent);
  window.clearTimeout(gasAnalogWriteTimer);
  gasAnalogWriteTimer = window.setTimeout(async () => {
    try {
      await setAnalogOutput(register, value);
      setAoStatus(`${displayTag} ${safePercent}% LEL -> ${(value / 1000).toFixed(1)} mA on AO${register + 1}.`);
    } catch (error) {
      setAoStatus(`Gas output failed: ${error.message}`, true);
    }
  }, 180);
}

function isAnalogCommsModule(moduleName = selectedCommsModule) {
  return moduleName === "analog1" || moduleName === "analog2";
}

function renderAnalogOutputConsole(moduleName = selectedCommsModule) {
  const consolePanel = document.getElementById("analog-output-console");
  const grid = document.getElementById("analog-output-grid");
  if (!consolePanel || !grid) return;
  const visible = isAnalogCommsModule(moduleName);
  consolePanel.hidden = !visible;
  if (!visible) return;
  renderAnalogSerialSettings();
  grid.innerHTML = aoState.map((state, index) => {
    const ao = index + 1;
    return `<article class="analog-output-card ${state.active ? "is-active" : ""}" data-ao-card="${ao}">
      <h4>AO${ao}<span>Register ${index}</span></h4>
      <div class="ao-readback">${state.readback} mA</div>
      <div class="ao-button-row">
        <button type="button" data-ao-set="${index}" data-value="4000">4 mA</button>
        <button type="button" data-ao-set="${index}" data-value="12000">12 mA</button>
        <button type="button" data-ao-set="${index}" data-value="20000">20 mA</button>
      </div>
      <div class="ao-manual-row">
        <input type="number" min="4" max="20" step="0.1" value="${(state.value / 1000).toFixed(1)}" data-ao-input="${index}" aria-label="AO${ao} manual mA">
        <button type="button" data-ao-apply="${index}">SEND</button>
      </div>
    </article>`;
  }).join("");
}

function renderEqpOnTestConsole(visible = false) {
  const consolePanel = document.getElementById("eqp-on-test-console");
  const summary = document.getElementById("eqp-on-test-config-summary");
  if (!consolePanel) return;
  consolePanel.hidden = !visible;
  if (summary) summary.textContent = `${eqpOnTestSerialSettings.portLabel} / ${eqpOnTestSerialSettings.baudRate} 8N1 / Slave ${eqpOnTestSerialSettings.slaveId}`;
}

async function connectAnalogSerial(options = {}) {
  const promptForPort = options.prompt !== false;
  if (!("serial" in navigator)) {
    setAoStatus("Web Serial is not available. Open this HMI in Microsoft Edge or Chrome from localhost.", true);
    return;
  }
  try {
    if (!aoSerialPort && navigator.serial.getPorts) {
      const authorizedPorts = await navigator.serial.getPorts();
      aoSerialPort = authorizedPorts[0] || null;
    }
    if (!aoSerialPort && promptForPort) aoSerialPort = await navigator.serial.requestPort();
    if (!aoSerialPort) throw new Error("No authorized serial port yet. Press CONNECT MODULE once and select the USB/RS485 port.");
    if (!aoSerialPort.readable || !aoSerialPort.writable) await aoSerialPort.open(getAnalogSerialConfig());
    setAoStatus(`RS485 connected: ${aoSerialSettings.portLabel} ${aoSerialSettings.baudRate} ${aoSerialSettings.dataBits}${aoSerialSettings.parity[0]?.toUpperCase() || "N"}${aoSerialSettings.stopBits}, Slave ${aoModbusSlaveId}. Gas slider now controls 4-12 mA outputs.`);
  } catch (error) {
    setAoStatus(`RS485 connection failed: ${error.message}`, true);
    throw error;
  }
}

async function serialTransaction(frame, expectedMinLength = 5) {
  if (!aoSerialPort || !aoSerialPort.writable || !aoSerialPort.readable) await connectAnalogSerial();
  if (!aoSerialPort || !aoSerialPort.writable || !aoSerialPort.readable) throw new Error("Serial port is not connected.");
  const writer = aoSerialPort.writable.getWriter();
  await writer.write(frame);
  writer.releaseLock();

  const reader = aoSerialPort.readable.getReader();
  const chunks = [];
  const started = Date.now();
  try {
    while (Date.now() - started < 900) {
      const result = await Promise.race([
        reader.read(),
        new Promise((resolve) => setTimeout(() => resolve({ timeout: true }), 120)),
      ]);
      if (result.timeout) {
        if (chunks.reduce((sum, chunk) => sum + chunk.length, 0) >= expectedMinLength) break;
        continue;
      }
      if (result.done) break;
      if (result.value) chunks.push(result.value);
      if (chunks.reduce((sum, chunk) => sum + chunk.length, 0) >= expectedMinLength) break;
    }
  } finally {
    reader.releaseLock();
  }
  const length = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const response = new Uint8Array(length);
  let offset = 0;
  chunks.forEach((chunk) => { response.set(chunk, offset); offset += chunk.length; });
  return response;
}

async function setAnalogOutput(register, value) {
  const safeValue = Math.max(4000, Math.min(20000, Number(value) || 4000));
  const writeFrame = modbusWriteSingleRegisterFrame(aoModbusSlaveId, register, safeValue);
  const writeResponse = await serialTransaction(writeFrame, 8);
  if (!modbusCrcOk(writeResponse)) throw new Error(`Write CRC failed. RX ${bytesToHex(writeResponse)}`);
  const readFrame = modbusReadHoldingRegisterFrame(aoModbusSlaveId, register, 1);
  const readResponse = await serialTransaction(readFrame, 7);
  if (!modbusCrcOk(readResponse)) throw new Error(`Readback CRC failed. RX ${bytesToHex(readResponse)}`);
  const readValue = readResponse.length >= 5 ? ((readResponse[3] << 8) | readResponse[4]) : safeValue;
  aoState.forEach((state) => { state.active = false; });
  aoState[register] = { value: readValue, readback: (readValue / 1000).toFixed(1), active: readValue > 4000 };
  renderAnalogOutputConsole();
  setAoStatus(`AO${register + 1} set to ${(readValue / 1000).toFixed(1)} mA. TX ${bytesToHex(writeFrame)} / RX ${bytesToHex(writeResponse)}`);
}

async function setAllAnalogOutputs(value) {
  for (let register = 0; register < 8; register++) await setAnalogOutput(register, value);
  setAoStatus(`AO1-AO8 set to ${(value / 1000).toFixed(1)} mA.`);
}

function getCommsProfileKey(projectName = selectedProject) {
  if (isAllestecProjectName(projectName)) return "lm6000Allestec";
  const family = getProjectFamily(projectName);
  if (family === "lm6000") return "lm6000Eqp";
  if (family === "lms100") return "lms100";
  return "tm2500";
}

function renderCommsCards(cards, activeId = "") {
  const grid = document.querySelector(".comms-grid");
  if (!grid) return;
  grid.innerHTML = cards
    .map(([id, title, subtitle]) => `<button class="comms-card selectable-comms-card ${id === activeId ? "active" : ""}" type="button" data-comms-module="${id}"><b>${title}</b><span>${subtitle}</span></button>`)
    .join("");
}

function renderStaticCommsProfile(profile) {
  const table = document.getElementById("comms-map-table");
  if (!table) return;
  renderCommsCards(profile.cards, profile.cards[0]?.[0] || "");
  renderEqpOnTestConsole(isEqpWriteProject());
  const saveButton = document.getElementById("comms-save-map");
  if (saveButton) saveButton.hidden = true;
  const headers = ["DETAIL", "SYSTEM", "CHANNEL", "DEVICE", "SIGNAL", "NOTES"];
  table.innerHTML = [
    ...headers.map((header) => `<div class="table-header">${header}</div>`),
    ...profile.rows.flatMap((row) => row.map((cell) => `<div>${cell || ""}</div>`)),
  ].join("");
}

function getAllestecCommsMap() {
  try {
    const saved = JSON.parse(localStorage.getItem(allestecCommsMapStorageKey) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    const savedNetworkText = Array.isArray(saved.network) ? saved.network.flat().join(" ") : "";
    if (
      (savedNetworkText.includes("192.168.10.42") && !savedNetworkText.includes("192.168.1.200")) ||
      savedNetworkText.includes("IP TBD") ||
      !savedNetworkText.includes("192.168.1.203")
    ) {
      saved.network = allestecCommsMapDefaults.network;
      localStorage.setItem(allestecCommsMapStorageKey, JSON.stringify(saved));
    }
    return saved;
  } catch {
    return {};
  }
}

function getCommsRows(moduleName = selectedCommsModule) {
  const saved = getAllestecCommsMap();
  return saved[moduleName] || allestecCommsMapDefaults[moduleName] || [];
}

function renderCommsMap(moduleName = selectedCommsModule) {
  const table = document.getElementById("comms-map-table");
  if (!table) return;
  const profileKey = getCommsProfileKey();
  if (profileKey !== "lm6000Allestec") {
    renderAnalogOutputConsole("");
    if (!isEqpWriteProject()) renderEqpOnTestConsole(false);
    renderStaticCommsProfile(projectCommsProfiles[profileKey] || projectCommsProfiles.tm2500);
    return;
  }
  renderEqpOnTestConsole(false);
  if (!allestecCommsMapDefaults[moduleName]) moduleName = "relay1";
  selectedCommsModule = moduleName;
  renderCommsCards(
    [
      ["relay1", "Relay Module-1", "Panel 1 relay inputs"],
      ["relay2", "Relay Module-2", "Panel 2 relay inputs"],
      ["io1", "I/O Module-1", "Panel 1 digital I/O"],
      ["io2", "I/O Module-2", "Panel 2 digital I/O"],
      ["analog1", "4-20mA Module-1", "Panel 1 analog outputs"],
      ["analog2", "4-20mA Module-2", "Panel 2 analog outputs"],
      ["network", "Protocol", "RS485 Modbus RTU / Ethernet devices"],
    ],
    moduleName
  );
  const saveButton = document.getElementById("comms-save-map");
  if (saveButton) saveButton.hidden = false;
  const headers = ["DETAIL", "PANEL", "CHANNEL", "DEVICE", "SIGNAL", "NOTES"];
  const rows = getCommsRows(moduleName);
  table.innerHTML = [
    ...headers.map((header) => `<div class="table-header">${header}</div>`),
    ...rows.flatMap((row, rowIndex) =>
      commsColumns.map((column, columnIndex) => `<div contenteditable="true" data-row="${rowIndex}" data-column="${column}" data-column-index="${columnIndex}">${row[columnIndex] || ""}</div>`)
    ),
  ].join("");
  renderModuleConnectionConfig(moduleName);
  renderAnalogOutputConsole(moduleName);
}

function saveAllestecCommsMap() {
  if (getCommsProfileKey() !== "lm6000Allestec") {
    addEvent("COMMS", "Static project communications profile selected. No Allestec module map saved.");
    return;
  }
  const rows = [];
  document.querySelectorAll("#comms-map-table > div[contenteditable='true']").forEach((cell) => {
    const rowIndex = Number(cell.dataset.row);
    const columnIndex = Number(cell.dataset.columnIndex);
    rows[rowIndex] ||= [];
    rows[rowIndex][columnIndex] = cell.textContent.trim();
  });
  const saved = getAllestecCommsMap();
  saved[selectedCommsModule] = rows;
  localStorage.setItem(allestecCommsMapStorageKey, JSON.stringify(saved));
  addEvent("COMMS", `${selectedCommsModule.toUpperCase()} module channel map saved.`);
}

function applyAllestecCommsMap() {
  renderCommsMap(selectedCommsModule);
}

function selectCommsModule(moduleName) {
  if (getCommsProfileKey() !== "lm6000Allestec") return;
  document.querySelectorAll(".selectable-comms-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.commsModule === moduleName);
  });
  renderCommsMap(moduleName);
}

function getAllestecGraphicLayoutState() {
  try {
    return JSON.parse(localStorage.getItem(allestecGraphicLayoutStorageKey) || "{}");
  } catch {
    return {};
  }
}

function saveAllestecGraphicLayoutState(state) {
  localStorage.setItem(allestecGraphicLayoutStorageKey, JSON.stringify(state));
}

function applyAllestecGraphicLayoutState() {
  const saved = getAllestecGraphicLayoutState();
  document.querySelectorAll("#lm6000-allestec-view [data-allestec-layout-id]").forEach((element) => {
    const state = saved[element.dataset.allestecLayoutId];
    if (!state) return;
    if (element instanceof SVGElement) {
      const scale = state.scale && state.scale !== 1 ? ` scale(${state.scale})` : "";
      element.setAttribute("transform", `translate(${state.x || 0} ${state.y || 0})${scale}`);
      return;
    }
    element.style.transform = `translate(${state.x || 0}px, ${state.y || 0}px)`;
    if (state.width) element.style.width = `${state.width}px`;
    if (state.height) element.style.height = `${state.height}px`;
  });
}

function getAllestecGraphicElementState(element) {
  const saved = getAllestecGraphicLayoutState();
  const id = element.dataset.allestecLayoutId;
  if (element instanceof SVGElement) {
    const transform = element.getAttribute("transform") || "";
    const translate = parseTranslate(transform);
    const scaleMatch = /scale\(([-\d.]+)\)/.exec(transform);
    return saved[id] || { x: translate.x, y: translate.y, scale: scaleMatch ? Number(scaleMatch[1]) : 1 };
  }
  const rect = element.getBoundingClientRect();
  return saved[id] || { x: 0, y: 0, width: rect.width, height: rect.height };
}

function setAllestecGraphicElementState(element, state) {
  if (element instanceof SVGElement) {
    const scale = state.scale && state.scale !== 1 ? ` scale(${state.scale})` : "";
    element.setAttribute("transform", `translate(${state.x || 0} ${state.y || 0})${scale}`);
    return;
  }
  element.style.transform = `translate(${state.x || 0}px, ${state.y || 0}px)`;
  if (state.width) element.style.width = `${state.width}px`;
  if (state.height) element.style.height = `${state.height}px`;
}

function saveAllestecGraphicElementState(element, state) {
  const saved = getAllestecGraphicLayoutState();
  saved[element.dataset.allestecLayoutId] = state;
  saveAllestecGraphicLayoutState(saved);
}

function selectAllestecGraphicElement(element) {
  document.querySelectorAll("#lm6000-allestec-view .allestec-selected-edit").forEach((item) => item.classList.remove("allestec-selected-edit"));
  element.classList.add("allestec-selected-edit");
  setAllestecMoveStatus(`Editing: ${element.dataset.allestecLayoutId}`);
}

function setAllestecGraphicEditMode(enabled) {
  if (enabled && allestecMoveMode) setAllestecMoveMode(false);
  allestecGraphicEditMode = enabled;
  document.getElementById("lm6000-allestec-view")?.classList.toggle("allestec-graphic-edit-mode", enabled);
  const toggle = document.getElementById("allestec-graphic-edit-toggle");
  toggle?.classList.toggle("active", enabled);
  if (toggle) toggle.textContent = enabled ? "GRAPHIC ON" : "EDIT GRAPHIC";
  setAllestecMoveStatus(enabled ? "Graphic edit ON" : "");
  if (!enabled) {
    document.querySelectorAll("#lm6000-allestec-view .allestec-selected-edit").forEach((item) => item.classList.remove("allestec-selected-edit"));
  }
}

function resetAllestecDevicePositions() {
  localStorage.removeItem(allestecLayoutStorageKey);
  localStorage.removeItem(allestecGraphicLayoutStorageKey);
  window.location.reload();
}

function getElementDeviceIds(element) {
  const raw = element.dataset.devices || element.dataset.device || "";
  const direct = raw.split(",").map((tag) => tag.trim()).filter(Boolean);
  return direct
    .flatMap((tag) => graphicDeviceGroups[tag] || [tag])
    .map((tag) => resolveDeviceId(tag))
    .filter((tag) => devices[tag]);
}

function findAllestecDeviceBadge(event) {
  const selector = ".allestec-html-device[data-device], .device-badge[data-device], .field-device[data-device], .eqp-controller[data-device], .wired-point[data-device]";
  const pathMatch = event.composedPath?.().find((item) => item instanceof Element && item.matches?.(selector));
  const directMatch = pathMatch || event.target.closest?.(selector);
  if (directMatch) return directMatch;

  const layer = event.target.closest?.(".allestec-device-layer, .co2-device-layer");
  if (!layer) return null;
  const point = { x: event.clientX, y: event.clientY };
  const candidates = Array.from(layer.querySelectorAll(".device-badge[data-device]"));
  return candidates.find((badge) => {
    const rect = badge.getBoundingClientRect();
    const pad = 26;
    return point.x >= rect.left - pad && point.x <= rect.right + pad && point.y >= rect.top - pad && point.y <= rect.bottom + pad;
  }) || null;
}

function beginAllestecDeviceDrag(event, badge) {
  if (!allestecMoveMode || !badge) return;
  event.preventDefault();
  event.stopPropagation();

  document.querySelectorAll(".allestec-selected-edit").forEach((item) => item.classList.remove("allestec-selected-edit"));
  badge.classList.add("allestec-selected-edit");
  setAllestecMoveStatus(`Moving: ${badge.dataset.device}`);

  if (badge.classList.contains("allestec-html-device")) {
    const parent = badge.offsetParent || badge.parentElement;
    const rect = parent.getBoundingClientRect();
    const original = getAllestecDeviceTransform(badge);
    allestecDragState = {
      element: badge,
      mode: "html-device",
      startClientX: event.clientX,
      startClientY: event.clientY,
      parentWidth: rect.width,
      parentHeight: rect.height,
      originalX: original.x,
      originalY: original.y,
      scale: original.scale,
    };
    return;
  }

  const svg = badge.ownerSVGElement;
  const startPoint = getSvgPoint(event, svg);
  const original = getAllestecDeviceTransform(badge);
  allestecDragState = {
    element: badge,
    startX: startPoint.x,
    startY: startPoint.y,
    originalX: original.x,
    originalY: original.y,
    scale: original.scale,
  };
}

document.querySelectorAll(".field-device, .eqp-controller, .device-badge, .topology-node, .controller-node, .wired-point").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.closest(".co2-device-layer")) return;
    if (!layoutEditMode && !allestecMoveMode && button.dataset.device) {
      const deviceIds = getElementDeviceIds(button);
      const primaryDeviceId = deviceIds[0] || button.dataset.device;
      selectDevice(primaryDeviceId);
    }
  });

  button.addEventListener("dblclick", () => {
    if (button.closest(".co2-device-layer")) return;
    if (layoutEditMode || allestecMoveMode) return;
    const deviceIds = getElementDeviceIds(button);
    const primaryDeviceId = deviceIds[0] || button.dataset.device;
    if (!primaryDeviceId) return;
    selectDevice(primaryDeviceId);
    if (button.classList.contains("topology-node") || button.classList.contains("controller-node")) {
      showView("devices");
      openDeviceInfoWindow(primaryDeviceId);
      return;
    }
    if (button.classList.contains("wired-point")) {
      showView("devices");
      openDeviceInfoWindow(primaryDeviceId, deviceIds);
      return;
    }
    if (button.classList.contains("device-badge") || button.classList.contains("field-device")) {
      triggerGraphicInput(primaryDeviceId);
    }
  });
});

document.getElementById("lm6000-allestec-view")?.addEventListener("click", (event) => {
  const badge = event.target.closest?.(".co2-device-layer .device-badge[data-device]");
  if (!badge || layoutEditMode || allestecMoveMode) return;
  event.stopPropagation();
  selectDevice(badge.dataset.device);
});

document.getElementById("lm6000-allestec-view")?.addEventListener("dblclick", (event) => {
  const badge = event.target.closest?.(".co2-device-layer .device-badge[data-device]");
  if (!badge || layoutEditMode || allestecMoveMode) return;
  event.stopPropagation();
  selectDevice(badge.dataset.device);
  triggerGraphicInput(badge.dataset.device);
});

document.getElementById("lm6000-allestec-view")?.addEventListener("click", (event) => {
  const badge = event.target.closest?.(".allestec-device-layer .device-badge[data-device]");
  if (!badge || layoutEditMode || allestecMoveMode) return;
  event.stopPropagation();
  const deviceIds = getElementDeviceIds(badge);
  selectDevice(deviceIds[0] || badge.dataset.device);
});

document.getElementById("lm6000-allestec-view")?.addEventListener("dblclick", (event) => {
  const badge = event.target.closest?.(".allestec-device-layer .device-badge[data-device]");
  if (!badge || layoutEditMode || allestecMoveMode) return;
  event.preventDefault();
  event.stopPropagation();
  const deviceIds = getElementDeviceIds(badge);
  const primaryDeviceId = deviceIds[0] || badge.dataset.device;
  selectDevice(primaryDeviceId);
  triggerGraphicInput(primaryDeviceId);
});

document.getElementById("lm6000-allestec-view")?.addEventListener("click", (event) => {
  const deviceButton = event.target.closest?.(".allestec-html-device[data-device]");
  if (!deviceButton || layoutEditMode || allestecMoveMode) return;
  event.stopPropagation();
  selectDevice(resolveDeviceId(deviceButton.dataset.device));
});

document.getElementById("lm6000-allestec-view")?.addEventListener("dblclick", (event) => {
  const deviceButton = event.target.closest?.(".allestec-html-device[data-device]");
  if (!deviceButton || layoutEditMode || allestecMoveMode) return;
  event.preventDefault();
  event.stopPropagation();
  const deviceId = resolveDeviceId(deviceButton.dataset.device);
  selectDevice(deviceId);
  triggerGraphicInput(deviceId);
});

document.getElementById("lm6000-allestec-view")?.addEventListener("mousedown", (event) => {
  if (!allestecMoveMode) return;
  beginAllestecDeviceDrag(event, findAllestecDeviceBadge(event));
});

["package-view", "lm6000-view"].forEach((viewId) => {
  document.getElementById(viewId)?.addEventListener("mousedown", (event) => {
    if (!allestecMoveMode) return;
    beginAllestecDeviceDrag(event, findAllestecDeviceBadge(event));
  });
});

document.querySelectorAll(".co2-hitbox[data-device]").forEach((hitbox) => {
  hitbox.addEventListener("click", (event) => {
    event.stopPropagation();
    if (layoutEditMode || allestecMoveMode) return;
    selectDevice(hitbox.dataset.device);
  });

  hitbox.addEventListener("dblclick", (event) => {
    event.stopPropagation();
    if (layoutEditMode || allestecMoveMode) return;
    selectDevice(hitbox.dataset.device);
    triggerGraphicInput(hitbox.dataset.device);
  });
});

document.getElementById("device-actions").addEventListener("click", (event) => {
  const button = event.target.closest(".action-button");
  if (!button) return;
  applyFunction(button.dataset.action);
});

document.getElementById("gas-level-slider")?.addEventListener("input", (event) => {
  const percent = Math.max(0, Math.min(100, Math.round(Number(event.target.value) || 0)));
  const readout = document.getElementById("gas-slider-readout");
  if (readout) readout.textContent = `${percent}% LEL`;
  queueGasSliderUpdate(percent);
});
document.getElementById("gas-level-down")?.addEventListener("click", () => stepGasSlider(-1));
document.getElementById("gas-level-up")?.addEventListener("click", () => stepGasSlider(1));

document.getElementById("set-virtual-mode").addEventListener("click", () => setSelectedMode("Virtual"));
document.getElementById("set-real-mode").addEventListener("click", () => setSelectedMode("Real"));
document.querySelectorAll("[data-allestec-mode]").forEach((button) => {
  button.addEventListener("click", async () => {
    setAllestecSystemMode(button.dataset.allestecMode);
    if (["panel", "test-board"].includes(button.dataset.allestecMode)) {
      await startBridgesForAllestecPanel(button.dataset.allestecMode);
      try {
        await connectAnalogSerial();
      } catch (error) {
        setAoStatus(`RS485 not connected: ${error.message}`, true);
      }
    } else {
      setAoStatus("Virtual panel selected. RS485 output is idle until PANEL 1 or PANEL 2 is selected.");
    }
  });
});
document.getElementById("open-s3-profile").addEventListener("click", openSelectedS3Profile);
document.getElementById("confirm-real-ready").addEventListener("click", confirmRealDeviceReady);
document.getElementById("ack-all-alarms").addEventListener("click", acknowledgeAllAlarms);
document.getElementById("silence-all-alarms").addEventListener("click", silenceAllOutputs);
document.getElementById("reset-all-devices").addEventListener("click", resetAllDevices);
document.getElementById("lm6000-eqp-ack")?.addEventListener("click", acknowledgeAllAlarms);
document.getElementById("lm6000-eqp-silence")?.addEventListener("click", silenceAllOutputs);
document.getElementById("lm6000-eqp-reset")?.addEventListener("click", resetAllDevices);
document.getElementById("lms100-ack")?.addEventListener("click", acknowledgeAllAlarms);
document.getElementById("lms100-silence")?.addEventListener("click", silenceAllOutputs);
document.getElementById("lms100-reset")?.addEventListener("click", resetAllDevices);
document.getElementById("allestec-ack")?.addEventListener("click", acknowledgeAllAlarms);
document.getElementById("allestec-silence")?.addEventListener("click", silenceAllOutputs);
document.getElementById("allestec-reset")?.addEventListener("click", resetAllDevices);
document.getElementById("training-autotest")?.addEventListener("click", startTrainingAutoTest);
document.getElementById("operator-test-mode")?.addEventListener("click", toggleOperatorTestMode);
document.getElementById("training-play-pause")?.addEventListener("click", resumeTrainingAutoTest);
document.getElementById("training-step-back")?.addEventListener("click", () => moveTrainingStep(-1));
document.getElementById("training-step-forward")?.addEventListener("click", () => moveTrainingStep(1));
document.getElementById("training-progress")?.addEventListener("change", (event) => seekTrainingStep(event.target.value));
document.getElementById("lm6000-pencil-toggle")?.addEventListener("click", () => setLm6000SketchMode("pencil"));
document.getElementById("lm6000-eraser-toggle")?.addEventListener("click", () => setLm6000SketchMode("eraser"));
document.getElementById("lm6000-clear-sketch")?.addEventListener("click", clearLm6000Sketch);
document.getElementById("allestec-move-toggle")?.addEventListener("click", () => setAllestecMoveMode(!allestecMoveMode));
document.getElementById("allestec-graphic-edit-toggle")?.addEventListener("click", () => setAllestecGraphicEditMode(!allestecGraphicEditMode));
document.getElementById("allestec-save-layout")?.addEventListener("click", saveAndCloseAllestecDeviceEditMode);
document.getElementById("project-save-layout")?.addEventListener("click", saveAndCloseAllestecDeviceEditMode);
document.getElementById("allestec-reset-layout")?.addEventListener("click", resetAllestecDevicePositions);
document.querySelectorAll(".selectable-comms-card").forEach((button) => {
  button.addEventListener("click", () => selectCommsModule(button.dataset.commsModule));
});
document.querySelector(".comms-grid")?.addEventListener("click", (event) => {
  const button = event.target.closest(".selectable-comms-card");
  if (!button) return;
  selectCommsModule(button.dataset.commsModule);
});
document.getElementById("comms-save-map")?.addEventListener("click", saveAllestecCommsMap);
document.getElementById("comms-view")?.addEventListener("click", async (event) => {
  const saveModuleButton = event.target.closest("#module-save-config");
  if (saveModuleButton) {
    saveModuleConnectionConfig();
    return;
  }
  const connectModuleButton = event.target.closest("#module-connect");
  if (connectModuleButton) {
    await connectSelectedCommsModule();
    return;
  }
  const disconnectModuleButton = event.target.closest("#module-disconnect");
  if (disconnectModuleButton) {
    disconnectSelectedCommsModule();
    return;
  }
  const connectEqpButton = event.target.closest("#eqp-on-test-connect");
  if (connectEqpButton) {
    try {
      await connectEqpOnTestSerial();
      await syncEqpOnTestCoils();
    } catch (error) {
      setEqpOnTestStatus(`EQP ON TEST not connected: ${error.message}`, true);
    }
    return;
  }
  const syncEqpButton = event.target.closest("#eqp-on-test-sync");
  if (syncEqpButton) {
    try {
      await syncEqpOnTestCoils();
    } catch (error) {
      setEqpOnTestStatus(`EQP ON TEST sync failed: ${error.message}`, true);
    }
    return;
  }
  const saveConfigButton = event.target.closest("#ao-save-config");
  if (saveConfigButton) {
    saveAnalogSerialSettingsFromUi();
    return;
  }
  const connectButton = event.target.closest("#ao-connect");
  if (connectButton) {
    saveAnalogSerialSettingsFromUi();
    try {
      await connectAnalogSerial();
    } catch (error) {
      setAoStatus(`RS485 not connected: ${error.message}`, true);
    }
    return;
  }
  const all4Button = event.target.closest("#ao-all-4ma");
  if (all4Button) {
    try { await setAllAnalogOutputs(4000); } catch (error) { setAoStatus(error.message, true); }
    return;
  }
  const setButton = event.target.closest("[data-ao-set]");
  if (setButton) {
    try { await setAnalogOutput(Number(setButton.dataset.aoSet), Number(setButton.dataset.value)); } catch (error) { setAoStatus(error.message, true); }
    return;
  }
  const applyButton = event.target.closest("[data-ao-apply]");
  if (applyButton) {
    const register = Number(applyButton.dataset.aoApply);
    const input = document.querySelector(`[data-ao-input="${register}"]`);
    const milliamps = Math.max(4, Math.min(20, Number(input?.value) || 4));
    try { await setAnalogOutput(register, Math.round(milliamps * 1000)); } catch (error) { setAoStatus(error.message, true); }
  }
});
document.getElementById("replace-drawing-file")?.addEventListener("click", replaceDrawingFile);
document.getElementById("generate-real-device-report")?.addEventListener("click", generateRealDeviceReport);
document.getElementById("admin-open-s3")?.addEventListener("click", openSelectedS3Profile);
document.getElementById("admin-system-preferences")?.addEventListener("click", showSystemPreferences);
document.getElementById("admin-save-device-info")?.addEventListener("click", saveDeviceInfoDatabase);
document.getElementById("admin-load-training-timeline")?.addEventListener("click", loadTrainingTimelineEditor);
document.getElementById("admin-save-training-timeline")?.addEventListener("click", saveTrainingTimelineEditor);
document.getElementById("save-training-offset")?.addEventListener("click", saveTrainingOffset);

document.getElementById("device-library-table").addEventListener("click", (event) => {
  const cell = event.target.closest(".device-cell");
  if (!cell) return;
  const tag = cell.dataset.device;
  const now = Date.now();
  const isDoubleClick = lastDeviceTableClick.tag === tag && now - lastDeviceTableClick.time < 380;
  lastDeviceTableClick = { tag, time: now };

  if (isDoubleClick) {
    window.clearTimeout(deviceTableClickTimer);
    deviceTableClickTimer = null;
    selectDevice(tag);
    openDeviceInfoWindow(tag);
    return;
  }

  window.clearTimeout(deviceTableClickTimer);
  deviceTableClickTimer = window.setTimeout(() => {
    selectDevice(tag);
    deviceTableClickTimer = null;
  }, 220);
});

document.getElementById("device-save").addEventListener("click", applyDeviceEditor);
document.getElementById("device-revert").addEventListener("click", renderDeviceEditor);
document.getElementById("device-save-json").addEventListener("click", saveDeviceDatabase);

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.nav) {
      showView(button.dataset.nav);
    }
  });
});

document.querySelectorAll(".scenario-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".scenario-button").forEach((item) => item.classList.remove("scenario-active"));
    button.classList.add("scenario-active");
    const scenario = button.textContent.trim();
    const scenarioMap = {
      "Gas Detector Low Alarm": ["AE-3004B", "Low Gas"],
      "Gas Detector High High": ["AE-3004C", "High Gas"],
      "Thermal Fire Alarm": ["TS-3014", "Fire"],
      "Manual Release Station": ["HS-3092", "Input Active"],
      "Communication Fault": ["EQP-001", "LON Fault"],
      "Calibration Failure": ["AE-3004A", "Fault"],
    };
    const mapped = scenarioMap[scenario];
    if (mapped) {
      selectDevice(mapped[0]);
      applyFunction(mapped[1]);
    }
  });
});

document.querySelectorAll(".adjustable").forEach((element) => {
  applyEditTransform(element);
  element.addEventListener("mousedown", (event) => {
    if (!layoutEditMode) return;
    event.preventDefault();
    event.stopPropagation();

    const svg = element.ownerSVGElement;
    const startPoint = getSvgPoint(event, svg);
    const state = getEditState(element);
    selectEditElement(element);

    dragState = {
      element,
      startX: startPoint.x,
      startY: startPoint.y,
      originalX: state.x,
      originalY: state.y,
    };
  });
});

applyAllProjectDeviceLayouts();
applyAllestecGraphicLayoutState();
applyAllestecCommsMap();
selectCommsModule("relay1");

document.querySelectorAll("#lm6000-allestec-view [data-allestec-layout-id]").forEach((element) => {
  element.addEventListener("mousedown", (event) => {
    if (!allestecGraphicEditMode) return;
    event.preventDefault();
    event.stopPropagation();

    const state = getAllestecGraphicElementState(element);
    selectAllestecGraphicElement(element);

    if (element instanceof SVGElement) {
      const svg = element.ownerSVGElement;
      const point = getSvgPoint(event, svg);
      allestecGraphicDragState = {
        element,
        mode: "move-svg",
        startX: point.x,
        startY: point.y,
        original: { ...state },
      };
      return;
    }

    const rect = element.getBoundingClientRect();
    const resize = event.clientX >= rect.right - 18 && event.clientY >= rect.bottom - 18;
    allestecGraphicDragState = {
      element,
      mode: resize ? "resize-dom" : "move-dom",
      startX: event.clientX,
      startY: event.clientY,
      original: { ...state, width: state.width || rect.width, height: state.height || rect.height },
    };
  });
});

document.querySelectorAll("#lm6000-allestec-view .device-badge[data-device]").forEach((element) => {
  element.addEventListener("mousedown", (event) => {
    beginAllestecDeviceDrag(event, element);
  });
});

window.addEventListener("mousemove", (event) => {
  if (allestecGraphicDragState) {
    const { element, mode, original } = allestecGraphicDragState;
    if (mode === "move-svg") {
      const svg = element.ownerSVGElement;
      const point = getSvgPoint(event, svg);
      const state = {
        ...original,
        x: Number(((original.x || 0) + point.x - allestecGraphicDragState.startX).toFixed(1)),
        y: Number(((original.y || 0) + point.y - allestecGraphicDragState.startY).toFixed(1)),
      };
      setAllestecGraphicElementState(element, state);
      allestecGraphicDragState.current = state;
      return;
    }
    const dx = event.clientX - allestecGraphicDragState.startX;
    const dy = event.clientY - allestecGraphicDragState.startY;
    const state = { ...original };
    if (mode === "resize-dom") {
      state.width = Math.max(60, Number(((original.width || 60) + dx).toFixed(1)));
      state.height = Math.max(40, Number(((original.height || 40) + dy).toFixed(1)));
    } else {
      state.x = Number(((original.x || 0) + dx).toFixed(1));
      state.y = Number(((original.y || 0) + dy).toFixed(1));
    }
    setAllestecGraphicElementState(element, state);
    allestecGraphicDragState.current = state;
    return;
  }
  if (allestecDragState) {
    if (allestecDragState.mode === "html-device") {
      const state = {
        x: Number((allestecDragState.originalX + ((event.clientX - allestecDragState.startClientX) / allestecDragState.parentWidth) * 100).toFixed(2)),
        y: Number((allestecDragState.originalY + ((event.clientY - allestecDragState.startClientY) / allestecDragState.parentHeight) * 100).toFixed(2)),
        scale: allestecDragState.scale,
        unit: "%",
      };
      setAllestecDeviceTransform(allestecDragState.element, state);
      return;
    }
    const svg = allestecDragState.element.ownerSVGElement;
    const point = getSvgPoint(event, svg);
    const state = {
      x: Number((allestecDragState.originalX + point.x - allestecDragState.startX).toFixed(1)),
      y: Number((allestecDragState.originalY + point.y - allestecDragState.startY).toFixed(1)),
      scale: allestecDragState.scale,
    };
    setAllestecDeviceTransform(allestecDragState.element, state);
    return;
  }
  if (!dragState) return;
  const svg = dragState.element.ownerSVGElement;
  const point = getSvgPoint(event, svg);
  const state = getEditState(dragState.element);
  state.x = Number((dragState.originalX + point.x - dragState.startX).toFixed(1));
  state.y = Number((dragState.originalY + point.y - dragState.startY).toFixed(1));
  applyEditTransform(dragState.element);
});

window.addEventListener("mouseup", () => {
  if (allestecGraphicDragState) {
    const state = allestecGraphicDragState.current || getAllestecGraphicElementState(allestecGraphicDragState.element);
    saveAllestecGraphicElementState(allestecGraphicDragState.element, state);
    setAllestecMoveStatus(`Saved: ${allestecGraphicDragState.element.dataset.allestecLayoutId}`);
    allestecGraphicDragState = null;
    return;
  }
  if (allestecDragState) {
    const projectName = activeLayoutEditProject || getLayoutProjectName(selectedProject);
    const saved = getProjectDeviceLayoutState(projectName);
    saved[allestecDragState.element.dataset.device] = getAllestecDeviceTransform(allestecDragState.element);
    saveProjectDeviceLayoutState(saved, projectName);
    setAllestecMoveStatus(`Saved: ${allestecDragState.element.dataset.device}`);
    allestecDragState = null;
    return;
  }
  if (!dragState) return;
  saveLayoutState();
  dragState = null;
});

document.getElementById("edit-layout-toggle")?.addEventListener("click", () => {
  setLayoutEditMode(!layoutEditMode);
});

document.getElementById("layout-smaller")?.addEventListener("click", () => scaleSelected(0.9));
document.getElementById("layout-larger")?.addEventListener("click", () => scaleSelected(1.1));
document.getElementById("layout-reset")?.addEventListener("click", resetLayout);

document.getElementById("show-start-window").addEventListener("click", navigateBack);

document.querySelectorAll(".app-menu-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const menu = button.closest(".app-menu");
    const open = menu.classList.contains("menu-open");
    document.querySelectorAll(".app-menu.menu-open").forEach((item) => item.classList.remove("menu-open"));
    menu.classList.toggle("menu-open", !open);
  });
});

document.querySelectorAll("[data-menu-action]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleStartMenuAction(button.dataset.menuAction);
  });
});

document.addEventListener("click", (event) => {
  requestPlatformFullscreen();
  if (!event.target.closest(".app-menu")) {
    document.querySelectorAll(".app-menu.menu-open").forEach((menu) => menu.classList.remove("menu-open"));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    exitPlatformFullscreen();
    return;
  }
  requestPlatformFullscreen();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-menu-action]");
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  handleStartMenuAction(button.dataset.menuAction);
});

document.querySelectorAll(".info-topic").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".info-topic").forEach((topic) => topic.classList.remove("active-info-topic"));
    button.classList.add("active-info-topic");

    const title = button.querySelector("b")?.textContent || "INFO";
    const summary = button.querySelector("span")?.textContent || "Reference topic selected.";
    const heading = document.querySelector(".info-header h2");
    const note = document.querySelector(".info-note");
    showInfoPanel(button.dataset.infoTopic || "device");
    if (heading) heading.textContent = `${currentInfoDeviceId || "Device"} - ${title}`;
    if (note) note.textContent = `${summary} Future PDFs, photos and shop notes can be linked directly from this device/topic.`;
  });
});

document.getElementById("device-video-list").addEventListener("click", (event) => {
  const button = event.target.closest(".video-item");
  if (!button) return;
  const info = getDeviceInfo(currentInfoDeviceId);
  const video = info.videos?.[Number(button.dataset.videoIndex)];
  if (!video?.file) return;
  const videoPlayer = document.getElementById("device-info-video");
  videoPlayer.src = video.file;
  videoPlayer.load();
  videoPlayer.play().catch(() => {});
  addEvent(currentInfoDeviceId, `${video.title || "Instructional video"} selected.`);
});

document.querySelector(".info-detail").addEventListener("click", (event) => {
  if (event.target.closest("#save-device-info-fields") || event.target.closest("[data-save-info-fields]")) {
    saveCurrentDeviceInfoFields();
    return;
  }

  const attachButton = event.target.closest(".info-attach-button");
  if (attachButton) {
    attachDeviceReference(attachButton.dataset.attachCategory);
    return;
  }

  const button = event.target.closest(".document-item");
  if (!button) return;
  const file = button.dataset.file || "No file linked yet";
  if (window.eqpApp?.openPath && button.dataset.file) {
    window.eqpApp.openPath(button.dataset.file);
  } else if (button.dataset.file) {
    window.open(button.dataset.file, "_blank", "noopener,noreferrer");
  }
  addEvent(currentInfoDeviceId || "INFO", `Reference selected: ${file}.`);
});

document.getElementById("device-info-close").addEventListener("click", () => {
  document.getElementById("device-info-window").classList.add("hmi-hidden");
});

document.getElementById("device-info-minimize").addEventListener("click", () => {
  const infoWindow = document.getElementById("device-info-window");
  infoWindow.classList.toggle("window-minimized");
  infoWindow.classList.remove("window-maximized");
});

document.getElementById("device-info-maximize").addEventListener("click", () => {
  const infoWindow = document.getElementById("device-info-window");
  infoWindow.classList.toggle("window-maximized");
  infoWindow.classList.remove("window-minimized");
});

document.querySelector(".device-info-titlebar").addEventListener("dblclick", () => {
  const infoWindow = document.getElementById("device-info-window");
  infoWindow.classList.toggle("window-maximized");
  infoWindow.classList.remove("window-minimized");
});

document.getElementById("family-tabs").addEventListener("click", (event) => {
  const button = event.target.closest(".family-tab");
  if (!button) return;

  if (button.dataset.action === "back") {
    selectedFamily = "";
    selectedProject = "";
    renderStartMenu();
    return;
  }

  if (button.dataset.family) {
    selectedFamily = button.dataset.family;
    selectedProject = "";
    renderStartMenu();
    return;
  }

  if (button.dataset.project) {
    document.getElementById("selected-project-label").textContent = button.dataset.project;
    openProject(button.dataset.project);
  }
});

async function initializeHmi() {
  requestPlatformFullscreen();
  updateClock();
  warmUpSpeechVoices();
  prepareHornAudioOnFirstInteraction();
  setInterval(updateClock, 1000);
  setupLm6000SketchCanvas();
  window.addEventListener("resize", resizeLm6000SketchCanvas);
  await loadSlideshow();
  await loadDeviceDatabase();
  await loadDeviceInfoDatabase();
  await loadS3Logic();
  await loadTrainingScript();
  await loadTrainingTimeline();
  if (!devices[selectedDeviceId]) selectedDeviceId = Object.keys(devices)[0] || "EQP-001";
  renderStartMenu();
  renderAll();
  setTimeout(() => { autoConnectConfiguredModules(); }, 500);
  startAllestecIoPolling();
  updateAccessState();
}

initializeHmi();
