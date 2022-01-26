/// <reference types="react" />
/** @jsx jsx */
import { React, ThemeVariables, ReactRedux, IMSelection, jsx } from 'jimu-core';
import { PopperProps } from 'jimu-ui';
export interface SidePopperProps extends Omit<PopperProps, 'open' | 'reference' | 'position' | 'toggle'> {
    position: 'left' | 'right';
    isOpen: boolean;
    /**
     * Toggle to open/close the side popper.
     */
    toggle: () => void;
    /**
     * Element which triggers side popper.
     * Won't call `toggle` method when clicked dom is inside trigger dom.
     */
    trigger: Element;
    /**
     * If current selected widget is not the widget, will close the side popper.
     */
    widgetId?: string;
    /**
     * Provide a uniform header.
     */
    title?: string;
}
interface ExtroProps {
    leftSidebarCollapse: boolean;
    rightSidebarCollapse: boolean;
    dispatch: any;
    isTemplatePage: boolean;
    theme?: ThemeVariables;
    layoutSelection?: IMSelection;
}
/**
 * The `SidePopper` component is a popper which reference node is left/right side panel of builder.
 *
 * ```ts
 * import { SidePopper } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare class _SidePopper extends React.PureComponent<SidePopperProps & ExtroProps, unknown> {
    componentDidMount(): void;
    componentDidUpdate(prevProps: SidePopperProps & ExtroProps): void;
    componentWillUnmount(): void;
    handleDocumentMousedown: (evt: MouseEvent) => void;
    getReference(position: 'left' | 'right'): HTMLElement;
    getPlacement(position: 'left' | 'right'): "right-start" | "left-start";
    render(): jsx.JSX.Element;
}
export declare const SidePopper: ReactRedux.ConnectedComponent<import("jimu-theme").StyledComponent<SidePopperProps & ExtroProps, {}, {}>, ReactRedux.Omit<SidePopperProps & ExtroProps, "dispatch" | "leftSidebarCollapse" | "rightSidebarCollapse" | "isTemplatePage" | "layoutSelection"> & SidePopperProps>;
export {};
