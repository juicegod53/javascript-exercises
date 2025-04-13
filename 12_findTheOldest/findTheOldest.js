const findTheOldest = function(people) {
    biggestAge = -1
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath) {
            age = people[i].yearOfDeath - people[i].yearOfBirth
        } else {
            age = 2025 - people[i].yearOfBirth
        }
        if (age > biggestAge) {
            person = people[i]
            biggestAge = age
        }
    }
    return person
};

// Do not edit below this line
module.exports = findTheOldest;
