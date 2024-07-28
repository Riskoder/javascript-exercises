const findTheOldest = function(people) {
  const currentDate = new Date().getFullYear()

  return people.reduce((oldest, person) =>{
    const personYearOfDeath = person.yearOfDeath || currentDate;
    const personAge = personYearOfDeath - person.yearOfBirth;

    const oldesYearOfDeath = oldest.yearOfDeath || currentDate;
    const oldesAge = oldesYearOfDeath - oldest.yearOfBirth;

    return personAge > oldesAge ? person : oldest
  })
};

// Do not edit below this line
module.exports = findTheOldest;
