import * as React from 'react';
import { PieChart } from '@k2/rv-viz';
import { PieChartDataUnit } from '../../types/chart-data-types';
import { retrieveTopRevenueByRegionChartData } from '../../services/chart-data-service';

export interface TopRevenueByRegionProps {}

const TopRevenueByRegion: React.SFC<TopRevenueByRegionProps> = () => {
  const [data, setData]: [Array<PieChartDataUnit>, Function] = React.useState(
    []
  );
  React.useEffect(() => {
    retrieveTopRevenueByRegionChartData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <PieChart
      pie={{
        title: <strong>Top Revenue By Region</strong>,
      }}
      colors={{
        dark: ['#1790c8', '#45a6d3', '#8ac7e3'],
        light: ['#1790c8', '#45a6d3', '#8ac7e3'],
      }}
      data={data}
      labels={{
        centerLabel: 'Total Revenue',
        centerValue: <strong>900k</strong>,
        showCenterValue: true,
        showRadialLabels: true,
      }}
      legends={{
        showLegends: false,
      }}
      radial={{
        anglePadding: 2,
        innerRadius: 0.75,
      }}
    />
  );
};

export default TopRevenueByRegion;
