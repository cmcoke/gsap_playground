/**
 * This script dynamically builds a bar chart using JavaScript and animates the bars
 * using GSAP. Each bar represents a day of the week with a numeric value.
 *
 * When the page loads:
 *  - The chart is created by generating HTML elements for bars and labels.
 *  - Each bar animates upward using a GSAP "elastic" easing effect.
 *
 * When the "Repeat" button is clicked:
 *  - The chart is cleared and re-rendered so the animation plays again.
 */

import gsap from "gsap"; // Import GSAP animation library

// Select the "Repeat" button from the DOM
const repeat = document.querySelector(".repeat");

// Data for each bar in the chart
const data = [
  { label: "Mon", value: 80 },
  { label: "Tue", value: 60 },
  { label: "Wed", value: 100 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 50 },
  { label: "Sun", value: 65 }
];

// Select the main chart container
const chart = document.getElementById("chart");

// Layout constants calculated from the chart element
const chartHeight = chart.clientHeight; // Height of the chart container
const barWidth = 50; // Fixed width for each bar
const spacing = 25; // Space between bars

// Find the highest value in the dataset for scaling the bars proportionally
const maxValue = Math.max(...data.map(d => d.value));

/**
 * Function that builds and animates the bar chart.
 * It creates DOM elements for each bar, positions them,
 * and applies GSAP animations to the bars.
 */
function renderChart() {
  data.forEach((item, i) => {
    // Create a wrapper div to hold both the bar and its label
    const wrapper = document.createElement("div");
    wrapper.className = "bar-wrapper";

    // Position each wrapper based on index and spacing
    wrapper.style.left = `${i * (barWidth + spacing) + 50}px`;
    wrapper.style.width = `${barWidth}px`;

    // Create the bar element
    const bar = document.createElement("div");
    bar.className = "bar";

    // Calculate proportional height based on the highest value
    const barHeight = (item.value / maxValue) * (chartHeight - 60);
    bar.style.height = `${barHeight}px`;

    // Create the label under the bar
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = item.label; // Display day name

    // Add bar and label to the wrapper
    wrapper.appendChild(bar);
    wrapper.appendChild(label);

    // Add the wrapper to the chart container
    chart.appendChild(wrapper);

    // Animate each bar rising from bottom to its full height
    gsap.to(bar, {
      scaleY: 1, // Grows vertically from scaleY 0 → 1 (assuming CSS starts at 0)
      duration: 2, // Animation lasts 2 seconds
      delay: i * 0.1, // Stagger: each bar starts 0.1s after the previous one

      /**
       * "elastic.out(1, 1.25)" explanation:
       * - "elastic" easing gives a stretchy, bouncy effect—like pulling a rubber band.
       * - "out" means the bounce happens at the end of the animation.
       * - First number (1): amplitude — how strong the bounce is.
       * - Second number (1.25): period — how fast/slow the bouncing oscillates.
       *   Bigger number = slower, more dramatic stretch.
       */
      ease: "elastic.out(1, 1.25)"
    });
  });
}

// When the "Repeat" button is clicked:
repeat.addEventListener("click", () => {
  chart.innerHTML = ""; // Clear all bars from the chart
  renderChart(); // Recreate the chart so animation restarts
});

// Render the chart when the page first loads
renderChart();
