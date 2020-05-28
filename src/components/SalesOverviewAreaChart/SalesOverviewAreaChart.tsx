import * as React from 'react';
import { Card } from '@k2/ui';
import { AreaChart } from '@k2/rv-viz';
import styled from 'styled-components';

export interface SalesOverviewAreaChartProps {
    
}
 
const SalesOverviewAreaChart: React.SFC<SalesOverviewAreaChartProps> = () => {
    return ( <Card
        bodyPadding="16px 20px 0px"
        height="300px"
        width="1053px"
      >
        <React.Fragment key=".0">
          <AreaChart
            area={{
              title: <strong>Heading</strong>
            }}
            // blankSlate={{
            //   dark: <styled.div><AreaSvg /></styled.div>,
            //   light: <styled.div><AreaSvg /></styled.div>
            // }}
            crosshair={{
              styles: {
                seriesLabel: {
                  color: '#707070',
                  fontWeight: 600
                },
                xValue: {
                  color: '#888888'
                },
                yValue: {
                  color: '#707070'
                }
              }
            }}
            data={[
              {
                color: '#5579ae',
                curve: 'curveMonotoneX',
                data: [
                  {
                    x: 1590668076305,
                    y: 2
                  },
                  {
                    x: 1590668016305,
                    y: 5
                  },
                  {
                    x: 1590667956305,
                    y: 16
                  },
                  {
                    x: 1590667896305,
                    y: 20
                  },
                  {
                    x: 1590667836305,
                    y: 14
                  },
                  {
                    x: 1590667776305,
                    y: 16
                  },
                  {
                    x: 1590667716305,
                    y: 8
                  }
                ],
                name: 'seriesOne',
                opacity: 0.2,
                stroke: '#5579ae'
              }
            ]}
            horizontalGridLine={{
              enabled: true,
              tickValues: [
                10,
                20
              ]
            }}
            legends={{
              enabled: false
            }}
            // loadingBlankSlate={{
            //   dark: <styled.div animate><AreaSvg /></styled.div>,
            //   light: <styled.div animate><AreaSvg /></styled.div>
            // }}
            xAxis={{
              style: {
                fontSize: '12px',
                strokeWidth: 0.6
              },
              tickFormat: function noRefCheck(){},
              tickPadding: 15,
              tickSizeInner: 0,
              tickSizeOuter: 6,
              tickTotal: 7
            }}
            xyPlot={{
              margin: {
                bottom: 50,
                left: 30,
                top: 30
              },
              yDomain: [
                0,
                20
              ]
            }}
            yAxis={{
              hideLine: true,
              style: {
                fontSize: '12px'
              },
              tickPadding: 15,
              tickSize: 0,
              tickValues: [
                10,
                20
              ]
            }}
            zone={{
              domain: [
                1590667716305,
                1590668076305
              ],
              enabled: true,
              id: 'test',
              zoneAxis: 'x',
              zoneRange: [
                {
                  color: 'red',
                  end: 1590667836305
                },
                {
                  color: 'green',
                  end: 1590667956305
                }
              ]
            }}
          />
        </React.Fragment>
      </Card> );
}
 
export default SalesOverviewAreaChart;