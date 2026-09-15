# drifting fields

A grainy, domain-warped gradient field rendered on **raw WebGL2** - no libraries, no build step. This is the shader that runs behind the hero of [my portfolio](https://www.malaikasaini.com), pulled out into a playground with palette and grain controls.

Designed and implemented by me, visuals and code.

## What's inside

- `field.js` - the whole renderer: a fullscreen triangle, a fragment shader built on classic 2D simplex noise (public domain, Gustavson / Ashima Arts), domain warping, a soft glow term and film grain. Includes a CSS-gradient fallback when WebGL2 is unavailable, pauses off-screen via IntersectionObserver, and respects `prefers-reduced-motion`.
- `app.js` - playground controls (palette swatches, grain + glow sliders). Uniforms are re-read every frame, so every control is live.
- `index.html` / `style.css` - the stage. Hand-written CSS: floating glass control panel, serif display type.

## Run it

Open `index.html` in a browser. That's it - no dependencies.

## Palettes

`dawn` (portfolio hero), `dusk` (portfolio footer), plus `ember` and `tide` mixed for this playground.
