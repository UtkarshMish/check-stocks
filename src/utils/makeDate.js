export default function makeDate(date)
{
  return Date.UTC(
    ...([...date]
      .flatMap((ele) => (!isNaN(parseInt(ele)) ? parseInt(ele) : " "))
      .join("")).split(" ")
  );

}