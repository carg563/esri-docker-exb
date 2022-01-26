import { React } from 'jimu-core';
/**
 * Loop within the focusable elements inside a container when the Tab key is pressed.
 *
 * @ignore
 * @param trapFocus
 * Whether to enable trap focus.
 * @param autoFocus
 * Whether to automatically focus on the first focussable element.
 * @param forceLatestFocusElements
 * Whether to query focusable elements every time you when the `Tab` key is pressed.
 */
export declare const useTrapFocusLoop: (containerRef: React.MutableRefObject<HTMLDivElement>, open: boolean, trapFocus?: boolean, autoFocus?: boolean, forceLatestFocusElements?: boolean) => void;
/**
 * Trigger toggle when the escape key is pressed
 */
export declare const useToggleForEscape: (containerRef: React.MutableRefObject<HTMLDivElement>, open: boolean, toggle: (evt: any) => void) => void;
