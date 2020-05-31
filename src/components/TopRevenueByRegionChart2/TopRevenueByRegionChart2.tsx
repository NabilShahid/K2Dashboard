import * as React from 'react';
import { BubbleChart } from '@k2/d3-viz';

export interface TopRevenueByRegionChart2Props {}

const TopRevenueByRegionChart2: React.SFC<TopRevenueByRegionChart2Props> = () => {
  return (
    <BubbleChart
      bubble={{
        title: <strong>Heading</strong>,
      }}
      data={[
        {
          color: '#f29d56',
          name: 'Android',
          value: 20,
        },
        {
          color: '#b177bb',
          name: 'A.Tablet',
          value: 27,
        },
        {
          color: '#30b1d9',
          name: 'iPhone',
          value: 90,
        },
        {
          color: '#6ab04c',
          name: 'iPad',
          value: 65,
        },
      ]}
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
