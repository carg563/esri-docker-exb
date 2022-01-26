/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ReactRedux } from 'jimu-core';
import { LayoutItemProps, StateToLayoutItemProps } from '../../types';
declare type GridItemProps = LayoutItemProps & StateToLayoutItemProps;
declare class GridItem extends React.PureComponent<GridItemProps> {
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof GridItem, ReactRedux.Omit<React.ClassAttributes<GridItem> & LayoutItemProps & StateToLayoutItemProps, "selected" | "watchViewportVisibility" | "autoScroll" | "animationPreview" | "playMode" | "layoutItem" | "previewId"> & LayoutItemProps>;
export default _default;
