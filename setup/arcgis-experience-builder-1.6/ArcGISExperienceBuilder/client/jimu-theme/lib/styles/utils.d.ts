import { IMThemeVariables, ThemeManager } from 'jimu-core';
import { SerializedStyles } from './emotion';
export declare const getGlobalStyles: (theme: IMThemeVariables) => SerializedStyles;
export declare function getBuilderThemeManager(): ThemeManager;
export declare function toSerializedStyles(...styles: any[]): SerializedStyles;
