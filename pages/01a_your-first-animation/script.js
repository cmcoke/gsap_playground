gsap.to(".card", {
  opacity: 1,
  duration: 5,
  ease: "power2.inOut",
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });
  }
});
