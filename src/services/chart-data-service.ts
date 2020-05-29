import { getSalesOverviewChartData, getBestSellersChartData, getBrandEngagementOverviewChartData, getBrandEngagementByRegionChartData, getTopRevenueByRegionChartData } from './chart-apis';
export const retrieveSalesOverviewChartData = async () => {
  const result = await getSalesOverviewChartData();
  return result;
};
export const retrievegetBestSellersChartData = async () => {
  const result = await getBestSellersChartData();
  return result;
};
export const retrieveBrandEngagementOverviewChartData = async () => {
  const result = await getBrandEngagementOverviewChartData();
  return result;
};
export const retrieveBrandEngagementByRegionChartData = async () => {
  const result = await getBrandEngagementByRegionChartData();
  return result;
};
export const retrieveTopRevenueByRegionChartData = async () => {
  const result = await getTopRevenueByRegionChartData();
  return result;
};
