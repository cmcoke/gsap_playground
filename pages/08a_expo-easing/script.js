/**
 * This script creates an expanding "Floating Action Button" (FAB) menu.
 * - When the main FAB is clicked, smaller child buttons spread out in an arc.
 * - Clicking again collapses them back into the center.
 * - GSAP handles all movement, rotation, fading, and easing animations.
 *
 * The code calculates positions using trigonometry:
 * Each child button is placed along a curved arc using angles (in radians),
 * then converted into X/Y coordinates for animation.
 */

import gsap from "gsap"; // Import GSAP for animations

// Select the main action button (the large circular button)
const fab = document.querySelector(".fab");

// Select all the smaller buttons that appear when FAB expands
const children = document.querySelectorAll(".fab-child");

// Controls how far outward the child buttons spread (in pixels)
const radius = 100;

// Tracks whether the menu is currently expanded or collapsed
let expanded = false;

// When the main FAB is clicked...
fab.addEventListener("click", () => {
  // Toggle expanded state
  expanded = !expanded;

  // Change the symbol inside the FAB:
  // "+" when closed, "×" when opened
  fab.textContent = expanded ? "×" : "＋";

  // If menu is expanding...
  if (expanded) {
    // Total arc spread (90 degrees converted to radians)
    const arcSpan = Math.PI / 1.5;

    // Centered start angle (points upward)
    const startAngle = Math.PI / 2 + arcSpan / 2;

    // Loop through each child button
    children.forEach((child, i) => {
      /**
       * Distribute buttons evenly along the arc.
       * Example:
       * - If there are 4 buttons, they spread evenly over the arcSpan.
       */
      const angle = startAngle - i * (arcSpan / (children.length - 1));

      /**
       * Convert polar coordinates → Cartesian coordinates
       * x = cos(angle) * radius
       * y = sin(angle) * radius (negative because screen y-axis is downward)
       */
      const x = Math.cos(angle) * radius;
      const y = -Math.sin(angle) * radius;

      // Animate each child button outward
      gsap.to(child, {
        opacity: 1, // Fade in
        x: x, // Move horizontally to computed position
        y: y, // Move vertically to computed position
        rotate: 360, // Spin one full rotation
        duration: 0.5, // Animation length
        ease: "expo.out", // Fast start, smooth deceleration
        /**
         * Explanation of "0.1 * i":
         *
         * 1. In the forEach loop, "i" represents the index of the current child:
         *      - First child  → i = 0
         *      - Second child → i = 1
         *      - Third child  → i = 2
         *
         * 2. Multiplying the index by 0.1 creates a staggered delay:
         *      i = 0 → 0.1 * 0 = 0.0s delay
         *      i = 1 → 0.1 * 1 = 0.1s delay
         *      i = 2 → 0.1 * 2 = 0.2s delay
         *      i = 3 → 0.1 * 3 = 0.3s delay
         *
         * 3. Effect:
         *    Each child animation starts slightly after the previous one.
         *    This creates a smooth "cascade" or "fan-out" animation
         *    instead of all child buttons animating at the same time.
         */
        delay: 0.1 * i
      });
    });
  } else {
    // If menu is collapsing...
    children.forEach(child => {
      // Animate buttons back to center
      gsap.to(child, {
        opacity: 0, // Fade out
        x: 0, // Move back to center
        y: 0, // Move back to center
        rotate: 0, // Reset rotation
        duration: 0.3, // Faster collapse
        ease: "expo.in", // Smooth acceleration inward
        /**
         * Breakdown of "0.1 * Array.from(children).indexOf(child)":
         *
         * 1. 0.1 * index
         *    - The index is multiplied by 0.1 seconds to create a stagger delay.
         *    - This means:
         *        Child at index 0 → 0.0s delay
         *        Child at index 1 → 0.1s delay
         *        Child at index 2 → 0.2s delay
         *        Child at index 3 → 0.3s delay
         *
         * 2. Array.from(children)
         *    - The "children" variable is a NodeList, not a real JavaScript array.
         *    - Array.from(children) converts the NodeList into a true array so we can use array methods.
         *
         * 3. .indexOf(child)
         *    - Finds the position of the current child button in the array.
         *    - Example:
         *        First  child → index 0
         *        Second child → index 1
         *        Third  child → index 2
         *
         * Result:
         * Each child collapses slightly after the previous one, creating a smooth,
         * cascading animation instead of everything moving at once.
         */
        delay: 0.1 * Array.from(children).indexOf(child),
        pointerEvents: "none" // Make them unclickable
      });
    });
  }
});
