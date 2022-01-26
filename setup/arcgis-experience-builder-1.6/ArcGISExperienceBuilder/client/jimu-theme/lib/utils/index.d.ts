import { ImmutableObject, IMThemeVariables, ThemeVariables } from 'jimu-core';
export declare function getBuilderThemeVariables(): IMThemeVariables;
/**
 * Get component variables from theme variables.
 * @param categoryName
 */
export declare function getComponentVariants(name: string): ImmutableObject<Record<string, any>>;
/**
 * Get components variables for navigation.
 * @returns
 */
export declare const getNavigationVariables: () => ImmutableObject<Record<string, Record<string, any>>>;
/**
 * Identify if a given string is a CSS variable.
 */
export declare const isCSSVariable: (variable: string) => boolean;
/**
 * Get value from a path to a theme color variable.
 * @param path - Path to the theme variable. There are two types of paths:
 * One is the path separated by dots,(e.g primary.200), the other is CSS variable(var(--primary-100))
 * @param variables - Target theme variables object used to get value from.
 * if undefined, the theme variables from the current app will be used.
 */
export declare const getThemeColorValue: (path: string, variables?: Partial<ThemeVariables>) => string;
