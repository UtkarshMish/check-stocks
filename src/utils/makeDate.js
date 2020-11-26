export default function makeDate(date)
{
  return Date.UTC(...([...date]
    .flatMap((ele) => (!isNaN(parseInt(ele)) ? parseFloat(ele) : " "))
    .join("")).split(" "));

}