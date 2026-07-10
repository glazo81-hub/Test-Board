# EQP Test Cell & Virtual Device Simulation Platform

## Software Architecture Specification

## 1. Project Objective

The objective of this project is to develop a dedicated Test Cell and Simulation Platform for Det-Tronics Eagle Quantum Premier (EQP) Fire & Gas Detection Systems.

The platform will support engineering development, commissioning preparation, troubleshooting, customer demonstrations, technician training, factory acceptance testing (FAT), and validation of Fire & Gas logic in a controlled laboratory environment.

The system will combine a physical EQP controller with a software-based HMI/SCADA environment capable of simulating EQP field devices while also allowing real physical devices to be connected and tested individually.

The final product should function as a professional Det-Tronics EQP engineering workstation and digital representation of a Fire & Gas system.

## 2. Safety Boundary

This platform is for laboratory simulation, engineering, and training only.

It is not a live protection system.

The system shall not control real suppression equipment.

No real suppression outputs are connected, including:

- CO2 release systems
- FM200 release systems
- Stat-X release systems
- Active suppression outputs

Any suppression devices, release logic, or agent discharge graphics shown in the HMI shall remain virtual only.

Virtual suppression behavior may be simulated for training, FAT, and cause-and-effect demonstration, including countdown timers, inhibited states, virtual discharge latches, alarm outputs, and reset behavior. These simulated behaviors shall never energize physical suppression outputs.

## 3. Existing Hardware Context

The test platform may include:

- Det-Tronics Eagle Quantum Premier Controller
- EQP loop communication network
- UD10 Universal Display Transmitters
- CGS Catalytic Gas Sensors
- Infrared gas detectors
- Flame detectors
- EDIO modules
- DCIO modules
- AIM modules
- SAM modules
- Horns
- Strobes
- Relays
- Other EQP-compatible devices

Available communication interfaces include:

- RS485 Modbus RTU
- Ethernet TCP/IP
- RS232
- Det-Tronics S3 software

## 4. Core Design Principle

Devices shall exist as system objects, not as static graphics.

The HMI screens shall only represent device objects. A single device may appear in multiple views, including:

- Network topology
- Physical layout
- Alarm summary
- Event history
- Device detail view
- Training scenarios
- Future digital twin overlays

This separation allows devices to switch between virtual and real mode without changing the graphical layout.

## 5. Device Operating Modes

Each device shall support two operating modes.

## 5.1 Virtual Mode

In virtual mode, the device exists only inside the software. The platform simulates its states, alarms, faults, communication behavior, and responses.

Operators or instructors may manually force states such as:

- Normal
- Alarm
- Trouble
- Fault
- Low Gas Alarm, 15% LEL
- High Gas Alarm, 25% LEL
- Fire Alarm
- Input Active
- Output Active
- Communication Fault
- Device Offline
- Test Mode

The simulation engine shall generate the related behavior as if a real field device had activated.

## 5.2 Real Mode

In real mode, the device physically exists on the EQP loop.

The software shall stop simulating that device and read the actual live status from the EQP controller.

The HMI shall continue displaying the same device object and graphical symbol, but the data source changes from simulation to live controller data.

Example:

- `CGS-101 = Virtual`
- Later: `CGS-101 = Real`

No graphical layout modification shall be required.

## 6. Main Software Modules

## 6.1 EQP Device Registry

Central database of all configured devices.

Each device record should include:

- Device ID
- Tag number
- Device type
- EQP address
- Description
- Area or location
- Mode, virtual or real
- Current status
- Alarm state
- Trouble state
- Fault state
- Communication status
- Test mode status
- Associated graphic symbol
- Associated physical layout coordinates
- Associated topology coordinates
- Related drawings, reports, or manuals

## 6.2 Device Library Manager

Configurable library of supported Det-Tronics and custom devices.

Supported device types should include:

- CGS Catalytic Gas Detector
- UD10 Universal Display Transmitter
- IR Gas Detector
- Flame Detector
- EDIO
- DCIO
- AIM
- SAM
- Horn
- Strobe
- Relay
- Custom Device
- EQP Controller

Each device type should define:

- Default symbol
- Supported states
- Supported alarms
- Supported commands
- Status color behavior
- Input/output behavior
- Real mode data mapping
- Virtual mode simulation behavior

## 6.3 Simulation Engine

The simulation engine shall manage all virtual device behavior.

Responsibilities include:

- Force device state changes
- Generate alarms and events
- Simulate communication failures
- Simulate detector drift
- Simulate calibration failures
- Simulate input/output changes
- Simulate multiple simultaneous events
- Support instructor-driven scenarios
- Support future automatic test scripts

