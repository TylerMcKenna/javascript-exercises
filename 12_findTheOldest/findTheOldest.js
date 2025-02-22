const findTheOldest = function(people) {
    let indexOfOldest = 0;
    let ageOfOldest = -1;
    for (let i = 0; i < people.length; i++) {
        let currentAge;
        let person = people[i];
        if (!("yearOfDeath" in person)) {
            currentAge = 2025 - person.yearOfBirth
        } else {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        }
        
        if (ageOfOldest < currentAge) {
            ageOfOldest = currentAge;
            indexOfOldest = i;
        }
    }
    return people[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
