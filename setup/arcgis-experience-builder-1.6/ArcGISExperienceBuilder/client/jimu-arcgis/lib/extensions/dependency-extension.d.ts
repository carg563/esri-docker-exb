import { extensionSpec, Resource } from 'jimu-core';
export declare class ArcGISDependencyDefineExtension implements extensionSpec.DependencyDefineExtension {
    id: string;
    themeChangeObserver: any;
    getDependencyKey(): string;
    getResources(): Resource[];
    postInit(): Promise<void>;
    private initModules;
    private registOAuth;
    /**
     * use after registOAuth for loading OAuthInfo/ServerInfo/IdentityManager
     */
    private registOAuthInfo;
    /**
     * use after registOAuth
     */
    private listeningJsApiSignIn;
    private syncToArcgisJSAPI;
    private onSessionChangedCallback;
    private addToTrustedServers;
    private onThemeChange;
    private removeApiThemeStyle;
    private getAPIThemeUrl;
    private checkApiUrl;
}
export declare class ArcGISDataSourceFactoryUriExtension implements extensionSpec.DataSourceFactoryUriExtension {
    id: string;
    getFactoryUri(dataSourceType: any): string;
}
