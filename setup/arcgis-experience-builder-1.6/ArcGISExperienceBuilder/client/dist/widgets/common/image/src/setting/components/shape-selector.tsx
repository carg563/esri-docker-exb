/** @jsx jsx */
import { React, classNames, ThemeVariables, css, jsx, ImmutableObject, Immutable, IntlShape } from 'jimu-core'
import { Button, CropParam, Icon } from 'jimu-ui'
import defaultMessages from '../translations/default'

interface Props{
  intl?: IntlShape

  theme: ThemeVariables

  cropParam: ImmutableObject<CropParam>

  onShapeChoosed: (cropParam: ImmutableObject<CropParam>) => void
}

export default class ShapeChooser extends React.PureComponent<Props> {
  cropShapeList = ['rectangle', 'circle', 'hexagon', 'pentagon', 'rhombus', 'triangle']

  getStyle () {
    const theme = this.props.theme

    return css`
      .widget-image-chooseshape-item {
        cursor: pointer;
        height: 30px;
        width: 35px;
        background-color: ${theme.colors.palette.secondary[200]};

        svg {
          fill: ${theme.colors.black};
        }
      }
      `
  }

  shapeClick = (e, index) => {
    if (this.props.cropParam && this.props.cropParam.cropShape === this.cropShapeList[index]) {
      return
    }

    const svgItem = e.currentTarget.getElementsByTagName('svg') && e.currentTarget.getElementsByTagName('svg')[0]
    if (svgItem) {
      let cropParam = this.props.cropParam
      if (!cropParam) {
        cropParam = Immutable({})
      }

      cropParam = cropParam.set('svgViewBox', svgItem.getAttribute('viewBox'))
      cropParam = cropParam.set('svgPath', svgItem.getElementsByTagName('path')[0].getAttribute('d'))
      cropParam = cropParam.set('cropShape', this.cropShapeList[index])

      this.props.onShapeChoosed && this.props.onShapeChoosed(cropParam)
    }
  }

  render () {
    return (
      <div className='w-100 d-flex justify-content-between' css={this.getStyle()}>
        {this.cropShapeList.map((item, index) => {
          const iconComponent = require(`jimu-ui/lib/icons/imagecrops/${item}.svg`)

          if (item === 'rectangle' && !this.props.cropParam) {
            return (
              <Button
                key={index} className={classNames('widget-image-chooseshape-item border-selected p-0')}
                onClick={(e) => this.shapeClick(e, index)} icon
                title={this.props.intl.formatMessage({ id: 'imagerectangle', defaultMessage: defaultMessages.imagerectangle })}
              >
                <Icon width={12} height={12} icon={iconComponent} />
              </Button>
            )
          } else {
            return (
              <Button
                key={index} className={classNames('widget-image-chooseshape-item p-0',
                  { 'border-selected': (this.props?.cropParam?.cropShape === item) })}
                onClick={(e) => this.shapeClick(e, index)} icon
                title={this.props.intl.formatMessage({ id: `image${item}`, defaultMessage: defaultMessages[`image${item}`] })}
              >
                <Icon width={12} height={12} icon={iconComponent} />
              </Button>
            )
          }
        })}
      </div>
    )
  }
}
