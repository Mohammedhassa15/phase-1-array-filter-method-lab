// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
const matches = [];
for (const driver of drivers) {
    if (driver.toLowerCase() === name.toLowerCase()) {
        matches.push(driver);
    }
}
return matches;
}

function fuzzyMatch (driver, letters) {
    return drivers.filter(driver => driver.startsWith(letters))
}

function matchName(drivers, name) {
  return drivers.filter(driver => 
    driver.name === name
  );
}