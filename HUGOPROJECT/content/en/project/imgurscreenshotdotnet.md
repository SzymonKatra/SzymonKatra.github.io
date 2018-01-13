---
date: 2015-06-23T16:28:17+02:00
download_link: https://github.com/SzymonKatra/ImgurScreenshotDotNet/releases/latest
keywords:
- imgurscreenshotdotnet
- imgur
- screenshot
- simple
images:
- /images/project/imgurscreenshotdotnet/screenshot_1.png
repository: https://github.com/SzymonKatra/ImgurScreenshotDotNet
title: ImgurScreenshotDotNet
description: Tiny application that quickly sends images from the clipboard(e.g. screenshot) to imgur.com
weight: 4
project_type: application
draft: true
---

Tiny application that quickly sends images from the clipboard(e.g. screenshot) to imgur.com.

## Configuration:
1. Create an account on [imgur.com](http://imgur.com/) and sign in
2. Browse to [application registration](https://api.imgur.com/oauth2/addclient), fill in the form as follows and then click "submit" button - [Example](/images/project/imgurscreenshotdotnet/tutorial_1.png)
	- Application name: ImgurScreenshotDotNet
	- Authorization type: Anonymous usage without user authorization
	- Email: YOUR_EMAIL
	- Description: ImgurScreenshotDotNet
	- Retype code from image on the bottom
3. You will be redirected to the next page where you get your number. Copy "Client ID" field and paste it to application. Save changes using "Save settings" button - [Example](/images/project/imgurscreenshotdotnet/tutorial_2.png)
4. Take screenshot using "Print Screen" key or copy any image to clipboard, and press choosen key ("Send hotkey"). In a few moments image will be uploaded and you get link to it.

Licencja: [MIT](https://github.com/SzymonKatra/ImgurScreenshotDotNet/blob/master/LICENSE)
