---
date: 2015-12-30T22:04:53+01:00
images:
- /images/project/accelerometergamepadavr/schematic.png
- /images/project/accelerometergamepadavr/screenshot_1.png
- /images/project/accelerometergamepadavr/screenshot_2.png
keywords:
- accelerometergamepadavr
- accelerometer
- gamepad
- game
- pad
- gra
- gry
- akcelerometr
- avr
- atmega
- atmega328
- atmega328p
- adxl335
- vusb
- v-usb
- hid
- urządzenie
- diy
repository: https://github.com/SzymonKatra/AccelerometerGamePadAVR
title: AccelerometerGamePadAVR
description: Konfigurowalny GamePad USB z wbudowanym akcelerometrem
weight: 103
project_type: electronics
---
AccelerometerGamePadAVR jest zbudowanym od podstaw GamePadem USB z wbudowanym akcelerometrem.
Do obsługi nie są wymagane żadne dodatkowe sterowniki dzięki temu, że jest kompatybilny z interfejsem HID.
Do urządzenia dołączony jest program który pozwala skonfigurować czułość gałek analogowych oraz akcelerometru i przyporządkować je do dowolnych osi.
Gamepad pozwala na zapisanie 16 różnych konfiguracji (profili) i ich szybką zmianę podczas pracy.

Obsługa USB w mikrokontrolerze AVR jest zapewniona przez bibliotekę [V-USB](https://www.obdev.at/products/vusb/index.html) która jest programową implementacją USB 1.1.
Aplikacja do konfiguracji wymaga .NET Framework 4.0.

## Funkcjonalność:

- Dwie gałki analogowe oraz dwuosiowy akcelerometr do obsługi 6 osi wyjściowych (Oś X, Oś Y, Oś Z, Obrót X, Obrót Y, Obrót Z)
- Możliwość przypisania dowolnej osi wyjściowej do dowolnej osi gałki analogowej lub akcelerometru
- Zmiana czułości gałek analogowych i akcelerometru
- Obsługa 16 róznych konfiguracji (pod każdym przyciskiem oraz klawiszami krzyżaka znajduje się inna konfiguracja)
- Ośmiokierunkowy krzyżak (D-Pad)
- 12 niezależnych przycisków (4 po prawej, 4 boczne, SELECT, START, pod lewą oraz prawą gałką)
- Jeden dodatkowy przycisk służący do wyboru konfiguracji (profilu)

Wybranie konfiguracji polega na przytrzymaniu dodatkowego przycisku, a następnie wciśnięciu klawisza na padzie pod którym zapisana jest nasza konfiguracja. Po wybraniu konfiguracji można puścić dodatkowy przycisk.
Po wciśnięciu i przytrzymaniu dodatkowego przycisku, dioda na padzie zgaśnie. Po wybraniu konfiguracji zasygnalizyje która konfiguracja została wybrana poprzez mruganie.

Do zbudowania mojego prototypu użyłem standardowego pada z którego wyciągnąłem elektronikę i zastąpiłem swoim układem.
Zachowałem tylko konstrukcję oraz elementy mechaniczne (przyciski, gałki, obudowa, przewód USB).

## Główne części:

- Mikrokontroler ATmega328P-PU
- Moduł akcelerometru ADXL335
- Ekspander we/wy MCP23017

Licencja: [GNU GPL v3](https://github.com/SzymonKatra/AccelerometerGamePadAVR/blob/master/License.txt)
