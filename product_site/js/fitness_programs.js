// Alanis Irizarry
// November 24, 2025
// Description: JavaScript file for Coach Kelvin Fitness Program objects script defines FitnessProgram objects and displays program information on the website


// CONSTRUCTOR: FitnessProgram


function FitnessProgram(name, duration, price, features, targetLevel) {
   
    this.name = name;              
    this.duration = duration;      
    this.price = price;            
    this.features = features;      
    this.targetLevel = targetLevel; 
    
   
    // METHOD: getMonthlyPayment

    // Calculates monthly payment if cost is spread over time
    // Parameter: months - number of months to spread payment
    
    
    this.getMonthlyPayment = function(months) {
        if (months <= 0) {
            return 0;
        }
        return (this.price / months).toFixed(2);
    };
    
  
    // METHOD: getDescription
    // Creates a formatted description of the program
    
    this.getDescription = function() {
        let description = `<strong>${this.name}</strong><br>`;
        description += `Duration: ${this.duration} month(s)<br>`;
        description += `Price: $${this.price}<br>`;
        description += `Target Level: ${this.targetLevel}<br>`;
        description += `Includes: ${this.features.join(', ')}`;
        return description;
    };
    
   
    // METHOD: isAffordableFor
    // Checks if program fits within a budget
    // Parameter: budget - client's maximum budget

    
    this.isAffordableFor = function(budget) {
        return this.price <= budget;
    };
    
    // METHOD: comparePrice
    // Compares price with another program
    // Parameter: otherProgram - another FitnessProgram object
    
    this.comparePrice = function(otherProgram) {
        return this.price - otherProgram.price;
    };
    
    // METHOD: getSavingsMessage
    // Creates a motivational savings message for payment plans
    // Parameter: months - number of months for payment plan
    
    this.getSavingsMessage = function(months) {
        const monthly = this.getMonthlyPayment(months);
        const dailyCost = (monthly / 30).toFixed(2);
        return `That's just $${dailyCost}/day - less than a coffee!`;
    };
}

// CREATE OBJECT INSTANCES
// Create four different fitness program objects matching the website

// Instance 1: Starter Package - Entry level program
let starterProgram = new FitnessProgram(
    "Starter Package",
    1,
    97,
    ["Basic workout plan", "Nutrition guide", "Email support"],
    "beginner"
);

// Instance 2: Athlete Package - Intermediate program
let athleteProgram = new FitnessProgram(
    "Athlete Package",
    3,
    247,
    ["Custom program", "Meal planning", "Weekly check-ins", "Live chat"],
    "intermediate"
);

// Instance 3: Champion Package - Advanced program
let championProgram = new FitnessProgram(
    "Champion Package",
    6,
    497,
    ["Everything in Athlete", "1-on-1 training sessions", "Progress tracking", "24/7 support"],
    "intermediate to advanced"
);

// Instance 4: Elite Transformation - Premium program
let eliteProgram = new FitnessProgram(
    "Elite Transformation",
    12,
    897,
    ["Complete transformation program", "Personal coaching", "Supplement guidance", "Priority support"],
    "all levels - serious commitment"
);

// ACCESSING PROPERTIES & METHODS
// Display program information on the webpage

