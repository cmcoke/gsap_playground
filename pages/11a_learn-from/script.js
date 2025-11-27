/**
 * This code animates elements with the class ".card" using GSAP.
 * When the page loads, each card fades in, moves upward slightly,
 * scales into place, and appears one after another using `stagger`.
 * A button with the class ".repeat" allows the animation sequence
 * to restart when clicked.
 */

import gsap from "gsap";

const repeat = document.querySelector(".repeat"); // Select the button that will restart the animation

// Create and store a GSAP animation for all ".card" elements
const animation = gsap.from(".card", {
  opacity: 0, // Start each card completely transparent
  y: 60, // Start each card 60px lower (will animate upward)
  duration: 0.6, // Each card’s animation lasts 0.6 seconds
  scale: 0.95, // Start each card slightly scaled down to 95%
  delay: 0.2, // Wait 0.2 seconds before starting the animation
  ease: "power4.out", // Smooth easing that slows toward the end of the motion
  stagger: 0.2 // Animate cards one after another with a 0.2s delay between each
});

// Listen for clicks on the "repeat" button
repeat.addEventListener("click", () => {
  animation.restart(); // Restart the animation from the beginning
});
