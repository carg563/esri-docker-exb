import { IMThemeManifest } from './types/manifest';
import { IMThemeVariables } from './types/theme';
import { StyleFunction, StyleFunctions } from 'jimu-theme';
interface ThemeModule {
    manifest: IMThemeManifest;
    styleFunctions: StyleFunctions;
    variables: IMThemeVariables;
}
export default class ThemeManager {
    private themeModules;
    private finalThemeVariables;
    static instance: ThemeManager;
    static getInstance(): ThemeManager;
    static getInAppInstance(): ThemeManager;
    constructor();
    private createTheme;
    private getAppconfig;
    private onThemeChange;
    private onCustomThemeChange;
    private onSharedThemeVariablesChange;
    getThemeManifest(uri: string): IMThemeManifest;
    /**
     * Load theme and return the final theme variable.
     * @param uri
     */
    loadTheme(uri: string): Promise<ThemeModule>;
    /**
     * Check whether theme has been loaded.
     */
    isThemeLoaded(uri: string): boolean;
    /**
     * Get the final theme variables.
     */
    getThemeVariables(uri: string): IMThemeVariables;
    /**
     * Gets the style function for overriding component in theme.
     * @param name
     */
    getComponentOverwriteStyle(name: string): StyleFunction;
}
export {};
