---
date: 2016-07-19T22:56:44+02:00
description: 2D graphics library built on top of OpenTK
keywords:
- opengl
- gl
- opentk
- high
- performance
- 2d
- graphics
- games
- game
- engine
- library
- framework
project_type: library
repository: https://github.com/SzymonKatra/TKGameUtilities
title: TKGameUtilities
weight: 203
---

**Note: This project is discontinued and published for illustrative purposes.**

TKGameUtilities is a library built on top of [OpenTK](http://www.opentk.com/) to allow making high performance OpenGL 2D games in C# with easy to use object oriented interface.
Library has high-level interfaces for drawing but if they not meet your requirements you can also use low-level and customize them.

An example of use can be found [here](https://github.com/SzymonKatra/TKGameUtilities/tree/master/TKGameUtilities/Example/Program.cs).  
In new project you must add *TKGameUtilities.dll* and *OpenTK.dll* references to work properly.

## Features list:

- OpenGL context management
- Window and input done by OpenTK
- Images and textures \(*.bmp, *.emf, *.exif, *.gif, *.icon, *.jpeg, *.png, *.tiff, *wmf\)
- *VertexBuffer* with some predefined common vertices
- *IndexBuffer*
- Shaders (basic shaders for drawing are implemented out of box)
- Fonts (they are rendered to texture by GDI+ and used later to display text)
- Batching for high-performance drawing (*SpriteBatch*, *IndexedPrimitiveBatch* and *FontBatch*)
- *PixelBuffer*
- Fixed and variable step game loop
- Polygon collisions (convex and triangulated concave)
- Math utilities and basic structures
- Fixed point math done by [FixedMath.Net](https://github.com/asik/FixedMath.Net)

License: [MIT](https://github.com/SzymonKatra/TKGameUtilities/blob/master/LICENSE.txt)