## 6.4 Real Device Interface Layer

This layer shall communicate with the physical EQP controller.

Initial protocol support:

- Modbus RTU over RS485

Future protocol support:

- Modbus TCP
- Additional protocols as needed

The architecture shall isolate protocol logic from the HMI and simulation engine so future communication methods can be added without redesigning the platform.

The system should read:

- Device status
- Alarm states
- Fault conditions
- Input states
- Output states
- Controller diagnostics
- Communication status

## 6.5 Alarm Management System

The alarm system shall provide:

- Real-time alarm banner
- Alarm summary screen
- Alarm history
- Alarm acknowledgement
- Reset functions
- Alarm filtering
- Alarm search capability
- Alarm priority support
- Alarm mode indication, virtual or real

Alarm colors should follow the project color convention:

- Green: Normal
- Yellow: Trouble
- Orange: Low Gas Alarm
- Red: Alarm or Fire
- Gray: Offline
- Blue: Test Mode

## 6.6 Event History System

Each event record shall include:

- Timestamp
- Device name
- Device address
- Event type
- Device mode, virtual or real
- Operator name
- Previous state
- New state
- Source, operator / simulation / controller / training mode

The event history shall support filtering and search.

## 6.7 Graphics & Symbol Engine

The HMI shall use custom symbols and graphics representing real Det-Tronics devices.

The system shall support importing:

- SVG graphics
- PNG graphics
- Real equipment images
- Future custom icon sets

Device symbols shall visually change according to state.

The graphical library should include symbols for:

- EQP Controller
- UD10
- CGS
- IR Gas Detector
- Flame Detector
- EDIO
- DCIO
- AIM
- SAM
- Horn
- Strobe
- Relay

The goal is to create a Det-Tronics Device Library rather than using generic SCADA symbols.

## 6.8 Layout & Digital Twin Engine

The layout engine shall allow devices to be placed according to real project drawings and physical installations.

Supported layout behavior:

- Zoom
- Pan
- Device selection
- Context menus
- Drag and drop positioning
- Saved coordinates
- Device grouping by area
- Device grouping by loop
- Device grouping by system
- Status overlays

Target layout examples:

- Gas turbine packages
- Battery containers
- Compressor buildings
- MCC rooms
- Generator enclosures
- Process areas
- Control rooms
- Test bench panels

## 6.9 Drawing Reference Layer

The architecture shall support future drawing and background integration.

Future supported assets may include:

- Background images
- PDF drawing overlays
- P&ID overlays
- Plant layouts
- Building floor plans
- Fire & Gas drawings
- General arrangement drawings
- Equipment arrangement drawings

Devices should be placeable directly on top of imported drawings.

The drawing layer shall support real project references such as loop drawings, I/O drawings, power distribution drawings, gas detection drawings, terminal block drawings, and Fire & Gas package drawings.

The system should preserve the distinction between:

- Original engineering drawing view
- Simplified operator / training layout view

The same device objects shall be linkable to both views.

## 6.10 Reference Asset Manager

The system shall be designed to continuously receive additional reference material throughout development.

Reference categories may include:

- Photographs of actual test equipment
- Photographs of Det-Tronics devices
- EQP panel photographs
- S3 software screenshots
- Network topology screenshots
- Loop drawings
- Fire & Gas drawings
- Cause & Effect diagrams
- Control narratives
- Equipment layouts
- Commissioning reports
- FAT reports
- Device manuals
- System architecture drawings

Suggested project material folder structure:

```text
/Project_Material
  /Photos
  /Drawings
  /S3_Screenshots
  /Reports
  /Device_Manuals
```

## 6.10.1 S3 Project Reference Import

The system should be designed for future read-only import of Det-Tronics S3 project files such as `.s3n` archives.

Potential S3 import data:

- Project version metadata
- Tag names
- Channel ranges
- Logic sheet names
- Alarm logic references
- Modbus export references
- Port configuration references
- Sound/alarm references

S3 project data shall be treated as reference/import data that requires validation. It shall not be treated as automatically authoritative because project files may contain proprietary binary sections, incomplete decoded fields, or mapping discrepancies.

The application shall never modify original S3 files.

## 6.11 Training Mode

Training mode shall allow instructors to create realistic troubleshooting and response scenarios.

Instructor functions should include:

