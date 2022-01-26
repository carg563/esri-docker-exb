/** @jsx jsx */
import { jsx, ImmutableObject, DataSourceComponent } from 'jimu-core'
import { hooks, TextInput, Icon, Switch, Collapse, Button } from 'jimu-ui'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import defaultMessages from './translations/default'
import { QueryItemType } from '../config'
import { widgetSettingDataMap } from './setting-config'
import { DEFAULT_QUERY_ITEM } from '../default-query-item'

const { iconMap } = widgetSettingDataMap

interface Props {
  queryItem: ImmutableObject<QueryItemType>
  // the query item setting has three stages: main, draw mode and spatial relationship
  handleStageChange: (id: number) => void
  onPropertyChanged: (prop: string, value: any, dsUpdateRequired?: boolean) => void
}

export function SpatialFilterSetting (props: Props) {
  const { queryItem, handleStageChange, onPropertyChanged } = props

  const currentItem = Object.assign({}, DEFAULT_QUERY_ITEM, queryItem)
  const getI18nMessage = hooks.useTranslate(defaultMessages)
  const enabled = currentItem.useSpatialFilter

  const handleLabelChanged = (prop: string, value: string, defaultValue: string) => {
    if (value === defaultValue) {
      onPropertyChanged(prop, null)
    } else {
      onPropertyChanged(prop, value)
    }
  }

  const titleCompoent = (
    <div className='d-flex'>
      <div>{getI18nMessage('spatialFilter')}</div>
      <div className='ml-auto'>
        <Switch checked={enabled} onChange={(e) => onPropertyChanged('useSpatialFilter', e.target.checked)} />
      </div>
    </div>
  )
  return (
    <DataSourceComponent useDataSource={currentItem.useDataSource}>
      {(ds) => {
        // check if ds has geometryType
        if (ds.getGeometryType() == null) {
          return null
        }
        return (
          <SettingSection title={titleCompoent}>
            <Collapse isOpen={enabled}>
              <SettingRow flow='wrap' label={getI18nMessage('label')}>
                <TextInput
                  className='w-100'
                  defaultValue={currentItem.spatialFilterLabel ?? getI18nMessage('spatialFilter')}
                  onAcceptValue={(value) => handleLabelChanged('spatialFilterLabel', value, getI18nMessage('spatialFilter'))}
                />
              </SettingRow>
              <SettingRow flow='wrap' label={getI18nMessage('typesOfFilter')}>
                <div className='setting-ui-unit-check-input-item w-100 d-flex align-items-center'>
                  <label className='setting-ui-unit-check-input-label my-1'>
                    <span>{getI18nMessage('featureFromDs')}</span>
                  </label>
                  <Button className='ml-auto' size='sm' type='tertiary' icon onClick={() => handleStageChange(2)}>
                    <Icon size={16} icon={iconMap.arrowRight} autoFlip/>
                  </Button>
                </div>
                <div className='setting-ui-unit-check-input-item w-100 d-flex align-items-center'>
                  <label className='setting-ui-unit-check-input-label my-1'>
                    <span>{getI18nMessage('featureFromMap')}</span>
                  </label>
                  <Button className='ml-auto' size='sm' type='tertiary' icon onClick={() => handleStageChange(1)}>
                    <Icon size={16} icon={iconMap.arrowRight} autoFlip/>
                  </Button>
                </div>
              </SettingRow>
            </Collapse>
          </SettingSection>
        )
      }}
    </DataSourceComponent>
  )
}
