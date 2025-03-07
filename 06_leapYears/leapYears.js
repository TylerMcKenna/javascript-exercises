const leapYears = function(year) {
    const isYearDivisibleByFour = (year % 4 === 0);
    const isCentury = (year % 100 === 0);
    const isYearDivisibleByFourHundred = (year % 400 === 0);
    
    if (isYearDivisibleByFour) {
        if (isYearDivisibleByFourHundred || !isCentury) {
            return true;
        }
        return false;
    }
    else { 
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
