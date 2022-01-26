/** @jsx jsx */
import {
  React,
  jsx
} from 'jimu-core'
import { hooks, Select, NumericInput } from 'jimu-ui'
import { UnitType } from '../config'
import defaultMessage from './translations/default'

export interface Props {
  distance: number
  unit: UnitType
  onBufferChange: (distance: number, unit: UnitType) => void
}

export function BufferInput (props: Props) {
  const { distance = 0, unit = UnitType.Meters, onBufferChange } = props
  const getI18nMessage = hooks.useTranslate(defaultMessage)
  const [d, setD] = React.useState(distance)
  const [u, setU] = React.useState(unit)

  React.useEffect(() => {
    let changed = false
    if (distance !== d) {
      setD(distance)
      changed = true
    }
    if (unit !== u) {
      setU(unit)
      changed = true
    }
    if (changed) {
      onBufferChange(distance, unit)
    }
    // eslint-disable-next-line
  }, [distance, unit])

  const handleDistanceChange = React.useCallback((value) => {
    setD(value)
  }, [])

  const handleDistanceAccepted = React.useCallback((value) => {
    setD(value)
    onBufferChange(value, u)
  }, [onBufferChange, u])

  const handleBufferUnitChange = React.useCallback((e) => {
    setU(e.target.value)
    onBufferChange(d, e.target.value)
  }, [onBufferChange, d])

  return (
    <React.Fragment>
      <NumericInput className='mr-1' value={d} onChange={handleDistanceChange} onAcceptValue={handleDistanceAccepted}/>
      <Select
        value={u}
        onChange={handleBufferUnitChange}
      >
        {Object.values(UnitType).map((value) => (
          <option key={value} value={value}>
            {getI18nMessage(`unit_${value}`)}
          </option>
        ))}
      </Select>
    </React.Fragment>
  )
}
