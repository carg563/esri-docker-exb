import { BaseVersionManager } from 'jimu-core'
import { IMConfig, WebChartSeries } from './config'

class VersionManager extends BaseVersionManager {
  versions = [{
    version: '1.6.0',
    description: 'Version manager for release 1.6.0',
    upgrader: (oldConfig: IMConfig) => {
      if (!oldConfig) return oldConfig
      let series = oldConfig.webChart?.series
      if (!series?.length) return oldConfig
      series = series.map((serie) => {
        serie = (serie as any).set('stackedType', (serie as any).multipleBarType)
        serie = (serie as any).without('multipleBarType')
        return serie as unknown as WebChartSeries
      })
      const newConfig: IMConfig = oldConfig.setIn(['webChart', 'series'], series)
      return newConfig
    }
  }]
}

export const versionManager = new VersionManager()
