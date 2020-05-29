import * as React from 'react';
import { PieChart } from '@k2/rv-viz';

export interface TopRevenueByRegionProps {}

const TopRevenueByRegion: React.SFC<TopRevenueByRegionProps> = () => {
  return (
    <PieChart
      colors={{
        dark: ['#6ab04c', '#f1bf43', '#e77355'],
        light: ['#6ab04c', '#f1bf43', '#e77355'],
      }}
      data={[
        {
          label: 'Success',
          value: 45,
        },
        {
          label: 'Inprogress',
          value: 22.5,
        },
        {
          label: 'Failure',
          value: 22.5,
        },
      ]}
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
