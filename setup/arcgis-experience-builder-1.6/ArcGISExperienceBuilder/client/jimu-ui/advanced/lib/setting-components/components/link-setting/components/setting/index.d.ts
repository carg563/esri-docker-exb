/// <reference types="react" />
/** @jsx jsx */
import { React, IMAppConfig, LinkType, ImmutableArray, jsx, ThemeVariables, UseDataSource, BrowserSizeMode, ReactRedux, IntlShape } from 'jimu-core';
import { IMLinkParam, OpenTypes, LinkParam } from '../../types';
export interface LinkSettingProps {
    className?: string;
    linkParam?: IMLinkParam;
    onSettingConfirm?: (linkParam: IMLinkParam) => void;
    /**
     * Use widget id to get widget context, e.g. whether widget is in repeated data source context.
     */
    widgetId?: string;
    /**
     * @ignore
     */
    isLinkPageSetting?: boolean;
    useDataSources?: ImmutableArray<UseDataSource>;
    hiddenLinks?: ImmutableArray<LinkType>;
    openTypes?: ImmutableArray<OpenTypes>;
}
interface States {
    originLinkParam: IMLinkParam;
    linkParam: IMLinkParam;
}
interface StateExtraProps {
    appConfig: IMAppConfig;
    browserSizeMode: BrowserSizeMode;
}
interface ExtraProps {
    theme?: ThemeVariables;
    intl?: IntlShape;
}
/**
 * The `LinkSetting` component allows users to configure a link.
 *
 * ```ts
 * import { LinkSetting } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare class _LinkSetting extends React.PureComponent<LinkSettingProps & ExtraProps & StateExtraProps, States> {
    constructor(props: any);
    needOpenIn(linkParam: IMLinkParam | LinkParam): boolean;
    render(): jsx.JSX.Element;
    getLinkTypeContent: () => jsx.JSX.Element;
    getHiddenLinks: () => ImmutableArray<LinkType>;
    componentDidMount(): void;
    getLinkContent: (linkType: string) => jsx.JSX.Element;
    linkTypeChange: (e: any) => void;
    radioOpenTypeChange: (openType: OpenTypes) => void;
    linkParamChange: (changedParam: IMLinkParam, isTypeSame?: boolean) => void;
    settingConfirm: () => void;
    isLinkParamOk: (linkParam: IMLinkParam) => boolean;
}
export declare const LinkSetting: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<LinkSettingProps>> & {
    WrappedComponent: React.ComponentType<LinkSettingProps>;
}, ReactRedux.Omit<import("react-intl").WithIntlProps<LinkSettingProps>, never> & LinkSettingProps>;
export {};
