const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const footprintValue = document.getElementById('footprint-value');
const footprintText = document.getElementById('footprint-text');
const tipsList = document.getElementById('tips-list');

submitBtn.addEventListener('click', calculateFootprint);

function calculateFootprint() {
  let totalFootprint = 0;
  const showerSelection = document.querySelector('input[name="shower"]:checked');
  const teethSelection = document.querySelector('input[name="teeth"]:checked');

  // Add logic to calculate footprint based on user selections (e.g., showerSelection.value)
  // Update totalFootprint based on calculations

  // Example calculation (replace with your actual logic)
  totalFootprint += parseInt(showerSelection.value);
  totalFootprint += parseInt(teethSelection.value);

  // Display the result
  footprintValue.textContent = totalFootprint;
  
  let footprintTextValue;
  if (totalFootprint <= 5) {
    footprintTextValue = "very low";
  } else if (totalFootprint <= 10) {
    footprintTextValue = "low";
  } else if (totalFootprint <= 15) {
    footprintTextValue = "average";
  } else {
    footprintTextValue = "high";
  }
  footprintText.textContent = footprintTextValue;

  // Show the result container
  resultContainer.style.display = 'block';
}
