import * as React from 'react';
import { SankeyChart } from '@k2/d3-viz';
export interface ProductSalesByRegionChartProps {}

const ProductSalesByRegionChart: React.SFC<ProductSalesByRegionChartProps> = () => {
  return (
    <SankeyChart
      data={{
        links: [
          {
            id: 'Link1',
            sourceId: 'Node4',
            targetId: 'Node5',
            value: 360,
          },
          {
            id: 'Link2',
            sourceId: 'Node5',
            targetId: 'Node1',
            value: 4,
          },
          {
            id: 'Link3',
            sourceId: 'Node1',
            targetId: 'Node6',
            value: 4,
          },
          {
            id: 'Link4',
            sourceId: 'Node5',
            targetId: 'Node3',
            value: 350,
          },
          {
            id: 'Link5',
            sourceId: 'Node3',
            targetId: 'Node6',
            value: 32,
          },
          {
            id: 'Link6',
            sourceId: 'Node3',
            targetId: 'Node7',
            value: 318,
          },
          {
            id: 'Link7',
            sourceId: 'Node5',
            targetId: 'Node2',
            value: 6,
          },
          {
            id: 'Link8',
            sourceId: 'Node2',
            targetId: 'Node6',
            value: 4,
          },
          {
            id: 'Link9',
            sourceId: 'Node2',
            targetId: 'Node7',
            value: 378,
          },
          {
            id: 'Link10',
            sourceId: 'Node8',
            targetId: 'Node9',
            value: 376,
          },
          {
            id: 'Link11',
            sourceId: 'Node9',
            targetId: 'Node2',
            value: 376,
          },
        ],
        nodes: [
          {
            id: 'Node1',
            label: 'High',
            level: 'priority',
          },
          {
            id: 'Node2',
            label: 'Medium',
            level: 'priority',
          },
          {
            id: 'Node3',
            label: 'Low',
            level: 'priority',
          },
          {
            id: 'Node4',
            label: 'Testing',
            level: 'category',
          },
          {
            id: 'Node5',
            label: 'Tony Ojeda',
            level: 'user',
          },
          {
            id: 'Node6',
            label: 'In Progress',
            level: 'status',
          },
          {
            id: 'Node7',
            label: 'Pending',
            level: 'status',
          },
          {
            id: 'Node8',
            label: 'Deployment',
            level: 'category',
          },
          {
            id: 'Node9',
            label: 'Octavian Stepan',
            level: 'user',
          },
        ],
      }}
      linkColor="#30b1d9"
      linkMode="default"
      nodeColorScheme={['#f6f6f6']}
      nodeShape="rect"
      nodeWidth={25}
      sankeyStyle={{
        nodeStyle: {
          stroke: 'white',
          strokeOpacity: 1,
          strokeWidth: 1.5,
        },
      }}
    />
  );
};

export default ProductSalesByRegionChart;
