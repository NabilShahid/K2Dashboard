import { API_BASE_URL, APIS } from './../constants/api-info';
import { performGetRequest } from './reqeust-methods';
export const getSalesOverviewChartData = async () => {
  const result = await performGetRequest(
    API_BASE_URL + APIS.SalesOverviewChartData
  );
  return result;
};
