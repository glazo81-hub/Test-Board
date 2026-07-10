# EQP Test Cell & Virtual Device Simulation Platform

## TM2500 Gen 9 Xpress Aerosol Manual Integration Notes

## 1. Source References

Files reviewed:

- `C:\Users\Glperez.WILSONFIRE\JOB\SCADA\Operation & Maintenance Manual . TM Gen 9 Xpress  AEROSOL.docx`
- `C:\Users\Glperez.WILSONFIRE\JOB\SCADA\LM2500 XPRESS GEN 9 F&G SYSTEM_Wiring Markups A.pdf`

The Word manual contains usable text covering Fire & Gas system design, operation, alarm actions, device families, aerosol suppression behavior, LOTO/inhibit behavior, and calibration procedures.

The PDF contains 10 drawing pages but does not expose text in the current extraction environment. It should be treated as a drawing-image package for future drawing overlay import.

## 2. System Context Extracted From Manual

The referenced system is a TM2500 Gen 9 / LM2500 Xpress Fire & Gas system with:

- Eagle Quantum Premier Fire Protection Panel
- Combustible gas detection
- IR gas detection
- Flame / fire detection references
- Thermal spot detectors
- Horns
- Beacon / strobe lights
- Manual aerosol release stations
- LOTO / inhibit switch
- Aerosol generators / Stat-X suppression components
- Alarm and shutdown interface to the Turbine Control Panel

For the EQP Test Cell project, real suppression outputs must remain virtual only.

## 3. Device Tags Observed

The manual provides useful real-world tags for the initial demo database and training scenarios.

Gas detection:

- `AE-3004A`
- `AE-3004B`
- `AE-3004C`
- `AE-3029`
- `AE-3030`

Thermal detection:

- `TS-3003`
- `TS-3014`

Manual release stations:

- `HS-3092`
- `HS-3093`

Horn acknowledge / inhibit:

- `HS-3040`
- `HS-3181`

Audible and visual notification:

- `YSA-3046`
- `YSA-3047`
- `YSL-3036`
- `YSL-3041`
- `YSL-3042`

Virtual suppression outputs:

- `YSZ-3171`
- `YSZ-3172`
- `YSZ-3173`

## 4. Alarm Setpoints and Cause & Effect Behavior

## 4.1 Combustible Gas Detectors

For turbine enclosure combustible gas detectors:

- Low gas alarm: any detector at 15% LEL
- High gas alarm: any detector at 25% LEL

Low gas action:

- Activate alarm at FPP
- Activate horns and beacon lights
- Activate FPP `LO GAS` relay to Turbine Control Panel

High gas action:

- Activate alarm at FPP
- Activate horns and beacon lights
- Activate FPP `HI GAS` relay to Turbine Control Panel

## 4.2 IR Gas Detectors

For IR combustible gas detectors:

- Low gas alarm: any detector at 5% LEL
- High gas alarm: any detector at 10% LEL

Low and high gas actions are similar to combustible gas detector actions:

- Activate alarm at FPP
- Activate horns and beacon lights
- Activate corresponding low or high gas relay to Turbine Control Panel

## 4.3 Thermal Spot Detectors

Thermal spot detectors:

- `TS-3003`
- `TS-3014`

Upon any thermal detector alarm:

- Activate alarm at FPP
- Activate horns and beacon lights
- Activate FPP `FIRE ALARM` relay to Turbine Control Panel
- Activate 30 second countdown to discharge virtual `MAIN` aerosol generators

## 4.4 Manual Aerosol Release Stations

Manual release stations:

- `HS-3092`
- `HS-3093`

Upon operation of any manual aerosol release station:

- Activate alarm at FPP
- Activate horns and beacon lights
- Activate FPP `FIRE ALARM` relay to Turbine Control Panel
- Activate 30 second countdown to discharge virtual `MAIN` aerosol generators

## 4.5 Horns and Beacon Lights

Horn outputs:

- `YSA-3046`
- `YSA-3047`

Beacon / strobe outputs:

- `YSL-3036`
- `YSL-3041`
- `YSL-3042`

Behavior:

- Horns activate on alarm.
- Horns may be silenced using the key-operated horn acknowledge switch `HS-3040`.
- Horns should resound upon a subsequent new alarm condition.
- Beacon lights turn off only after alarms clear and the FPP has been reset.
- If virtual aerosol discharge occurs, beacons should remain latched until alarms clear and reset is performed.

