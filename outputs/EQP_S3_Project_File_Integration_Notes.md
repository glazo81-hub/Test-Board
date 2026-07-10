# EQP Test Cell & Virtual Device Simulation Platform

## S3 Project File Integration Notes

## 1. Source Reference

File reviewed:

`C:\Users\Glperez.WILSONFIRE\JOB\SCADA\LM2500 Xpress.s3n`

The file appears to be a Det-Tronics S3 project archive for an LM2500 Xpress / TM2500 Gen 9 Fire & Gas system.

The file is internally structured like a ZIP archive and contains project folders, database files, port configuration, logic/program files, preferences, and a sound file.

## 2. Archive Information

Observed S3 version file:

- `DEC/LM2500 Xpress/10#16#0#2.ver`
- Version string: `10.16.0.2`

Key archive contents:

- `Database/allLogsList.dat`
- `Database/channelranges.dat`
- `Database/tagnamelist.dat`
- `DCD.ini`
- `GEN 8 FIRE REVB.s3n`
- `Port 1/AutoComp.s3n`
- `Port 1/P1.def`
- `Port 1/P1.inp`
- `Port 1/P1.otp`
- `Port 1/P1PT1.003`
- `Port 1/P1PT1.006`
- `Port 1/P1PT1.009`
- `Port 1/P1PT1.011`
- `Port 1/P1PT1.lpd`
- `Prefs.prf`
- `Sounds/1.wav`

This confirms that S3 project files may be useful as a future import source for real device tags, signal names, logic sheets, and Modbus export references.

## 3. Tags Extracted From S3 Project

Unique tags found in readable project data:

- `AE-3004A`
- `AE-3004B`
- `AE-3004C`
- `AE-3029`
- `AE-3030`
- `HS-3040`
- `HS-3092`
- `TS-3003-3014`
- `YSA-3006A`
- `YSA-3006B`
- `YSL-3036`
- `YSL-3041`
- `YSL-3042`
- `YSZ-3171`
- `YSZ-3172`

The tags match many of the devices and signals found in the TM2500 / LM2500 Xpress O&M manual and drawings.

## 4. S3 Logic Sheets Observed

Readable logic sheet names found:

- `Gas and Flame Horns Strobe`
- `AEROSOL SUPPRESSANT`
- `Relays 1, 3`
- `All to MODBUS`

These are highly relevant to the proposed platform because they align with:

- Alarm output behavior
- Horn and strobe behavior
- Virtual suppression behavior
- Relay mapping
- Modbus export mapping

## 5. Modbus Export Logic

The S3 project contains a logic section named:

- `All to MODBUS`

This section includes many `MOV` instructions that appear to copy internal S3/EQP references into a Modbus export area.

Example observed pairs:

```text
1.72.0 -> 5.1.1.0
1.67.0 -> 5.1.2.0
1.70.0 -> 5.1.3.0
1.103.0 -> 5.1.4.0
1.106.0 -> 5.1.5.0
```

A preliminary CSV was generated from the readable `MOV` pairs:

`outputs/EQP_S3N_All_to_Modbus_MOV_Pairs.csv`

Observed count:

- 164 `MOV` source-to-Modbus-export pairs

These pairs should be treated as preliminary decoded references. They require validation against Det-Tronics S3 documentation, the live controller, or the official project Modbus list before being used as authoritative register mapping.

## 6. Architecture Implications

The EQP Test Cell platform should eventually include an S3 project import/analyzer tool.

Potential import capabilities:

- Open `.s3n` project archives
- Read project version metadata
- Extract tag name lists
- Extract channel ranges
- Extract logic sheet names
- Extract readable logic references
- Detect Modbus export routines
- Generate preliminary device database entries
- Generate preliminary signal mapping entries
- Link S3 tags to HMI device objects
- Link S3 tags to drawing overlays
- Link S3 tags to Modbus validation

The import should be read-only. The platform should not modify original S3 project files.

## 7. Recommended S3 Import Workflow

Recommended future workflow:

1. User imports an `.s3n` file.
2. Application extracts archive to an internal project cache.
3. Application reads project metadata and tag list.
4. Application displays detected tags for review.
5. User classifies tags by device type, area, and HMI object.
6. Application extracts candidate Modbus export references.
7. User validates the mapping against the official Modbus map or live controller.
8. Application creates or updates the local SQLite device database.

## 8. Important Validation Requirement

The S3 project is useful but should not be blindly trusted.

Reasons:

- Some files are proprietary or partially binary.
- Tag extraction from binary database files may be incomplete.
- Internal references such as `1.72.0` and `5.1.1.0` require interpretation.
- Prior field reports already showed possible Modbus/tag mapping discrepancies.

The HMI should therefore show an import confidence status:

- Imported
- Parsed
- Needs classification
- Needs Modbus validation
- Validated
- Conflict detected

## 9. Recommended Data Entities

Additional entities recommended for S3 integration:

- `S3Project`
- `S3ProjectFile`
- `S3Tag`
- `S3LogicSheet`
- `S3LogicReference`
- `S3ModbusMove`
- `S3ImportIssue`
- `S3TagDeviceLink`

## 10. First Prototype Use

For the first prototype, the extracted tags can be used to create a realistic demo dataset:

- Gas detectors: `AE-3004A`, `AE-3004B`, `AE-3004C`, `AE-3029`, `AE-3030`
- Thermal detector group: `TS-3003-3014`
- Manual release: `HS-3092`
- Horn acknowledge: `HS-3040`
- Horns: `YSA-3006A`, `YSA-3006B`
- Strobes/beacons: `YSL-3036`, `YSL-3041`, `YSL-3042`
- Virtual suppression outputs: `YSZ-3171`, `YSZ-3172`

The demo should still clearly mark suppression outputs as virtual-only.

