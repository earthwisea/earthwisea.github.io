(function () {
  var h = document.getElementById('ew-header'), b = document.getElementById('ew-burger'), last = 0;
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    h.classList.toggle('is-solid', y > 40);
    h.classList.toggle('is-hidden', y > last && y > 160 && !document.body.classList.contains('menu-open'));
    last = y;
  }, { passive: true });
  b.addEventListener('click', function () {
    var o = document.body.classList.toggle('menu-open');
    b.setAttribute('aria-expanded', o);
  });
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-visible'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(function (e) { io.observe(e); });
})();
