# FineVAU Website Implementation Guide

This guide will help you complete the setup of your FineVAU website. The template has been adapted from the Nerfies website with all the structural changes in place. You now need to add your specific content.

## Overview

The website is structured with the following main sections:
1. **Hero Section** - Title, authors, and links
2. **Teaser** - Brief video demonstration
3. **Abstract** - Paper abstract
4. **Dataset Examples** - Video samples from FineW3 with annotations
5. **LVLM Comparisons** - Model response comparisons
6. **Metric Comparison** - Interactive FV-Score vs. other metrics
7. **Leaderboard** - Sortable performance table
8. **Related Work** - References to related research
9. **BibTeX** - Citation information

## Step-by-Step Implementation

### 1. Update Author Links

**Location:** `index.html` lines 81-87

**Action:** Replace `#TODO` with actual URLs to author websites/profiles.

```html
<!-- Current -->
<a href="#TODO">João Pereira</a>

<!-- Replace with -->
<a href="https://your-personal-website.com">João Pereira</a>
```

Do this for all four authors.

---

### 2. Update Paper Links

**Location:** `index.html` lines 102, 111, 121, 131

**Action:** Replace placeholder links:
- `#TODO-AAAI-PROCEEDINGS` → Your AAAI paper URL
- `#TODO-ARXIV-LINK` → Your arXiv preprint URL
- `#TODO-GITHUB-REPO` → Your GitHub repository URL
- `#TODO-DATA-DOWNLOAD` → Your dataset download link

---

### 3. Add Teaser Video

**Location:** `index.html` line 150-153

**Action:**
1. Create a short (15-30 second) video demonstrating FV-Score in action
2. Save as `static/videos/teaser.mp4`
3. Video should show: A video example → LVLM response → FV-Score breakdown

**Requirements:**
- Format: MP4 (H.264 codec recommended)
- Resolution: 1920x1080 or 1280x720
- Keep file size under 10MB for faster loading

---

### 4. Add Dataset Example Videos

**Location:** `index.html` lines 177-261

**Action:**
1. Create directory: `static/videos/examples/`
2. Add 6 video files:
   - `robbery.mp4` - Already has annotation in HTML
   - `fighting.mp4`
   - `shoplifting.mp4`
   - `accident.mp4`
   - `vandalism.mp4`
   - `arson.mp4`

3. For each video (except robbery), add What/Who/Where annotations in the HTML:

```html
<p><strong>What:</strong> [Describe the events]</p>
<p><strong>Who:</strong> [Describe the entities involved]</p>
<p><strong>Where:</strong> [Describe the location]</p>
```

**Example for Fighting:**
```html
<p><strong>What:</strong> Two individuals engage in physical altercation, exchanging blows</p>
<p><strong>Who:</strong> Two men in casual clothing</p>
<p><strong>Where:</strong> Public street, daytime, moderate crowd</p>
```

---

### 5. Add LVLM Comparison Content

**Location:** `index.html` lines 328-390

**Action:**
1. Create directory: `static/videos/comparisons/`
2. Add video: `example1.mp4` - A video with clear anomaly

3. Update model responses for each LVLM (lines 337, 349, 361, 373):
   - Replace `[TODO: Add model response]` with actual model-generated descriptions

**Example:**
```html
<p><strong>Model Description:</strong> Two individuals dressed in dark clothing enter a jewelry store. They approach the display counter and one person uses a tool to break the glass. Both individuals reach into the broken display and remove items before leaving the scene.</p>
```

4. Update Ground Truth annotations (lines 385-387):
   - Add the actual What/Who/Where ground truth for your example video

---

### 6. Add Metric Comparison Content

**Location:** `index.html` lines 418-500

**Action:**
1. Create directory: `static/videos/metric-demo/`
2. Add video: `example.mp4`
3. Add an example model response (line 423):

```html
<p>Two people enter a store and break a glass counter. They take some items and leave.</p>
```

The metric evaluation examples are already filled with realistic scores from your paper. You can adjust these if you have a specific example you want to showcase.

---

### 7. Update Analytics (Optional)

**Location:** `index.html` line 12

**Action:**
- Replace `G-PYVRSFMDRL` with your own Google Analytics ID
- Or remove the entire analytics script (lines 11-23) if you don't want tracking

---

### 8. Create Placeholder Favicon

**Location:** Referenced in `index.html` line 35

**Action:**
1. Create or download a favicon for your site
2. Save as `static/images/favicon.svg`
3. Alternatively, update line 35 to point to a PNG: `<link rel="icon" href="./static/images/favicon.png">`

---

### 9. Test Locally

Before deploying, test your website locally:

```bash
# Navigate to your repository
cd /Users/joaopereira/Work/finevau.github.io

# Start a local server (choose one)
python3 -m http.server 8000
# OR
python -m SimpleHTTPServer 8000
# OR
npx http-server

# Open in browser
open http://localhost:8000
```

