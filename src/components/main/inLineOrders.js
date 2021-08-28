import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
//icons
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions/orderAction';
import { InLineOrder } from './inLineOrder';
import { LoaderWhite } from '../base/loader-bg-white'




export const InLineOrders = () => {

    const [refresh, setRefresh] = useState(false)
    const dispatch = useDispatch()
    let { loading, orders: inLineOrders } = useSelector(state => state.getInLineOrders)


    useEffect(() => {
        
        let timerFunc = setTimeout(() => {
            dispatch(orderAction.getInLineOrders())
        }, 15000);

        return () => clearTimeout(timerFunc);
    })

    useEffect(() => {
        dispatch(orderAction.getInLineOrders())
    }, [refresh, dispatch])

    return (
        <>
            {/* {
                loading ?
                    <Container className="d-flex justify-content-center mt-6 ">
                        <div className="d-flex justify-content-center align-items-center">
                            <LoaderWhite />
                        </div>
                    </Container>
                    : */
                    inLineOrders &&
                    inLineOrders.map((order, index) =>
                        <InLineOrder order={order} key={index} refresh={refresh} setRefresh={setRefresh}/>
                    )
            }
        </>
    )
}