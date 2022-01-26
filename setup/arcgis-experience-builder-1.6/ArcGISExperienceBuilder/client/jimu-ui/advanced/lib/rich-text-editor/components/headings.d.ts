/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, SerializedStyles } from 'jimu-core';
import { HeaderValue } from '../type';
interface Props {
    className?: string;
    style?: any;
    value?: HeaderValue;
    onChange?: (value: HeaderValue) => void;
}
interface ExtraProps {
    intl?: IntlShape;
}
interface State {
    open: boolean;
}
export declare class _Headings extends React.PureComponent<Props & ExtraProps, State> {
    headings: Array<{
        label: string;
        value: HeaderValue;
    }>;
    constructor(props: any);
    translate: (id: string) => string;
    getLabel: (value: HeaderValue) => string;
    toggle: () => void;
    onItemClick: (value: HeaderValue) => void;
    getStyle: () => SerializedStyles;
    render(): React.ReactElement;
}
export declare const Headings: React.FC<Pick<Props & ExtraProps, "intl" | keyof Props> & {
    theme?: import("jimu-core").IMThemeVariables;
}>;
export {};
