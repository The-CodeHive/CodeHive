let pageLoaded = false;

window.onload = function() {
  const loader = document.getElementById('loader');
  const bgVideo = document.getElementById('bgVideo');
  const heroContent = document.querySelector('.heroContent');

  // Initially hide the hero content and background video
  gsap.set(heroContent, { opacity: 0, y: 50 });
  gsap.set(bgVideo, { opacity: 0 });

  setTimeout(function() {
    pageLoaded = true;

    // Fade out the loader
    gsap.to(loader, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        loader.style.display = 'none';
        
        // After loader is hidden, wait for 2 seconds before starting other animations
        setTimeout(() => {
          animateHeroContent();
          startBackgroundVideo();
        }, 1000); // 1-second delay
      }
    });

  }, 2000); // Initial delay before animations start
};

function animateHeroContent() {
  const heroContent = document.querySelector('.heroContent');
  
  gsap.to(heroContent, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out"
  });

  // Animate features section on scroll
  gsap.fromTo('.features', 
    { opacity: 0 }, 
    { opacity: 1, duration: 1, scrollTrigger: {
      trigger: '.features',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none'
    }}
  );

  // Animate individual features within the section
  gsap.fromTo('.features-grid .feature', 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: {
      trigger: '.features',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play none none none'
    }}
  );
}

function startBackgroundVideo() {
  const bgVideo = document.getElementById('bgVideo');
  
  // Start and fade in the background video
  bgVideo.play();
  gsap.to(bgVideo, {
    opacity: 1,
    duration: 4,
    ease: "power2.inOut"
  });
}