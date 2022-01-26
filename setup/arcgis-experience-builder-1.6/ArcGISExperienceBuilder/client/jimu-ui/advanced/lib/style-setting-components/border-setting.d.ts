/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IMThemeVariables, ReactRedux } from 'jimu-core';
import { BorderStyle } from 'jimu-ui';
export interface BorderStyleProps {
    className?: string;
    style?: any;
    /**
     * Border style, including type, color, and width
     */
    value?: BorderStyle;
    onChange?: (param: BorderStyle) => void;
}
interface StateToProps {
    appTheme?: IMThemeVariables;
}
export declare class _BorderSetting extends React.PureComponent<BorderStyleProps & StateToProps> {
    static defaultProps: Partial<BorderStyleProps>;
    _updateBorder(key: string, newValue: any): void;
    render(): jsx.JSX.Element;
}
/**
 * A react component for setting border style (border-style, border-color, border-width)
 */
export declare const BorderSetting: import("jimu-theme").StyledComponent<ReactRedux.Omit<Pick<React.ClassAttributes<_BorderSetting> & BorderStyleProps, keyof React.ClassAttributes<_BorderSetting>> & Partial<Pick<React.ClassAttributes<_BorderSetting> & BorderStyleProps, keyof BorderStyleProps>> & Partial<Pick<Partial<BorderStyleProps>, never>>, never> & BorderStyleProps, {}, {}>;
export {};
