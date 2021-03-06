/** @jsx jsx */
import { React, css, jsx, classNames, ReactRedux, IMState, SerializedStyles } from 'jimu-core'
import { SettingOutlined } from 'jimu-icons/outlined/application/setting'
import { Button } from 'jimu-ui'

export interface NavigationProps {
  title: string
  active?: boolean
  onClick: () => void
  className?: string
}

const useStyle = (): SerializedStyles => {
  const theme = ReactRedux.useSelector((state: IMState) => state.theme)
  const dark400 = theme?.colors?.palette?.dark?.[400]

  return React.useMemo(() => {
    return css`
      .title {
        color: ${dark400};
      }
    `
  }, [dark400])
}

export const Navigation = (props: NavigationProps): React.ReactElement => {
  const { title, active, onClick, className } = props
  const style = useStyle()

  return (
    <div
      css={style}
      className={classNames(
        className,
        'navigation w-100 d-flex align-items-center justify-content-between'
      )}
    >
      <span className='title'>{title}</span>
      <Button size='sm' type='tertiary' active={active} icon onClick={onClick}>
        <SettingOutlined />
      </Button>
    </div>
  )
}
