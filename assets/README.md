# Assets Directory

This directory contains all static assets for the EconomyBot website, including images, logos, and screenshots.

## Directory Structure

```
assets/
├── images/
│   ├── logo.png              # Main logo (512x512px)
│   ├── og-image.png          # Open Graph social sharing image (1200x630px)
│   └── screenshots/          # Bot interface screenshots
│       ├── command-interface.png      # Command interaction screenshot (800x450px)
│       ├── economy-hub.png            # Economy hub interface (800x450px)
│       ├── marketplace.png            # Player marketplace (800x450px)
│       ├── quest-system.png           # Quest system (800x450px)
│       ├── profile-customization.png  # Profile customization (800x450px)
│       └── leaderboards.png           # Leaderboards (800x450px)
```

## How to Add or Replace Images

### 1. Using GitHub Web Interface

1. Navigate to the `assets/images/` or `assets/images/screenshots/` directory
2. Click **Add file** → **Upload files**
3. Drag and drop your image files
4. Commit the changes
5. Your images will automatically be deployed with the next build

### 2. Using Git Command Line

```bash
# Clone the repository
git clone https://github.com/JDT89/Bot.git
cd Bot

# Add your images to the appropriate directory
cp /path/to/your/logo.png assets/images/logo.png
cp /path/to/your/screenshot.png assets/images/screenshots/command-interface.png

# Commit and push
git add assets/images/
git commit -m "Update images"
git push origin main
```

### 3. Using GitHub Desktop

1. Open the repository in GitHub Desktop
2. Copy your image files to the `assets/images/` directory
3. The changes will appear in GitHub Desktop
4. Write a commit message and click **Commit to main**
5. Click **Push origin**

## Image Specifications

### Logo (`logo.png`)
- **Dimensions:** 512x512px (square)
- **Format:** PNG with transparency
- **Purpose:** Main branding, navigation header, footer
- **Optimization:** Keep file size under 100KB

### Open Graph Image (`og-image.png`)
- **Dimensions:** 1200x630px (1.91:1 ratio)
- **Format:** PNG or JPG
- **Purpose:** Social media sharing previews (Discord, Twitter, Facebook)
- **Content:** Should include bot name/logo and tagline
- **Optimization:** Keep file size under 300KB

### Screenshots (all files in `screenshots/`)
- **Dimensions:** 800x450px (16:9 ratio)
- **Format:** PNG or JPG
- **Purpose:** Showcase bot features on homepage
- **Content:** Actual Discord interface screenshots
- **Optimization:** Keep each file under 200KB

## Using Images in HTML

Images are referenced using absolute paths from the site root:

```html
<img src="/assets/images/logo.png" alt="EconomyBot Logo" width="512" height="512">

<img src="/assets/images/screenshots/command-interface.png" alt="Command Interface" width="800" height="450">
```

## URLs After Deployment

Once deployed to Render, images are accessible at:
- `https://your-site.onrender.com/assets/images/logo.png`
- `https://your-site.onrender.com/assets/images/screenshots/command-interface.png`

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: 70-80% quality for JPGs, optimized PNGs

2. **Use appropriate formats:**
   - PNG for images with transparency or text
   - JPG for photos/complex screenshots
   - WebP for modern browsers (optional)

3. **Resize images** to exact dimensions needed:
   - Don't upload 4K images that display at 800px
   - Use the dimensions listed above

4. **Test before uploading:**
   - Check how images look on dark backgrounds
   - Verify transparency works correctly
   - Ensure text is readable at display size

## Current Placeholders

All images currently in this directory are **placeholders**. Replace them with your actual:
- Bot logo design
- Real Discord bot interface screenshots
- Custom Open Graph social sharing image

To maintain consistency, keep the same filenames when replacing images.
