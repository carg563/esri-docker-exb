/// <reference types="react" />
import { React, IMFieldSchema, IntlShape, ClauseValueOptions } from 'jimu-core';
interface Props {
    value: ClauseValueOptions;
    fieldObj: IMFieldSchema;
    onChange: (valueObj: ClauseValueOptions) => void;
    runtime: boolean;
    style?: React.CSSProperties;
    className?: string;
}
interface IntlProps {
    intl: IntlShape;
}
export declare class _VIDoubleNumberSelector extends React.PureComponent<Props & IntlProps> {
    value1: number;
    value2: number;
    i18nMessage: (id: string) => string;
    onValue1Change: (e: any) => void;
    onValue2Change: (e: any) => void;
    onChange: () => void;
    render(): JSX.Element;
}
declare const VIDoubleNumberSelector: import("jimu-theme").StyledComponent<Omit<Props & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export default VIDoubleNumberSelector;
