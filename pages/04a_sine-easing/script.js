/**
 * This script controls a "scroll-to-top" button that:
 * - Appears once the user scrolls down 500px.
 * - Plays a floating animation using GSAP when it becomes visible.
 * - Grows slightly when hovered and shrinks back when the mouse leaves.
 * - Scrolls the page back to the top when clicked.
 *
 * The code also ensures the floating animation is only created once.
 */

import gsap from "gsap"; // Import the GSAP animation library

// Selects the scroll-to-top button element from the DOM
const button = document.querySelector(".scroll-to-top");

// Tracks whether the floating animation has already been applied
let isFloating = false;

// Runs this function every time the user scrolls the page
window.addEventListener("scroll", () => {
  // Checks if the user has scrolled more than 500px vertically
  if (window.scrollY > 500) {
    button.classList.add("show"); // Makes the button visible by adding the "show" class

    // If the floating animation hasn't been triggered yet...
    if (!isFloating) {
      // Creates a floating up & down animation on the button
      gsap.to(button, {
        y: -10, // Moves the button up 10px
        duration: 1.5, // Each up/down movement lasts 1.5 seconds
        repeat: -1, // Loops the animation endlessly
        yoyo: true, // Reverses direction each time for smooth float effect
        ease: "sine.out" // Applies a smooth easing curve
      });

      isFloating = true; // Prevents the animation from being recreated again
    }
  } else {
    button.classList.remove("show"); // Hides the button if scroll is above 500px
  }
});

// When the mouse pointer enters the button area...
button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.1, // Slightly increases the button size
    duration: 0.2 // Animation lasts 0.2 seconds
  });
});

// When the mouse pointer leaves the button area...
button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1, // Returns the button to its normal size
    duration: 0.2 // Animation lasts 0.2 seconds
  });
});

// When the button is clicked...
button.addEventListener("click", () => {
  window.scrollTo(0, 0); // Instantly scrolls the page back to the top
});
