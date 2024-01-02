const findTheOldest = function(array) {
    array.map(person => {
        if (!("yearOfDeath" in person)){
            person.yearOfDeath = (new Date()).getFullYear();
        }
    })
    const sorted = array.sort((a, b) => 
        (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth ) ? -1 : 1);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
