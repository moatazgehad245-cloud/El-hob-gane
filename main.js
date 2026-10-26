(function () {
  // Adds the "js" class so the letter can be hidden until it is revealed on scroll
  document.documentElement.classList.add('js');

  // Small hearts floating in the background
  var layer = document.getElementById('hearts');
  var colors = ['#ff2e7e', '#ff6fa5', '#ffb3d1', '#d81b60', '#ffffff'];
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (layer && !reduce) {
    for (var i = 0; i < 20; i++) {
      var h = document.createElement('span');
      h.className = 'float-heart';
      h.textContent = '♥';
      h.style.left = (Math.random() * 100) + '%';
      h.style.fontSize = (14 + Math.random() * 28) + 'px';
      h.style.color = colors[i % colors.length];
      h.style.animationDuration = (7 + Math.random() * 9) + 's';
      h.style.animationDelay = (-Math.random() * 14) + 's';
      layer.appendChild(h);
    }
  }

  // The letter opens by itself as the page is scrolled down to it
  var card = document.getElementById('quote');
  if (!card) return;

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    io.observe(card);
  } else {
    card.classList.add('show');
  }
})();
