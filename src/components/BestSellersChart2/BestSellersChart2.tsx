import * as React from 'react';
import { BarChart } from '@k2/rv-viz';
import { BarChartDataUnit } from '../../types/chart-data-types';
import { retrievegetBestSellersChartData } from '../../services/chart-data-service';

const BestSellerChart2: React.SFC = () => {
  const [data, setData]: [Array<BarChartDataUnit>, Function] = React.useState(
    []
  );
  React.useEffect(() => {
    retrievegetBestSellersChartData().then((data) => {
      setData(data);
     });
  }, []);
  return (
    <BarChart
      bar={{
        barWidth: 0.5,
        stacking: true,
        title: <strong>Top 5 Best Sellers</strong>,
      }}
      colors={{
        dark: ['#6098f3'],
        light: ['#6098f3'],
      }}
      data={data}   
      labels={{
        enabled: true,
        formatter: function noRefCheck(e: any) {
           return e.x + '%';
        },
      }}
      legends={{
        enabled: false,
      }}
      xAxis={{
        style: {
          strokeWidth: 0.5,
        },
        tickFormat: function noRefCheck() {},
        tickSize: 0,
        tickTotal: 100,
        tickValues: [0, 20, 40, 60, 80, 100],
      }}
      xyPlot={{
        margin: {
          left: 50,
          right: 30,
        },
        xDomain: [0.5, 100],
      }}
      yAxis={{
        hideLine: true,
        tickSize: 0,
      }}
    />
  );
};

export default BestSellerChart2;
