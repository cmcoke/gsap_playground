/**
 * This script creates a GSAP animation for an element with the class ".box"
 * and then connects multiple buttons on the page to control that animation.
 * Each button triggers a different GSAP control method: play, pause, resume,
 * restart, reverse, kill, enable yoyo, and set a repeat count.
 */

import gsap from "gsap"; // Imports the GSAP animation library into the file

// Selects the control buttons from the DOM based on their class names
const play = document.querySelector(".play"); // Button to play animation
const pause = document.querySelector(".pause"); // Button to pause animation
const resume = document.querySelector(".resume"); // Button to resume animation
const restart = document.querySelector(".restart"); // Button to restart animation
const reverse = document.querySelector(".reverse"); // Button to reverse animation
const kill = document.querySelector(".kill"); // Button to kill/remove animation
const yoyo = document.querySelector(".yoyo"); // Button to enable yoyo effect
const repeat = document.querySelector(".repeat"); // Button to set repeat amount

// Creates a GSAP animation targeting the ".box" element
const animation = gsap.to(".box", {
  opacity: 1, // Animates opacity from its current value to 1
  duration: 2, // Animation will last 2 seconds
  scale: 1.2, // Scales the element up to 120% size
  borderRadius: "50%", // Turns the box into a circle over the animation
  ease: "power1.inOut" // Defines the easing curve for smoother motion
});

// Adds event listeners to each button so clicking the button controls the animation
play.addEventListener("click", () => {
  animation.play(); // Starts playing the animation forward
});

pause.addEventListener("click", () => {
  animation.pause(); // Pauses the animation at its current position
});

resume.addEventListener("click", () => {
  animation.resume(); // Continues animation from the paused state
});

restart.addEventListener("click", () => {
  animation.restart(); // Restarts animation from the beginning
});

reverse.addEventListener("click", () => {
  animation.reverse(); // Plays the animation backward from its current spot
});

kill.addEventListener("click", () => {
  animation.kill(); // Completely removes the animation instance
});

yoyo.addEventListener("click", () => {
  animation.yoyo(true); // Enables yoyo, meaning animation plays forward then backward
});

repeat.addEventListener("click", () => {
  animation.repeat(2); // Sets animation to repeat 2 additional times
});
