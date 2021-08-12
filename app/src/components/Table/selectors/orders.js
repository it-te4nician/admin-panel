import { createSelector } from 'reselect';

export const getOrdersSelector = ({ selectedOrders }) => selectedOrders;
export const getOrdersListSelector = ({ ordersList }) => ordersList;

export const getOrdersCount = createSelector(
    getOrdersSelector,
    selectedOrders => selectedOrders.length
);