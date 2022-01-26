/// <reference types="react" />
import { React } from 'jimu-core';
interface ProgressProps {
    color?: 'primary' | 'secondary' | 'light' | 'dark' | 'success' | 'info' | 'warning' | 'danger';
    type?: 'linear' | 'circular';
    showProgress?: boolean;
    className?: string;
    value?: number;
    style?: React.CSSProperties;
    circleSize?: number;
    [key: string]: any;
}
export declare const _Progress: (props: ProgressProps) => JSX.Element;
export declare const Progress: import("jimu-theme").StyledComponent<ProgressProps, {}, {}>;
export {};
