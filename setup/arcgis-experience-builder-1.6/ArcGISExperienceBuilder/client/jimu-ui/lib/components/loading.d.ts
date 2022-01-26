/// <reference types="react" />
/** @jsx jsx */
import { React, ThemeVariables, SerializedStyles, jsx } from 'jimu-core';
import { LoadingType } from './types';
interface Props {
    className?: string;
    type?: LoadingType;
    width?: number;
    height?: number;
}
export declare class _Loading extends React.PureComponent<Props & {
    theme: ThemeVariables;
}> {
    static count: number;
    id: string;
    constructor(props: any);
    getClassFromType(type: LoadingType): string;
    getStyle(width: number, height: number, type: LoadingType): SerializedStyles;
    render(): jsx.JSX.Element;
}
export declare const Loading: import("jimu-theme").StyledComponent<Pick<Props & {
    theme: ThemeVariables;
}, keyof Props> & {
    theme?: import("jimu-core").IMThemeVariables;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export {};
