import * as React from 'react';
import { BarChart } from '@k2/rv-viz';
import { getBestSellersChartData } from '../../services/chart-apis';
import { BarChartDataUnit } from '../../types/chart-data-types';

export interface BestSellerChartProps {}

const BestSellerChart: React.SFC<BestSellerChartProps> = () => {
    const [data, setData]: [Array<BarChartDataUnit>, Function] = React.useState(
        []
      );
    React.useEffect(() => {
        getBestSellersChartData().then((data) => {
          setData(data);
          console.log(data);
        });
      }, []);
  return (
    <BarChart
      bar={{
        barWidth: 0.15,
        stacking: true,
        title: <strong>Heading</strong>,
      }}
      
      colors={{
        dark: ['#6098f3'],
        light: ['#6098f3'],
      }}
      data={data}
    //   data={[
    //     {
    //       color: '#7bba3c',
    //       data: [
    //         {
    //           labelColor: '#777777',
    //           x: 20.5,
    //           y: 'Critical',
    //         },
    //       ],
    //       name: 'Critical',
    //     },
    //     {
    //       color: '#7bba3c',
    //       data: [
    //         {
    //           labelColor: '#777777',
    //           x: 3.5,
    //           y: 'High',
    //         },
    //       ],
    //       name: 'High',
    //     },
    //     {
    //       color: '#7bba3c',
    //       data: [
    //         {
    //           labelColor: '#777777',
    //           x: 78.55,
    //           y: 'Mid',
    //         },
    //       ],
    //       name: 'Mid',
    //     },
    //     {
    //       color: '#7bba3c',
    //       data: [
    //         {
    //           labelColor: '#777777',
    //           x: 10.55,
    //           y: 'Low',
    //         },
    //       ],
    //       name: 'Low',
    //     },
    //   ]}
      labels={{
        enabled: true,
        formatter: function noRefCheck(e:any) {console.log(e);return e.x+"k"},
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

export default BestSellerChart;
