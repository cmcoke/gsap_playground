/**
 * This script animates vertical bars like a music equalizer using GSAP.
 *
 * Behavior:
 * 1. Each bar scales vertically (y-axis) from a small value to a taller value.
 * 2. Each bar animates repeatedly (infinite loop) and reverses smoothly (yoyo effect).
 * 3. A slight delay between each bar's animation creates a wave-like, staggered effect.
 *
 * Key GSAP features used:
 * - fromTo(): defines both the starting and ending state for an element's animation.
 * - repeat: -1 → loops the animation infinitely.
 * - yoyo: true → reverses the animation back and forth.
 * - delay: index * 0.1 → staggers each bar based on its index.
 */

import gsap from "gsap";

const bars = document.querySelectorAll(".bar"); // Select all elements with the class "bar"

// Loop through each bar and get its index
bars.forEach((bar, index) => {
  // Animate each bar from a starting state to an ending state
  gsap.fromTo(
    bar, // The element to animate
    {
      scaleY: 0.4 // Start with a compressed vertical scale (40% of original height)
    },
    {
      scaleY: 1.6, // Animate to an expanded vertical scale (160% of original height)
      duration: 0.6, // Each animation lasts 0.6 seconds
      repeat: -1, // Repeat infinitely
      yoyo: true, // Reverse animation smoothly back and forth
      ease: "sine.inOut", // Smooth easing for a natural oscillation
      delay: index * 0.1 // Stagger the start of each bar based on its index (0.1s apart)
    }
  );
});
