import { combineReducers } from "redux";
import {ordersList} from "../components/Table/reducers/orderList";
import {selectedOrders} from "../components/Table/reducers/selectedOrders";



export const rootReducer = combineReducers({
    ordersList,
    selectedOrders
})
