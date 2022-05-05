import * as React from 'react';
import type { IGridListProps, BaseType, IGridViewRefHandler } from '../models/interfaces/IGridView';
declare module "react" {
    function forwardRef<T, P = {}>(render: (props: P, ref: React.Ref<T>) => React.ReactElement | null): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
/** An enhanced version of the `DetailsList` component, with automatic filtering, sorting, grouping, properties searching with many other features to customize.
 *
 * The component can also be rendered as a collection of `Card` components, with the same functionalities.
 */
export declare const GridView: <T extends BaseType>(props: IGridListProps<T> & React.RefAttributes<IGridViewRefHandler<T>>) => React.ReactElement | null;
