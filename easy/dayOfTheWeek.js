function dayOfTheWeek(day, month, year) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date(`${year}-${month}-${day}`);
  return days[date.getDay()];
}

console.log(dayOfTheWeek(18, 7, 1999));
