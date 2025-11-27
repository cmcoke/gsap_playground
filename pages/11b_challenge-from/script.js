/**
 * This script creates a smooth 3D flip-card effect using GSAP.
 * When the user hovers ON the card:
 *   - The front face rotates from 0° to 180° (flipping away)
 *   - The back face rotates from -180° to 0° (flipping into view)
 *
 * When the user hovers OFF the card:
 *   - The front face rotates back from 180° to 0°
 *   - The back face rotates from 0° back to -180°
 *
 * This ensures:
 *   - No cumulative rotation buildup (unlike 360° rotations)
 *   - Clean, realistic 3D flipping behavior
 *   - Both sides align perfectly each time
 */

import gsap from "gsap";

const card = document.querySelector("#card"); // Select the main card container
const cardFront = document.querySelector(".card-front"); // Select the front face of the card
const cardBack = document.querySelector(".card-back"); // Select the back face of the card

// Trigger animation when mouse enters card
card.addEventListener("mouseenter", () => {
  gsap.to(cardFront, {
    rotationY: 180, // Rotate front face to the back
    duration: 0.8, // Animation lasts 0.8 seconds
    ease: "power1.inOut" // Smooth ease in/out
  });

  gsap.to(cardBack, {
    rotationY: 0, // Rotate back face into view
    duration: 0.8, // Same duration for sync
    ease: "power1.inOut" // Smooth easing
  });
});

// Trigger animation when mouse leaves card
card.addEventListener("mouseleave", () => {
  gsap.to(cardFront, {
    rotationY: 0, // Reset front face rotation
    duration: 0.8, // Same speed as hover enter
    ease: "power1.inOut" // Smooth transition
  });

  gsap.to(cardBack, {
    rotationY: -180, // Rotate back face out of view
    duration: 0.8, // Match duration for consistency
    ease: "power1.inOut" // Smooth transition
  });
});
