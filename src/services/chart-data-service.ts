import { getSalesOverviewChartData, getBestSellersChartData, getBrandEngagementOverviewChartData } from './chart-apis';
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
