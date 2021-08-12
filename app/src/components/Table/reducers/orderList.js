import {DELETE_ORDERS} from "../../../reducers/types";

const {SELECT_ORDER} = require("../../../reducers/types");


const tableDataList = [
    {number: 1, date: '2021-08-03T13:31:24.927Z', status: 'new', statusText: 'Новый', amount: 2, price: 98001, customer: 'Филипов Степан Васильевич'},
    {number: 2, date: '2021-08-03T13:31:24.927Z', status: 'calculation', statusText: 'Расчет', amount: 2, price: 98002, customer: 'Филипов Степан Васильевич'},
    {number: 3, date: '2021-08-03T13:31:24.927Z', status: 'completed', statusText: 'Выполнен',  amount: 2, price: 98003, customer: 'Филипов Степан Васильевич'},
    {number: 4, date: '2021-08-03T13:31:24.927Z', status: 'canceled', statusText: 'Отменен',  amount: 2, price: 98004, customer: 'Филипов Степан Васильевич'},
    {number: 5, date: '2021-08-03T13:31:24.927Z', status: 'hold', statusText: 'Отложен',  amount: 2, price: 98005, customer: 'Филипов Степан Васильевич'},
    {number: 6, date: '2021-08-03T13:31:24.927Z', status: 'new', statusText: 'Новый',  amount: 2, price: 98006, customer: 'Филипов Степан Васильевич'},
    {number: 7, date: '2021-08-03T13:31:24.927Z', status: 'new', statusText: 'Новый',  amount: 2, price: 98007, customer: 'Филипов Степан Васильевич'},
    {number: 8, date: '2021-08-03T13:31:24.927Z', status: 'new', statusText: 'Новый',  amount: 2, price: 98008, customer: 'Филипов Степан Васильевич'}
]


export const ordersList = (state = tableDataList, { type, payload }) => {
    switch (type) {
        case DELETE_ORDERS:
            return state.filter((element) => !payload.includes(element.number));
        default:
            return state
    }
}