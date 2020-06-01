import * as React from 'react';
import { BubbleChart } from '@k2/d3-viz';
import { BubbleChartDataUnit } from '../../types/chart-data-types';
import { retrieveTopRevenueByRegion2ChartData } from '../../services/chart-data-service';

const TopRevenueByRegionChart2: React.SFC = () => {
  const [data, setData]: [
    Array<BubbleChartDataUnit>,
    Function
  ] = React.useState([]);
  React.useEffect(() => {
    retrieveTopRevenueByRegion2ChartData().then((data) => {
      setData(data);
     });
  }, []);
  return (
    <BubbleChart
      bubble={{
        title: <strong>Top Revenue By Region</strong>,
      }}
      data={data}
      labels={{
        labelStyles: {
          fill: 'white',
        },
      }}
      legends={{
        enableLegends: true,
        position: 'flex-end',
      }}
    />
  );
};

export default TopRevenueByRegionChart2;
