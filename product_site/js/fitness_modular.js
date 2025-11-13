//Alanis Irizarry
//November 9, 2025
// Modularized Payment Plan Calculator functions


// Initialize event listeners when page loads
function initializeEventListeners() {
    const packageSelect = document.getElementById('package-select');
    const monthsSelect = document.getElementById('months-select');
    const resetBtn = document.getElementById('reset-btn');

    if (!packageSelect || !monthsSelect || !resetBtn) return;

    packageSelect.addEventListener('change', handlePaymentCalculation);
    monthsSelect.addEventListener('change', handlePaymentCalculation);
    resetBtn.addEventListener('click', resetCalculator);
}

// Calculate monthly payment and update results
function handlePaymentCalculation() {
    const packageSelect = document.getElementById('package-select');
    const monthsSelect = document.getElementById('months-select');
    const packageNameSpan = document.getElementById('package-name');
    const priceAmountSpan = document.getElementById('price-amount');
    const monthsDisplaySpan = document.getElementById('months-display');
    const paymentAmountSpan = document.getElementById('payment-amount');
    const resultsDiv = document.getElementById('results');

    const selectedPrice = parseFloat(packageSelect.value);
    const numberOfMonths = parseInt(monthsSelect.value);

    // Hide results if selections are incomplete
    if (!selectedPrice || !numberOfMonths) {
        resultsDiv.style.display = 'none';
        return;
    }

    const monthlyPayment = (selectedPrice / numberOfMonths).toFixed(2);

    // Update results
    packageNameSpan.textContent = packageSelect.options[packageSelect.selectedIndex].text.split(' - ')[0];
    priceAmountSpan.textContent = `$${selectedPrice.toFixed(2)}`;
    monthsDisplaySpan.textContent = `${numberOfMonths} month${numberOfMonths > 1 ? 's' : ''}`;
    paymentAmountSpan.textContent = `$${monthlyPayment}/month`;

    resultsDiv.style.display = 'block';
}

// Reset calculator to initial state
function resetCalculator() {
    document.getElementById('package-select').value = "";
    document.getElementById('months-select').value = "";
    const resultsDiv = document.getElementById('results');
    if (resultsDiv) resultsDiv.style.display = 'none';
}

// Call initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initializeEventListeners);
