import {
  generateOutStatisticName,
  getCategoryField,
  getCategoryType,
  getNumericFields,
  getStatisticType
} from './index'
import {
  ImmutableObject,
  ImmutableArray,
  StatisticType
} from 'jimu-core'
import { getCircleMarkerSymbol, getFillSymbol, getLineSymbol, getSeriesFillColor } from '../default'
import { CategoryType, IWebChart, WebChartBarChartSeries, WebChartLineChartSeries, WebChartSeries } from '../../config'
import { getSeriesType, WebChartStackedKinds } from 'jimu-ui/advanced/chart'

export interface SeriesProps {
  series: ImmutableArray<WebChartSeries>
  categoryField?: string
  numericFields: ImmutableArray<string>
  splitByField?: string
  splitFieldValues?: ImmutableArray<string>
  statisticType?: StatisticType
  orderByFields: string
  pageSize: number
  template?: Partial<ImmutableObject<IWebChart>>
}

export const isValidSerialSeries = (series: ImmutableArray<WebChartSeries>): boolean => {
  if (series == null || series.length === 0) return false
  const categoryType = getCategoryType(series)
  const categoryField = getCategoryField(series)
  const numericFields = getNumericFields(series)
  const statisticType = getStatisticType(series)
  if (categoryType === CategoryType.ByFeature) return categoryField != null && categoryField !== '' && numericFields.length > 0
  if (categoryType === CategoryType.ByGroup) return categoryField != null && categoryField !== '' && numericFields.length > 0 && statisticType != null
  if (categoryType === CategoryType.ByField) return numericFields.length > 0 && statisticType != null
}

/**
 * Create new series based on existing series.
 * We will reuse the basic settings of the first series(e.g serie.type, serie.x),
 * and generate new styles for the series(`fillSymbol` | `lineSymbol`).
 * If `template` is provided, will use styles of it
 *
 * Note: The style of the series is controlled by two properties: `dataLabels` and `fillSymbol`
 */
export const getByGroupNewSerieTemplate = (
  firstSerie: ImmutableObject<WebChartSeries>,
  template: ImmutableObject<WebChartSeries>,
  index: number
): ImmutableObject<WebChartSeries> => {
  let serie = firstSerie
  const seriesType = getSeriesType([firstSerie as any])
  const color = getSeriesFillColor(index)
  if (seriesType === 'barSeries') {
    const fillSymbol = (template as ImmutableObject<WebChartBarChartSeries>)?.fillSymbol ?? getFillSymbol(color, 0)
    // The default fill style is different for each series
    serie = serie.set('fillSymbol', fillSymbol)
  } else if (seriesType === 'lineSeries') {
    const lineSymbol = (template as ImmutableObject<WebChartLineChartSeries>)?.lineSymbol ?? getLineSymbol(2, color)
    const markerSymbol = (template as ImmutableObject<WebChartLineChartSeries>)?.markerSymbol ?? getCircleMarkerSymbol(color)
    // The default fill style is different for each series
    serie = serie.set('lineSymbol', lineSymbol)
    serie = serie.set('markerSymbol', markerSymbol)
  }
  // Cleaning up the serie
  serie = serie.without('id', 'name', 'y', 'x')
  const query = {
    groupByFieldsForStatistics: [],
    outStatistics: [{
      onStatisticField: '',
      statisticType: 'sum',
      outStatisticFieldName: ''
    }]
  }
  serie = serie.set('query', query)

  return serie
}

/**
 * Create splited series of `by group` mode
 */
export const createByGroupSplitSerie = ({ categoryField, numericField, statisticType, orderByFields, pageSize, splitByField, splitByValue, index }, firstSerie, templateSeries) => {
  const template = getByGroupNewSerieTemplate(firstSerie, templateSeries?.[index], index) as any
  const name = `${splitByValue}`
  const y = generateOutStatisticName(numericField, statisticType, splitByField, splitByValue)
  const where = `${splitByField}='${splitByValue}'`

  let serie = template.set('x', categoryField).set('y', y).set('name', name).set('id', y)

  serie = serie.setIn(['query', 'groupByFieldsForStatistics', '0'], categoryField)
  serie = serie.setIn(['query', 'outStatistics', '0', 'onStatisticField'], numericField)
  serie = serie.setIn(['query', 'outStatistics', '0', 'statisticType'], statisticType)
  serie = serie.setIn(['query', 'outStatistics', '0', 'outStatisticFieldName'], y)

  serie = serie.setIn(['query', 'where'], where)
  serie = serie.setIn(['query', 'orderByFields'], orderByFields)
  serie = serie.setIn(['query', 'pageSize'], pageSize)
  return serie
}

export const getSerialStackedType = (
  series: ImmutableArray<WebChartSeries>
): WebChartStackedKinds => {
  return series?.[0].stackedType
}

export const getSeriaLlineSmoothed = (
  series: ImmutableArray<WebChartSeries>
): boolean => {
  return (series?.[0] as ImmutableObject<WebChartLineChartSeries>).lineSmoothed
}

export const getSeriaLlineShowArea = (
  series: ImmutableArray<WebChartSeries>
): boolean => {
  return (series?.[0] as ImmutableObject<WebChartLineChartSeries>).showArea
}

export const getSerialSeriesRotated = (
  series: ImmutableArray<WebChartSeries>
): boolean => {
  return series?.[0]?.rotated ?? false
}

const OrderSeparator = ' '

/**
 * Parse a query.orderByFields[i]
 * @param fieldOrder
 * normal: 'fieldname ASC'
 * with space in field: 'field name ASC'
 */
export const parseOrderByField = (fieldOrder: string): string[] => {
  if (!fieldOrder || !fieldOrder.includes(OrderSeparator)) return []
  const lastIndex = fieldOrder.lastIndexOf(OrderSeparator)
  const index = fieldOrder.indexOf(OrderSeparator)
  if (lastIndex !== index) {
    const field = fieldOrder.substring(0, lastIndex)
    const order = fieldOrder.substring(lastIndex + 1)
    return [field, order]
  } else {
    return fieldOrder.split(' ')
  }
}
