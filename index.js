// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver["revenue"] > rev)
}

function driverNamesWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver["revenue"] > rev).map(driver => driver["name"])
}

function exactMatch(drivers, match) {
  let key = Object.keys(match)
  let output = drivers.map(function (driver) {if (driver[key] === match[key]) {return driver}})
  return output.filter(val => val !== undefined)
}

function exactMatchToList(drivers, match) {
  let key = Object.keys(match)
  let output = drivers.map(function (driver) {if (driver[key] === match[key]) {return driver["name"]}})
  return output.filter(val => val !== undefined)
}
