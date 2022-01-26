/// <reference types="lodash" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as queryString from 'query-string';
import * as Immutable from 'seamless-immutable';
import classNames from 'classnames';
import { v1 as uuidv1 } from 'uuid';
import * as xss from 'xss';
import * as invariant from 'invariant';
import ReactResizeDetector from 'react-resize-detector';
import ResizeObserver from 'resize-observer-polyfill';
import * as spring from 'react-spring';
import { saveAs } from 'file-saver';
import * as restAuth from '@esri/arcgis-rest-auth';
import * as restFeatureLayer from '@esri/arcgis-rest-feature-layer';
import * as restRequest from '@esri/arcgis-rest-request';
import * as restPortal from '@esri/arcgis-rest-portal';
import { Sanitizer } from '@esri/arcgis-html-sanitizer';
import * as appActions from './lib/app-actions';
import * as utils from './lib/utils/utils';
import * as urlUtils from './lib/utils/url-utils';
import * as portalUrlUtils from './lib/utils/portal-url-utils';
import * as portalUtils from './lib/utils/portal-utils';
import * as appConfigUtils from './lib/utils/app-config-utils';
import * as keyboardUtils from './lib/utils/keyboard-utils';
import * as privilegeUtils from './lib/utils/privilege-utils';
import * as dataSourceUtils from './lib/utils/data-source-utils';
import * as sharedThemeUtils from './lib/utils/shared-theme-utils';
import * as extensionSpec from './lib/extension-spec/extension-spec';
import * as moduleLoader from './lib/module-loader';
import * as jimuHistory from './lib/browser-history';
import * as i18n from './lib/i18n';
import * as requestUtils from './lib/utils/request-utils';
import * as expressionUtils from './lib/utils/expression-utils';
import * as dateUtils from './lib/utils/date-utils';
import type { I18nMessages } from './lib/i18n';
import type { IntlShape } from 'react-intl';
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural, FormattedRelativeTime, FormattedTime, IntlProvider, injectIntl, createIntl, createIntlCache, useIntl } from 'react-intl';
import type { RepeatedDataSource } from './lib/repeat-data-source-context';
import { RepeatedDataSourceProvider, withRepeatedDataSource } from './lib/repeat-data-source-context';
import * as CONSTANTS from './lib/constants';
import BaseWidget from './lib/base-widget';
import WidgetManager from './lib/widget-manager';
import ConfigManager from './lib/config-manager';
import DataSourceManager from './lib/data-source-manager';
import MessageManager from './lib/message-manager';
import SessionManager, { SessionChangedReasonType } from './lib/session-manager';
import ExtensionManager from './lib/extension-manager';
import ExportJson from './lib/data-actions/export-json';
import ExportCSV from './lib/data-actions/export-csv';
import ExportGeoJSON from './lib/data-actions/export-geojson';
import DataActionManager from './lib/data-action-manager';
import ThemeManager from './lib/theme-manager';
import ServiceManager from './lib/service-manager';
import GuideManager from './lib/guide-manager';
import AppRoot from './lib/app-root';
import defaultMessages from './lib/translations/default';
import MutableStoreManager from './lib/mutable-store-manager';
import type { DataSourceComponentProps } from './lib/data-source-component';
import DataSourceComponent from './lib/data-source-component';
import type { MultipleDataSourceComponentProps } from './lib/multiple-data-source-component';
import MultipleDataSourceComponent from './lib/multiple-data-source-component';
import type { MultipleExpressionResolveResults, SingleExpressionResolveResult, ExpressionResolverComponentProps } from './lib/expression-resolver-component';
import { ExpressionResolverComponent, ExpressionResolverErrorCode, _ExpressionResolverComponent } from './lib/expression-resolver-component';
import Keyboard from './lib/keyboard';
import { keyMap } from './lib/keyboard/key-map';
import AppKeyboardComponent from './lib/app-keyboard-component';
declare const version: any;
declare const lodash: {
    assign: {
        <TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        <TObject_1, TSource1, TSource2>(object: TObject_1, source1: TSource1, source2: TSource2): TObject_1 & TSource1 & TSource2;
        <TObject_2, TSource1_1, TSource2_1, TSource3>(object: TObject_2, source1: TSource1_1, source2: TSource2_1, source3: TSource3): TObject_2 & TSource1_1 & TSource2_1 & TSource3;
        <TObject_3, TSource1_2, TSource2_2, TSource3_1, TSource4>(object: TObject_3, source1: TSource1_2, source2: TSource2_2, source3: TSource3_1, source4: TSource4): TObject_3 & TSource1_2 & TSource2_2 & TSource3_1 & TSource4;
        <TObject_4>(object: TObject_4): TObject_4;
        (object: any, ...otherArgs: any[]): any;
    };
    defer: (func: (...args: any[]) => any, ...args: any[]) => number;
    debounce: <T extends (...args: any) => any>(func: T, wait?: number, options?: import("lodash").DebounceSettings) => import("lodash").DebouncedFunc<T>;
    setValue: {
        <T_1 extends object>(object: T_1, path: import("lodash").PropertyPath, value: any): T_1;
        <TResult>(object: object, path: import("lodash").PropertyPath, value: any): TResult;
    };
    getValue: {
        <TObject_5 extends object, TKey extends keyof TObject_5>(object: TObject_5, path: TKey | [TKey]): TObject_5[TKey];
        <TObject_6 extends object, TKey_1 extends keyof TObject_6>(object: TObject_6, path: TKey_1 | [TKey_1]): TObject_6[TKey_1];
        <TObject_7 extends object, TKey_2 extends keyof TObject_7, TDefault>(object: TObject_7, path: TKey_2 | [TKey_2], defaultValue: TDefault): TDefault | Exclude<TObject_7[TKey_2], undefined>;
        <TObject_8 extends object, TKey1 extends keyof TObject_8, TKey2 extends keyof TObject_8[TKey1]>(object: TObject_8, path: [TKey1, TKey2]): TObject_8[TKey1][TKey2];
        <TObject_9 extends object, TKey1_1 extends keyof TObject_9, TKey2_1 extends keyof TObject_9[TKey1_1]>(object: TObject_9, path: [TKey1_1, TKey2_1]): TObject_9[TKey1_1][TKey2_1];
        <TObject_10 extends object, TKey1_2 extends keyof TObject_10, TKey2_2 extends keyof TObject_10[TKey1_2], TDefault_1>(object: TObject_10, path: [TKey1_2, TKey2_2], defaultValue: TDefault_1): TDefault_1 | Exclude<TObject_10[TKey1_2][TKey2_2], undefined>;
        <TObject_11 extends object, TKey1_3 extends keyof TObject_11, TKey2_3 extends keyof TObject_11[TKey1_3], TKey3 extends keyof TObject_11[TKey1_3][TKey2_3]>(object: TObject_11, path: [TKey1_3, TKey2_3, TKey3]): TObject_11[TKey1_3][TKey2_3][TKey3];
        <TObject_12 extends object, TKey1_4 extends keyof TObject_12, TKey2_4 extends keyof TObject_12[TKey1_4], TKey3_1 extends keyof TObject_12[TKey1_4][TKey2_4]>(object: TObject_12, path: [TKey1_4, TKey2_4, TKey3_1]): TObject_12[TKey1_4][TKey2_4][TKey3_1];
        <TObject_13 extends object, TKey1_5 extends keyof TObject_13, TKey2_5 extends keyof TObject_13[TKey1_5], TKey3_2 extends keyof TObject_13[TKey1_5][TKey2_5], TDefault_2>(object: TObject_13, path: [TKey1_5, TKey2_5, TKey3_2], defaultValue: TDefault_2): TDefault_2 | Exclude<TObject_13[TKey1_5][TKey2_5][TKey3_2], undefined>;
        <TObject_14 extends object, TKey1_6 extends keyof TObject_14, TKey2_6 extends keyof TObject_14[TKey1_6], TKey3_3 extends keyof TObject_14[TKey1_6][TKey2_6], TKey4 extends keyof TObject_14[TKey1_6][TKey2_6][TKey3_3]>(object: TObject_14, path: [TKey1_6, TKey2_6, TKey3_3, TKey4]): TObject_14[TKey1_6][TKey2_6][TKey3_3][TKey4];
        <TObject_15 extends object, TKey1_7 extends keyof TObject_15, TKey2_7 extends keyof TObject_15[TKey1_7], TKey3_4 extends keyof TObject_15[TKey1_7][TKey2_7], TKey4_1 extends keyof TObject_15[TKey1_7][TKey2_7][TKey3_4]>(object: TObject_15, path: [TKey1_7, TKey2_7, TKey3_4, TKey4_1]): TObject_15[TKey1_7][TKey2_7][TKey3_4][TKey4_1];
        <TObject_16 extends object, TKey1_8 extends keyof TObject_16, TKey2_8 extends keyof TObject_16[TKey1_8], TKey3_5 extends keyof TObject_16[TKey1_8][TKey2_8], TKey4_2 extends keyof TObject_16[TKey1_8][TKey2_8][TKey3_5], TDefault_3>(object: TObject_16, path: [TKey1_8, TKey2_8, TKey3_5, TKey4_2], defaultValue: TDefault_3): TDefault_3 | Exclude<TObject_16[TKey1_8][TKey2_8][TKey3_5][TKey4_2], undefined>;
        <T_2>(object: import("lodash").NumericDictionary<T_2>, path: number): T_2;
        <T_3>(object: import("lodash").NumericDictionary<T_3>, path: number): T_3;
        <T_4, TDefault_4>(object: import("lodash").NumericDictionary<T_4>, path: number, defaultValue: TDefault_4): T_4 | TDefault_4;
        <TDefault_5>(object: null, path: import("lodash").PropertyPath, defaultValue: TDefault_5): TDefault_5;
        (object: null, path: import("lodash").PropertyPath): undefined;
        (object: any, path: import("lodash").PropertyPath, defaultValue?: any): any;
    };
    isDeepEqual: (value: any, other: any) => boolean;
    throttle: <T_5 extends (...args: any) => any>(func: T_5, wait?: number, options?: import("lodash").ThrottleSettings) => import("lodash").DebouncedFunc<T_5>;
    kebabCase: (string?: string) => string;
    cloneDeep: <T_6>(value: T_6) => T_6;
};
declare const esri: {
    restAuth: typeof restAuth;
    restFeatureLayer: typeof restFeatureLayer;
    restPortal: typeof restPortal;
    restRequest: typeof restRequest;
    Sanitizer: typeof Sanitizer;
};
declare const polished: {
    /**
     * https://github.com/styled-components/polished/issues/276
     * The typeing of polished is not correct. It says it's fixed but it seems it does not.
     */
    rgba: any;
    parseToRgb: any;
    rem: any;
    readableColor: any;
    lighten: any;
    darken: any;
    ellipsis: any;
    mix: any;
    stripUnit: any;
    math: any;
    borderRadius: any;
    getValueAndUnit: any;
};
declare type ImmutableObject<T> = Immutable.ImmutableObject<T>;
declare type ImmutableArray<T> = Immutable.ImmutableArray<T>;
export { AppRoot, React, ReactDOM, ExtensionManager, BaseWidget, WidgetManager, ConfigManager, DataSourceManager, urlUtils, SessionManager, SessionChangedReasonType, appActions, extensionSpec, utils, appConfigUtils, ReactRedux, MessageManager, Immutable, classNames, uuidv1, queryString, moduleLoader, jimuHistory, ImmutableObject, ImmutableArray, portalUrlUtils, portalUtils, i18n, defaultMessages, DataSourceComponent, DataSourceComponentProps, MultipleDataSourceComponent, MultipleDataSourceComponentProps, IntlProvider, injectIntl, xss, polished, MutableStoreManager, Keyboard, keyMap, AppKeyboardComponent, keyboardUtils, requestUtils, expressionUtils, dateUtils, createIntl, createIntlCache, useIntl, FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural, FormattedRelativeTime, FormattedTime, IntlShape, esri, lodash, RepeatedDataSourceProvider, withRepeatedDataSource, RepeatedDataSource, dataSourceUtils, sharedThemeUtils, ExportJson, ExportCSV, ExportGeoJSON, DataActionManager, ThemeManager, invariant, CONSTANTS, ReactResizeDetector, ResizeObserver, GuideManager, ExpressionResolverComponent, ExpressionResolverErrorCode, MultipleExpressionResolveResults, SingleExpressionResolveResult, ExpressionResolverComponentProps, _ExpressionResolverComponent, ServiceManager, version, privilegeUtils, spring, saveAs, I18nMessages };
export * from './lib/emotion';
export * from './lib/base-widget';
export * from './lib/types/layout';
export * from './lib/types/props';
export * from './lib/types/state';
export * from './lib/types/app-config';
export * from './lib/types/jimu-config';
export * from './lib/types/url-parameters';
export * from './lib/types/app-info';
export * from './lib/types/manifest';
export * from './lib/types/common';
export * from './lib/types/tracking-manager';
export * from './lib/types/theme';
export * from './lib/types/expression';
export * from './lib/types/sql-expression';
export * from './lib/types/service-definition';
export * from './lib/types/user-settings';
export * from './lib/types/url-info';
export * from './lib/data-sources/data-source-interface';
export * from './lib/message/message-base-types';
export * from './lib/init';
export * from './lib/store';
export * from './lib/tracking-manager';
export { LoadingHandler } from './lib/loading-component';
export * from './lib/dependency-loader';
export * from './lib/arcgis-js-api-module-loader';
export * from './lib/error-boundary';
export * from './lib/base-data-action';
export * from './lib/message-actions/filter-data-record-action';
export * from './lib/expression-resolver';
export * from './lib/version-manager';
export * from './lib/app-dialog';
export * from './lib/animation';
export * from './lib/transition';
export * from './lib/accessibility';
export * from './lib/extensions/data-source-extension';
