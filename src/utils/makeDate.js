
export default function makeDate(date)
{
  const [din, time] = date.split(" ") || [null, null];
  const [hour, min, second] = time && time.split(":") || [null, null, null];
  const newDate = new Date(din);
  hour && min && second && newDate.setUTCHours(hour, min, second);
  return Date.parse(newDate);
}