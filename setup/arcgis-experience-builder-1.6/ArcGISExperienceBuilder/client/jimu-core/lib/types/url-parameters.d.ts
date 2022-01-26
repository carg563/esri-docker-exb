import { ImmutableObject } from 'seamless-immutable';
export interface UrlParameters {
    locale?: string;
    apiurl?: string;
    /** these are for buidler only */
    title?: string;
    tags?: string;
    summary?: string;
    folder?: string;
    template?: string;
    id?: string;
    page?: string;
    /** end */
    views?: string;
    dlg?: string;
    /**
     * The data_index is used to select data records by index, the dsId is the main data source id. The format is: <dsId:selectIndex>.
     * The selectIndex can be:
     *    * <i>, means index <i> is selected.
     *    * <i1+i2+i3>, means index <i1, i2, i3> is selected.
     *    * <i1-i3>, means index <from i1 to i3> is selected.
     *    * <i1-i3>+<i8-i9>, means index <from i1 to i3> and <from i8 to i9>  is selected.
     *
     * To select multiple data sources, use this format: [<dsId:selectIndex>,<dsId:selectIndex>]
     */
    data_index?: string;
    /**
     * The data_index is used to select data records by id, the dsId is the main data source id. The format is: <dsId:selectId>.
     * the selectId can be:
     *    * <id>
     *    * <id1+id2+id3> this means the id must not contain "+"
     *
     * To select multiple data sources, use this format: [<dsId:selectId>,<dsId:selectId>]
     *
     * The data_id will be used prior to data_index.
     */
    data_id?: string;
    /**
     * The data_filter is used to filter data source, the filter is the where clause. The format is: <dsId:filter>
     * For example: data_filter=ds1:objectid=1, ds2:fielda>2
     *
     * To filter multiple data sources, use this format: [<dsId:filter>,<dsId:filter>]
     *
     * Note: the filter can't contain "," and ":"
     */
    data_filter?: string;
    /**
     * The data_version is used to change data source gdb version, the version here means gdb version. The format is: <dsId:version>
     *
     * To change version for multiple data sources, use this format: [<dsId:version>,<dsId:version>]
     *
     */
    data_version?: string;
    /**
     * The app config parameter.
     * It can be:
     *    * item:<itemId>, use the current portal and this item id to fetch config
     *    * a URL, use this URL to fetch config
     */
    config?: string;
    app_config?: string;
    /**
     * embedded = <true | 1>
     */
    embedded?: string;
    /**
     * by default, app will load config from item data.
     * But before publish, the item data is empty, we can set draft=1 to load config from item resource
     * draft = <true | 1>
     */
    draft?: string;
    /**
     * The org short name (urlKey), valid on AGOL only. Will be used when login
     */
    org?: string;
    theme?: string;
    /**
     * this is for make widget to support custom URL parameters. the suggest pattern is: ?widget1=p1=v1,p2=v2, but every widget can define it's own pattern
     */
    [widgetId: string]: string;
}
export declare type IMUrlParameters = ImmutableObject<UrlParameters>;
