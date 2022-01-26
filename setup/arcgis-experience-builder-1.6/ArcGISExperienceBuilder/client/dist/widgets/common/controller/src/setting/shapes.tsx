/** @jsx jsx */
import { React, ThemeVariables, jsx, css, polished, classNames } from 'jimu-core'

export enum ShapeType { Circle, Rectangle }

interface ChooseShapeProps {
  title?: string
  className?: string
  type: ShapeType
  active: boolean
  theme: ThemeVariables
  onClick: () => any
}

const useStyle = (theme) => {
  const white = theme?.colors.white
  const cyan500 = theme?.colors.palette.primary[700]
  const gray900 = theme?.colors.palette.dark[900]
  return React.useMemo(() => {
    return css`
    background-color: ${white};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${polished.rem(28)};
    height: ${polished.rem(28)};
    margin: 2px;
    &.active{
      outline: 2px ${cyan500} solid;
    }
    .inner {
      width: 66%;
      height: 66%;
      border: 1px ${gray900} solid;
      border-radius: 2px;
      &.circle {
        border-radius: 50%;
      }
    }
  `
  }, [white, cyan500, gray900])
}

export const Shapes = ({ className, title, type, active, theme, onClick }: ChooseShapeProps) => {
  const style = useStyle(theme)
  const classes = classNames('choose-shape', { active: active }, className)

  const handleKeydown = (event: React.KeyboardEvent<HTMLElement>) => {
    const eventKey = event.key
    if (eventKey === 'Enter') {
      onClick?.()
    }
  }

  return <div
    css={style}
    onClick={onClick}
    onKeyDown={handleKeydown}
    title={title}
    tabIndex={0}
    className={classes}>
    <div className={classNames('inner', { rectangle: type === ShapeType.Rectangle }, { circle: type === ShapeType.Circle })}></div>
  </div>
}
