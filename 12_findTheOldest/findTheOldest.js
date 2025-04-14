const findTheOldest = function(people) {
    calculateAge = (person) => {
        if(person.yearOfDeath){
            return personAge = person.yearOfDeath - person.yearOfBirth
        } else {
            currentYear = new Date().getFullYear()
            return currentYear - person.yearOfBirth
        }
    }
    
    return people.reduce((oldestPerson, person) => {
        oldestPersonAge = calculateAge(oldestPerson)
        personAge = calculateAge(person)
        if(personAge > oldestPersonAge) {
            oldestPerson = person
        }
        return oldestPerson
    })
};

// Do not edit below this line
module.exports = findTheOldest;
