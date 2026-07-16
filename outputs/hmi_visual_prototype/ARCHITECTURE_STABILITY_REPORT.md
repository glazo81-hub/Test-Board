# HMI Architecture Stability Report

Date: 2026-07-16

## Scope

This stabilization pass focused on preventing turbine cross-contamination before adding new HMI features.

Authorized projects only:

- TM2500 XPRESS
- LM6000 ALLESTEC
- LM6000 EQP
- LMS100 PA

## Root Causes Found

1. LMS100 routing was previously based on generic LMS100 matching. This allowed one LMS100 screen to appear under multiple LMS100 project names.
2. LMS100 internal storage used a generic LMS100 project bucket instead of LMS100 PA.
3. Device creation could fall back to global devices or TM2500 fallback devices when a scoped LM6000/LMS100 device definition was missing.
4. TM2500 still had HS-3091 in the graphic and Modbus write map even though the active manual release logic uses HS-3092 and HS-3093.
5. Training logic defaulted to TM2500 for projects that were not Allestec, causing LMS100/LM6000 EQP to run the wrong narration/actions.
6. A responsive CSS breakpoint scaled countdown boxes, which could change timer/control alignment between laptop and TV.
7. Duplicate HTML IDs existed in the selected-device panels, which can cause DOM updates to hit the wrong element.

## Files Modified

- `app.js`
- `index.html`
- `styles.css`
- `tools/validate-architecture.js`
- `ARCHITECTURE_STABILITY_REPORT.md`

## Shared Code Removed or Hardened

- Replaced generic LMS100 project matching with exact `LMS100 PA`.
- Renamed LMS100 internal namespace from generic `LMS100` to `LMS100_PA`.
- Replaced LM6000 partial matching in project scoping with exact project names.
- Stopped scoped projects from falling back to unrelated global/TM2500 device definitions.
- Replaced TM2500 HS-3091 graphic/Modbus references with HS-3092.
- Removed responsive countdown scaling that changed timer sizing by viewport.

## Turbine Separation Status

### TM2500 XPRESS

- Uses TM2500 package route only.
- Manual release tags are HS-3092 and HS-3093.
- No HS-3091 remains in app, index, or styles.

### LM6000 ALLESTEC

- Uses `LM6000_ALLESTEC` namespace.
- Uses exact project name for scoping.
- Device aliases for LM6-AE-3029 and LM6-AE-3030 remain limited to Allestec.

### LM6000 EQP

- Uses `LM6000_EQP` namespace.
- Uses exact project name for scoping.
- Has its own training sequence.

### LMS100 PA

- Uses `LMS100_PA` namespace.
- Only `LMS100 PA` remains in the project menu.
- Has its own training sequence and release wait handling.

## Routes Removed

The project menu no longer exposes:

- TM2500 GEN8
- TM2500
- TM2500 DYNAMIS
- TM2500-RPS
- TM2500-JEREH
- TM2500-EQ
- SOLAR
- LM6000 PF
- LM6000 PC
- LMS100 PB
- LMS100 Package
- LMS100 Demo

## Automated Checks Added

Run:

```bash
node outputs/hmi_visual_prototype/tools/validate-architecture.js
```

The check fails if it finds:

- Forbidden turbine project references.
- Generic LMS100 or LM6000 routing patterns.
- HS-3091 / HS_3091 / HS-6391 / HS_6391.
- Duplicate HTML IDs.
- Missing critical device tags.
- Missing project routes.
- Countdown scaling through responsive transform.
- Unscoped countdown positioning for LM6000/LMS100 views.

## Tests Run

- `node --check outputs/hmi_visual_prototype/app.js`
- `node outputs/hmi_visual_prototype/tools/validate-architecture.js`
- `rg` search for forbidden project names and invalid HS tags.

## Results

- JavaScript syntax passed.
- Architecture validation passed.
- Forbidden project references were not found.
- Duplicate HTML IDs were corrected.
- HS-3091 was removed from active code and graphic markup.

## Visual QA Status

Code-level stabilization is complete for this pass.

Visual comparison on actual laptop, TV, and fullscreen still needs to be performed manually in the running browser because this pass did not include a browser screenshot comparison harness.

Recommended next stabilization step:

- Add Playwright screenshot baselines for the four authorized turbines at laptop and TV-equivalent viewports.