// Wait for page to load before manipulating DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Create a new section to display program objects
    let programDisplay = document.createElement('section');
    programDisplay.id = 'program-objects';
    programDisplay.style.border = '3px solid #FFD700';
    programDisplay.style.padding = '25px';
    programDisplay.style.margin = '30px 0';
    programDisplay.style.backgroundColor = '#1a1a1a';
    programDisplay.style.borderRadius = '8px';
    
    // Add heading
    let heading = document.createElement('h2');
    heading.textContent = 'Detailed Program Breakdowns';
    heading.style.color = '#FFD700';
    heading.style.textAlign = 'center';
    programDisplay.appendChild(heading);
    
    
    // STARTER PROGRAM
    
    let starterDiv = document.createElement('div');
    starterDiv.style.marginBottom = '25px';
    starterDiv.style.padding = '15px';
    starterDiv.style.backgroundColor = '#2a2a2a';
    starterDiv.style.borderLeft = '5px solid #FFD700';
    
    let starterTitle = document.createElement('h3');
    starterTitle.textContent = starterProgram.name;
    starterTitle.style.color = '#FFD700';
    starterDiv.appendChild(starterTitle);
    
    // Use getDescription() method
    let starterInfo = document.createElement('p');
    starterInfo.innerHTML = starterProgram.getDescription();
    starterInfo.style.color = '#ffffff';
    starterDiv.appendChild(starterInfo);
    
    // Calculate and display monthly payment for 2 months
    let starterPayment = document.createElement('p');
    starterPayment.innerHTML = `<strong>Payment Plan:</strong> $${starterProgram.getMonthlyPayment(2)}/month over 2 months<br>`;
    starterPayment.innerHTML += `<em>${starterProgram.getSavingsMessage(2)}</em>`;
    starterPayment.style.backgroundColor = '#333333';
    starterPayment.style.color = '#FFD700';
    starterPayment.style.padding = '10px';
    starterPayment.style.marginTop = '10px';
    starterPayment.style.borderRadius = '4px';
    starterDiv.appendChild(starterPayment);
    
    // Check affordability for $150 budget
    let starterAffordable = document.createElement('p');
    if (starterProgram.isAffordableFor(150)) {
        starterAffordable.innerHTML = 'FITS A $150 BUDGET';
        starterAffordable.style.color = '#FFD700';
        starterAffordable.style.fontWeight = 'bold';
    } else {
        starterAffordable.innerHTML = 'EXCEEDS A $150 BUDGET';
        starterAffordable.style.color = '#999999';
    }
    starterDiv.appendChild(starterAffordable);
    
    programDisplay.appendChild(starterDiv);
    
    // DISPLAY ATHLETE PROGRAM

    
    let athleteDiv = document.createElement('div');
    athleteDiv.style.marginBottom = '25px';
    athleteDiv.style.padding = '15px';
    athleteDiv.style.backgroundColor = '#2a2a2a';
    athleteDiv.style.borderLeft = '5px solid #FFD700';
    
    let athleteTitle = document.createElement('h3');
    athleteTitle.textContent = athleteProgram.name;
    athleteTitle.style.color = '#FFD700';
    athleteDiv.appendChild(athleteTitle);
    
    let athleteInfo = document.createElement('p');
    athleteInfo.innerHTML = athleteProgram.getDescription();
    athleteInfo.style.color = '#ffffff';
    athleteDiv.appendChild(athleteInfo);
    
    let athletePayment = document.createElement('p');
    athletePayment.innerHTML = `<strong>Payment Plan:</strong> $${athleteProgram.getMonthlyPayment(3)}/month over 3 months<br>`;
    athletePayment.innerHTML += `<em>${athleteProgram.getSavingsMessage(3)}</em>`;
    athletePayment.style.backgroundColor = '#333333';
    athletePayment.style.color = '#FFD700';
    athletePayment.style.padding = '10px';
    athletePayment.style.marginTop = '10px';
    athletePayment.style.borderRadius = '4px';
    athleteDiv.appendChild(athletePayment);
    
    let athleteAffordable = document.createElement('p');
    if (athleteProgram.isAffordableFor(300)) {
        athleteAffordable.innerHTML = 'FITS A $300 BUDGET';
        athleteAffordable.style.color = '#FFD700';
        athleteAffordable.style.fontWeight = 'bold';
    } else {
        athleteAffordable.innerHTML = 'EXCEEDS A $300 BUDGET';
        athleteAffordable.style.color = '#999999';
    }
    athleteDiv.appendChild(athleteAffordable);
    
    programDisplay.appendChild(athleteDiv);
    
    // DISPLAY CHAMPION PROGRAM
    
    let championDiv = document.createElement('div');
    championDiv.style.marginBottom = '25px';
    championDiv.style.padding = '15px';
    championDiv.style.backgroundColor = '#2a2a2a';
    championDiv.style.borderLeft = '5px solid #FFD700';
    
    let championTitle = document.createElement('h3');
    championTitle.textContent = championProgram.name;
    championTitle.style.color = '#FFD700';
    championDiv.appendChild(championTitle);
    
    let championInfo = document.createElement('p');
    championInfo.innerHTML = championProgram.getDescription();
    championInfo.style.color = '#ffffff';
    championDiv.appendChild(championInfo);
    
    let championPayment = document.createElement('p');
    championPayment.innerHTML = `<strong>Payment Plan:</strong> $${championProgram.getMonthlyPayment(6)}/month over 6 months<br>`;
    championPayment.innerHTML += `<em>${championProgram.getSavingsMessage(6)}</em>`;
    championPayment.style.backgroundColor = '#333333';
    championPayment.style.color = '#FFD700';
    championPayment.style.padding = '10px';
    championPayment.style.marginTop = '10px';
    championPayment.style.borderRadius = '4px';
    championDiv.appendChild(championPayment);
    
    let championAffordable = document.createElement('p');
    if (championProgram.isAffordableFor(500)) {
        championAffordable.innerHTML = 'FITS A $500 BUDGET';
        championAffordable.style.color = '#FFD700';
        championAffordable.style.fontWeight = 'bold';
    } else {
        championAffordable.innerHTML = 'EXCEEDS A $500 BUDGET';
        championAffordable.style.color = '#999999';
    }
    championDiv.appendChild(championAffordable);
    
    programDisplay.appendChild(championDiv);
    
    // PRICE COMPARISONS
    
    let comparisonDiv = document.createElement('div');
    comparisonDiv.style.marginTop = '20px';
    comparisonDiv.style.padding = '20px';
    comparisonDiv.style.backgroundColor = '#2a2a2a';
    comparisonDiv.style.border = '2px solid #FFD700';
    comparisonDiv.style.borderRadius = '5px';
    
 
    
    let comparison1 = document.createElement('p');
    let diff1 = athleteProgram.comparePrice(starterProgram);
    comparison1.innerHTML = `The <strong>${athleteProgram.name}</strong> costs <strong>$${diff1}</strong> more than the ${starterProgram.name}`;
    comparison1.style.color = '#ffffff';
    comparisonDiv.appendChild(comparison1);
    
    let comparison2 = document.createElement('p');
    let diff2 = championProgram.comparePrice(athleteProgram);
    comparison2.innerHTML = `The <strong>${championProgram.name}</strong> costs <strong>$${diff2}</strong> more than the ${athleteProgram.name}`;
    comparison2.style.color = '#ffffff';
    comparisonDiv.appendChild(comparison2);
    
    let comparison3 = document.createElement('p');
    let diff3 = eliteProgram.comparePrice(starterProgram);
    comparison3.innerHTML = `The <strong>${eliteProgram.name}</strong> costs <strong>$${diff3}</strong> more than the ${starterProgram.name}`;
    comparison3.style.color = '#ffffff';
    comparisonDiv.appendChild(comparison3);
    
    let comparisonNote = document.createElement('p');
    comparisonNote.style.marginTop = '15px';
    comparisonNote.style.fontStyle = 'italic';
    comparisonNote.style.color = '#cccccc';
    comparisonDiv.appendChild(comparisonNote);
    
    programDisplay.appendChild(comparisonDiv);
    
    // Insert the program display section before the pricing table
    let pricingSection = document.getElementById('pricing');
    if (pricingSection) {
        pricingSection.parentNode.insertBefore(programDisplay, pricingSection);
    } else {
        // If pricing section not found, insert after programs section
        let programsSection = document.getElementById('programs');
        if (programsSection) {
            programsSection.parentNode.insertBefore(programDisplay, programsSection.nextSibling);
        } else {
            // Last resort: append to main
            document.querySelector('main').appendChild(programDisplay);
        }
    }
    
    // CONSOLE LOGGING FOR TESTING
    // Log objects and method results to browser console
    
    console.log('=== FITNESS PROGRAM OBJECTS ===');
    console.log('Starter Program:', starterProgram);
    console.log('Athlete Program:', athleteProgram);
    console.log('Champion Program:', championProgram);
    console.log('Elite Program:', eliteProgram);
    
    console.log('\n=== METHOD TESTING ===');
    console.log('Starter monthly (2 months):', starterProgram.getMonthlyPayment(2));
    console.log('Champion monthly (6 months):', championProgram.getMonthlyPayment(6));
    console.log('Is Starter affordable for $150?', starterProgram.isAffordableFor(150));
    console.log('Price difference (Champion vs Starter):', championProgram.comparePrice(starterProgram));
    console.log('Savings message:', athleteProgram.getSavingsMessage(3));
    
    console.log('\nAll FitnessProgram objects loaded successfully!');
});