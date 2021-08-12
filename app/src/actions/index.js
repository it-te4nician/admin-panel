import {DELETE_ORDERS, SELECT_ALL_ORDERS, SELECT_ORDER} from "../reducers/types";


export const selectOrder = payload => ({
    type: SELECT_ORDER,
    payload
})

export const selectAllOrders = payload => ({
    type: SELECT_ALL_ORDERS,
    payload
})

export const deleteOrder = payload => ({
    type: DELETE_ORDERS,
    payload
})