## 4.6 LOTO / Inhibit Switch

The LOTO switch:

- `HS-3181`

Purpose:

- Inhibit the aerosol fire suppression system.
- Used for testing and service.

For this project, LOTO/inhibit should be modeled as a training and safety state. Since suppression is virtual only, the HMI should still show that virtual suppression outputs are inhibited.

## 5. Virtual Suppression Modeling

The platform shall not connect to real suppression outputs.

However, the HMI should simulate suppression logic for engineering and training:

- 30 second discharge countdown
- Abort / inhibit state where applicable
- Virtual aerosol generator states
- Discharge occurred latch
- Horn and beacon behavior
- Reset requirements
- Event history entries for countdown start, inhibit, virtual discharge, and reset

Virtual suppression tags from the manual:

- `YSZ-3171`
- `YSZ-3172`
- `YSZ-3173`

These should be shown clearly as virtual-only outputs.

## 6. Calibration Workflow Requirements

The manual includes calibration procedures that should influence training mode and future guided maintenance screens.

## 6.1 CGS / UD10 Calibration

The UD10/CGS calibration workflow includes:

- Navigate to the Calibrate menu using magnetic switches
- Execute calibration
- Waiting for Zero
- Waiting for Gas
- Waiting for Span
- Remove Cal Gas
- Return to normal after successful calibration

Sensor life / span guidance:

- New sensor typical span: 45 to 55 mV
- 21 to 55 mV: Cal OK
- 15 to 20 mV: Cal OK with Weak Sensor status
- 14 mV or less: Weak Sensor, then Cal Fault, with span value 0.00 mV

The simulator should eventually support:

- Calibration mode
- Weak sensor simulation
- Calibration fail simulation
- Span mV value
- Calibration log events

## 6.2 IR Gas Detector Calibration

The IR gas detector calibration workflow includes:

- Normal calibration: zero and span
- Zero-only calibration
- Calibration initiation by magnetic switch, HART, Modbus, or EQP communication
- Apply magnet for minimum 2 seconds
- Apply calibration gas after zero is complete
- Remove gas after span completion
- Return to normal when gas level falls below threshold
- Timeout fault if calibration is not completed within 10 minutes
- Calibration abort after zero calibration

Training mode should be able to simulate:

- Waiting for zero
- Waiting for span gas
- Span complete
- Calibration timeout
- Calibration abort
- Return to normal
- Calibration failed fault

## 7. HMI Requirements Added From Manual

The HMI should support the following screens or panels:

- Cause & Effect viewer
- Alarm action viewer
- Virtual suppression countdown panel
- LOTO/inhibit status
- Horn acknowledge state
- Beacon latch state
- Calibration training panel
- Device procedure notes
- Manual release station training controls

## 8. Recommended Demo Scenario From Manual

The first training scenario should model a TM2500 / LM2500 Xpress turbine enclosure:

1. `AE-3004A` goes to 15% LEL low gas.
2. HMI activates low gas alarm, horns, beacons, and low gas relay.
3. Operator acknowledges horn using `HS-3040`.
4. `AE-3004A` rises to 25% LEL high gas.
5. Horns resound as a new alarm.
6. Operator resets after gas returns to normal.

Second scenario:

1. `TS-3003` activates.
2. HMI activates fire alarm.
3. Horns and beacons activate.
4. Virtual 30 second aerosol countdown starts.
5. LOTO/inhibit `HS-3181` can be demonstrated.
6. Virtual discharge state is logged but no physical suppression output is driven.

Third scenario:

1. Manual release `HS-3092` is activated.
2. HMI starts the same fire alarm and virtual discharge countdown.
3. Event history records manual release as the initiating source.

## 9. PDF Wiring Markups Integration

The wiring markup PDF should be imported in a future phase as a drawing set.

Recommended handling:

- Treat the PDF as a 10 sheet drawing package.
- Store original PDF path.
- Render each page to an image during import.
- Allow each page to become a `DrawingSheet`.
- Allow device objects and signal references to be placed over each page.
- Allow sheet-level notes and revision metadata.

Because the current environment could not extract text from the PDF, future application OCR support would be useful for detecting tags and terminal references from raster drawings.

