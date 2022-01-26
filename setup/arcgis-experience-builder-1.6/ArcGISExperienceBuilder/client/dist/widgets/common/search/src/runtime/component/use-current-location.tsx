/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import { hooks, Button, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import defaultMessage from '../translations/default'
import { getCurrentLocation, getCurrentAddress } from '../utils/locator-service'
import { PinOutlined } from 'jimu-icons/outlined/application/pin'
import { WarningOutlined } from 'jimu-icons/outlined/suggested/warning'
import { GeocodeListItem, IMServiceList, SearchServiceType } from '../../config'
const { useState } = React
interface CurrentLocationProps {
  isShowCurrentLocation: boolean
  serviceList: IMServiceList
  onLocationChange: (searchText: string) => void
}

const CurrentLocation = (props: CurrentLocationProps) => {
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage)
  const { serviceList, onLocationChange } = props
  const [isGetLocationError, setIsGetLocationError] = useState(false)
  const [geocodeServiceItem, setGeocodeServiceItem] = React.useState<GeocodeListItem>(null)

  React.useEffect(() => {
    initGeocodeService()
  }, [serviceList])

  const confirmUseCurrentLocation = () => {
    getCurrentLocation(getLocationSuccess, getLocationError)
  }

  const initGeocodeService = () => {
    for (const configId in serviceList) {
      const serviceItem = serviceList[configId]
      if (serviceItem.searchServiceType === SearchServiceType.GeocodeService) {
        setGeocodeServiceItem(serviceItem)
        break
      }
    }
  }

  const getLocationSuccess = (position) => {
    const longitude = position.coords.longitude
    const latitude = position.coords.latitude
    const address = `${longitude},${latitude}`
    if (geocodeServiceItem) {
      const geocodeURL = geocodeServiceItem?.geocodeURL
      getCurrentAddress(geocodeURL, position).then(res => {
        onLocationChange(res)
      })
    } else {
      onLocationChange(address)
    }
  }

  const getLocationError = () => {
    setIsGetLocationError(true)
  }

  return (
    <div>
      {!isGetLocationError && <Button onClick={confirmUseCurrentLocation}>
        <PinOutlined/>
        {nls('useCurrentLocation')}
      </Button>}
      {isGetLocationError && <Button>
        <WarningOutlined/>
        {nls('couldNotRetrieve')}
      </Button>}
    </div>
  )
}

export default CurrentLocation
