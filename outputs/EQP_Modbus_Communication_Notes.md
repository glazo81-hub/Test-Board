# EQP Test Cell & Virtual Device Simulation Platform

## Modbus Communication Notes From Field Reference

## 1. Source Reference

Reference file reviewed:

`C:\Users\Glperez.WILSONFIRE\JOB\SCADA\Tung Hsiao- Report Modbus.docx`

The document appears to be a field report related to Modbus communication work. The Word file does not contain a full editable Modbus register table. Most of the useful technical information is contained in embedded images and short report notes.

## 2. Extracted Technical Points

The document states that Modbus communication work required rewiring communication cables because the existing wiring was incorrect.

The report includes a wiring reference image for a serial terminal connected to a VersaMax system.

Visible wiring reference:

- EQP Controller No. 1
- Port 1 RS-485
- Terminals shown as A, B, and GND
- Field wiring to a DB-style serial connector

This confirms that the software should treat physical communication setup as an important commissioning variable, not only a software configuration item.

## 3. Field Issue Noted In Report

The report identifies an engineering issue related to the Modbus list on GEN9 EXPRESS units.

Observed issue:

- When thermal detector `TS_3003` is activated, the graphic reportedly shows both thermal switches active and manual release signals `HS_3092` and `HS_3093`.
- When a manual switch is activated, the graphic reportedly does not show the manual switch as activated.
- The report suggests this may be caused by an incorrect Modbus list line being used in Mark VI-e logic.

Specific note from the document:

- `HS-3092_3093 as Input = TS-3003_3014 as Output`

This is important for the EQP Test Cell project because it shows why the platform should include Modbus validation tools, not only live data display.

## 4. Design Implications For This Project

The application should support a formal Modbus mapping layer between raw controller registers and HMI device objects.

The mapping layer should not be hard-coded directly into graphics.

Recommended mapping records should include:

- Signal tag
- Device tag
- Source protocol
- Register address
- Bit position, if applicable
- Data type
- Read/write direction
- Normal state meaning
- Alarm state meaning
- Fault state meaning
- HMI object linked to this signal
- Cause & Effect reference
- Verification status
- Notes / discrepancy comments

## 5. Modbus Validation Requirement

The platform should include a future Modbus validation screen that allows engineers to compare:

- Raw Modbus register values
- Interpreted signal names
- HMI device states
- Cause & Effect logic
- Expected behavior
- Actual behavior

This will help identify problems such as:

- Wrong register address
- Wrong bit offset
- Incorrect tag mapping
- Inverted logic
- Manual switch mapped to detector alarm
- Detector alarm mapped to manual release
- HMI graphic linked to the wrong source signal
- Mark VI-e or PLC logic using the wrong Modbus list line

## 6. Recommended Communication Screens

The HMI should include a Communications / Modbus diagnostic area with:

- COM port status
- Baud rate, parity, stop bits, and timeout settings
- Polling status
- Controller online/offline indication
- Last successful poll timestamp
- Register viewer
- Signal viewer
- Mapping validation status
- Communication error log
- Raw value vs interpreted value comparison

## 7. Recommended First Data Import Format

When the full Modbus map is available, the best import format would be Excel or CSV.

Recommended columns:

- `tag`
- `description`
- `device_tag`
- `device_type`
- `modbus_address`
- `register_type`
- `bit`
- `data_type`
- `scale`
- `normal_value`
- `alarm_value`
- `fault_value`
- `hmi_state`
- `cause_effect_reference`
- `notes`

The application should later allow this mapping to be imported, reviewed, edited, and versioned.

## 8. Architecture Decision

The Modbus map shall be treated as configuration data.

It shall not be embedded permanently in the HMI code.

This will allow project-specific maps, future customer projects, and corrected field mappings to be added without rebuilding the application.

## 9. S3 Project Modbus Export Reference

The reviewed `LM2500 Xpress.s3n` project contains a readable S3 logic section named `All to MODBUS`.

This section includes `MOV` instructions that appear to copy internal references into a Modbus export area.

A preliminary CSV extraction was created:

`outputs/EQP_S3N_All_to_Modbus_MOV_Pairs.csv`

This CSV contains 164 observed source-to-export pairs. These references are useful for investigation but must be validated against official S3 documentation, the official Modbus map, and/or live controller readings before use in the application.
