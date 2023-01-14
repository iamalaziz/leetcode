function dayOfYear(date) {
  let dateArr = date.split("-");
  let year = parseInt(dateArr[0]);
  let month = parseInt(dateArr[1]);
  let day = parseInt(dateArr[2]);
  let days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let dayOfYear = days[month - 1] + day;
  if (month > 2 && isLeapYear(year)) {
      dayOfYear++;
  }
  return dayOfYear;
}

function isLeapYear(year) {
  if (year % 4 !== 0) {
      return false;
  } else if (year % 100 !== 0) {
      return true;
  } else if (year % 400 !== 0) {
      return false;
  } else {
      return true;
  }
}

console.log(dayOfYear('2019-02-10'));