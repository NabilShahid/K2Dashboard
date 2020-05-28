import * as React from 'react';
import { Card, GridLayout } from '@k2/ui';
import SalesOverviewAreaChart from '../SalesOverviewAreaChart/SalesOverviewAreaChart';

const TestComponent: React.SFC = () => {
  return <div>HELLO</div>;
};
export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  return (
    <>
      <GridLayout isDraggable rowHeight={100} width="400px">
        <div
          style={{
            backgroundColor: 'cornsilk',
            textAlign: 'center',
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: 'yellow',
            textAlign: 'center',
          }}
        >
          2
        </div>
        <div
          style={{
            backgroundColor: 'orange',
            textAlign: 'center',
          }}
        >
          3
        </div>
      </GridLayout>
      <Card title="card 1">
        <SalesOverviewAreaChart />
      </Card>
      <Card title="card 2">
        <TestComponent />
      </Card>
      <Card title="card 3">
        <TestComponent />
      </Card>
      <Card title="card 4">
        <TestComponent />
      </Card>
    </>
  );
};

export default Dashboard;
