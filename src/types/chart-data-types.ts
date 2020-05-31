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

export type SankeyChartNode = {
  id: string;
  sourceId: string;
  targetId: string;
  value: number;
};
export type SankeyChartLink = {
  id: string;
  label: string;
  level: string;
};

export type SankeyChartData = {
  nodes: Array<SankeyChartNode>;
  links: Array<SankeyChartLink>;
};

export type BubbleChartDataUnit = {
  color: string;
  name: string;
  value: string;
};
