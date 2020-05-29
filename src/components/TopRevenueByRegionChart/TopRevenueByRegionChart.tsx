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
        dark: ['#6ab04c', '#f1bf43', '#e77355'],
        light: ['#6ab04c', '#f1bf43', '#e77355'],
      }}
      data={data}
      labels={{
        centerLabel: 'Total Hits',
        centerValue: <strong>90</strong>,
        radialLabelFormatter: function noRefCheck() {},
        showCenterValue: true,
        showRadialLabels: true,
      }}
      legends={{
        showLegends: false,
      }}
      radial={{
        anglePadding: 1,
        innerRadius: 0.75,
      }}
    />
  );
};

export default TopRevenueByRegion;
