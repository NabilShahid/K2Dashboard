import { API_BASE_URL, APIS } from './../constants/api-info';
import performGetRequest from './reqeust-methods';
import {
  BarChartDataUnit,
  ColumnChartDataUnit,
  SankeyChartData,
  LineChartDataUnit,
  PieChartDataUnit,
  BubbleChartDataUnit,
} from '../types/chart-data-types';
export const getSalesOverviewChartData = async (): Promise<
  Array<BarChartDataUnit>
> => {
  const result = await performGetRequest<Array<BarChartDataUnit>>(
    API_BASE_URL + APIS.SalesOverviewChartData
  );
  return result;
};
export const getBestSellersChartData = async (): Promise<
  Array<BarChartDataUnit>
> => {
  const result = await performGetRequest<Array<BarChartDataUnit>>(
    API_BASE_URL + APIS.BestSellersChartData
  );
  return result;
};
export const getBrandEngagementOverviewChartData = async (): Promise<
  Array<ColumnChartDataUnit>
> => {
  const result = await performGetRequest<Array<ColumnChartDataUnit>>(
    API_BASE_URL + APIS.BrandEngagementOverviewChartData
  );
  return result;
};
export const getBrandEngagementByRegionChartData = async (): Promise<
  Array<Array<ColumnChartDataUnit>>
> => {
  const result = await performGetRequest<Array<Array<ColumnChartDataUnit>>>(
    API_BASE_URL + APIS.BrandEngagementByRegionChartData
  );
  return result;
};
export const getTopRevenueByRegionChartData = async (): Promise<
  Array<PieChartDataUnit>
> => {
  const result = await performGetRequest<Array<PieChartDataUnit>>(
    API_BASE_URL + APIS.TopRevenueByRegionChartData
  );
  return result;
};
export const getTopRevenueByRegion2ChartData = async (): Promise<
  Array<BubbleChartDataUnit>
> => {
  const result = await performGetRequest<Array<BubbleChartDataUnit>>(
    API_BASE_URL + APIS.TopRevenueByRegion2ChartData
  );
  return result;
};
export const getRevenueTrendByRegionChartData = async (): Promise<
  Array<LineChartDataUnit>
> => {
  const result = await performGetRequest<Array<LineChartDataUnit>>(
    API_BASE_URL + APIS.RevenueTrendByRegionChartData
  );
  return result;
};
export const getProductSalesByRegionChartData = async (): Promise<
  SankeyChartData
> => {
  const result = await performGetRequest<SankeyChartData>(
    API_BASE_URL + APIS.ProductSalesByRegionChartData
  );
  return result;
};
