import { React, ImmutableObject, classNames } from 'jimu-core'
import { ISimpleFillSymbol, ISimpleLineSymbol, ISimpleMarkerSymbol } from '@esri/arcgis-rest-types'
import { TextInput, defaultMessages as jimuMessages, hooks, Switch } from 'jimu-ui'
import defaultMessages from '../../../../../translations/default'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { LineSymbolSetting, MarkSymbolSetting, FillSymbolSetting } from '../../components'
import { WebChartLineChartSeries, WebChartSeries } from '../../../../../../config'
import { SeriesColors } from '../../../../../../utils/default'

export interface SerieStyleProps {
  className?: string
  defaultFillColor: string
  defaultLineColor: string
  serie: ImmutableObject<WebChartSeries>
  onChange?: (serie: ImmutableObject<WebChartSeries>) => void
}

export const PresetSeriesColors = SeriesColors.map((color) => ({
  label: color,
  value: color,
  color: color
}))

export const SerieStyle = (props: SerieStyleProps): React.ReactElement => {
  const { className, serie, defaultFillColor, defaultLineColor, onChange } = props
  const seriesType = serie?.type
  const markerVisible = (serie as ImmutableObject<WebChartLineChartSeries>)?.markerVisible ?? false
  const translate = hooks.useTranslate(defaultMessages, jimuMessages)

  const handleLabelChange = (value: string): void => {
    onChange?.(serie.set('name', value))
  }

  const handleLineSymbolChange = (
    value: ImmutableObject<ISimpleLineSymbol>
  ): void => {
    onChange?.(serie.set('lineSymbol', value))
  }

  const handleMarkerVisibleChange = (evt): void => {
    const visible = evt.target.checked
    onChange?.(serie.set('markerVisible', visible))
  }

  const handleMarkerSymbolChange = (
    value: ImmutableObject<ISimpleMarkerSymbol>
  ): void => {
    onChange?.(serie.set('markerSymbol', value))
  }

  const handleFillSymbolChange = (
    value: ImmutableObject<ISimpleFillSymbol>
  ): void => {
    onChange?.(serie.set('fillSymbol', value))
  }

  return (
    <div className={classNames('serial-serie-style w-100', className)}>
      <SettingRow label={translate('label')} flow='no-wrap'>
        <TextInput
          size='sm'
          className='w-50'
          defaultValue={serie?.name ?? ''}
          onAcceptValue={handleLabelChange}
        />
      </SettingRow>
      <SettingRow label={translate('symbol')} flow='wrap'>
        {seriesType === 'barSeries' && (
          <FillSymbolSetting
            defaultFillColor={defaultFillColor}
            defaultLineColor={defaultLineColor}
            presetFillColors={PresetSeriesColors}
            value={(serie as any)?.fillSymbol}
            onChange={handleFillSymbolChange}
          />
        )}
        {seriesType === 'lineSeries' && (
          <LineSymbolSetting
            defaultColor={defaultFillColor}
            presetColors={PresetSeriesColors}
            value={(serie as any).lineSymbol}
            onChange={handleLineSymbolChange}
          />
        )}
      </SettingRow>
      {seriesType === 'lineSeries' && <SettingRow label={translate('valuePoint')}>
        <Switch
          checked={markerVisible}
          onChange={handleMarkerVisibleChange}
        />
      </SettingRow>}
      {
        markerVisible && <MarkSymbolSetting
          className='mt-2'
          defaultFillColor={defaultFillColor}
          defaultLineColor={defaultLineColor}
          presetFillColors={PresetSeriesColors}
          presetLineColors={PresetSeriesColors}
          value={(serie as any)?.markerSymbol}
          onChange={handleMarkerSymbolChange}
        />
      }
    </div>
  )
}
