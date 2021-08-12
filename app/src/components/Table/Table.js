import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Row} from "./Row";
import {useSelector} from "react-redux";
import {getOrdersListSelector} from "./selectors/orders";


export const Table = () => {
    const ordersList = useSelector(getOrdersListSelector);

    const renderedRows = ordersList.map(item => {
        return (
            <Row
                number={item.number}
                date={item.date}
                status={item.status}
                statusText={item.statusText}
                amount={item.amount}
                price={item.price}
                customer={item.customer}
                key={item.number}
            />
        )
    });

    return (
        <React.Fragment>
            <Header/>
            {renderedRows}
            <Footer/>
        </React.Fragment>


    )
}