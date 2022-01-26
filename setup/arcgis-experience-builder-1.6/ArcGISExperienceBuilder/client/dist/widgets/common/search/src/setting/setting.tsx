/** @jsx jsx */
import { jsx, React } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { hooks } from 'jimu-ui'
import { IMConfig } from '../config'
import DataSetting from './component/dataSetting'
import SearchOptions from './component/search-options'
// import ArrangementStyleSetting from './component/arrangement-style'
import { getDefaultGeocodeConfig, getInitOutDataSource, getNewConfigId } from './util'
import defaultMessage from './translations/default'
import { useEffect } from 'react'
interface ExtraProps {
  id: string
}

type SettingProps = AllWidgetSettingProps<IMConfig> & ExtraProps

const Setting = (props: SettingProps) => {
  const { config, id, onSettingChange, useDataSources } = props
  const nls = hooks.useTranslate(defaultMessage)
  useEffect(() => {
    const isNewWidget = !config?.datasourceConfig
    if (isNewWidget) {
      setDefaultGecodeService()
    }
  }, [])

  const setDefaultGecodeService = () => {
    const newConfigId = getNewConfigId([])
    const outputDsJson = getInitOutDataSource(id, newConfigId)
    const defaultGeocodeConfigItem = getDefaultGeocodeConfig(newConfigId, id, nls('findAddressOrPlace'))
    let newConfig = config?.setIn(['datasourceConfig'], [defaultGeocodeConfigItem])
    newConfig = newConfig?.setIn(['hint'], nls('findAddressOrPlace'))
    onSettingChange({ id, config: newConfig }, [outputDsJson])
  }

  return (
    <div className='widget-setting-search jimu-widget-search'>
      <DataSetting
        id={id}
        useDataSources={useDataSources}
        onSettingChange={onSettingChange}
        config={config}
      />
      <SearchOptions
        id={id}
        config={config}
        onSettingChange={onSettingChange}
        useDataSources={useDataSources}
      />
      {/* <ArrangementStyleSetting
        id={id}
        config={config}
        onSettingChange={onSettingChange}
      /> */}
    </div>
  )
}

export default Setting
