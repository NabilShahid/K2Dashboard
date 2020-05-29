import * as React from 'react';
import { Card, GridLayout } from '@k2/ui';
import SalesOverviewChart from '../SalesOverviewChart/SalesOverviewChart';
import BestSellerChart from '../BestSellersChart/BestSellersChart';
import BestSellerChart2 from '../BestSellersChart2/BestSellersChart2';

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  return (
    <>
      <GridLayout isDraggable rowHeight={150} width="100%" noOfCols={3}>
        <Card hasBoxShadow widthUnits={2} heightUnits={2}>
          <SalesOverviewChart />
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <BestSellerChart />
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <div>Card 3</div>
        </Card>
        <Card hasBoxShadow widthUnits={2} heightUnits={2}>
          <div>Card 4</div>
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <div>Card 5</div>
        </Card>
        <Card hasBoxShadow widthUnits={2} heightUnits={2}>
          <div>Card 6</div>
        </Card>
        <Card hasBoxShadow widthUnits={2} heightUnits={4}>
          <div>Card 7</div>
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <div>Card 8</div>
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <BestSellerChart2 />
        </Card>
      </GridLayout>
    </>
  );
};

export default Dashboard;
