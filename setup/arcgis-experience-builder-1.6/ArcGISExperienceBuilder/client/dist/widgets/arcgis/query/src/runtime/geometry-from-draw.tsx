/** @jsx jsx */
import { React, jsx, ImmutableArray } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { CreateToolType } from '../config'
import { InteractiveDraw } from './interactive-draw-tool'

export interface Props {
  mapWidgetIds: ImmutableArray<string>
  createToolTypes: ImmutableArray<CreateToolType>
  onGeometryChange: (geom: __esri.Geometry, layer?: __esri.GraphicsLayer, graphic?: __esri.Graphic, clearAfterApply?: boolean) => void
}

export function GeometryFromDraw (props: Props) {
  const { onGeometryChange, createToolTypes, mapWidgetIds } = props
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>(null)

  const handleJimuMapViewChanged = React.useCallback((jimuMapView: JimuMapView) => {
    setJimuMapView(jimuMapView?.view != null ? jimuMapView : null)
  }, [])

  const handleDrawEnd = React.useCallback((graphic, layer, clearAfterApply) => {
    onGeometryChange(graphic?.geometry, layer, graphic, clearAfterApply)
  }, [onGeometryChange])

  return (
    <React.Fragment>
      {
        mapWidgetIds?.map((mapWidgetId, x) => (
          <JimuMapViewComponent
            key={x} useMapWidgetId={mapWidgetId} onActiveViewChange={handleJimuMapViewChanged}
          />
        ))
      }
      {jimuMapView?.view && (
        <InteractiveDraw
          jimuMapView={jimuMapView}
          toolTypes={createToolTypes}
          onDrawEnd={handleDrawEnd}
        />
      )}
    </React.Fragment>
  )
}
