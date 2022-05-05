import * as React from 'react';
import type { IGridListProps, IRow, TColumn, BaseType, IGridViewRefHandler } from '../../models/interfaces/IGridView';
import type { IListOptionsProps } from '../../models/interfaces/IListOptions';
import type { IPanelFilterProps } from '../../models/interfaces/IPanelFilter';
import type { IGroupPanel } from '../../models/interfaces/IGroupPanel';
import type { IGroup } from '@fluentui/react/lib/DetailsList';
declare module "react" {
    function forwardRef<T, P = {}>(render: (props: P, ref: React.Ref<T>) => React.ReactElement | null): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
/** TO-DO: Use `useReducer` with context for better code splitting. */
export declare function useGridController<T extends BaseType>(props: IGridListProps<T>, ref: React.ForwardedRef<IGridViewRefHandler<T>>): {
    state: {
        actualRows: IRow<T>[];
        visibleCols: TColumn<T>[];
        filterPanelConfig: IPanelFilterProps;
        groupPanelConfig: IGroupPanel;
        isFilterPanelOpen: boolean;
        isGroupPanelOpen: boolean;
        listConfig: IListOptionsProps<any>;
        shouldRenderCard: boolean;
        groups: IGroup[];
    };
    handlers: {
        onItemClick: (item: IRow<T>) => void;
    };
    JSX: {
        CardsList: React.ReactNode[];
    };
};
