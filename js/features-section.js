document.addEventListener("DOMContentLoaded", () => {
  const articles = Array.from(document.querySelectorAll(".feature"));

  articles.forEach((article, index) => {
      setTimeout(() => {
          article.classList.add("reveal");
      }, index * 300);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const articles = Array.from(document.querySelectorAll(".feature"));

  articles.forEach((article, index) => {
      setTimeout(() => {
          article.classList.add("reveal");
      }, index * 300);
  });
});

document.querySelectorAll('.features-grid .feature').forEach(feature => {
  const glow = feature.querySelector('.glow');

  feature.addEventListener('mousemove', function(e) {
      const rect = feature.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
  });

  feature.addEventListener('mouseenter', function() {
      glow.style.transform = 'translate(-50%, -50%) scale(1)';
      glow.style.opacity = '1';
  });

  feature.addEventListener('mouseleave', function() {
      glow.style.transform = 'translate(-50%, -50%) scale(0)';
      glow.style.opacity = '0';
  });
});

