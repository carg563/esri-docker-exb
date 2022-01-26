/// <reference types="react" />
import { React, IMThemeVariables } from 'jimu-core';
import { DistributiveOmit, PropsOf } from './emotion';
/**
 * A higher-order component that provides the builder theme as a prop to the
 * wrapped child and listens for changes.
 * @param Component
 */
export declare function withBuilderTheme<C extends React.ComponentType<React.ComponentProps<C>>>(Component: C): React.FC<DistributiveOmit<PropsOf<C>, 'theme'> & {
    theme?: IMThemeVariables;
}>;
