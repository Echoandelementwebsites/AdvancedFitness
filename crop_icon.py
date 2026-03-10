from PIL import Image

def process_image():
    # Open the image
    img = Image.open("/tmp/file_attachments/Screenshot_20260310_224628.png").convert("RGBA")

    # Get bounding box of non-white pixels
    # Find all pixels that are not close to white
    bg = Image.new(img.mode, img.size, (255, 255, 255, 255))
    diff = Image.composite(img, bg, img)
    # Convert diff to grayscale and invert
    diff = diff.convert("RGB").point(lambda p: p < 250 and 255)
    bbox = diff.getbbox()

    if bbox:
        # Crop the image to the bounding box
        img = img.crop(bbox)

        # Calculate padding to make it square
        width, height = img.size
        max_dim = max(width, height)

        # Create a new white square image
        square_img = Image.new('RGBA', (max_dim, max_dim), (255, 255, 255, 255))

        # Paste the cropped image in the center
        offset = ((max_dim - width) // 2, (max_dim - height) // 2)
        square_img.paste(img, offset)

        # Resize to standard favicon sizes like 64x64 or 32x32.
        # Let's save a good 64x64 icon.png for Next.js App Router
        icon_64 = square_img.resize((64, 64), Image.Resampling.LANCZOS)
        icon_64.save("src/app/icon.png", format="PNG")

        icon_32 = square_img.resize((32, 32), Image.Resampling.LANCZOS)
        icon_32.save("src/app/favicon.ico", format="ICO")
        print("Success: Generated src/app/icon.png and src/app/favicon.ico")
    else:
        print("Error: Could not find bounding box")

if __name__ == "__main__":
    process_image()
