// Zodiac sign
var zodiacSign = "Taurus";

// Birth month
var birthMonth = "April";

// Birthday date
var birthday = 23;

// Lucky number 
var luckyNumber = 4;

// Horoscope description
var horoscopeDescription = "Taurus is known for being reliable, patient, and practical. Those born under this sign are often very determined and enjoy the finer things in life.";

// Belief in astrology 
var believesInAstrology = false;


// Mood ratings
var myMoodRating = 4.2;
var partner1MoodRating = 3.7;
var partner2MoodRating = 3.5;

// average mood rating
var averageMoodRating = (myMoodRating + partner1MoodRating + partner2MoodRating) / 3;

// Partner zodiac signs
var partner1Sign = "Libra";
var partner2Sign = "Gemini";
var zodiacSign = "Taurus";

// All zodiac signs
var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

//my sign
var mySign = signs[4];

//partenrs signs
var partner1Sign = signs[9];
var partner2Sign = signs[5];

//horoscope description
var horoscopeDescription= 

// DOM stuff
document.querySelector("h1").textContent = zodiacSign;

document.querySelector(".birthday").textContent = "Birthday: " + birthMonth + " " + birthday + "rd";

document.querySelector(".luckyNum").textContent = "Lucky Number: " + luckyNumber;

var paragraphs = document.querySelectorAll("p");

paragraphs[0].textContent = horoscopeDescription;
paragraphs[1].innerHTML += "<b>" + believesInAstrology + "</b>";
paragraphs[2].textContent += "Today's mood rating for Taurus:" +  " " + myMoodRating.toFixed(1) + " out of 5. The average mood rating of " + partner1Sign + " and " + partner2Sign + " is " + averageMoodRating.toFixed(2) + ".";
paragraphs[3].textContent += "My zodiac sign is " + mySign + " Tunde's zodiac sign is " + partner1Sign + " and Korinne's zodiac sign is " + partner2Sign + ".";


