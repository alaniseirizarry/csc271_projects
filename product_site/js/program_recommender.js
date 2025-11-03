function recommendProgram() {
    // Get user inputs from form
    const goalSelect = document.getElementById('goal-select');
    const experienceSelect = document.getElementById('experience-select');
    const budgetSelect = document.getElementById('budget-select');
    const resultDiv = document.getElementById('recommendation-result');
    
    // Check if all selections are made (using logical AND operator)
    if (!goalSelect.value || !experienceSelect.value || !budgetSelect.value) {
        resultDiv.innerHTML = '<p class="error-message">Please answer all three questions to get your recommendation.</p>';
        return;
    }
    
    // Get values
    const goal = goalSelect.value;
    const experience = experienceSelect.value;
    const budget = parseInt(budgetSelect.value);
    
    // Decision Tree Logic - Three conditions evaluated
    let recommendedPackage = '';
    let packagePrice = '';
    let packageDuration = '';
    let packageFeatures = [];
    
    // DECISION NODE 1 & 2 & 3: Combined evaluation using if-else if-else structure
    // Condition 1: Budget under $100 AND beginner experience (using logical AND)
    if (budget < 100 && experience === 'beginner') {
        recommendedPackage = 'STARTER PACKAGE';
        packagePrice = '$97';
        packageDuration = '1 Month';
        packageFeatures = ['Basic workout plan', 'Nutrition guide', 'Email support'];
    } 
    // Condition 2: Budget between $100-$150 OR intermediate experience (using logical OR)
    else if ((budget >= 100 && budget <= 150) || experience === 'intermediate') {
        recommendedPackage = 'ATHLETE PACKAGE';
        packagePrice = '$247';
        packageDuration = '3 Months';
        packageFeatures = ['Custom program', 'Meal planning', 'Weekly check-ins', 'Live chat'];
    } 
    // Condition 3: Budget over $150 AND NOT beginner (using logical NOT)
    else if (budget > 150 && experience !== 'beginner') {
        // Further decision based on experience level
        if (experience === 'advanced') {
            recommendedPackage = 'ELITE TRANSFORMATION';
            packagePrice = '$897';
            packageDuration = '12 Months';
            packageFeatures = ['Complete transformation', 'Personal coaching', 'Supplement guidance', '24/7 support'];
        } else {
            recommendedPackage = 'CHAMPION PACKAGE';
            packagePrice = '$497';
            packageDuration = '6 Months';
            packageFeatures = ['1-on-1 training sessions', 'Progress tracking', '24/7 support', 'Custom meal plans'];
        }
    } 
    // Default fallback
    else {
        recommendedPackage = 'ATHLETE PACKAGE';
        packagePrice = '$247';
        packageDuration = '3 Months';
        packageFeatures = ['Custom program', 'Meal planning', 'Weekly check-ins', 'Live chat'];
    }
    
    // Display the recommendation
    displayRecommendation(recommendedPackage, packagePrice, packageDuration, packageFeatures, goal);
}

// Function to display the recommendation results
function displayRecommendation(packageName, price, duration, features, goal) {
    const resultDiv = document.getElementById('recommendation-result');
    
    // Build the features list using a FOR LOOP (Loop Type 1)
    // Using for loop because we know the exact number of features to display
    let featuresList = '<ul>';
    for (let i = 0; i < features.length; i++) {
        featuresList += '<li>' + features[i] + '</li>';
    }
    featuresList += '</ul>';
    
    // Create the result HTML
    resultDiv.innerHTML = `
        <div class="recommendation-box">
            <h3>YOUR RECOMMENDED PROGRAM</h3>
            <p><strong>Based on your goal:</strong> ${goal}</p>
            <p><strong>Package:</strong> ${packageName}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Duration:</strong> ${duration}</p>
            <p><strong>Features Included:</strong></p>
            ${featuresList}
            <p class="success-message">This program is perfect for your transformation journey!</p>
        </div>
    `;
}


// Function to generate success milestones using WHILE LOOP
// Using while loop because we're counting down from a specific number until condition is met
function generateMilestones() {
    const milestonesDiv = document.getElementById('milestones-display');
    
    // Define milestone data
    const milestoneWeeks = [1, 4, 8, 12];
    const milestoneDescriptions = [
        'Week 1: Build foundation & learn proper form',
        'Week 4: Notice strength improvements',
        'Week 8: See visible body composition changes',
        'Week 12: Achieve significant transformation results'
    ];
    
    let milestonesHTML = '<h3>YOUR TRANSFORMATION TIMELINE</h3><ul>';
    let index = 0;
    
    // While loop to add each milestone
    while (index < milestoneWeeks.length) {
        milestonesHTML += '<li><strong>Week ' + milestoneWeeks[index] + ':</strong> ' + 
                          milestoneDescriptions[index].split(': ')[1] + '</li>';
        index++;
    }
    
    milestonesHTML += '</ul>';
    milestonesDiv.innerHTML = milestonesHTML;
}


// Function to enhance all pricing table rows with hover effects
// This loops through a NodeList to apply styling to multiple elements
function enhancePricingTable() {
    // Select all table rows in the pricing table body
    const tableRows = document.querySelectorAll('#pricing tbody tr');
    
    // Check if elements were found using length property
    if (tableRows.length > 0) {
        // Loop through each row in the NodeList
        for (let i = 0; i < tableRows.length; i++) {
            const row = tableRows[i];
            
            // Add hover effect by changing background color
            row.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            row.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
            
            // Add click event to highlight selected package
            row.addEventListener('click', function() {
                // Remove highlight from all rows first
                for (let j = 0; j < tableRows.length; j++) {
                    tableRows[j].classList.remove('selected');
                }
                // Highlight clicked row
                this.classList.add('selected');
            });
        }
        
        console.log('Enhanced ' + tableRows.length + ' pricing table rows with interactivity');
    } else {
        console.log('No pricing table rows found');
    }
}



// Wait for DOM to load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Set up recommendation button
    const recommendBtn = document.getElementById('recommend-btn');
    if (recommendBtn) {
        recommendBtn.addEventListener('click', recommendProgram);
    }
    
    // Generate milestones on page load
    generateMilestones();
    
    // Enhance pricing table with interactive features
    enhancePricingTable();
    
    console.log('Program recommender script loaded successfully!');
});