import React from "react";
import styles from './Filters.module.css';

export const Filters = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className={styles.date_filter}>
                    <div className={styles.date_filter_title}>Дата оформления</div>
                    <div className={styles.date_filter_inputs}>
                        <div className={styles.date_filter_inputs_input_start_date}>
                            <span className={styles.date_filter_inputs_input_start_date_preposition}>с</span>
                            <div className={styles.date_filter_inputs_input_start_date_text}>20.01.2021</div>
                        </div>
                        <div className={styles.date_filter_inputs_input_end_date}>
                            <div className={styles.date_filter_inputs_input_end_date_preposition}>по</div>
                            <div className={styles.date_filter_inputs_input_end_date_text}>dd.mm.dddd</div>
                        </div>
                    </div>
                </div>

                <div className={styles.status_filter}>
                    <div className={styles.status_filter_title}>Статус заказа</div>
                    <div className={styles.status_filter_input}>
                        <div className={styles.status_filter_input_status_text}>Любой</div>
                        <div className={styles.status_filter_input_status_text_dropdown_button}></div>
                    </div>
                </div>
                <div className={styles.sum_filter}>
                    <div className={styles.sum_filter_title}>Сумма заказа</div>
                    <div className={styles.sum_filter_inputs}>
                        <div className={styles.sum_filter_inputs_input_start_sum}>
                            <div className={styles.sum_filter_inputs_input_start_sum_preposition}>от</div>
                            <div className={styles.sum_filter_inputs_input_start_sum_text}>500</div>
                        </div>
                        <div className={styles.sum_filter_inputs_input_end_sum}>
                            <div className={styles.sum_filter_inputs_input_end_sum_preposition}>до</div>
                            <div className={styles.sum_filter_inputs_input_end_sum_text}>Р</div>
                        </div>
                    </div>
                </div>
                <div className={styles.filter_accept_button}>Применить</div>
            </div>
            {/*<FilterStatusPopup />*/}
        </React.Fragment>
    )
}


const FilterStatusPopup = () => {
    return (
        <div className={styles.status_filter_popup}>
            <div className={styles.status_filter_popup_row}>
                <div className={styles.status_filter_popup_row_checkbox_selected}>
                    <span className={styles.custom_iconfont_checkbox}></span>
                </div>
                <div className={styles.status_filter_popup_row_title}>Новый</div>
            </div>
            <div className={styles.status_filter_popup_row}>
                <div className={styles.status_filter_popup_row_checkbox}>
                    <span className={styles.custom_iconfont_checkbox}></span>
                </div>
                <div className={styles.status_filter_popup_row_title}>Расчет</div>
            </div>
        </div>
    )
}