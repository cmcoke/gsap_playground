import gsap from "gsap";

gsap.to(".box", {
  duration: 1.5,
  background: "#FF4700",
  boxShadow: "0 4px 10px rgba(224, 245, 39, 0.5)",
  scale: 1.2,
  borderRadius: "50%",
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true
});
