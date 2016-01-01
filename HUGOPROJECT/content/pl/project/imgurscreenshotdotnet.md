---
date: 2015-06-23T16:28:17+02:00
download_link: https://github.com/SzymonKatra/ImgurScreenshotDotNet/releases/latest
keywords:
- imgurscreenshotdotnet
- imgur
- screenshot
- simple
- zrzut
- ekranu
images:
- /images/project/imgurscreenshotdotnet/screenshot_1.png
repository: https://github.com/SzymonKatra/ImgurScreenshotDotNet
title: ImgurScreenshotDotNet
description: Mała aplikacja pozwalająca na szybkie wysyłanie obrazków ze schowka (np. zrzutów ekranu) do serwisu imgur.com
weight: 2
project_type: application
---

Mała aplikacja pozwalająca na szybkie wysyłanie obrazków ze schowka (np. zrzutów ekranu) do serwisu imgur.com

## Konfiguracja:
1. Utwórz konto w serwisie [imgur.com](http://imgur.com/) i zaloguj się
2. Wejdź na stronę [rejestracji aplikacji](https://api.imgur.com/oauth2/addclient), wypełnij formularz w następujący sposób a następnie kliknij przycisk "submit" - [Przykład](/images/project/imgurscreenshotdotnet/tutorial_1.png)
	- Application name: ImgurScreenshotDotNet
	- Authorization type: Anonymous usage without user authorization
	- Email: TWÓJ_EMAIL
	- Description: ImgurScreenshotDotNet
	- Przepisz kod z obrazka na dole
3. Zostaniesz przekierowany na kolejną stronę gdzie otrzymasz swój numer. Skopiuj pole "Client ID" i wklej je w do aplikacji, a następnie zapisz używając przyciku "Save settings" - [Przykład](/images/project/imgurscreenshotdotnet/tutorial_2.png)
4. Zrób zrzut ekranu używając klawisza Print Screen lub skopiuj dowolny obrazek do schowka, a następnie wciśnij ustawiony klawisz ("Send hotkey"). Po chwili obrazek zostanie wysłany i otrzymasz do niego link.

Licencja: [MIT](https://github.com/SzymonKatra/ImgurScreenshotDotNet/blob/master/LICENSE)
