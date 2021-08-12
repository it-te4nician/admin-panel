import React from "react";
import styles from './Table.module.css';
import classnames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {getOrdersSelector} from "./selectors/orders";
import {deleteOrder, selectAllOrders} from "../../actions";


export const Footer = () => {
    const selectedOrders = useSelector(getOrdersSelector);
    const dispatch = useDispatch();

    const handleDeleteElements = (event) => {
        dispatch(deleteOrder(selectedOrders));
        dispatch(selectAllOrders([]));
    }

    return (

        <div className={styles.table_footer}>
            <div className={styles.table_footer_plug_element}>
                <div className={styles.selected_orders}>
                    Выбрано записей:
                    <div className={styles.selected_orders_number}>{selectedOrders.length}</div>
                </div>
                <div className={styles.change_order_status}><span className={styles.custom_iconfont_edit}></span>Изменить статус</div>
                <div className={styles.remove_element} onClick={handleDeleteElements}><span className={styles.custom_iconfont_bin}></span>Удалить</div>
            </div>
            <div className={styles.pagination_block}>
                <div className={classnames(styles.pagination, styles.pagination_selected)}>1</div>
                <div className={styles.pagination}>2</div>
                <div className={styles.pagination}>3</div>
                <div className={styles.pagination}>...</div>
                <div className={styles.pagination}>18</div>
                <div className={styles.pagination}>#</div>
            </div>
        </div>
    )
}

