/**
 * This script animates toast notification elements sequentially using GSAP.
 *
 * Behavior:
 * 1. Each toast fades in and floats upward one after the other.
 * 2. After floating, each toast fades out and returns to its original position.
 * 3. Once the last toast finishes hiding, the entire sequence repeats after a short delay.
 *
 * Key points:
 * - The 'index * 4' delay creates a stagger effect so each toast appears after the previous one.
 * - The last toast triggers the restart using setTimeout(messages, 2500).
 * - GSAP's to() method is used to animate properties like opacity and y (vertical position).
 * - Using onComplete ensures that the fade-out starts only after the fade-in finishes.
 */

import gsap from "gsap";

const toasts = document.querySelectorAll(".toast"); // Select all toast elements

// Function to animate all toast messages
const messages = () => {
  // Loop through each toast and get its index
  toasts.forEach((toast, index) => {
    // Animate the toast to its visible/floating state
    gsap.to(toast, {
      opacity: 1, // Fade in
      y: -120, // Move upward by 120px
      duration: 2, // Animation lasts 2 seconds
      ease: "power4.out", // Smooth easing for floating effect
      delay: index * 4, // Stagger each toast by 4 seconds multiplied by index
      // When the fade-in/floating finishes:
      onComplete: () => {
        // Animate the toast to hide it
        gsap.to(toast, {
          opacity: 0, // Fade out
          y: 0, // Return to original vertical position
          duration: 2, // Animation lasts 2 seconds
          ease: "power1.in", // Smooth ease for hiding
          // When fade-out completes:
          onComplete: () => {
            // Only trigger after the last toast finishes
            if (index === toasts.length - 1) {
              setTimeout(messages, 2500); // Restart the sequence after a 2.5s delay
            }
          }
        });
      }
    });
  });
};

messages(); // Start the toast animation sequence
