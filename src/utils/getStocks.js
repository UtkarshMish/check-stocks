import Axios from "axios";
import makeDate from "./makeDate";
async function getStocks()
{
  const result = await Axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=60min&outputsize=compact&apikey=UKEAOISJZL846EKY");
  if (result.status == 200 && Object.keys(result.data).length > 1) {
    return result.data;
  }
  else {
    return null;
  }
}
function getStockUpdates(data)
{
  if (data != null) {
    let dataItems = data[Object.keys(data)[1]];
    const collectedData = Object.keys(dataItems).map((date) => [
      makeDate(date),
      ...Object.values(dataItems[date]).map((item) => Math.round(parseFloat(item) * 100) / 100),
    ]);
    return collectedData;
  }
}
export
{
  getStocks,
  getStockUpdates
}