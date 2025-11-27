import gsap from "gsap";

/**
 * The `toast` function runs a repeated GSAP animation that:
 * 1. Slides the toast notification upward and fades it in.
 * 2. Keeps it visible for a moment.
 * 3. Animates it back down and fades it out.
 * 4. Automatically repeats the entire cycle.
 */
const toast = () => {
  gsap.to(".toast", {
    /**
     * y: -120
     *  - Moves the toast upward by 120px (appears on screen).
     *
     * opacity: 1
     *  - Fades the toast in, making it fully visible.
     *
     * scale: 1
     *  - Ensures the toast is at normal size when shown.
     *
     * duration: 0.8
     *  - The "show" animation lasts 0.8 seconds.
     *
     * ease: "power4.out"
     *  - Starts fast and slows down smoothly at the end.
     */
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",

    /**
     * onComplete:
     *  - Runs AFTER the toast fully appears.
     *  - Begins the "hide" animation.
     */
    onComplete: () => {
      gsap.to(".toast", {
        /**
         * y: 0
         *  - Moves the toast back to its starting position (downward).
         *
         * opacity: 0
         *  - Fades the toast out until it's invisible.
         *
         * scale: 0.95
         *  - Slightly shrinks the toast for a subtle "disappear" effect.
         *
         * duration: 0.7
         *  - The "hide" animation lasts 0.7 seconds.
         *
         * ease: "power2.in"
         *  - Starts slow and accelerates toward the end.
         *
         * delay: 2.5
         *  - Waits 2.5 seconds before starting the hide animation,
         *    giving the user time to see the toast.
         */
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.in",
        delay: 2.5,

        /**
         * onComplete:
         *  - Runs AFTER the toast finishes hiding.
         *  - Uses setTimeout() to wait 2.5 seconds,
         *    then calls toast() again to restart the cycle.
         *
         * Result:
         *  - The toast continuously appears → stays visible → disappears → repeats.
         */
        onComplete: () => {
          setTimeout(toast, 2500);
        }
      });
    }
  });
};

/**
 * Starts the repeated toast animation loop when the script loads.
 */
toast();
