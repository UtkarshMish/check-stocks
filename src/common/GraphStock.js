import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import WebView from "react-native-webview";
import { getStocks, getStockUpdates } from "../utils/getStocks";
import Loader from "./Loader";
import loadingAnimation from "../../assets/loading-animation.json";
class GraphStock extends PureComponent
{
  constructor(props)
  {
    super(props);
    this.state = {
      data: null,
    };
  }
  async componentDidMount()
  {
    const stockData = await getStocks();
    const data = getStockUpdates(stockData) || null;
    return this.setState({ data });
  }
  render()
  {
    const { colors } = this.props;
    if (this.state.data && this.state.data.length > 1) {
      const injectedHTML = `<head><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></head>
    <div id="container" ></div><script src="https://code.highcharts.com/stock/highstock.js"></script>
                                              <script src="https://code.highcharts.com/stock/modules/data.js"></script>
                                              <script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
                                              <script src="https://code.highcharts.com/stock/modules/export-data.js"></script>`;
      const injectedJavaScriptValue = `const data =  ${JSON.stringify(
        this.state.data
      )};
Highcharts.stockChart('container', {
        title: {
            text: 'AAPL stock price ',
            style: {"color": "${colors.text}"}
        },
        yAxis:{
        labels:{
        style:{
          color:"${colors.text}"
        }
        }
        },
        chart:{
          backgroundColor:'${colors.background}',
        },
        xAxis: {
            minRange: 1,
        },
        exporting:false,
        time: {
        useUTC: true
    },
        rangeSelector: {
            allButtonsEnabled: true,
            buttons: [{
                type: 'day',
                count: 1,
                text: '1D',
                dataGrouping: {
                  enabled: false,
                  forced: true,
                  smoothed : true,
                }
            }, {
                type: 'month',
                count: 1,
                text: '1M'
            },
            {
                type: 'year',
                count: 1,
                text: '1Y'
            },
            {
                type: 'all',
                text: 'All'
            }],
            selected: 1,
            buttonTheme: {
                width: 45,
            },
            inputEnabled:false,
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: "auto"
                },
                chartOptions: {
                    chart: {
                        height: 420
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
                }
            }]
        },
      legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name:'AAPL',
            type: 'area',
            data: data,
            gapSize: 5,
            marker: {
                enabled: null,
                radius: 3,
                lineWidth: 1,
                lineColor: '#FFFFFF'
            },
            tooltip: {
                valueDecimals: 3
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[3]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[2]).setOpacity(0).get('rgba')]
                ]
            },
            threshold: null
        }]
    });`;

      return (
        <View style={styles.container}>
          <WebView
            injectedJavaScript={injectedJavaScriptValue}
            domStorageEnabled
            source={{ html: injectedHTML }}
            style={{ width: "100%", backgroundColor: colors.background }}
            startInLoadingState
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            focusable={true}
            overScrollMode={"never"}
            bounces={false}
            scalesPageToFit={true}
            renderLoading={() => <Loader displayAnimation={loadingAnimation} title={"Loading ..."} />}
            cacheEnabled
          />
        </View>
      );
    } else {
      return <Loader displayAnimation={loadingAnimation} title={"Loading ..."} />;
    }
  }
}

export default GraphStock;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
