// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



function findMatching(drivers, name){
    const driverName = drivers.filter(driver => name.toUpperCase() === driver.toUpperCase())
    return driverName
}

function fuzzyMatch(drivers,name){
    const driverName = drivers.filter(driver => name.charAt(0)=== driver.charAt(0))
    return driverName
}



function matchName(drivers, name){
    const driverName = drivers.filter(driver => driver.name === name) 
    return driverName
}