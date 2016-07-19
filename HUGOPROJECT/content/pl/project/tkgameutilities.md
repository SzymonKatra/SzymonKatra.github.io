---
date: 2016-07-19T22:56:44+02:00
description: Biblioteka graficzna 2D zbudowana na bazie OpenTK
keywords:
- opengl
- gl
- opentk
- grafika
- 2d
- wysokiej
- wydajności
- gry
- gra
- silnik
- biblioteka
project_type: library
repository: https://github.com/SzymonKatra/TKGameUtilities
title: TKGameUtilities
weight: 203
---

**Uwaga: Ten projekt nie jest już rozwijany i został udostępniony w celach poglądowych.**

TKGameUtilities jest biblioteką zbudowaną na bazie [OpenTK](http://www.opentk.com/) w celu umożliwienia tworzenia wydajnych gier 2D w OpenGL poprzez łatwy w użyciu interfejs.
Bibioteka posiada wysokopoziomowe interfejsy do rysowania, lecz jeśli one nie spełniają twoich oczekiwań możesz użyć niskopoziomowych rozwiązań i dostosować je do własnych potrzeb.

Przykładowe użycie można znaleźć [tutaj](https://github.com/SzymonKatra/TKGameUtilities/tree/master/TKGameUtilities/Example/Program.cs).  
W nowym projekcie musisz dodać referencje do *TKGameUtilities.dll* i *OpenTK.dll* aby móc korzystać z biblioteki.

## Lista możliwości:

- Zarządzanie kontekstem OpenGL
- Okna i wejście zrealizowane przez OpenTK
- Obrazy i tekstury \(*.bmp, *.emf, *.exif, *.gif, *.icon, *.jpeg, *.png, *.tiff, *wmf\)
- Bufory wierzchołków (*VertexBuffer*) z kilkoma predefiniowanymi wierzchołkami
- Bufory indeksów (*IndexBuffer*)
- Shadery (proste shadery do podstawowego rysowania zaimplementowane i gotowe od razu do użycia)
- Obsługa czcionek (są renderowane do tekstury poprzez GDI+ i używane później do wyświetlania tekstu)
- Batching umożliwiający wydajne rysowanie (*SpriteBatch*, *IndexedPrimitiveBatch* i *FontBatch*)
- Bufor pikseli (*PixelBuffer*)
- Pętla gry o stałej lub zmiennej prędkości
- Kolizje wielokątów (wypukłe i wklęsłe po triangulacji)
- Użyteczne funkcje matematyczne i podstawowe struktury
- Obsługa liczb stałoprzecinkowych dzięki [FixedMath.Net](https://github.com/asik/FixedMath.Net)

Licencja: [MIT](https://github.com/SzymonKatra/TKGameUtilities/blob/master/LICENSE.txt)
