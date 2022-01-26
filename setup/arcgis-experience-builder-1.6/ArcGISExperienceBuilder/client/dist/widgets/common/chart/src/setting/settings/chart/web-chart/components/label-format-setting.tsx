/** @jsx jsx */
import {
  React,
  css,
  jsx,
  ImmutableObject,
  IMState,
  ReactRedux,
  SerializedStyles
} from 'jimu-core'
import {
  NumericInput,
  hooks,
  defaultMessages as jimuUiDefaultMessage
} from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import defaultMessages from '../../../../translations/default'
import { CategoryFormatOptions } from 'jimu-ui/advanced/chart'

export interface LabelFormatSettingProps {
  value: ImmutableObject<CategoryFormatOptions>
  onChange: (value: ImmutableObject<CategoryFormatOptions>) => void
}

const useStyle = (): SerializedStyles => {
  const theme = ReactRedux.useSelector((state: IMState) => state.theme)
  const dark400 = theme?.colors?.palette?.dark?.[400]

  return React.useMemo(() => {
    return css`
      .jimu-widget-setting--row-label {
        color: ${dark400};
      }
    `
  }, [dark400])
}

export const LabelFormatSetting = (props: LabelFormatSettingProps): React.ReactElement => {
  const { value, onChange } = props
  const style = useStyle()

  const characterLimit = value?.characterLimit ?? ''
  const translate = hooks.useTranslate(defaultMessages, jimuUiDefaultMessage)

  const handleCharacterLimitChange = (characterLimit: number): void => {
    onChange(
      value.set(
        'characterLimit',
        Math.floor(+characterLimit)
      )
    )
  }

  return (
    <div className='label-format-setting' css={style}>
       <SettingRow label={translate('characterLimit')} flow='no-wrap'>
          <NumericInput
            size='sm'
            showHandlers={false}
            value={characterLimit}
            min={1}
            max={99}
            step={1}
            className='w-50'
            onAcceptValue={handleCharacterLimitChange}
          />
        </SettingRow>
    </div>
  )
}
