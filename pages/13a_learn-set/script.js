/**
 * This code uses GSAP to animate elements with the class ".gsap-box".
 *
 * 1. gsap.set() is used to set the initial state of the element:
 *    - opacity: 0 → invisible
 *    - scale: 0.5 → half size
 *    - y: 100 → shifted downward
 *
 * 2. gsap.to() is then used to animate the element to its final state:
 *    - opacity: 1 → fully visible
 *    - scale: 1 → normal size
 *    - y: 0 → back to original vertical position
 *
 * The result is a smooth entrance animation where the element pops in and rises into view.
 *
 * gsap.set() purpose and uses:
 * - Sets properties instantly without any animation.
 * - Useful for defining initial states before an animation starts.
 * - Can set multiple properties at once (position, scale, rotation, opacity, etc.).
 * - Often used in combination with gsap.to(), gsap.from(), or gsap.fromTo() to control starting conditions.
 *
 * ✅ Key Points About gsap.set()
 *
 * Instantly applies properties — no animation occurs.
 *
 * Common uses:
 *
 * Initialize element positions before animation.
 *
 * Set default states for multiple elements at once.
 *
 * Prepare complex animations (like stacking transforms or off-screen positions) without them visibly jumping on page load.
 *
 * Example: gsap.set(".box", { x: 200, rotation: 45 }) — immediately moves .box 200px to the right and rotates it 45° without animation.
 */

import gsap from "gsap";

// Instantly set initial properties of elements with class "gsap-box"
gsap.set(".gsap-box", {
  opacity: 0, // Make element invisible initially
  scale: 0.5, // Shrink element to 50% of its original size
  y: 100 // Move element down 100 pixels from its original position
});

// Animate elements to a new state
gsap.to(".gsap-box", {
  opacity: 1, // Fade in to full visibility
  scale: 1, // Scale up to original size
  y: 0, // Move back to original vertical position
  duration: 0.6, // Animation lasts 0.6 seconds
  ease: "expo.out", // Smooth easing that slows at the end
  delay: 0.5 // Wait 0.5 seconds before starting the animation
});
