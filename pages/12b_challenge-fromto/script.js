/**
 * This script creates floating "reaction bubbles" whenever the user clicks
 * on any reaction button. The script:
 *
 * 1. Detects which emoji button was clicked.
 * 2. Creates a duplicate floating emoji element (a ".bubble").
 * 3. Positions the bubble exactly on top of the clicked button.
 * 4. Animates the bubble upward, growing, rotating, and fading out using GSAP.
 * 5. Removes the bubble from the DOM after the animation completes.
 *
 * GSAP's fromTo() is used to define:
 *   - The starting state (y: 0, scale: 1, opacity: 1, rotation: 0)
 *   - The ending state (y: -120, scale: 1.6, opacity: 0, rotation: 25)
 *
 * This creates a smooth, clean "floating emoji reaction" effect.
 */

import gsap from "gsap";

const buttons = document.querySelectorAll(".reactions button"); // Select all reaction emoji buttons

buttons.forEach(button => {
  // Loop through each button
  button.addEventListener("click", () => {
    // Listen for when a button is clicked

    const bubble = document.createElement("div"); // Create a new bubble element
    bubble.classList.add("bubble"); // Add the bubble class for styling
    bubble.textContent = button.dataset.emoji; // Set bubble text to the button's emoji

    const rect = button.getBoundingClientRect(); // Get button's position on the screen
    bubble.style.left = rect.left + window.scrollX + "px"; // Position bubble horizontally over button
    bubble.style.top = rect.top + window.scrollY + "px"; // Position bubble vertically over button

    document.body.appendChild(bubble); // Add bubble to the page so it becomes visible

    gsap.fromTo(
      // Use GSAP fromTo() for animation
      bubble, // Element to animate
      {
        y: 0, // Bubble starts at button level
        scale: 1, // Bubble starts at normal size
        opacity: 1, // Bubble starts fully visible
        rotation: 0 // Bubble starts unrotated
      },
      {
        y: -120, // Bubble floats upward
        scale: 1.6, // Bubble grows slightly
        opacity: 0, // Bubble fades out
        rotation: 25, // Bubble rotates slightly
        duration: 1.2, // Animation lasts 1.2 seconds
        ease: "power3.out", // Smooth easing curve
        onComplete: () => bubble.remove() // Remove bubble after animation finishes
      }
    );
  });
});
