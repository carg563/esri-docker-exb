import { DataSourceItemProps } from '../types';
interface DataSourceErrorItemProps extends Omit<DataSourceItemProps, 'isRenameInputShown' | 'isMappingIconShown' | 'onMappingIconClick' | 'onRename'> {
}
export declare const DataSourceErrorItem: import("jimu-theme").StyledComponent<DataSourceErrorItemProps, {}, {}>;
export {};
