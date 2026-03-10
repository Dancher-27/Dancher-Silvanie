// ── Active nav link ──────────────────────────────
(function () {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });
})();

// ── Mobile nav toggle ────────────────────────────
const toggle = document.getElementById('navToggle');
const links  = document.querySelector('.nav-links');
if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.addEventListener('click', e => {
        if (!toggle.contains(e.target) && !links.contains(e.target)) {
            links.classList.remove('open');
        }
    });
}

// ── Scroll fade-in ───────────────────────────────
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.05 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Trigger elements already in viewport on load
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add('visible');
    });
});

// ── Skill bars animate on scroll ─────────────────
const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.skill-fill').forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
            barObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-category').forEach(el => barObserver.observe(el));

// ── Contact form (simple client-side) ────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        btn.textContent = 'Verzonden! ✓';
        btn.disabled = true;
        btn.style.background = 'var(--teal)';
        btn.style.color = '#0A0A14';
        setTimeout(() => {
            btn.textContent = 'Stuur Bericht';
            btn.disabled = false;
            btn.style.background = '';
            btn.style.color = '';
            contactForm.reset();
        }, 3000);
    });
}

// ── Foto carousel ────────────────────────────────
(function () {
    const slides   = Array.from(document.querySelectorAll('.carousel-slide'));
    const dotsWrap = document.getElementById('carouselDots');
    if (!slides.length || !dotsWrap) return;

    // Remove slides that have a broken image (foto2, foto3 placeholders)
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            img.addEventListener('error', () => {
                slide.remove();
                rebuild();
            });
        }
    });

    let current = 0;

    function rebuild() {
        const alive = Array.from(document.querySelectorAll('.carousel-slide'));
        dotsWrap.innerHTML = '';
        alive.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === current ? ' active' : '');
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
        });
    }

    function goTo(index) {
        const alive = Array.from(document.querySelectorAll('.carousel-slide'));
        if (!alive.length) return;
        alive[current]?.classList.remove('active');
        current = (index + alive.length) % alive.length;
        alive[current]?.classList.add('active');
        dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) =>
            d.classList.toggle('active', i === current)
        );
    }

    document.querySelector('.carousel-prev')?.addEventListener('click', () => goTo(current - 1));
    document.querySelector('.carousel-next')?.addEventListener('click', () => goTo(current + 1));

    // Swipe support (touch)
    let startX = 0;
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
        carousel.addEventListener('touchend',   e => {
            const diff = startX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
        });
    }

    rebuild();
})();

// ── Typed effect on hero ──────────────────────────
const typed = document.getElementById('typedRole');
if (typed) {
    const words = ['Software Developer', 'Student', 'Probleemoplosser', 'Voetballiefhebber'];
    let wi = 0, ci = 0, deleting = false;
    function type() {
        const word = words[wi];
        typed.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
        if (!deleting && ci > word.length)      { deleting = true; setTimeout(type, 1400); return; }
        if (deleting && ci < 0)                 { deleting = false; wi = (wi + 1) % words.length; }
        setTimeout(type, deleting ? 55 : 100);
    }
    type();
}
