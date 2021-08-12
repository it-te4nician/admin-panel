import React from "react";
import styles from './Table.module.css';
import classnames from 'classnames'
import {selectAllOrders, selectOrder} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {getOrdersListSelector, getOrdersSelector} from "./selectors/orders";


export const Header = () => {
    const ordersList = useSelector(getOrdersListSelector);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        if (event.target.checked) {
            const orderListNumbers = ordersList.map( x => x.number)
            dispatch(selectAllOrders(orderListNumbers));
        }
        else {
            dispatch(selectAllOrders([]));
        }
    }


    return (
        <div className={styles.table_header}>
            <div className={ classnames(styles.table_field, styles.table_field_center, styles.field_selection)}>
                {/*<div className={styles.table_checkbox}></div>*/}

                <input
                    onClick={handleClick}
                    type="checkbox"
                />

            </div>
            <div className={classnames(styles.table_field, styles.field_number)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__white, styles.field_size_standard)}>#</span>
            </div>
            <div className={classnames(styles.table_field, styles.table_header_field_ordered, styles.field_date)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__white, styles.custom_iconfont_arrow)}>Дата</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_status)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__white, styles.custom_iconfont_arrow)}>Статус</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_amount)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__white, styles.custom_iconfont_arrow)}>Позиций</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_price)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__white, styles.custom_iconfont_arrow)}>Сумма</span>
            </div>
            <div className={classnames(styles.table_field, styles.field_customer)}>
                <span className={classnames(styles.table_field_text, styles.table_field_text__white)}>ФИО покупателя</span>
            </div>
        </div>
    )
}

