import React from "react";
import styles from './Search.module.css';


export const Search = () => {
    //
    // const searchBarText = useSelector(getSearchBarSelector);
    // const ordersList = useSelector(getOrdersListSelector);
    //
    // const dispatch = useDispatch();
    //
    // const changeInputHandler = event => {
    //     event.preventDefault()
    //     dispatch(setSearchBarText(event.target.value))
    //     dispatch(filterByNumberOrSurname(ordersList, event.target.value))
    // }

    return (
        <form className={styles.search}>
            <span className={styles.custom_iconfont_search}></span>
            <input
                type="search"
                className={styles.search_text}
                name="title"
                value=""
                placeholder="Номер заказа или ФИО"
                // onChange=
            />
        </form>
    );
}
