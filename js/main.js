
    // CURSOR
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function animCursor() {
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(animCursor);
    }
    animCursor();
    document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '20px'; cursor.style.height = '20px';
        ring.style.width = '56px'; ring.style.height = '56px';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px'; cursor.style.height = '12px';
        ring.style.width = '36px'; ring.style.height = '36px';
      });
    });

    // SCROLL REVEAL
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => obs.observe(el));
    
    //ADAPTATION
    const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// POPUP
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('popupOverlay');
  const acceptBtn = document.getElementById('popupAccept');

  if (!localStorage.getItem('popupSeen')) {
    overlay.style.display = 'flex';
  } else {
    overlay.style.display = 'none';
  }

  if (acceptBtn && overlay) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('popupSeen', 'true'); // to save a popup aceptation
      overlay.style.transition = 'opacity 0.6s ease, backdrop-filter 0.6s ease, -webkit-backdrop-filter 0.6s ease';
      overlay.style.opacity = '0';
      overlay.style.backdropFilter = 'blur(0px)';
      overlay.style.webkitBackdropFilter = 'blur(0px)';
      overlay.style.pointerEvents = 'none';
      setTimeout(() => overlay.style.display = 'none', 600);
    });
  }
});

// PROJECT MODALS
function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.style.backdropFilter = 'blur(0px)';
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});