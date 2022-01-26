import {
  FeatureLayerQueryParams,
  ImmutableObject,
  SqlExpression
} from 'jimu-core'
import {
  WebChart as _WebChart,
  WebChartBarChartSeries as _WebChartBarChartSeries,
  WebChartLineChartSeries as _WebChartLineChartSeries
} from 'jimu-ui/advanced/chart'

export type TemplateType = 'bar' | 'column' | 'stacked-bar' | 'stacked100-bar' |
'stacked-column' | 'stacked100-column' | 'line' | 'smooth-line' | 'area' | 'smooth-area'

export type WebChartBarChartSeries = Omit<_WebChartBarChartSeries, 'query'> & {
  query?: FeatureLayerQueryParams
}

export type WebChartLineChartSeries = Omit<_WebChartLineChartSeries, 'query'> & {
  query?: FeatureLayerQueryParams
}

export type WebChartSeries = WebChartBarChartSeries | WebChartLineChartSeries

export interface IWebChart extends Omit<_WebChart, 'background' | 'series'> {
  background?: string
  series: WebChartSeries[]
}

export enum CategoryType {
  ByGroup = 'BYGROUP',
  ByField = 'BYFIELD',
  // ac-js does not support feature-by-feature now
  ByFeature = 'BYFEATURE'
}

export interface ChartTools {
  filter?: SqlExpression
  cursorEnable?: boolean
}

export type ChartType = 'serial' | 'pie' | 'gauge'

export interface Config {
  //It is only used when configuring the app template
  _templateType?: TemplateType
  template: string
  webChart: IWebChart
  tools?: ChartTools
}

export type IMConfig = ImmutableObject<Config>
