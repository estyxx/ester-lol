const animateNumbers = () => {
  document.querySelectorAll('[data-animate-number]').forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    let current = 0; // Start from the current text or 0

    const updateCounter = () => {
      const increment = target / 200;

      if (current < target) {
        current = Math.ceil(current + increment);
        counter.innerText = current;
        setTimeout(updateCounter, 70);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

// Run animations when the document is initially loaded
document.addEventListener('DOMContentLoaded', animateNumbers);

// Additionally, re-run animations when the page becomes visible again
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    animateNumbers();
  }
});
window.addEventListener('load', animateNumbers);
setTimeout(animateNumbers, 100); // Execute after 100 milliseconds
