import { API_BASE_URL, APIS } from './../constants/api-info';
import { performGetRequest } from './reqeust-methods';
export const getSalesOverviewChartData = async () => {
  const result = await performGetRequest(
    API_BASE_URL + APIS.SalesOverviewChartData
  );
  return result;
};
export const getBestSellersChartData = async () => {
  const result = await performGetRequest(
    API_BASE_URL + APIS.BestSellersChartData
  );
  return result;
};
export const getBrandEngagementOverviewChartData = async () => {
  const result = await performGetRequest(
    API_BASE_URL + APIS.BrandEngagementOverviewChartData
  );
  return result;
};
export const getBrandEngagementByRegionChartData = async () => {
  const result = await performGetRequest(
    API_BASE_URL + APIS.BrandEngagementByRegionChartData
  );
  return result;
};
export const getTopRevenueByRegionChartData = async () => {
  const result = await performGetRequest(
    API_BASE_URL + APIS.TopRevenueByRegionChartData
  );
  return result;
};
export const getRevenueTrendByRegionChartData = async () => {
  const result = await performGetRequest(
    API_BASE_URL + APIS.RevenueTrendByRegionChartData
  );
  return result;
};
