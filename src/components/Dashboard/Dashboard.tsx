import * as React from 'react';
import { Card, GridLayout, ToggleTheme } from '@k2/ui';
import SalesOverviewChart from '../SalesOverviewChart/SalesOverviewChart';
import BestSellerChart from '../BestSellersChart/BestSellersChart';
import BestSellerChart2 from '../BestSellersChart2/BestSellersChart2';
import BrandEngagementOverviewChart from '../BrandEngagementOverviewChart/BrandEngagementOverviewChart';
import BrandEngagementByRegionChart from '../BrandEngagementByRegionChart/BrandEngagementByRegionChart';
import TopRevenueByRegion from '../TopRevenueByRegionChart/TopRevenueByRegionChart';
import RevenueTrendByRegionChart from '../RevenueTrendByRegionChart/RevenueTrendByRegionChart';
import ProductSalesByRegionChart from '../ProductSalesByRegionChart/ProductSalesByRegionChart';
import TopRevenueByRegionChart2 from '../TopRevenueByRegionChart2/TopRevenueByRegionChart2';

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  return (
    <>
      <div style={{textAlign:'right',padding:'7px 10px 7px 0px'}}>
        <ToggleTheme />
      </div>
      <GridLayout isDraggable rowHeight={150} width="100%" noOfCols={3}>
        <Card hasBoxShadow widthUnits={2} heightUnits={2}>
          <SalesOverviewChart />
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <BestSellerChart />
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <BrandEngagementOverviewChart />
        </Card>
        <Card hasBoxShadow widthUnits={2} heightUnits={2}>
          <BrandEngagementByRegionChart />
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <TopRevenueByRegion />
        </Card>
        <Card hasBoxShadow widthUnits={2} heightUnits={2}>
          <RevenueTrendByRegionChart />
        </Card>
        <Card hasBoxShadow widthUnits={2} heightUnits={4}>
          <ProductSalesByRegionChart />
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <TopRevenueByRegionChart2 />
        </Card>
        <Card hasBoxShadow widthUnits={1} heightUnits={2}>
          <BestSellerChart2 />
        </Card>
      </GridLayout>
    </>
  );
};

export default Dashboard;
