import { WidgetContext, IMAppConfig, IMWidgetJson, WidgetJson, IMMessageActionJson, AppConfig, UseDataSource, IMUseDataSource, SizeModeLayoutJson } from '../types/app-config';
import { WidgetManifest } from '../types/manifest';
import { IMState } from '../types/state';
import { BrowserSizeMode } from '../types/common';
export declare function getWidgetContext(uri: string): WidgetContext;
export declare function addWidgetManifestProperties(manifest: WidgetManifest): WidgetManifest;
export declare function addWidgetDefaultLabelAndIcon(appConfig: IMAppConfig, widgetJson: WidgetJson): void;
export declare function addLayoutLabel(appConfig: AppConfig): void;
declare type IDType = 'page' | 'view' | 'section' | 'widget' | 'screen' | 'screenGroup' | 'layout' | 'dialog' | 'dataSource' | 'messageConfig' | 'appProxy';
/**
 * we use <type_number> format to generate key.
 * @param type:
 */
export declare function getUniqueId(appConfig: IMAppConfig, type: IDType): string;
/**
 * we use `<label> <index>` format to generate unique label.
 * @param type:
 * @param label: the i18n label
 *
 */
export declare function getUniqueLabel(appConfig: IMAppConfig | AppConfig, type: 'page' | 'view' | 'section' | 'widget' | 'screen' | 'screenGroup' | 'dialog' | 'layout', label: string): string;
export declare function getAllWidgets(appConfig: IMAppConfig): IMWidgetJson[];
export declare function getWidgetMessageActionJsons(appConfig: IMAppConfig | AppConfig, widgetId: string, actionName: string): IMMessageActionJson[];
export declare function isTwoViewsInSaveSection(appConfig: IMAppConfig | AppConfig, viewId1: string, viewId2: string): boolean;
/**
 * Add id property to layout since it's removed in cleanup
 * @param appConfig
 */
export declare function fixLayoutIds(appConfig: AppConfig): void;
export declare function updateStateWhenAppConfigChange(state: IMState, appConfig: IMAppConfig): IMState;
interface DataActionRelatedWidget {
    parent: Array<{
        type: string;
        id: string;
        isPending: boolean;
        sizeMode: BrowserSizeMode;
    }>;
}
interface DataActionRelatedWidgetMap {
    [widgetId: string]: DataActionRelatedWidget;
}
export declare function isWidgetFromSameSource(map: DataActionRelatedWidgetMap, consumerWidgetId: string, providerWidgetId: string, includePending?: boolean, includeOtherSizeMode?: boolean): boolean;
export declare function getLayoutIdInSizeMode(layout: SizeModeLayoutJson, sizeMode: BrowserSizeMode, mainSizeMode: BrowserSizeMode): string;
export declare function buildDataActionRelatedWidgetMap(appConfig: IMAppConfig, sizeMode?: BrowserSizeMode): DataActionRelatedWidgetMap;
/**
 * This util is used to get source widget id by output data source.
 * To get label of the source widget, please map source widget json to widget/component props.
 * Since source widget label may be edited by user, widget/component should listen to change of source widget json.
 *
 * The reason why doesn't need to pass in app config to the util is that,
 * widget/component only needs to listen to change of source widget json
 * and doesn't need to map the whole app config to its props.
 * The util will get app config by itself,
 * which can avoid getting app config before each call of the util.
 *
 * Please notes that the util always calculates with app's config both in app and in builder.
 * That is to say, if is in builder, instead of a builder widget (e.g. data source setting widget),
 * the returned widget id will still be id of an app widget (e.g. list widget).
 */
export declare function getWidgetIdByOutputDataSource(useDataSource: UseDataSource | IMUseDataSource): string;
export declare function validateConnectionsOfAppConfig(): void;
export declare function getClientIdFromConnectionsOfAppConfig(portalUrl: string): string;
export declare function addWebmapOrWebsceneToAppConfig(appConfig: AppConfig, webmapId: string, websceneId: string): void;
export * from './resource-utils';