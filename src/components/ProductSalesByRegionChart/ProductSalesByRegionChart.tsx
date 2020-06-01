import * as React from 'react';
import { SankeyChart } from '@k2/d3-viz';
import { SankeyChartData } from '../../types/chart-data-types';
import { retrieveProductSalesByRegionChartData } from '../../services/chart-data-service';

const ProductSalesByRegionChart: React.SFC = () => {
  const [data, setData]: [SankeyChartData, Function] = React.useState({
    nodes: [],
    links: [],
  });
  React.useEffect(() => {
    retrieveProductSalesByRegionChartData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <>
      <div style={{ textAlign: 'left' }}>
        <strong>Product Sales By Region</strong>
      </div>
      <SankeyChart
        data={data}
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
    </>
  );
};

export default ProductSalesByRegionChart;
