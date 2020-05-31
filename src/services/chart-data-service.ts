import {
  getSalesOverviewChartData,
  getBestSellersChartData,
  getBrandEngagementOverviewChartData,
  getBrandEngagementByRegionChartData,
  getTopRevenueByRegionChartData,
  getRevenueTrendByRegionChartData,
  getProductSalesByRegionChartData,
  getTopRevenueByRegion2ChartData,
} from './chart-apis';
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
export const retrieveTopRevenueByRegion2ChartData = async () => {
  const result = await getTopRevenueByRegion2ChartData();
  return result;
};
export const retrieveRevenueTrendByRegionChartData = async () => {
  const result = await getRevenueTrendByRegionChartData();
  return result;
};
export const retrieveProductSalesByRegionChartData = async () => {
  const result = await getProductSalesByRegionChartData();
  return result;
};
