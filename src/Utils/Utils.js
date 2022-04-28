export function fromNumberToDay(day) {
  switch (day) {
    case 0:
      return (day = "Monday");
    case 1:
      return (day = "Tuesday");
    case 2:
      return (day = "Wednesday");
    case 3:
      return (day = "Thursday");
    case 4:
      return (day = "Friday");
    case 5:
      return (day = "Saturday");
    case 6:
      return (day = "Sunday");
  }
}
