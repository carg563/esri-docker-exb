/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, dateUtils, EsriDateFormats } from 'jimu-core';
import { PositioningStrategy } from 'jimu-ui';
import 'react-datepicker/dist/react-datepicker.css';
/**
* DatePicker properties
*/
export interface DatePickerProps {
    selectedDate: Date | dateUtils.VirtualDateType;
    /**
     * whether start date from double date picker
     */
    isStartDate?: boolean;
    /**
     * whether end date from double date picker
     */
    isEndDate?: boolean;
    startDate?: Date;
    endDate?: Date;
    /**
    * whether a UTC date.
    */
    isUTCDate?: boolean;
    /**
    * @ignore
    */
    format?: EsriDateFormats | string;
    /**
    * true: two months shown, has today button,
    * false: one month shown, no today button.
    */
    runtime: boolean;
    dateRangeList: dateUtils.VirtualDateType[];
    onChange: (value: number | dateUtils.VirtualDateType, label: string) => void;
    /**
    * Whether display time input on datepicker component
    */
    showTimeInput?: boolean;
    /**
    * Whether display a long time format.
    */
    isTimeLong?: boolean;
    /**
    * Decide how many months to display, supports 1 (default) and 2.
    */
    /**
    * @ignore
    */
    isClearable?: boolean;
    /**
    * whether display date picker inline.
    */
    /**
    * @ignore
    */
    hasDateList?: boolean;
    supportVirtualDateList: boolean;
    /**
    * @ignore
    */
    /**
    * Whether keep calendar when select one date.
    */
    keepCalendarOnSelect?: boolean;
    /**
    * Whether display a Done button.
    */
    hasDoneButton?: boolean;
    /**
     * Disable the portal behavior. The children stay within it's parent DOM hierarchy
     * if `false`, The children will be put to document.body
     * @default false
     */
    disablePortal: boolean;
    /**
     * Describes the positioning strategy to use. By default, it is absolute,
     * which in the simplest cases does not require repositioning of the popper
     * If your reference element is in a fixed container, use the fixed strategy
     * @default 'absolute'
     */
    strategy?: PositioningStrategy;
    className?: string;
    style?: React.CSSProperties;
}
interface IntlProps {
    intl: IntlShape;
}
/**
* A date time picker component that allow user to pick or type a date/time.
*/
export declare const DatePicker: import("@emotion/styled").StyledComponent<Omit<DatePickerProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export {};
