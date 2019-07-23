// write your code below!

function happyHolidays() {
  console.log("Happy holidays!")
}

function happyHolidaysTo(name) {
  console.log(`Happy holidays, ${name}!`)
}

function happyHolidayTo(holiday, name) {
  console.log(`Happy ${holiday}, ${name}!`)
  return `${holiday}, ${name}!`
}

function HolidayCountdown(days, holiday) {
  console.log(`It's ${days} days until ${holiday}!`)
  return `${days}, ${holiday}!`
}

happyHolidays()

happyHolidaysTo('you')

happyHolidayTo("Independence Day", "you")

HolidayCountdown("20", "Mother's Day")

