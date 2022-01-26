/// <reference types="react" />
/** @jsx jsx */
import { React, DataSourceJson, jsx, ImmutableObject, IntlShape, ReactRedux, IMDataSourceInfo, UseDataSource } from 'jimu-core';
import { DataSourceListProps } from '../../types';
/**
 * The DataSourceSelector component props.
 */
export interface DataSourceSelectorProps extends Omit<DataSourceListProps, 'isDataSourceInited' | 'onCloseClick' | 'changeInitStatus' | 'disableSelection' | 'disableRemove'> {
    /**
     * Whether to support multiple selection of data views.
     *
     * Only allow to select single data source item and single data view by default.
     * To allow to select multiple data source items and multiple data views for each selected data source item, please pass in `isMultiple=true`.
     * To allow to select single data source item and multiple data views for the selected source item, please pass in `isMultipleDataView=true`.
     * To allow to select multiple data source items and single data view for each selected data source item, please pass in `isMultiple=true` and `isMultipleDataView=false`.
     */
    isMultipleDataView?: boolean;
    /**
     * Label of button, default is `defaultMessages.setDataSource`
     */
    buttonLabel?: string;
    /**
     * Whether or not to enable data source use
     */
    useDataSourcesEnabled?: boolean;
    /**
     * Whether or not to show toggle data button, will hide toggle data button if the value is true
     */
    mustUseDataSource?: boolean;
    /**
     * Whether or not to show data source list panel after clicking a selected data source
     */
    disableDataSourceList?: boolean;
    /**
     * Whether or not to allow to select data view,
     * the props will make data view dropdwon disabled.
     */
    disableDataView?: boolean;
    /**
     * Whether or not to hide the data view dropdwon,
     * the props will make data view dropdwon hidden.
     */
    hideDataView?: boolean;
    /**
     * Whether or not to close data source list panel after selecting data sources are changed
     */
    closeDataSourceListOnChange?: boolean;
    /**
     * Callback when toggle data button is clicked
     */
    onToggleUseDataEnabled?: (useDataSourcesEnabled: boolean) => void;
    /**
     * Before selecting, the component will call this method to check if it can continue selecting
     */
    disableSelection?: (useDataSources: UseDataSource[]) => boolean;
    /**
     * Before remove, the component will call this method to check if it can continue removing
     */
    disableRemove?: (useDataSources: UseDataSource[]) => boolean;
    /**
     * @ignore
     * Only used by theme
     */
    className?: string;
}
/**
 * @ignore
 */
interface StateExtraProps {
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: IMDataSourceInfo;
    }>;
}
/**
 * @ignore
 */
interface ExtraProps {
    intl: IntlShape;
}
/**
 * The `DataSourceSelector` component allows an Experience author to select a data source for widgets. This is usually used in a settings panel.
 *
 * ```ts
 * import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
 * ```
 */
export declare class _DataSourceSelector extends React.PureComponent<DataSourceSelectorProps & StateExtraProps & ExtraProps, unknown> {
    onToggleUseDataEnabled: () => void;
    onChange: (useDataSources: UseDataSource[]) => void;
    render(): jsx.JSX.Element;
}
/**
 * A component that allows an Experience author to select a data source for widgets. This is usually used in a settings panel.
 */
export declare const DataSourceSelector: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<DataSourceSelectorProps & StateExtraProps & ExtraProps>> & {
    WrappedComponent: React.ComponentType<DataSourceSelectorProps & StateExtraProps & ExtraProps>;
}, ReactRedux.Omit<import("react-intl").WithIntlProps<DataSourceSelectorProps & StateExtraProps & ExtraProps>, "dataSourcesInfo" | "dataSources"> & DataSourceSelectorProps>;
export {};
