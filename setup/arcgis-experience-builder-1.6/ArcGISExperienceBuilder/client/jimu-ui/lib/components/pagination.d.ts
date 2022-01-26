/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
import { PaginationProps as BSPaginationProps } from 'reactstrap/lib/Pagination';
export interface PaginationProps extends BSPaginationProps {
    /**
     * Total page number
     */
    totalPage: number;
    /**
     * Current page number
     */
    current: number;
    /**
     * If `true`, the Pagination will be disabled.
     */
    disabled?: boolean;
    /**
     * Callback fires when the page is changed.
     */
    onChangePage?: (current: number) => void;
}
interface ExtraProps {
    /**
     * @ignore
     */
    intl: IntlShape;
}
/**
 * The `Pagination` component is a set of presentational components for building pagination UI.
 *
 * ```ts
 * import { Pagination } from 'jimu-ui'
 * ```
 */
export declare class _Pagination extends React.PureComponent<PaginationProps & ExtraProps> {
    handleSwitchPage: (current: number) => void;
    handleSwitchToPrePage: (evt: any) => void;
    handleSwitchToNextPage: (evt: any) => void;
    formatMessage: (id: string, values?: {
        [key: string]: any;
    }) => string;
    renderPaginationItems(current: number, totalPage: number): any[];
    render(): JSX.Element;
}
export declare const Pagination: import("jimu-theme").StyledComponent<Pick<Omit<PaginationProps & ExtraProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, string | number> & {
    theme?: import("jimu-core").IMThemeVariables;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export {};
