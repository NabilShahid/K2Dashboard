import * as React from 'react';
import { ColumnChart } from '@k2/rv-viz';
import { ColumnChartDataUnit } from '../../types/chart-data-types';
import { retrieveBrandEngagementByRegionChartData } from '../../services/chart-data-service';

const BrandEngagementByRegionChart: React.SFC = () => {
  const [data, setData]: [
    Array<Array<ColumnChartDataUnit>>,
    Function
  ] = React.useState([]);
  React.useEffect(() => {
    retrieveBrandEngagementByRegionChartData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <ColumnChart
      column={{
        barWidth: 0.2,
        title: <strong>Brand Engagement By Region</strong>,
      }}
      data={data}
      horizontalGridLine={{
        enabled: true,
        tickTotal: 2,
      }}
      legends={{
        position: 'flex-end',
      }}
      tooltip={{
        tooltipComponent: function noRefCheck() {},
      }}
      xAxis={{
        style: {
          fontSize: '12px',
          strokeWidth: 0.6,
        },
        tickPadding: 15,
        tickSizeInner: 0,
        tickSizeOuter: 6,
      }}
      yAxis={{
        hideLine: true,
        style: {
          fontSize: '12px',
        },
        tickPadding: 15,
        tickSize: 0,
        tickTotal: 2,
      }}
    />
  );
};

export default BrandEngagementByRegionChart;
