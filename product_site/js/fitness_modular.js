//Alanis Irizarry
//November 17, 2025
//Event handling for Coach Kelvin Fitness website
//handles payment calculator interactions and form validation with real-time feedback

// PAYMENT CALCULATOR SECTION
// Calculates monthly payments based on package selection
function initializeCalculator() {
    const packageSelect = document.getElementById('package-select');
    const monthsSelect = document.getElementById('months-select');
    const resetBtn = document.getElementById('reset-btn');

    packageSelect.addEventListener('change', calculatePayment);
    monthsSelect.addEventListener('change', calculatePayment);
    resetBtn.addEventListener('click', resetCalculator);
}

function calculatePayment() {
    const packageSelect = document.getElementById('package-select');
    const monthsSelect = document.getElementById('months-select');
    const resultsDiv = document.getElementById('results');

    const price = parseFloat(packageSelect.value);
    const months = parseInt(monthsSelect.value);

    if (!price || !months) {
        resultsDiv.style.display = 'none';
        return;
    }

    const monthly = (price / months).toFixed(2);

    document.getElementById('package-name').textContent = packageSelect.options[packageSelect.selectedIndex].text.split(' - ')[0];
    document.getElementById('price-amount').textContent = '$' + price.toFixed(2);
    document.getElementById('months-display').textContent = months + ' month' + (months > 1 ? 's' : '');
    document.getElementById('payment-amount').textContent = '$' + monthly + '/month';

    resultsDiv.style.display = 'block';
}

function resetCalculator() {
    document.getElementById('package-select').value = '';
    document.getElementById('months-select').value = '';
    document.getElementById('results').style.display = 'none';
}

// FORM VALIDATION SECTION
// Provides real-time feedback for user input
function initializeFormEvents() {
    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const form = document.querySelector('#signup form');

    nameInput.addEventListener('focus', showNameHelp);
    emailInput.addEventListener('focus', showEmailHelp);
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    form.addEventListener('submit', handleSubmit);
}

// Focus event: Show help message when user clicks into name field
function showNameHelp() {
    clearMessages('fullname');
    const help = document.createElement('p');
    help.className = 'help-message';
    help.style.color = '#0066cc';
    help.textContent = 'Enter your full name (at least 2 characters)';
    document.getElementById('fullname').parentNode.appendChild(help);
}

// Focus event: Show help message when user clicks into email field
function showEmailHelp() {
    clearMessages('email');
    const help = document.createElement('p');
    help.className = 'help-message';
    help.style.color = '#0066cc';
    help.textContent = 'Enter a valid email address';
    document.getElementById('email').parentNode.appendChild(help);
}

// Blur event: Validate name when user clicks out of field
function validateName() {
    const input = document.getElementById('fullname');
    const value = input.value.trim();
    
    clearMessages('fullname');
    
    if (value.length < 2) {
        showError('fullname', 'Name must be at least 2 characters');
        input.style.border = '2px solid red';
        return false;
    }
    
    input.style.border = '2px solid green';
    return true;
}

// Blur event: Validate email when user clicks out of field
function validateEmail() {
    const input = document.getElementById('email');
    const value = input.value.trim();
    
    clearMessages('email');
    
    if (!value.includes('@') || value.length < 5) {
        showError('email', 'Please enter a valid email address');
        input.style.border = '2px solid red';
        return false;
    }
    
    input.style.border = '2px solid green';
    return true;
}

// Submit event: Prevent page reload and show success message
function handleSubmit(event) {
    event.preventDefault(); // Stops form from reloading the page
    
    const nameValid = validateName();
    const emailValid = validateEmail();
    
    if (nameValid && emailValid) {
        const success = document.createElement('div');
        success.style.backgroundColor = '#d4edda';
        success.style.padding = '20px';
        success.style.marginTop = '20px';
        success.innerHTML = '<h3>Success!</h3><p>Your responses were recorded. Coach Kelvin will contact you soon.</p>';
        
        event.target.parentNode.insertBefore(success, event.target.nextSibling);
        event.target.reset();
        document.getElementById('fullname').style.border = '';
        document.getElementById('email').style.border = '';
    }
}

// Helper function: Removes old help or error messages
function clearMessages(fieldId) {
    const field = document.getElementById(fieldId);
    const help = field.parentNode.querySelector('.help-message');
    const error = field.parentNode.querySelector('.error-message');
    if (help) help.remove();
    if (error) error.remove();
}

// Helper function: Displays error messages below input fields
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('p');
    error.className = 'error-message';
    error.style.color = 'red';
    error.style.fontWeight = 'bold';
    error.textContent = message;
    field.parentNode.appendChild(error);
}

// Initialize all event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculator();
    initializeFormEvents();
});