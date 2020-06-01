import * as React from 'react';
import { AreaChart } from '@k2/rv-viz';
import { AreaChartDataUnit } from '../../types/chart-data-types';
import { retrieveSalesOverviewChartData } from '../../services/chart-data-service';

const SalesOverviewChart: React.SFC = () => {
  const [data, setData]: [Array<AreaChartDataUnit>, Function] = React.useState(
    []
  );
  React.useEffect(() => {
    retrieveSalesOverviewChartData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <AreaChart
      area={{
        title: <strong>Sales Overview</strong>,
      }}
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
      data={[
        {
          color: '#5579ae',
          curve: 'curveMonotoneX',
          data,
          name: 'Sales',
          opacity: 0.2,
          stroke: '#5579ae',
        },
      ]}
      horizontalGridLine={{
        enabled: true,
        tickValues: [10, 20],
      }}
      legends={{
        enabled: true,
        position: 'flex-end',
      }}
      xAxis={{
        style: {
          fontSize: '12px',
          strokeWidth: 0.6,
        },
        // tickFormat: function noRefCheck() {},
        // tickPadding: 0,
        tickSizeInner: 0,
        tickSizeOuter: 6,
        tickTotal: 7,
      }}
      zone={{
        enabled: true,
        zoneAxis: 'x',
        domain: [1590667716305, 1590667986305],
        zoneRange: [
          {
            color: {
              name: 'Low',
              startingColor: '#e9443a',
              endingColor: '#ffffff',
            },
            end: 1590667836305,
          },
          {
            color: {
              name: 'Normal',
              startingColor: '#2095ca',
              endingColor: '#ffffff',
            },
            end: 1590667956305,
          },
          {
            color: {
              name: 'Low',
              startingColor: '#e9443a',
              endingColor: '#ffffff',
            },
            end: 1590667986305,
          },
        ],
      }}
    />
  );
};

export default SalesOverviewChart;
