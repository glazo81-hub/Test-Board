# EQP Test Cell & Virtual Device Simulation Platform

## HMI / SCADA Visual Design Guide

## 1. Visual Direction

The HMI should visually resemble a professional industrial SCADA workstation, but adapted specifically for Det-Tronics EQP Fire & Gas engineering, testing, and training.

The reference images show several important design directions:

- Large process-style overview screens
- Equipment package side views
- Industrial gray backgrounds
- Strong color-coded status indicators
- Bottom navigation bars
- Alarm/status panels
- Compact real-time data boxes
- Device labels placed directly near equipment
- Piping, airflow, and communication paths represented graphically
- Operator-focused screens, not marketing-style dashboards

The system should feel familiar to technicians and engineers who work with gas turbine packages, fire and gas panels, packaged equipment, and SCADA/HMI systems.

## 2. Preferred Screen Style

The interface should use a practical industrial control-room style:

- Matte gray or dark teal background surfaces
- High-contrast device states
- Clear tag labels
- Small real-time data panels
- Simple equipment drawings
- Structured navigation
- Minimal decorative effects
- Dense but readable information

The HMI should avoid:

- Generic web-dashboard styling
- Oversized landing-page sections
- Decorative gradients
- Abstract symbols with no relation to real devices
- Excessive rounded cards
- Marketing-style visuals

## 3. Main Overview Screen Concept

The main screen should combine three layers:

1. **EQP System Layer**
   - EQP Controller
   - EQP loop network
   - Device communication health
   - Real/virtual mode indication

2. **Physical Equipment Layer**
   - Gas turbine package
   - Battery container
   - Compressor enclosure
   - MCC room
   - Generator enclosure
   - Control room or process area

3. **Fire & Gas Device Layer**
   - Gas detectors
   - Flame detectors
   - Horns
   - Strobes
   - Input/output modules
   - Relays
   - Virtual suppression indicators only

Devices should be positioned around actual equipment, not randomly in a grid.

## 4. Layout Inspiration From Provided Images

## 4.1 Enclosure Ventilation Style

Use this as inspiration for:

- Equipment package side view
- Sensor placement around machinery
- Airflow or gas path arrows
- Status panels on the left
- Navigation bar at the bottom
- Data boxes near sensors
- Large screen title at top left

For EQP, this style can become a Fire & Gas package overview showing detectors around a turbine, generator, ventilation area, battery container, or enclosure.

## 4.2 LM2500Xpress Package Images

Use these as inspiration for:

- Realistic equipment silhouette backgrounds
- Detector placement on package sections
- Fire & Gas device location mapping
- Digital twin package view

The HMI should eventually allow device symbols to be placed on top of package images or simplified package drawings.

## 4.3 Classic SCADA Process Screens

Use these as inspiration for:

- Dense alarm/status displays
- Strong color coding
- Process-style linework
- Compact labels and values
- Side alarm/control panels
- Operator navigation menus

These screens show the level of information density expected in industrial environments.

## 5. Recommended HMI Regions

## 5.1 Top Header

The top header should include:

- Project or system name
- Current screen name
- Date and time
- Operator name
- System mode, Engineering / Training / FAT / Demo
- Communication status
- Alarm count summary

## 5.2 Left Status Panel

The left panel may include:

- EQP Controller status
- Modbus communication status
- Active alarm count
- Trouble count
- Offline device count
- Virtual device count
- Real device count
- Training mode status

## 5.3 Main Graphic Area

The main graphic area should show:

- Equipment layout
- EQP Controller
- Loop paths
- Device symbols
- Device labels
- Alarm status colors
- Communication fault markers
- Virtual/real mode markers

## 5.4 Right Detail Panel

When a device is selected, the right panel should show:

- Device tag
- Device type
- Address
- Description
- Mode, Virtual or Real
- Current state
- Communication status
- Alarm state
- Fault state
- Last event
- Manual force controls for virtual devices

## 5.5 Bottom Navigation Bar

The bottom navigation bar should include:

- Main
- Topology
- Layout
- Alarms
- Events
- Training
- Devices
- Communications
- Reports
- Admin

This matches the industrial HMI style shown in the references.

## 6. Status Color Convention

The HMI shall use consistent status colors:

- Green: Normal
- Yellow: Trouble
- Orange: Low Gas Alarm
- Red: Alarm / Fire / High Gas
- Gray: Offline
- Blue: Test Mode
- Cyan or white outline: Selected device
- Purple or magenta: Instructor-injected condition, optional

Color should be supported by labels and icons so the display remains usable even when color alone is not enough.

## 7. Device Symbol Style

Device symbols should be custom and recognizable.

Recommended symbol approach:

- Use simplified silhouettes based on real Det-Tronics devices
- Allow SVG and PNG replacement later
- Keep symbols readable at large monitor distance
- Show tag numbers near each symbol
- Show small mode badges for Virtual / Real
- Show communication fault indicator separately from alarm state

Device symbol examples:

- EQP Controller as a panel/controller block
- UD10 as a display transmitter face
- CGS as a gas detector head
- PIRECL/X-series IR gas detector as an optical detector body
- X3301/X9800 flame detector as detector housing with lens
- EDIO/DCIO/AIM/SAM as I/O module blocks
- Horn and strobe as field notification devices

## 8. Digital Twin Layout Behavior

The platform should support the following visual modes over time:

- Simplified package drawing
- Real equipment photo background
- Imported layout drawing
- Fire & Gas layout overlay
- Original engineering drawing sheet overlay
- Network topology view
- Cause & Effect view
- Device detail popups

The same device object should be reusable across all views.

The provided GT drawing screenshots show a dark CAD-style drawing background with white wiring lines, red markup highlights, terminal blocks, device tags, sheet references, and title blocks. This should influence the future Engineering Drawing View. That view can be denser and more technical than the normal operator overview because it is intended for troubleshooting, FAT, and commissioning.

## 9. First Prototype Recommendation

The first visual prototype should use a gas turbine package / enclosure style screen similar to the reference images.

Recommended first screen:

- Large equipment package drawing in the center
- EQP Controller on the left
- Loop communication line routed around the package
- CGS, UD10, flame detector, EDIO, DCIO, horn, strobe, and relay symbols placed around the package
- Alarm banner at the top or bottom
- Device status panel on the left
- Device detail/control panel on the right
- Navigation bar at the bottom

This will immediately show the intended direction: a real Fire & Gas engineering workstation, not a generic dashboard.
