// console.log("Script loaded");

const animateBar = () => {
  //   console.log("Animation script working");
  const scrollContainer = document.getElementById('scroll-container');
  const animatedBar = document.getElementById('animated-bar');
  const marginBottom = 100; // Margin at the bottom to keep bar visible

  const calculateProgress = () => {
    const windowHeight = window.innerHeight;
    const containerRect = scrollContainer.getBoundingClientRect();
    const visibleHeight = Math.max(
      0,
      windowHeight - containerRect.top - marginBottom,
    );
    const adjustedContainerHeight = scrollContainer.offsetHeight - marginBottom;

    return Math.min(visibleHeight / adjustedContainerHeight, 1);
  };

  window.onscroll = () => {
    const progress = calculateProgress();
    animatedBar.style.height = `${progress * 100}%`;
    // console.log("Bar height set to:", animatedBar.style.height);
  };
};

// Initialize the animation when the document is ready
document.addEventListener('DOMContentLoaded', animateBar);

// Reinitialize the animation if the page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    animateBar();
  }
});

// Ensure the animation runs after the page fully loads
window.addEventListener('load', animateBar);

// A slight delay to catch late DOM adjustments
setTimeout(animateBar, 100);
