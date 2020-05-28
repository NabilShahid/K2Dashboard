import * as React from 'react';
import { Card } from '@k2/ui';

const TestComponent: React.SFC = () => {
  return <div>HELLO</div>;
};
export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  return (
    <>
      <Card title="card 1">
        <div>Hello Man</div>
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
