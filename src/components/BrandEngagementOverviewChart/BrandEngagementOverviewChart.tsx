import * as React from 'react';
import { ColumnChart } from '@k2/rv-viz';
import { retrieveBrandEngagementOverviewChartData } from '../../services/chart-data-service';
import { ColumnChartDataUnit } from '../../types/chart-data-types';

const BrandEngagementOverviewChart: React.SFC = () => {
    const [data, setData]: [Array<ColumnChartDataUnit>, Function] = React.useState(
        []
      );
    React.useEffect(() => {
        retrieveBrandEngagementOverviewChartData().then((data) => {
          setData(data);
         });
      }, []);
  return (
    <ColumnChart
      column={{
        barWidth: 0.1,
        title: <strong>Brand Engagement Overview</strong>,
      }}
      data={data}
      horizontalGridLine={{
        enabled: true,
        tickTotal: 2,
      }}
      legends={{
        enabled: false,
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

export default BrandEngagementOverviewChart;
