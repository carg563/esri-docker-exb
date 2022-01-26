/** @jsx jsx */
import { React, css, jsx, polished, esri, IMState, ReactRedux } from 'jimu-core'
import { hooks, Icon, Button, Popper, DropdownItem, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { Suggestion, IMServiceList, InitResultServiceListOption } from '../../config'
import defaultMessage from '../translations/default'
import { TrashOutlined } from 'jimu-icons/outlined/editor/trash'
import CurrentLocation from './use-current-location'
const { useSelector } = ReactRedux
interface SearchSettingProps {
  searchText: string
  isOpen: boolean
  isRecentSearches: boolean
  reference: any
  searchSuggestion: Suggestion[]
  className?: string
  canUseOutoutDsLength: number
  serviceList: IMServiceList
  isShowCurrentLocation: boolean
  toggel?: () => void
  onRecordItemClick: (searchText: string, initResultServiceListOption?: InitResultServiceListOption) => void
  clearSearches: () => void
}
const Sanitizer = esri.Sanitizer
const sanitizer = new Sanitizer()

const SuggestionList = (props: SearchSettingProps) => {
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage)
  const { isRecentSearches, className, reference, searchSuggestion, isOpen, searchText, canUseOutoutDsLength, serviceList, isShowCurrentLocation, toggel, onRecordItemClick, clearSearches } = props
  const theme = useSelector(
    (state: IMState) => state?.theme
  )

  const STYLE = css`
    & {
      max-height: ${polished.rem(300)};
      min-width: ${polished.rem(reference?.current?.clientWidth)};
      overflow: auto;
    }
    button {
      display: block;
      width: 100%;
      text-align: left;
      border: none;
      border-radius: 0;
    }
    button:hover {
      border: none;
    }
  `

  const checkIsNoResult = () => {
    let totalSuggestionItem = []
    searchSuggestion.forEach(layerSuggestion => {
      const suggestionItem = layerSuggestion?.suggestionItem || []
      totalSuggestionItem = totalSuggestionItem.concat(suggestionItem)
    })
    return searchText && totalSuggestionItem.length === 0
  }

  const handelSuggestionItemClick = (searchText: string, initResultServiceListOption?: InitResultServiceListOption) => {
    const { configId, isFromSuggestion, magicKey } = initResultServiceListOption || {}
    if (configId && (isFromSuggestion || magicKey)) {
      onRecordItemClick(searchText, initResultServiceListOption)
    } else {
      onRecordItemClick(searchText)
    }
  }

  const renderLayerSuggestionElement = () => {
    return searchSuggestion?.map((layerSuggestion, index) => {
      const isShowLayerName = searchSuggestion?.length > 1 && layerSuggestion?.suggestionItem?.length > 0
      return (
        <div key={`${layerSuggestion?.layer}-${index}`}>
          {isShowLayerName && <Button disabled={true}>
            {layerSuggestion?.icon && <Icon color={theme?.colors?.primary} size={16} icon={layerSuggestion?.icon?.svg}/> }
            {layerSuggestion?.layer}
          </Button>}
          {renderSuggestionItemElement(layerSuggestion)}
        </div>
      )
    })
  }

  const renderSuggestionItemElement = (suggestion: Suggestion) => {
    const suggestionItem = suggestion?.suggestionItem
    const icon = suggestion?.icon
    return suggestionItem?.map((item, index) => {
      const suggestionHtml = sanitizer.sanitize(
        item.suggestionHtml
      )
      const initResultServiceListOption = {
        configId: item?.configId,
        isFromSuggestion: item?.isFromSuggestion,
        magicKey: item?.magicKey
      }
      return (
        <Button
          className='d-flex align-items-center'
          key={`${suggestion?.layer}${index}`}
          onClick={() => {
            handelSuggestionItemClick(item.suggestion, initResultServiceListOption)
          }}
        >
          {(icon && canUseOutoutDsLength === 1) && <Icon color={theme?.colors?.primary} size={16} icon={icon?.svg}/> }
          <div className='flex-grow-1' dangerouslySetInnerHTML={{ __html: suggestionHtml }}></div>
        </Button>
      )
    })
  }

  return (
    <Popper
      css={STYLE}
      placement='bottom-start'
      reference={reference}
      offset={[0, 8]}
      open={isOpen}
      trapFocus={false}
      autoFocus={false}
      toggle={toggel}
      className={className}
    >
      {(!searchText && isShowCurrentLocation) && <CurrentLocation
        serviceList={serviceList}
        isShowCurrentLocation={true}
        onLocationChange={onRecordItemClick}
      />}
      {checkIsNoResult() && <Button className='text-center' disabled={true}>{nls('noResult', { searchText: searchText })}</Button>}
      {renderLayerSuggestionElement()}
      {isRecentSearches && <DropdownItem divider={true} />}
      {isRecentSearches && <Button type='secondary' onClick={clearSearches}>
        <TrashOutlined/>
        {nls('clearRecentSearches')}
      </Button>}
    </Popper>
  )
}

export default SuggestionList
