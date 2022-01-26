/** @jsx jsx */
import {
  React,
  jsx,
  css,
  Immutable,
  ImmutableArray,
  UseDataSource,
  FeatureDataRecord,
  DataSourceManager,
  DataSourceComponent
} from 'jimu-core'
import { hooks, Select } from 'jimu-ui'
import { SpatialRelation, UnitType } from '../config'
import { BufferInput } from './buffer-input'
import defaultMessage from './translations/default'

const marginStyle = css`margin-top: 0.75rem;`
export interface Props {
  spatialRelations: ImmutableArray<SpatialRelation>
  useDataSources: ImmutableArray<UseDataSource>
  enableBuffer: boolean
  bufferDistance: number
  bufferUnit: UnitType
  onSelectionChange: (geoms: __esri.Geometry[]) => void
  onRelationChange: (rel: SpatialRelation) => void
  onBufferChange: (distance: number, unit: UnitType) => void
}

export function GeometryFromDataSource (props: Props) {
  const { onSelectionChange, useDataSources, spatialRelations, enableBuffer, bufferDistance, bufferUnit, onBufferChange, onRelationChange } = props
  const getI18nMessage = hooks.useTranslate(defaultMessage)
  const [currentDataSource, setCurrentDataSource] = React.useState(useDataSources[0])
  const [count, setCount] = React.useState(0)
  const spatialRelationOptions: Array<{value: string, label: string}> = React.useMemo(() => {
    return Object.entries(SpatialRelation).map(([key, value]) => ({
      value,
      label: getI18nMessage(`spatialRelation_${key}`)
    }))
  }, [getI18nMessage])

  hooks.useEffectOnce(() => {
    if (spatialRelations?.length > 0) {
      onRelationChange(spatialRelations[0])
    }
    if (enableBuffer) {
      onBufferChange(bufferDistance, bufferUnit)
    }
  })

  const handleDataSourceChange = React.useCallback(
    (evt) => {
      const ds = useDataSources.find((item) => item.dataSourceId === evt.target.value)
      setCurrentDataSource(Immutable(ds))
    },
    [useDataSources]
  )

  const handleDataSourceInfoChange = React.useCallback(() => {
    const ds = DataSourceManager.getInstance().getDataSource(currentDataSource.dataSourceId)
    const records = ds?.getSelectedRecords() as FeatureDataRecord[]
    if (records?.length > 0) {
      const geometries = records.map((record) => record.getGeometry())
      onSelectionChange(geometries as __esri.Geometry[])
      setCount(records.length)
    } else {
      onSelectionChange(null)
      setCount(0)
    }
  }, [currentDataSource.dataSourceId, onSelectionChange])

  const getLabelOfSpatialRelation = (relation: string): string => {
    return spatialRelationOptions.find(item => item.value === relation).label
  }

  const handleSpatialRelationChange = React.useCallback(e => {
    onRelationChange(e.target.value)
  }, [onRelationChange])

  return (
    <div>
      <div css={marginStyle}>{getI18nMessage('chooseFilterLayer')}</div>
      <Select
        value={currentDataSource.dataSourceId}
        onChange={handleDataSourceChange}
      >
        {useDataSources.map((item) => {
          const ds = DataSourceManager.getInstance().getDataSource(item.dataSourceId)
          return (
            <option key={item.dataSourceId} value={item.dataSourceId}>
              {ds?.getLabel()}
            </option>
          )
        })}
      </Select>
      <div className='mt-1 font-italic' css={css`color: var(--dark-800);`}>{getI18nMessage('selectedRecords', { num: count })}</div>
      {spatialRelations?.length > 0 && (
        <div css={marginStyle}>
          <div className='text-truncate mb-0'>{getI18nMessage('relationship')}</div>
          <Select
            defaultValue={spatialRelations?.[0]}
            onChange={handleSpatialRelationChange}
          >
            {spatialRelations.map((item) => {
              return (
                <option key={item} value={item}>{getLabelOfSpatialRelation(item)}</option>
              )
            })}
          </Select>
        </div>
      )}
      {enableBuffer && (
        <div css={marginStyle}>
          <div className='text-truncate'>{getI18nMessage('bufferDistance')}</div>
          <div className='d-flex mt-1'>
            <BufferInput distance={bufferDistance} unit={bufferUnit} onBufferChange={onBufferChange}/>
          </div>
        </div>
      )}
      <DataSourceComponent useDataSource={currentDataSource} onDataSourceInfoChange={handleDataSourceInfoChange} />
    </div>
  )
}
