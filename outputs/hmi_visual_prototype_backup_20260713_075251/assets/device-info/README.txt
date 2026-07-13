Device INFO file library

Create one folder per device tag, then copy files into category folders.

Example:

AE-6304A
  manuals
    gas_detector_manual.pdf
  photos
    ae_6304a_shop_test.jpg
  videos
    ae_6304a_test.mp4

Supported folders:
- manuals: PDF, DOC, DOCX, TXT
- wiring: PDF, JPG, JPEG, PNG, WEBP
- photos: JPG, JPEG, PNG, WEBP
- procedures: PDF, DOC, DOCX, TXT
- specs: PDF, DOC, DOCX, TXT
- videos: MP4, WEBM, MOV, M4V

After adding or deleting files, run:

update_device_info.bat

Then refresh the HMI browser.
