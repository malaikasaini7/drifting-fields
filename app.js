/* drifting fields - playground wiring.
   The field itself is field.js (raw WebGL2); this file is just controls. */
(function () {
  'use strict';

  const PALETTES = {
    dawn:  { colors: ['#F5F9F7', '#C3DEEC', '#A6CC79', '#2E6B43'], glow: [0.68, 0.18], grain: 0.022 },
    dusk:  { colors: ['#161B42', '#3B3178', '#8B5C82', '#F0AE79'], glow: [0.62, 0.86], grain: 0.035 },
    ember: { colors: ['#FDF3E7', '#F5C9A8', '#DE6B48', '#5A1F2E'], glow: [0.5, 0.2],  grain: 0.03 },
    tide:  { colors: ['#F2F7F5', '#BFDCD6', '#5FA8A0', '#143C46'], glow: [0.3, 0.75], grain: 0.028 },
  };

  const opts = {
    colors: [...PALETTES.dawn.colors],
    glow: [...PALETTES.dawn.glow],
    grain: PALETTES.dawn.grain,
    fallback: 'linear-gradient(160deg,#f5f9f7,#c3deec 35%,#a6cc79 70%,#2e6b43)',
  };

  window.makeField(document.getElementById('stage'), opts);

  // palette swatches
  const holder = document.getElementById('swatches');
  Object.entries(PALETTES).forEach(([name, p], i) => {
    const b = document.createElement('button');
    b.className = 'swatch' + (i === 0 ? ' active' : '');
    b.title = name;
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', i === 0 ? 'true' : 'false');
    b.style.background = `linear-gradient(135deg, ${p.colors[1]}, ${p.colors[2]} 55%, ${p.colors[3]})`;
    b.addEventListener('click', () => {
      opts.colors = [...p.colors];
      opts.glow = [...p.glow];
      opts.grain = p.grain;
      document.getElementById('grain').value = p.grain;
      document.getElementById('glow').value = p.glow[1];
      document.querySelectorAll('.swatch').forEach((s) => {
        s.classList.toggle('active', s === b);
        s.setAttribute('aria-checked', s === b ? 'true' : 'false');
      });
    });
    holder.appendChild(b);
  });

  document.getElementById('grain').addEventListener('input', (e) => {
    opts.grain = parseFloat(e.target.value);
  });
  document.getElementById('glow').addEventListener('input', (e) => {
    opts.glow = [opts.glow[0], parseFloat(e.target.value)];
  });
})();
