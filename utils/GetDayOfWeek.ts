export function GetDayOfWeek() {
  const dayOfWeekName = new Date().toLocaleString('en-US', {
    weekday: 'long'
  })

  return dayOfWeekName
}
