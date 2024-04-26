const form = document.getElementById('water-footprint-form');
const resultDiv = document.getElementById('result');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modal-content');
const okButton = document.getElementById('ok-button');
const cancelButton = document.getElementById('cancel-button');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get user input values
  const householdSize = parseInt(document.getElementById('household-size').value);
  const showerDuration = parseFloat(document.getElementById('shower-duration').value);
  const showerFrequency = parseFloat(document.getElementById('shower-frequency').value);
  const brushingDuration = parseFloat(document.getElementById('brushing-duration').value);
  const brushingFrequency = parseFloat(document.getElementById('brushing-frequency').value);
  const laundryLoads = parseFloat(document.getElementById('laundry-loads').value);
  const dishwashingMethod = document.getElementById('dishwashing-method').value;

  // Calculate water footprint based on user input and average water usage estimates (replace with more accurate data if available)
  let totalFootprint = 0;

  // Shower water usage (gallons per minute)
  const showerUsage = 2.5;
  totalFootprint += showerDuration * showerFrequency * showerUsage * householdSize;

  // Brushing teeth water usage (gallons per session)
  const brushingUsage = 0.5;
  totalFootprint += brushingDuration * brushingFrequency * brushingUsage * householdSize;

  // Laundry water usage (gallons per load) - adjust based on dishwasher efficiency and washing machine model
  const laundryUsage = dishwashingMethod === 'dishwasher' ? 15 : 25;
  totalFootprint += laundryUsage * laundryLoads;

  // Include additional water usage calculations for other activities as needed

  // Display the calculated footprint in the modal
  const resultText = `Your estimated daily water footprint is approximately ${totalFootprint.toFixed(2)} gallons.`;
  modalContent.textContent = resultText;
  modal.style.display = 'block';
});

// Close the modal when the user clicks on OK or Cancel
okButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

cancelButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
