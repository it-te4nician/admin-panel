import React from "react";
import {Search} from "./Search";
import styles from './FilterRow.module.css';


export const FilterRow = () => {
    return (
        <React.Fragment>
            <div className={styles.filter_wrapper}>
                {/*<div className={styles.filter_group__extended}>*/}
                <div className={styles.filter_group}>
                    <Search />
                    <div className={styles.filter_button}>
                        <span className={styles.custom_iconfont_filter}></span>
                        <span className={styles.filter_button_text}>Фильтры</span>
                    </div>
                    <div className={styles.unset_filters_button__hidden}>
                        <span className={styles.unset_filters_button_text}>Сбросить фильтры</span>
                    </div>
                </div>
                <div className={styles.loading_status}>
                    {/*<div className={styles.loading_status__hidden}>*/}
                    <span className={styles.custom_iconfont_loading}></span>
                    <span className={styles.loading_status_text}>Загрузка</span>
                </div>
            </div>
            {/*<Filters />*/}
        </React.Fragment>
    )
}