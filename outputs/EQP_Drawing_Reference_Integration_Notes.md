# EQP Test Cell & Virtual Device Simulation Platform

## Drawing Reference Integration Notes

## 1. Source References

The following drawing screenshots were provided as visual and engineering references:

- `GT-1.png`
- `GT-2.png`
- `GT-3.png`
- `GT-4.png`
- `GT-5.png`
- `GT-6.png`
- `LM2500 XPRESS GEN 9 F&G SYSTEM_Wiring Markups A.pdf`

The drawings appear to be Wilson Fire Equipment & Service Co. Fire & Gas Detection / Aerosol Suppression System drawings for a GE Packaged Power L.P. TM2500 Gen 9 / LM2500 Xpress package.

These images are important references for the EQP Test Cell platform because they show real project drawing conventions, device tags, loop wiring, module wiring, terminal blocks, signal references, and sheet-to-sheet relationships.

The PDF wiring markup package contains 10 pages and should be treated as a future import target for multi-sheet drawing overlay support.

## 2. Drawing Types Observed

The references include several useful drawing types:

- 24 VDC power distribution
- Fire & Gas monitor / EQP controller wiring
- EDIO module wiring
- DCIO module wiring
- ION loop / gas detection wiring
- Analyzer element / gas detector wiring
- Vent fan skid wiring
- Auxiliary skid wiring
- Turbine enclosure wiring
- Terminal block and sheet reference details

These should influence both the HMI digital twin layout and the engineering diagnostic tools.

## 3. Tags and Device Families Observed

Visible tag families include:

- `FPP` Fire & Gas protection panel / controller references
- `GCP` Generator Control Panel references
- `EDIO` modules
- `DCIO` modules
- `AE` analyzer elements / gas detector elements
- `HS` hand switches / manual switches
- `YS` safety actuators / outputs
- `TS` thermal spot detectors
- `TB` terminal blocks
- `ULAS` / alarm-related signals
- Horn / strobe / acknowledge signals

The application should support these real-world tag families even when the initial prototype uses a simplified demo dataset.

## 4. Engineering Value For The HMI

These drawings show that the HMI should not only display device status. It should help engineers understand:

- Which physical area a device belongs to
- Which module the device is wired to
- Which terminal block is involved
- Which sheet reference connects to the signal
- Whether a signal is an input or output
- Whether a device is part of the loop, discrete I/O, power distribution, or auxiliary control
- How alarms, manual releases, horns, strobes, and suppression-related virtual outputs relate to the system

## 5. Digital Twin Drawing Overlay Requirement

The platform architecture should support imported drawing images as background layers.

Minimum future drawing overlay features:

- Import PNG/JPG drawing sheets
- Place device objects over drawing locations
- Save device coordinates per drawing sheet
- Zoom and pan drawing sheets
- Toggle drawing visibility
- Toggle device overlay visibility
- Select a device from the drawing
- Jump from a device to its detail screen
- Link a drawing sheet to related devices, modules, and signals

Future advanced features:

- PDF import
- Multi-page drawing sets
- OCR-assisted tag detection
- Drawing revision tracking
- Sheet-to-sheet navigation
- Clickable terminal blocks
- Clickable device tags
- Cause & Effect linking
- Modbus signal linking

## 6. Recommended Drawing Data Model

Recommended entities:

- `DrawingSet`
- `DrawingSheet`
- `DrawingRevision`
- `DrawingLayer`
- `DrawingDevicePlacement`
- `DrawingSignalReference`
- `TerminalBlock`
- `TerminalPoint`
- `SheetReference`

Recommended fields for `DrawingSheet`:

- Drawing number
- Sheet number
- Revision
- Title
- Project name
- System name
- Image file path
- Source file path
- Date
- Notes

Recommended fields for `DrawingDevicePlacement`:

- Device tag
- Drawing sheet ID
- X coordinate
- Y coordinate
- Rotation
- Scale
- Visible label
- Placement type, exact / approximate / inferred

## 7. HMI Usage

The HMI should provide at least two drawing-based views in future phases:

## 7.1 Engineering Drawing View

This view shows the original drawing sheet as the main background with active HMI overlays.

Useful for:

- Troubleshooting
- Wiring verification
- FAT
- Commissioning checks
- Training technicians on drawings

## 7.2 Simplified Operator Layout View

This view uses a cleaner package or area layout based on the drawings but removes unnecessary wiring detail.

Useful for:

- Demonstrations
- Large monitor display
- Alarm response
- Training scenarios

## 8. Prototype Recommendation

The first prototype should include a drawing reference panel or tab even if full PDF/drawing import is not implemented yet.

Recommended initial behavior:

- Use one drawing screenshot as a static background
- Place sample devices over the drawing manually
- Allow selecting a device
- Show tag, type, mode, status, and related alarm/events
- Keep the drawing layer separate from the device object data

This will prove the core digital twin concept without requiring full OCR or CAD/PDF parsing in the first version.
