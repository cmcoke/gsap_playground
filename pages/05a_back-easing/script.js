/**
 * This script creates an animated tab indicator using GSAP.
 * When a tab is clicked:
 *  - The clicked tab becomes "active"
 *  - The indicator slides to the tab's position
 *  - The indicator's width adjusts to match the tab
 *
 * The script calculates each tab’s position using its bounding box
 * and animates the indicator using GSAP with a "back.out" easing
 * for a smooth, slightly overshooting movement.
 */

import gsap from "gsap"; // Imports the GSAP animation library

// Select all tab elements
const tabs = document.querySelectorAll(".tab");

// Select the moving indicator element
const indicator = document.querySelector(".indicator");

// Select the container (row) that holds all the tabs
const tabRow = document.querySelector(".tab-row");

/**
 * Function that positions and animates the indicator
 * based on the tab clicked.
 */
const updateIndicator = target => {
  // Get the position and size of the clicked tab
  const tabBounds = target.getBoundingClientRect();

  // Get the position and size of the entire tab row
  const rowBounds = tabRow.getBoundingClientRect();

  // The indicator width should match the width of the clicked tab
  const width = tabBounds.width;

  // Calculate how far the indicator needs to move horizontally
  const offset = tabBounds.left - rowBounds.left;

  // Animate the indicator to the new position and width
  gsap.to(indicator, {
    x: offset, // Move indicator horizontally to the correct tab
    width: width, // Match the width of the clicked tab
    duration: 0.4, // Animate over 0.4 seconds

    /**
     * "back.out(1.7)" explanation:
     * - "back" is an easing curve that moves slightly *beyond* the target
     *   and then eases back for a bouncy feel.
     * - "out" means the easing applies towards the end of the animation.
     * - "1.7" controls how strong the overshoot is (higher = more bounce).
     */
    ease: "back.out(1.7)"
  });
};

// Add click event listeners to each tab
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove "active" class from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // Add "active" class only to the clicked tab
    tab.classList.add("active");

    // Update indicator position and size to match the clicked tab
    updateIndicator(tab);
  });
});

/**
 * Runs once on page load:
 * Ensures the indicator starts under whichever tab
 * already has the "active" class in the HTML.
 */
updateIndicator(document.querySelector(".tab.active"));
