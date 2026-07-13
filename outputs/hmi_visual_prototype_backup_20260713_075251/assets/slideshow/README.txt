Put slideshow images in this folder.

Supported browser-friendly formats:
- .jpg
- .jpeg
- .png
- .webp

In the Electron app, new images in this folder are loaded automatically.
To add or remove slideshow images, copy/delete image files in this folder and restart or reload the app.

The browser-only prototype may use ../../config/slideshow.json as a fallback when it cannot read folders directly.

Example:
{
  "src": "assets/slideshow/my_photo.jpg",
  "title": "My Project",
  "caption": "Short description"
}
