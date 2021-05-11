/// <reference types="react" />
export declare type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;
export declare type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface GridInterface {
    children?: React.ReactNode;
    xs?: GridColumns;
    sm?: GridColumns;
    md?: GridColumns;
    lg?: GridColumns;
}
export interface ColumnInterface {
    children?: React.ReactNode;
    xs?: ColumnSpan;
    sm?: ColumnSpan;
    md?: ColumnSpan;
    lg?: ColumnSpan;
    newRow?: boolean;
}
