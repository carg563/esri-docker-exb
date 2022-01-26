/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables, IntlShape, DataSource, SqlClause, IMSqlExpression, SqlClauseSet, QueryScope } from 'jimu-core';
/**
 * The SqlExpressionRuntime component props
 */
export interface SqlExpressionRuntimeProps {
    /**
     * Imutable sql expression.
     */
    expression: IMSqlExpression;
    /**
     * Decide the data sourece's filters when source type is unique or multiple.
     * Default value is `InRuntimeView`.
     * @ignore
     */
    queryScope?: QueryScope;
    /**
     * Decide the data sourece's filters when source type is unique or multiple.
     * Valid when queryScope is `InRuntimeView`.
     * It's used to exclude filter of current widget.
     */
    widgetId: string;
    /**
     * selected data source.
     * Feature layers, feature layers used in web maps, and feature service URLs are supported.
     */
    dataSource: DataSource;
    /**
     * Will call the function when SQL expression is changed.
     */
    onChange: (sqlExprObj: IMSqlExpression) => void;
    className?: string;
    style?: React.CSSProperties;
}
interface ExtraProps {
    theme: ThemeVariables;
}
/**
 * @ignore
 */
interface IntlProps {
    intl: IntlShape;
}
export declare class _SqlExpressionRuntime extends React.PureComponent<SqlExpressionRuntimeProps & ExtraProps & IntlProps> {
    isHosted: boolean;
    constructor(props: any);
    i18nMessage: (id: string) => string;
    onChange: (clause: SqlClause | SqlClauseSet, id: string) => void;
    render(): jsx.JSX.Element;
}
/**
 * A component for end users to execute filters at runtime.
 * It supports filter functionality in widgets to display and customize the ask-for-value filters configured by SQL expression builder in the setting.
 */
export declare const SqlExpressionRuntime: import("jimu-theme").StyledComponent<Omit<SqlExpressionRuntimeProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export default SqlExpressionRuntime;
