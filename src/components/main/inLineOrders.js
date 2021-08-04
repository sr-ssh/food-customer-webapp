import React, { useEffect } from 'react';

//icons
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions/orderAction';
import { InLineOrder } from './inLineOrder';





export const InLineOrders = () => {

    const dispatch = useDispatch()
    const inLineOrders = useSelector(state => state.getInLineOrders.orders)
    
    useEffect(() => {
        dispatch(orderAction.getInLineOrders())
    }, [dispatch])

    return (
        <>
            {
                inLineOrders &&
                inLineOrders.map((order, index) => 
                    <InLineOrder order={order} key={index}/>
                )
            }
        </>
    )
}