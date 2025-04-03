// Function to create a rainbow-shifting effect
function applyRainbowShiftingEffect(inputId, outputId) {
  const inputField = document.getElementById(inputId);
  const outputField = document.getElementById(outputId);
  let hueOffset = 0; // Starting point for the hue shift

  // Event listener to update the rainbow text as the user types
  inputField.addEventListener("input", () => {
    const text = inputField.value;
    renderRainbowText(text, hueOffset);
  });

  // Function to render the rainbow-shifting text
  function renderRainbowText(text, hueStart) {
    let rainbowText = "";
    for (let i = 0; i < text.length; i++) {
      const hue = (hueStart + i * 20) % 360; // Offset hue for each character
      const color = `hsl(${hue}, 100%, 50%)`;
      rainbowText += `<span style="color:${color};">${text[i]}</span>`;
    }
    outputField.innerHTML = rainbowText; // Render styled text in the output field
  }

  // Function to continuously shift the rainbow
  function shiftRainbow() {
    const text = inputField.value;
    hueOffset = (hueOffset + 1) % 360; // Increment hue offset for shifting
    renderRainbowText(text, hueOffset); // Re-render text with the updated hue
    requestAnimationFrame(shiftRainbow); // Smooth continuous animation
  }

  // Start the shifting animation
  shiftRainbow();
}

// Initialize the rainbow-shifting effect
applyRainbowShiftingEffect("rainbowField", "rainbowOutput");
