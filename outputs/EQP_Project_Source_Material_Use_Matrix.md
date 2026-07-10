# EQP Test Cell & Virtual Device Simulation Platform

## Source Material Use Matrix

This document defines how the provided reference material should be used during development. The goal is to use only what improves the product: realism, engineering accuracy, training value, Modbus validation, HMI layout, and Det-Tronics EQP compatibility.

## 1. High-Value Sources To Use Directly

## 1.1 S3 Project File

Source:

- `LM2500 Xpress.s3n`

Use for:

- Initial realistic device/tag database
- S3 project import research
- Logic sheet references
- Modbus export investigation
- Alarm and output behavior references

Useful extracted items:

- Tags: `AE-3004A`, `AE-3004B`, `AE-3004C`, `AE-3029`, `AE-3030`
- Tags: `HS-3040`, `HS-3092`, `TS-3003-3014`
- Tags: `YSA-3006A`, `YSA-3006B`, `YSL-3036`, `YSL-3041`, `YSL-3042`
- Tags: `YSZ-3171`, `YSZ-3172`
- Logic sheets: `Gas and Flame Horns Strobe`, `AEROSOL SUPPRESSANT`, `Relays 1, 3`, `All to MODBUS`
- 164 preliminary `All to MODBUS` MOV pairs

Development use:

- Use as read-only import reference.
- Use extracted tags in demo project.
- Do not modify original S3 file.
- Do not treat decoded Modbus references as final until validated.

## 1.2 O&M Manual

Source:

- `Operation & Maintenance Manual . TM Gen 9 Xpress  AEROSOL.docx`

Use for:

- Cause & Effect logic
- Training scenarios
- Alarm behavior
- Calibration workflows
- Device descriptions
- Virtual suppression simulation rules

Useful extracted behavior:

- CGS low gas: 15% LEL
- CGS high gas: 25% LEL
- IR gas low alarm: 5% LEL
- IR gas high alarm: 10% LEL
- Thermal detector alarm starts fire alarm and 30 second virtual aerosol countdown
- Manual release starts fire alarm and 30 second virtual aerosol countdown
- Horn acknowledge silences horns
- New alarm causes horns to resound
- Beacons latch until alarms clear and reset
- LOTO/inhibit modeled with `HS-3181`
- Suppression outputs must remain virtual only

Development use:

- Use for initial scenario engine.
- Use for training mode screens.
- Use for virtual Cause & Effect simulation.
- Use for calibration simulation states.

## 1.3 Wiring Drawings and Markups

Sources:

- `GT-1.png` through `GT-6.png`
- `LM2500 XPRESS GEN 9 F&G SYSTEM_Wiring Markups A.pdf`

Use for:

- Engineering Drawing View
- Drawing overlay feature design
- Tag placement references
- Device-to-module relationship references
- Digital twin layout concept
- Wiring and terminal reference display

Development use:

- Use as visual basis for future imported drawing overlays.
- Use GT screenshots as first drawing-style reference.
- Treat PDF as a 10-sheet drawing package for future import.
- Add OCR/tag detection later, not in first prototype.

## 1.4 SCADA Style Images

Sources:

- `blog-5.jpg`
- `download (2).jpg`
- `download (3).jpg`
- `download (5).jpg`
- `download.jpg`
- `images.jpg`

Use for:

- HMI visual style
- Large-monitor SCADA layout
- Bottom navigation bar
- Equipment package overview
- Status panels
- Dense industrial information display

Development use:

- Use as inspiration only.
- Do not copy exact graphics.
- Use the style direction: gray/dark industrial background, equipment package at center, alarms/status panels, strong color coding.

## 1.5 Modbus Field Report

Source:

- `Tung Hsiao- Report Modbus.docx`

Use for:

- Modbus validation requirements
- Communication troubleshooting requirements
- Mapping discrepancy detection
- Serial wiring awareness

Useful extracted issue:

- Possible mismatch where `TS_3003` activation appeared linked to `HS_3092 / HS_3093` behavior.
- Note: `HS-3092_3093 as Input = TS-3003_3014 as Output`

Development use:

- Build future Modbus validation screen.
- Keep raw register value separate from interpreted HMI state.
- Support discrepancy comments and verification status per signal.

## 2. First Prototype Inputs

The first prototype should use the following useful references:

- S3 extracted tags for device database
- Manual alarm setpoints and Cause & Effect behavior
- SCADA style references for screen layout
- GT drawings for drawing overlay concept
- Modbus notes for architecture, but not live Modbus yet

## 3. First Demo Device Set

Recommended initial demo devices:

- `EQP-001` - EQP Controller
- `AE-3004A` - CGS / combustible gas detector
- `AE-3004B` - CGS / combustible gas detector
- `AE-3004C` - CGS / combustible gas detector
- `AE-3029` - IR gas detector
- `AE-3030` - IR gas detector
- `TS-3003-3014` - Thermal detector group
- `HS-3092` - Manual release station
- `HS-3040` - Horn acknowledge switch
- `HS-3181` - LOTO / inhibit switch
- `YSA-3006A` - Horn
- `YSA-3006B` - Horn
- `YSL-3036` - Beacon / strobe
- `YSL-3041` - Beacon / strobe
- `YSL-3042` - Beacon / strobe
- `YSZ-3171` - Virtual aerosol output
- `YSZ-3172` - Virtual aerosol output

## 4. First Prototype Screens

Recommended first screens:

- Main Fire & Gas Overview
- Device Detail / Control Panel
- Alarm Banner
- Alarm Summary
- Event History
- Training Mode
- Drawing Reference View
- Communications / Modbus Placeholder
- Device Library

## 5. What Not To Build In The First Prototype

The following should be planned but not built first:

- Live Modbus polling
- Full S3 project parser
- Full PDF drawing import
- OCR tag detection
- 3D plant visualization
- Cloud database
- AI troubleshooting assistant
- Automatic report generator
- Real suppression output control

## 6. Build Priority

Recommended development priority:

1. Electron desktop shell.
2. React HMI layout.
3. Local SQLite data model.
4. Virtual device simulation.
5. Alarm and event engine.
6. Device library with real tags.
7. Training mode scenarios.
8. Drawing reference view with static image overlay.
9. Modbus map import structure.
10. Real Modbus RTU communication.

