export type AreaChartDataUnit = {
  x: number;
  y: number;
};

export type ColumnChartDataUnit = {
  x: number;
  y: string;
};

export type BarChartDataPoint = {
  labelColor: string;
  x: number;
  y: string;
};

export type BarChartDataUnit = {
  color: string;
  data: Array<BarChartDataPoint>;
  name: string;
};
export type PieChartDataUnit = {
  label: string;
  value: string;
};

export type LineChartDataPoint = {
  x: number;
  y: number;
};

export type LineChartDataUnit = {
  color: string;
  curve: string;
  data: Array<LineChartDataPoint>;
};
