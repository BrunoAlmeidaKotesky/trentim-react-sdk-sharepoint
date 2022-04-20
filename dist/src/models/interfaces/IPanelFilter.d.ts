import type { IRow } from "./IGridView";
import type { Dispatch, SetStateAction } from 'react';
import type { ICommonPanel, IPanelChildrenPosition } from "./ICommonPanel";
import type { FilterComponent } from '../types/Common';
import type { RangeType } from "../../helpers/enums";
export interface FilterOption {
    key: string | number;
    text: string;
    data?: IRow;
    selected?: boolean;
    name?: string;
    isDateComponent?: boolean;
}
export interface IAvailableFilters {
    key: string;
    name: string;
    options: FilterOption[];
    enableMultiple: boolean;
    renderAs: FilterComponent;
}
interface IDateSliderCtx {
    fromDate: Date;
    toDate: Date;
    setFromDate: Dispatch<SetStateAction<Date>>;
    setToDate: Dispatch<SetStateAction<Date>>;
}
export interface IPanelFilterProps extends ICommonPanel<SelectedItemsMap>, IDateSliderCtx, IPanelChildrenPosition {
    setActualFilteredValues: Dispatch<SetStateAction<SelectedItemsMap>>;
    actualFilteredValues: SelectedItemsMap;
    filterOptionsMatrix: FilterOption[][];
    availableFilters: IAvailableFilters[];
}
declare type SelectedItemsValue = {
    rootItemKey: keyof IRow;
    itemKey: string | number;
    data: IRow;
    text: string;
    type?: RangeType;
    from?: Date;
    to?: Date;
};
export declare type SelectedItemsMap = Map<string, SelectedItemsValue>;
export {};
