import React from "react";
import styles from './Table.module.css';
import classnames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {getOrdersSelector} from "./selectors/orders";
import {selectOrder} from "../../actions";


export const Row = ({number, date, status, statusText, amount, price, customer}) => {
    const selectedOrders = useSelector(getOrdersSelector);
    const isChecked = selectedOrders.includes(number)

    const dispatch = useDispatch();

    const statusesView = {
        'new': styles.custom_iconfont_arrow_dot__new,
        'calculation': styles.custom_iconfont_arrow_dot__calculation,
        'completed': styles.custom_iconfont_checkbox__completed,
        'hold': styles.custom_iconfont_arrow_dot__hold,
        'canceled': styles.custom_iconfont_abort__canceled,
    }

    const handleClick = (event) => {
        dispatch(selectOrder(number));
    }

    return (

        <div className={styles.table_row}>
            <div
                className={classnames(styles.table_field, styles.table_field_center, styles.field_selection)}
            >
                {/*<div className={classnames(styles.table_checkbox)}></div>*/}
                <input
                    onClick={handleClick}
                    type="checkbox"
                    checked={isChecked}
                />
            </div>
            <div className={classnames(styles.table_field, styles.field_number)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__black)}>{number}</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_date)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__black)}>{date}</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_status)}>
                    <span className={classnames(styles.table_field_text, statusesView[status])}>{statusText}</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_amount)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__black)}>{amount}</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_price)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__black)}>{price} Р</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_customer)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__black)}>{customer}</span>
            </div>
        </div>
    )
}