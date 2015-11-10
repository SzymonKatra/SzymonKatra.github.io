---
date: 2015-11-10T17:43:13+01:00
description: Układ dzwonka automatycznego do II Liceum Ogólnokształcącego im. Jana Śniadeckiego w Kielcach
keywords:
- dzwonek
- automatyczny
- kielce
- śniadek
- sniadek
- liceum
- avr
- atmega
- synchronizacja
- dcf77
- microsd
- sd
repository: https://github.com/SzymonKatra/DzwonekIILOKielce
images: 
- /images/project/dzwonekiilokielce/photo_1.JPG
- /images/project/dzwonekiilokielce/photo_2.JPG
- /images/project/dzwonekiilokielce/photo_3.JPG
- /images/project/dzwonekiilokielce/photo_4.JPG
title: Dzwonek II LO Kielce
weight: 5
---

Układ dzwonka automatycznego do II Liceum Ogólnokształcącego im. Jana Śniadeckiego w Kielcach.

W projekcie został użyty mikrokontroler AVR ATmega328P-PU. Schemat oraz płytka PCB zostały wykonane w programach ExpressSCH oraz ExpressPCB.

## Funkcjonalność:

- Sterowanie instalacją dzwonka w szkole poprzez przekaźnik 6A/250VAC lub 6A/28VDC
- Programowanie bezpośrednio na urządzeniu lub poprzez załadowanie konfiguracji z karty microSD (dołączona aplikacja do konfiguracji)
- Prosty i intuicyjny interfejs w języku polskim
- Automatyczna zmiana czasu (letni / zimowy)
- 4 profile (Normalne, Skrócone, Inne 1, Inne 2), w każdym możliwość ustawienia maksymalnie 40 dzwonków
- Ustawienie kalendarza na cały rok szkolny
- Różne czasy trwania dzwonka na przerwę i lekcję
- Synchronizacja z wzorcem czasu DCF77
- Akumulator podtrzymujący odmierzanie czasu w przypadku braku zasilania
- Bezobsługowy, wymaga jedynie ustawienia kalendarza na początku każdego roku szkolnego

Dokumentacja techniczna oraz instrukcja użytkowa dostępna w repozytorium w [katalogu *doc*](https://github.com/SzymonKatra/DzwonekIILOKielce/tree/master/doc).

**Projekt został udostępniony tylko i wyłącznie w celach poglądowych lub do użytku prywatnego.**  
**Zakaz wykorzystywania w celach komercyjnych oraz rozpowszechniania bez zgody autora.**