**Test Checklist:**
- [ ] All videos load and play
- [ ] LVLM tabs switch correctly
- [ ] Metric comparison buttons toggle
- [ ] Leaderboard sorts when clicking headers
- [ ] All links work (except placeholders)
- [ ] Mobile responsive design works
- [ ] No console errors in browser DevTools

---

### 10. Add More Leaderboard Results (Optional)

**Location:** `index.html` lines 541-625

**Action:** To add more models to the leaderboard, copy a row and update the values:

```html
<tr data-model="NewModel">
  <td>6</td>
  <td><strong>NewModel</strong></td>
  <td>XX.X</td> <!-- Location -->
  <td>XX.X</td> <!-- Event -->
  <td>XX.X</td> <!-- Entity -->
  <td>XX.X</td> <!-- Attribute -->
  <td><strong>XX.X</strong></td> <!-- All -->
  <td>XX.X</td> <!-- Lighting -->
  <td>XX.X</td> <!-- Env -->
  <td>XX.X</td> <!-- Crowd -->
  <td>XX.X</td> <!-- Time -->
  <td>XX.X</td> <!-- Salient -->
  <td>XX.X</td> <!-- Person -->
  <td>XX.X</td> <!-- Vehicle -->
  <td>XX.X</td> <!-- Others -->
</tr>
```

The sorting will automatically work with new rows!

---

## File Structure

After completing all steps, your `static/` directory should look like this:

```
static/
├── css/
│   ├── index.css
│   ├── bulma.min.css
│   └── ...
├── js/
│   ├── index.js
│   ├── bulma-carousel.min.js
│   └── ...
├── videos/
│   ├── teaser.mp4                    # Main teaser video
│   ├── examples/                     # Dataset examples
│   │   ├── robbery.mp4
│   │   ├── fighting.mp4
│   │   ├── shoplifting.mp4
│   │   ├── accident.mp4
│   │   ├── vandalism.mp4
│   │   └── arson.mp4
│   ├── comparisons/                  # LVLM comparison
│   │   └── example1.mp4
│   └── metric-demo/                  # Metric comparison
│       └── example.mp4
└── images/
    └── favicon.svg                   # Site icon
```

---

## Video Preparation Tips

### Video Format Requirements
- **Codec:** H.264 (most compatible)
- **Container:** MP4
- **Resolution:** 1280x720 or 1920x1080
- **Frame Rate:** 24-30 fps
- **File Size:** Keep under 20MB each (compress if needed)

### Converting Videos with FFmpeg

If you need to convert or compress videos:

```bash
# Compress while maintaining quality
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4

# Resize to 720p
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 23 output.mp4

# Trim video (start at 5s, duration 20s)
ffmpeg -i input.mp4 -ss 00:00:05 -t 00:00:20 -c copy output.mp4
```

---

## Deployment

### GitHub Pages

If you're hosting on GitHub Pages:

1. Commit all changes:
```bash
git add .
git commit -m "Complete FineVAU website setup"
git push origin main
```

2. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`

3. Your site will be live at: `https://[username].github.io/[repo-name]`

### Custom Domain (Optional)

If using a custom domain:
1. Create a `CNAME` file in the root with your domain
2. Configure DNS settings with your domain provider

---

## Troubleshooting

### Videos Not Loading
- Check file paths are correct
- Ensure videos are in MP4 format
- Check file permissions (should be readable)
- Test in multiple browsers

### Interactive Features Not Working
- Check browser console for JavaScript errors
- Ensure jQuery is loading (check Network tab in DevTools)
- Verify Bulma JS libraries are loading

### Mobile Display Issues
- Test with Chrome DevTools mobile emulation
- Check that table-container allows horizontal scrolling
- Verify videos have `playsinline` attribute

---

## Quick Checklist

Before going live, ensure:
- [ ] All `#TODO` placeholders replaced
- [ ] All videos added and tested
- [ ] Author links updated
- [ ] Paper/arXiv/Code/Data links working
- [ ] Ground truth annotations completed
- [ ] Model responses added
- [ ] Website tested locally
- [ ] Mobile responsive design verified
- [ ] No JavaScript errors in console
- [ ] Analytics ID updated or removed

---

## Need Help?

If you encounter issues:
1. Check browser console for errors
2. Validate HTML at validator.w3.org
3. Test in multiple browsers (Chrome, Firefox, Safari)
4. Review the original Nerfies template for reference

---

## Additional Customization

### Changing Colors

The primary color is Bulma's default blue (`#3273dc`). To change it:

1. Open `static/css/index.css`
2. Find and replace `#3273dc` with your preferred color
3. Update button hover states if needed

### Adding More Sections

To add new sections, follow the existing pattern:

```html
<section class="section">
  <div class="container is-max-desktop">
    <h2 class="title is-3">Your Section Title</h2>
    <div class="content">
      <!-- Your content here -->
    </div>
  </div>
</section>
```

---

Good luck with your website! Once complete, your FineVAU benchmark will have a professional, interactive presentation that effectively communicates your research contributions.
