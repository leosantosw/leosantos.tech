export function GetDayOfWeek() {
  const dayOfWeekName = new Date().toLocaleString('en-US', {
    weekday: 'long'
  })

  console.log(dayOfWeekName)

  return dayOfWeekName
}
