import * as React from 'react';
import { LineChart } from '@k2/rv-viz';
import { LineChartDataUnit } from '../../types/chart-data-types';
import { retrieveRevenueTrendByRegionChartData } from '../../services/chart-data-service';

const RevenueTrendByRegionChart: React.SFC = () => {
  const [data, setData]: [Array<LineChartDataUnit>, Function] = React.useState(
    []
  );
  React.useEffect(() => {
    retrieveRevenueTrendByRegionChartData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <LineChart
      crosshair={{
        styles: {
          seriesLabel: {
            color: '#707070',
            fontWeight: 600,
          },
          xValue: {
            color: '#888888',
          },
          yValue: {
            color: '#707070',
          },
        },
      }}
      data={data}
      horizontalGridLine={{
        enabled: true,
        tickValues: [10, 20],
      }}
      legends={{
        position: 'flex-end',
      }}
      line={{
        title: <strong>Revenue Trend By Region</strong>,
      }}
      xAxis={{
        style: {
          fontSize: '12px',
          strokeWidth: 0.6,
        },
        tickFormat: function noRefCheck() {},
        tickPadding: 15,
        tickSizeInner: 0,
        tickSizeOuter: 6,
        tickTotal: 7,
      }}
      xyPlot={{
        margin: {
          bottom: 50,
          left: 30,
          top: 30,
        },
        yDomain: [0, 20],
      }}
      yAxis={{
        hideLine: true,
        style: {
          fontSize: '12px',
        },
        tickPadding: 15,
        tickSize: 0,
        tickValues: [10, 20],
      }}
    />
  );
};

export default RevenueTrendByRegionChart;
