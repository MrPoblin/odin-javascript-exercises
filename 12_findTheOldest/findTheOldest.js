const findTheOldest = function(people) {
    return people.reduce((oldest, current) =>{
        if(!oldest){
            return current;
        }
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        if (currentAge > oldestAge){
            return current;
        }
        return oldest;
    }, 0);

};

function getAge(birthYear, deathYear){
    if(!deathYear){
        deathYear = new Date().getFullYear();
    }
    
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
