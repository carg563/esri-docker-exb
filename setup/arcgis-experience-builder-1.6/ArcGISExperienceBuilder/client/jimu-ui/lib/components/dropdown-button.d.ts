/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
import { ButtonProps } from './button';
/**
 * The DropdownButton component props.
 */
export interface DropdownButtonProps extends ButtonProps {
    /**
     * Whether to show an arrow icon at the end of the button.
     * The icon can be customized by assigning the property with an element instead.
     * @default true
     */
    arrow?: boolean | React.ReactElement;
    /**
     * Whether to show a dot icon at the right-bottom of the button.
     * Valid only when `arrow` is false and `icon` is true.
     * @default false
     */
    dot?: boolean | React.ReactElement;
}
interface IntlProps {
    intl: IntlShape;
}
/**
 * The `DropdownButton` component is a button element in a `Dropdown` component to toggle the dropdown menu.
 *
 * Please use this component together with `Dropdown`, `DropdownMenu` and `DropdownItem`.
 *
 * ```ts
 * import { DropdownButton } from 'jimu-ui'
 * ```
 */
export declare class _DropdownButton extends React.PureComponent<DropdownButtonProps & IntlProps> {
    static contextType: React.Context<{}>;
    defaultLabel: string;
    static defaultProps: Partial<DropdownButtonProps>;
    constructor(props: any);
    onClick(e: any): void;
    onKeyDown: (evt: any) => void;
    onKeyUp: (evt: any) => void;
    render(): JSX.Element;
}
/**
 * The `DropdownButton` component is a button element in a `Dropdown` component to toggle the dropdown menu.
 *
 * Please use this component together with `Dropdown`, `DropdownMenu` and `DropdownItem`.
 *
 * ```ts
 * import { DropdownButton } from 'jimu-ui'
 * ```
 */
export declare const DropdownButton: import("jimu-theme").StyledComponent<Omit<DropdownButtonProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export {};
