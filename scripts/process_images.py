import os
from PIL import Image, ImageEnhance

os.makedirs("public/images/products", exist_ok=True)
os.makedirs("public/images/showroom", exist_ok=True)
os.makedirs("public/images/brand", exist_ok=True)

im_tray = Image.open("src/assets/images/IMG_9221 2.jpg")
W, H = im_tray.size

# 1. Full tray with ALL 7 bracelets fully in view
# x from 160 to 3010, y from 240 to 3480
full_tray = im_tray.crop((160, 240, 3010, 3480))
full_tray.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
full_tray.save("public/images/products/bracelets-collection-tray.webp", "WEBP", quality=92)
print("Saved full tray with all 7 bracelets:", full_tray.size)

# Individual bracelet clean bounding boxes:
# Bracelet 1: (320, 520, 720, 3320)
# Bracelet 2: (740, 520, 1140, 3320)
# Bracelet 3: (1140, 420, 1540, 3320)
# Bracelet 4: (1520, 520, 1880, 3320)
# Bracelet 5: (1860, 440, 2240, 3360)
# Bracelet 6: (2220, 500, 2600, 3360)
# Bracelet 7: (2580, 440, 2980, 3360)

bracelet_crops = [
    {
        "id": "bracelet-1",
        "name": "bracelet-dual-tone-cz-tennis",
        "title": "Dual-Tone Rose & Silver Pavé CZ Tennis Bracelet",
        "box": (330, 520, 710, 3320),
        "focus_box": (340, 1600, 700, 2060)
    },
    {
        "id": "bracelet-2",
        "name": "bracelet-sterling-snake-chain",
        "title": "Sterling Silver Rounded Snake Link Chain",
        "box": (740, 520, 1130, 3320),
        "focus_box": (740, 1600, 1130, 2090)
    },
    {
        "id": "bracelet-3",
        "name": "bracelet-royal-pave-tennis",
        "title": "Imperial Wave Pavé Tennis Link Bracelet",
        "box": (1150, 420, 1540, 3320),
        "focus_box": (1160, 1580, 1530, 2040)
    },
    {
        "id": "bracelet-4",
        "name": "bracelet-clover-charm-link",
        "title": "Four-Leaf Clover Filigree Dual-Tone Bracelet",
        "box": (1530, 520, 1880, 3320),
        "focus_box": (1530, 1540, 1880, 2000)
    },
    {
        "id": "bracelet-5",
        "name": "bracelet-greek-meander-link",
        "title": "Heritage Greek Key Meander Link Chain",
        "box": (1870, 440, 2230, 3360),
        "focus_box": (1870, 1580, 2230, 2040)
    },
    {
        "id": "bracelet-6",
        "name": "bracelet-bowtie-sparkle-link",
        "title": "Alternating Bow-Tie Diamond Cut Sparkle Bracelet",
        "box": (2230, 500, 2590, 3360),
        "focus_box": (2240, 1580, 2580, 2020)
    },
    {
        "id": "bracelet-7",
        "name": "bracelet-lion-crest-royale",
        "title": "Royale Gold Crest Luxury Dual-Tone Link Bracelet",
        "box": (2590, 440, 2980, 3360),
        "focus_box": (2590, 1650, 2970, 2130)
    }
]

for b in bracelet_crops:
    name = b["name"]
    # 1. Full clean crop
    crop = im_tray.crop(b["box"])
    crop.thumbnail((600, 1600), Image.Resampling.LANCZOS)
    crop.save(f"public/images/products/{name}.webp", "WEBP", quality=92)
    
    # 2. Square Macro detail
    macro = im_tray.crop(b["focus_box"])
    macro = macro.resize((600, 600), Image.Resampling.LANCZOS)
    macro.save(f"public/images/products/{name}-detail.webp", "WEBP", quality=92)
    
    # 3. Horizontal view (rotate 90 clockwise)
    horiz = crop.rotate(-90, expand=True)
    horiz.save(f"public/images/products/{name}-horiz.webp", "WEBP", quality=92)
    
    print(f"Processed {name}: vertical {crop.size}, macro {macro.size}, horiz {horiz.size}")

print("All bracelet images processed cleanly!")
