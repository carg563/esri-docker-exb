/// <reference types="react" />
import { IMThemeVariables, React } from 'jimu-core';
import { FunctionInterpolation, StyledComponent } from './emotion';
/** Same as StyledOptions but shouldForwardProp must be a type guard */
export interface FilteringStyledOptions<Props, ForwardedProps extends keyof Props = keyof Props> {
    label?: string;
    shouldForwardProp?: (propName: PropertyKey) => propName is ForwardedProps;
    target?: string;
}
export declare type StyleFunction = FunctionInterpolation<{
    theme?: IMThemeVariables;
    [x: string]: any;
}>;
export interface StyleFunctions {
    [name: string]: StyleFunction;
}
/**
 * Register the style of the component to an object, it will be used with `withStyles`.
 * @param entry
 * @param styles
 */
export declare function registerStyles(entry: string, styles: StyleFunctions): void;
/**
 * A higher-order component that links the registered style.
 * @param component
 * @param name
 * @param options
 */
export declare function withStyles<C extends React.ComponentClass<React.ComponentProps<C>> | React.FC<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>>(component: C, name?: string, options?: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>): StyledComponent<React.ComponentProps<C>>;
/**
 * A higher-order component that links the registered style of builder.
 * @param Component
 * @param name
 * @param options
 */
export declare function withBuilderStyles<C extends React.ComponentClass<React.ComponentProps<C>> | React.FC<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>>(Component: C, name?: string, options?: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>): StyledComponent<React.ComponentProps<C>>;
