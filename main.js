/* ============================================================
   ECONOMY BOT — SHARED JAVASCRIPT
   Navigation, scroll reveal, toast, utilities
   ============================================================ */

// ── Navigation ───────────────────────────────────────────────
const nav = document.getElementById('nav');
const mobileToggle = document.getElementById('nav-mobile-toggle');
const navDrawer = document.getElementById('nav-drawer');

// Scroll-based nav styling
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile drawer
mobileToggle?.addEventListener('click', () => {
  navDrawer?.classList.toggle('open');
  const icon = mobileToggle.querySelector('.toggle-icon');
  if (icon) icon.textContent = navDrawer?.classList.contains('open') ? '✕' : '☰';
});

// Close drawer on link click
navDrawer?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navDrawer.classList.remove('open');
    const icon = mobileToggle?.querySelector('.toggle-icon');
    if (icon) icon.textContent = '☰';
  });
});

// ── Active nav link ──────────────────────────────────────────
(function setActiveNavLink() {
  const path = window.location.pathname;
  const page = path === '/' || path.includes('index') ? 'home'
    : path.includes('commands') ? 'commands'
    : path.includes('guide') ? 'guide'
    : path.includes('premium') ? 'premium'
    : path.includes('status') ? 'status' : '';
  
  document.querySelectorAll('[data-nav-link]').forEach(a => {
    a.classList.toggle('active', a.dataset.navLink === page);
  });
})();

// ── Scroll Reveal ────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Toast ────────────────────────────────────────────────────
let toastTimer;
function showToast(message, duration = 2500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
}
window.showToast = showToast;

// ── Copy to clipboard ────────────────────────────────────────
window.copyText = function(text, msg = '✓ Copied to clipboard!') {
  navigator.clipboard.writeText(text)
    .then(() => showToast(msg))
    .catch(() => {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      showToast(msg);
    });
};

// ── Modal ────────────────────────────────────────────────────
window.openModal = function(id) {
  document.getElementById(id)?.classList.add('open');
};
window.closeModal = function(id) {
  document.getElementById(id)?.classList.remove('open');
};

// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// ── Animated number counter ──────────────────────────────────
function animateCounter(el, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();
  const format = el.dataset.format || '';
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(start + (target - start) * eased);
    
    if (format === 'k') {
      el.textContent = value >= 1000 ? (value / 1000).toFixed(1) + 'K' : value.toString();
    } else if (format === 'm') {
      el.textContent = value >= 1000000 ? (value / 1000000).toFixed(1) + 'M' : 
                       value >= 1000 ? (value / 1000).toFixed(0) + 'K' : value.toString();
    } else {
      el.textContent = value.toLocaleString();
    }
    
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// Trigger counters when visible
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = '1';
      const target = parseInt(e.target.dataset.target || '0');
      animateCounter(e.target, target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

// ── Particle canvas ──────────────────────────────────────────
window.initParticles = function(canvasId, color = '#5865F2') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let particles = [];
  
  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + 20,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.05,
      opacity: Math.random() * 0.6 + 0.2,
    };
  }
  
  for (let i = 0; i < 15; i++) {
    const p = createParticle();
    p.y = Math.random() * canvas.height;
    particles.push(p);
  }
  
  function drawCoin(ctx, x, y, size, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.ellipse(0, 0, size, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((p, i) => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;
      
      ctx.globalAlpha = p.opacity;
      drawCoin(ctx, p.x, p.y, p.size, p.rotation);
      
      if (p.y < -20) particles[i] = createParticle();
    });
    
    if (particles.length < 20 && Math.random() < 0.02) {
      particles.push(createParticle());
    }
    
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }
  animate();
};

// ── Typewriter effect ────────────────────────────────────────
window.typewriter = function(el, texts, speed = 80, pause = 2000) {
  if (!el) return;
  let textIndex = 0, charIndex = 0, deleting = false;
  
  function tick() {
    const current = texts[textIndex];
    if (deleting) {
      el.textContent = current.substring(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(tick, 400);
        return;
      }
    } else {
      el.textContent = current.substring(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, pause);
        return;
      }
    }
    setTimeout(tick, deleting ? speed / 2 : speed);
  }
  tick();
};

// ── Parallax ─────────────────────────────────────────────────
document.addEventListener('mousemove', e => {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  const xRatio = (e.clientX / window.innerWidth - 0.5);
  const yRatio = (e.clientY / window.innerHeight - 0.5);
  
  parallaxEls.forEach(el => {
    const strength = parseFloat(el.dataset.parallax) || 20;
    el.style.transform = `translate(${xRatio * strength}px, ${yRatio * strength}px)`;
  });
});

// ── Accordion ────────────────────────────────────────────────
document.querySelectorAll('.accordion-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const body = item.querySelector('.accordion-body');
    const isOpen = item.classList.contains('open');
    
    // Close all
    document.querySelectorAll('.accordion-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      const b = openItem.querySelector('.accordion-body');
      if (b) b.style.maxHeight = '0';
    });
    
    // Open clicked if was closed
    if (!isOpen) {
      item.classList.add('open');
      if (body) body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// ── Page transition ──────────────────────────────────────────
document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
  
  a.addEventListener('click', e => {
    e.preventDefault();
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(8px)';
    document.body.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    setTimeout(() => { window.location.href = href; }, 200);
  });
});

document.body.style.opacity = '0';
document.body.style.transform = 'translateY(8px)';
document.body.style.transition = 'none';
requestAnimationFrame(() => {
  document.body.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  document.body.style.opacity = '1';
  document.body.style.transform = 'translateY(0)';
});
