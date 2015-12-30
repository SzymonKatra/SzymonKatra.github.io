---
date: 2015-12-30T22:04:53+01:00
download_link: null
images:
- /images/accelerometergamepadavr/schematic.png
- /images/accelerometergamepadavr/screenshot_1.png
keywords:
- accelerometergamepadavr
- accelerometer
- gamepad
- game
- pad
- game
- games
- avr
- atmega
- atmega328
- atmega328p
- adxl335
- vusb
- v-usb
- hid
- device
repository: https://github.com/SzymonKatra/AccelerometerGamePadAVR
title: AccelerometerGamePadAVR
weight: 6
---
AccelerometerGamePadAVR is built from scratch USB gamepad with integrated accelerometer.
Additional drivers are not required because it is compatible with HID interface.
An configuration application is included to configure sensitivity of analog sticks, accelerometer and assign them to any axis.
Gamepad can store 16 diffrent configurations (profiles) and its fast change while work.

USB handling is provided by [V-USB](https://www.obdev.at/products/vusb/index.html) library which is software implementation of USB 1.1.
Configuration application requires .NET Framework 4.0.

## Features:

- Two analog sticks and 2-axis accelerometer to handle 6 output axes (X Axis, Y Axis, Z Axis, X Rotation, Y Rotation, Z Rotation)
- Assignment of any output axis to any analog sticks or accelerometer axis.
- Changing sensitivity of analog sticks and accelerometer
- 16 diffrent configuration (each button and D-Pad keys has assigned diffrent configuration)
- 8-directional D-Pad
- 12 independent buttons (4 on the right, 4 side, SELECT, START, under left and right analog stick)
- One additional button for choosing configuration (profile)

To select another configuration press and hold additional button and next press the key on the pad with your configuration. After selecting, you can release additional button.
When addition button is pressed and hold, diode will turn off. After selection will signal which configuration is choosen by blinking.

To build my prototype I've used a standard gamepad from which I removed electronics and replaced with my own circuit.
I kept only construction and mechanic elements (buttons, sticks, case, USB cable)

## Main parts:

- ATmega328P-PU microcontroller
- ADXL335 accelerometer module
- MCP23017 I/O expander

License: [GNU GPL v2](https://github.com/SzymonKatra/AccelerometerGamePadAVR/blob/master/License.txt)
