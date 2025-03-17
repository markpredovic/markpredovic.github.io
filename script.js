// Gladko pomikanje
document.querySelectorAll('.sticky-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const targetOffset = targetSection.offsetTop;
  
      // Pomikaj se gladko brez zamude
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    });
  });
  
  // Generiraj naključne barve
  function generateRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  function updateRandomPalette() {
    const colorBoxes = document.querySelectorAll('#nakljucna-paleta .color-box');
    const hexSpans = document.querySelectorAll('#nakljucna-paleta .hex-codes span');
  
    colorBoxes.forEach((box, index) => {
      const color = generateRandomColor();
      box.style.backgroundColor = color;
      hexSpans[index].textContent = color;
    });
  }
  
  // Kopiraj HEX kodo (brez obvestila)
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const hex = document.getElementById(button.getAttribute('data-hex')).textContent;
      navigator.clipboard.writeText(hex);
    });
  });
  
  // Mešanje barv
  document.getElementById('mix-btn').addEventListener('click', () => {
    const color1 = document.getElementById('color-picker1').value;
    const color2 = document.getElementById('color-picker2').value;
    const mixedColor = mixColors(color1, color2);
    document.getElementById('mixed-color').style.backgroundColor = mixedColor;
    document.getElementById('mixed-hex').textContent = mixedColor;
  });
  
  function mixColors(color1, color2) {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);
  
    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);
  
    const r = Math.round((r1 + r2) / 2);
    const g = Math.round((g1 + g2) / 2);
    const b = Math.round((b1 + b2) / 2);
  
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  // Pretvornik HEX v RGB
  document.getElementById('convert-hex-to-rgb').addEventListener('click', () => {
    const hex = document.getElementById('hex-input').value;
    if (/^#([A-Fa-f0-9]{6})$/.test(hex)) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      document.getElementById('rgb-output').textContent = `RGB: (${r}, ${g}, ${b})`;
    } else {
      alert('Neveljavna HEX koda!');
    }
  });
  
  document.getElementById('convert-rgb-to-hex').addEventListener('click', () => {
    const rgb = document.getElementById('rgb-input').value;
    const match = rgb.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        document.getElementById('hex-output').textContent = `HEX: ${hex}`;
      } else {
        alert('Neveljavne RGB vrednosti!');
      }
    } else {
      alert('Neveljavna oblika RGB!');
    }
  });
  
  // Poslušalci dogodkov
  document.getElementById('generate-btn').addEventListener('click', updateRandomPalette);
  document.getElementById('reset-btn').addEventListener('click', () => {
    document.querySelectorAll('#nakljucna-paleta .color-box').forEach(box => {
      box.style.backgroundColor = '#FFFFFF';
    });
    document.querySelectorAll('#nakljucna-paleta .hex-codes span').forEach(span => {
      span.textContent = '#FFFFFF';
    });
  });