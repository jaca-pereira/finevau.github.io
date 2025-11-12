# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static GitHub Pages website for the "Nerfies" research paper (Deformable Neural Radiance Fields). The site is a single-page application showcasing the research project with videos, interactive demos, and paper information. It's built using vanilla HTML, CSS, and JavaScript with the Bulma CSS framework.

## Architecture

### Structure
- **index.html**: Single-page website containing all content sections (hero, abstract, videos, carousel, interpolation demo, citations)
- **static/**: All assets organized by type
  - **css/**: Bulma framework and custom styles
  - **js/**: Bulma carousel/slider plugins and custom interaction code
  - **videos/**: MP4 demonstration videos
  - **images/**: Static images and interpolation frames
  - **interpolation/stacked/**: 240 sequential JPG frames (000000.jpg - 000239.jpg) for the interactive interpolation slider

### Key Components

**Interactive Interpolation Demo** (index.html:362-376, static/js/index.js:3-20):
- Preloads 240 interpolation frames on page load
- Slider control dynamically swaps images to show smooth deformation transitions
- Located in the "Animation" section of the page

**Video Carousel** (index.html:195-250, static/js/index.js:32-50):
- Uses bulmaCarousel plugin to display research results
- Configured to show 3 videos at a time with manual scrolling
- All videos use `autoplay muted loop playsinline` attributes for mobile compatibility

**Responsive Navigation** (index.html:45-83, static/js/index.js:24-30):
- Bulma navbar with burger menu toggle for mobile
- Dropdown menu for related research projects

## Development

### Local Development
Since this is a static site, you can serve it locally with any HTTP server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Testing
No build process or test suite. Manual testing involves:
1. Verify all videos load and autoplay correctly
2. Test interpolation slider functionality
3. Check carousel navigation
4. Test responsive design at mobile/tablet/desktop breakpoints
5. Verify navbar burger menu works on mobile

### Deployment
The site is hosted on GitHub Pages. Changes pushed to the main branch are automatically deployed. The site is served from the repository root.

### Adding New Content

**Adding Videos**:
1. Place MP4 file in `static/videos/`
2. Add `<video>` element in index.html with attributes: `autoplay controls muted loop playsinline height="100%"`
3. For carousel videos, wrap in a `<div class="item item-{name}">` element

**Updating Interpolation Frames**:
1. Replace images in `static/interpolation/stacked/`
2. Ensure sequential numbering: 000000.jpg, 000001.jpg, etc.
3. Update `NUM_INTERP_FRAMES` constant in static/js/index.js:4 if frame count changes

**Modifying Styles**:
- Custom styles: `static/css/index.css`
- Bulma framework: `static/css/bulma.min.css` (minified, don't edit directly)
- Font Awesome icons: `static/css/fontawesome.all.min.css`

## Important Notes

- All video elements must include `playsinline` attribute for iOS Safari autoplay support
- Google Analytics tracking ID is configured in the header (G-PYVRSFMDRL)
- The site references external CDNs for Google Fonts and jQuery
- The website template is available for reuse under Creative Commons Attribution-ShareAlike 4.0 License (per footer notice)