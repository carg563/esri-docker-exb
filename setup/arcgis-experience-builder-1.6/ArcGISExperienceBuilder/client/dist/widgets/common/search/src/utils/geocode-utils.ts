import { DefaultGeocodeLabel } from '../constants'
export const getDefaultGeocodeLabel = (geocodeUrl: string) => {
  if (isArcGISWorldGeocoder(geocodeUrl)) {
    return DefaultGeocodeLabel
  } else {
    return getGeocodeName(geocodeUrl)
  }
}

export const getGeocodeName = (geocodeUrl: string) => {
  if (!geocodeUrl) {
    return 'geocoder'
  }
  const strs = geocodeUrl.split('/')
  return strs[strs.length - 2] || 'geocoder'
}

export const isMeteredArcGISWorldGeocoder = (url: string): boolean => {
  if (!url) {
    return false
  }

  return /(?:geocode\-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(url)
}

export const isProxiedArcGISWorldGeocoder = (url: string): boolean => {
  if (!url) {
    return false
  }

  return /(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(url)
}

export const isArcGISWorldGeocoder = (url: string): boolean => {
  if (!url) {
    return false
  }

  return /(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(url)
}
