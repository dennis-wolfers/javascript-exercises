const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (oldest === undefined) {
            return person;
        }
        const personLatestYear = person?.yearOfDeath ?? 2024;
        const personAge = personLatestYear - person.yearOfBirth;
        const oldestLatestYear = oldest?.yearOfDeath ?? 2024;
        const oldestAge = oldestLatestYear - oldest.yearOfBirth;
        if (personAge > oldestAge) {
            return person;
        }
        return oldest;
    }, undefined);
};

// Do not edit below this line
module.exports = findTheOldest;
