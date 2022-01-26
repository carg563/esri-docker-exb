import { Immutable } from 'jimu-core'
import { versionManager } from '../src/version-manager'

let upgrader = null

describe('Version manager test', () => {
  describe('version 1.6.0', () => {
    beforeAll(() => {
      upgrader = versionManager.versions?.filter(function (version) {
        return version.version === '1.6.0'
      })[0]?.upgrader
    })
    it('should upgrade `multipleBarType` to `stackedType`', () => {
      const oldConfig = Immutable({
        webChart: {
          series: [{
            multipleBarType: 'sideBySide'
          }, {
            multipleBarType: 'stacked'
          }]
        }
      })
      const newConfig = upgrader(oldConfig)
      expect(newConfig).toEqual({
        webChart: {
          series: [{
            stackedType: 'sideBySide'
          }, {
            stackedType: 'stacked'
          }]
        }
      })
    })
  })
})
