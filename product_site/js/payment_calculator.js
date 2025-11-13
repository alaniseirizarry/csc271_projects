// Alanis Irizarry, October 27, 2024
// Payment Plan Calculator - Calculates monthly payments for fitness coaching packages. Auto-calculates when user makes selections

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Calculator script loaded!');
    
     
    // Use getElementById to select inputelements
    var packageSelect = document.getElementById('package-select');
    var monthsSelect = document.getElementById('months-select');
    
    // Use getElementById to select output elements
    var resultsDiv = document.getElementById('results');
    var packageNameSpan = document.getElementById('package-name');
    var priceAmountSpan = document.getElementById('price-amount');
    var monthsDisplaySpan = document.getElementById('months-display');
    var paymentAmountSpan = document.getElementById('payment-amount');
    
    // Use getElementsByClassName to select elements with 'results-heading' class
    var resultsHeadings = document.getElementsByClassName('results-heading');
    
    // Use getElementsByTagName to select all paragraphs
    var allParagraphs = document.getElementsByTagName('p');
    
    // Use querySelector to select the calculator intro paragraph
    var introText = document.querySelector('.calculator-intro');
    
    // Check if elements exist
    if (!packageSelect || !monthsSelect) {
        console.error('Calculator elements not found!');
        return;
    }
    
    // Initially hide results
    if (resultsDiv) {
        resultsDiv.style.display = 'none';
    }
    
    function calculatePayment() {
        
        console.log('Calculating payment...');
        
        
        // Get selected package price (numeric data type)
        var selectedPrice = parseFloat(packageSelect.value);
        
        // Get selected package text (string data type)
        var selectedPackageText = packageSelect.options[packageSelect.selectedIndex].text;
        
        // Get number of months (numeric data type)
        var numberOfMonths = parseInt(monthsSelect.value);
        
        //  INPUT VALIDATION 
        
        // Check if both selections are made
        if (!selectedPrice || isNaN(selectedPrice) || !numberOfMonths || isNaN(numberOfMonths)) {
            // Hide results if incomplete
            resultsDiv.style.display = 'none';
            return;
        }
        
        //   CALCULATION PART
        
        // Calculate monthly payment: Total Price ÷ Number of Months
        var monthlyPayment = selectedPrice / numberOfMonths;
        
        // Round to 2 decimal places for currency
        var roundedPayment = monthlyPayment.toFixed(2);
        
        //  UPDATING CONTENT WITH textContent 
        
        // Update package name using textContent
        packageNameSpan.textContent = selectedPackageText;
        
        // Update months display using textContent
        monthsDisplaySpan.textContent = numberOfMonths + ' months';
    
        
        // Update price amount with HTML formatting (bold dollar sign)
        priceAmountSpan.innerHTML = '<strong>$' + selectedPrice + '</strong>';
        
        // Update monthly payment with HTML formatting (bold and colored)
        paymentAmountSpan.innerHTML = '<strong style="color: #5d5119ff; font-size: 1.2em;">$' + roundedPayment + '/month</strong>';
        
        //RESULTS 
        
        // Make results visible with animation
        resultsDiv.style.display = 'block';
        
        // Add highlight effect to results heading
        if (resultsHeadings.length > 0) {
            resultsHeadings[0].style.color = '#584a1fff';
            resultsHeadings[0].style.transition = 'color 0.3s ease';
        }
        
        // Log to console for testing
        console.log('Package:', selectedPackageText);
        console.log('Total Price:', selectedPrice);
        console.log('Months:', numberOfMonths);
        console.log('Monthly Payment:', roundedPayment);
    }
    
    
    // Listen for package selection change
    packageSelect.addEventListener('change', function() {
        console.log('Package selected:', this.value);
        calculatePayment();
    });
    
    // Listen for months selection change
    monthsSelect.addEventListener('change', function() {
        console.log('Months selected:', this.value);
        calculatePayment();
    });
    
    console.log('Event listeners attached successfully!');
});

// AI helped find bugs, I literally could not for the life of me figure out why the script was not working, and it was that I had the file name reference wrong... :/