- Inject faults
- Trigger alarms
- Create communication failures
- Simulate detector drift
- Simulate calibration failures
- Simulate multiple simultaneous events
- Force inputs and outputs
- Place devices offline
- Restore devices to normal
- Simulate horn acknowledge behavior
- Simulate LOTO / inhibit behavior
- Simulate virtual suppression countdowns
- Simulate calibration workflows
- Simulate weak sensor and calibration failure conditions

Training mode shall clearly identify simulated conditions and shall not be confused with live protection behavior.

## 6.12 HMI Presentation Layer

The HMI should resemble a modern Fire & Gas Engineering Workstation designed around Det-Tronics EQP systems.

It should not look like a generic industrial SCADA.

Primary HMI views should include:

- Main system overview
- EQP controller view
- Loop topology view
- Physical layout view
- Device detail view
- Alarm summary
- Alarm history
- Event history
- Training mode
- Device library
- Configuration view
- Communication diagnostics
- Future digital twin view

The main display shall support operation on a large monitor or TV, approximately 45 inches or larger.

## 7. Device Control Functions

Users shall be able to interact with virtual devices directly from the HMI.

Example CGS controls:

- Normal
- Low Gas
- High Gas
- Fault
- Offline

Example flame detector controls:

- Normal
- Fire
- Fault

Example EDIO controls:

- Input On
- Input Off
- Output On
- Output Off

All changes shall immediately update related alarms, events, status colors, and device indicators.

## 8. Digital Twin Objective

The long-term objective is to create a digital twin environment where the screen represents the actual physical Fire & Gas installation.

A user should be able to look at the SCADA and quickly understand:

- Device locations
- Device status
- Network health
- Alarm conditions
- Communication failures
- Testing activities
- Relationship between physical equipment and EQP loop devices

The architecture shall prioritize future digital twin functionality from the beginning.

## 9. Data Model Overview

Recommended primary data entities:

- Device
- DeviceType
- DeviceState
- Alarm
- Event
- Operator
- Layout
- LayoutLayer
- GraphicAsset
- DrawingReference
- CommunicationChannel
- ProtocolMapping
- TrainingScenario
- TrainingAction
- SystemConfiguration

## 10. Recommended Development Phases

## 10.1 Target Deployment Platform

The final application shall be delivered as a Windows desktop executable that can be installed on the PC connected to the engineering workstation monitor or TV.

Recommended technology stack:

- Electron desktop application
- React + TypeScript HMI frontend
- Local Node.js backend services integrated with Electron
- SQLite local database
- Modbus RTU over serial RS485 for initial EQP communication
- Future Modbus TCP support

Deployment requirements:

- Windows `.exe` installer
- Offline local operation
- Full-screen or kiosk mode for large monitor / TV display
- Local storage for device configuration, events, alarms, layouts, symbols, and operator actions
- Configurable communication settings for COM port, baud rate, parity, stop bits, timeout, and polling rate

## Phase 1: Architecture and Static Prototype

- Define device data model
- Define alarm and event model
- Define device library structure
- Create initial SCADA screen layout
- Create static topology view
- Create initial custom Det-Tronics-style symbols

## Phase 2: Virtual Device Simulation

- Add virtual devices
- Add manual force controls
- Add alarm banner
- Add event history
- Add alarm summary
- Add status colors

## Phase 3: Configurable Device Library

- Add editable device types
- Add tag/address configuration
- Add symbol assignment
- Add SVG/PNG import support
- Add device detail views

## Phase 4: Real EQP Communication

- Add Modbus RTU communication layer
- Add controller data polling
- Map live data to real devices
- Support virtual/real mode switching
- Add communication diagnostics

## Phase 5: Training and FAT Tools

- Add training mode
- Add scenario builder
- Add injected faults
- Add simulated detector drift
- Add FAT event recording
- Add reporting foundation

## Phase 6: Drawing and Digital Twin Expansion

- Add background images
- Add drawing overlays
- Add device placement on drawings
- Add area-based views
- Add digital twin navigation
- Add future PDF/P&ID support

## 11. Key Architecture Requirements

The design shall prioritize:

- Expandability
- Device realism
- Engineering usability
- Training capability
- Det-Tronics EQP compatibility
- Modern professional user interface
- Separation between simulation, live communication, and presentation
- Continuous integration of new field references and project documents

## 12. Final Product Goal

The final product should become a professional Det-Tronics EQP engineering workstation capable of:

- Testing devices
- Simulating devices
- Training personnel
- Validating configurations
- Performing FAT testing
- Troubleshooting field issues
- Documenting system behavior
- Providing a complete digital representation of an EQP Fire & Gas system
