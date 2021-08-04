import React,{useState} from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import {history} from '../../helpers'



export const Dialog = (props) => {
    let price;
    (()=> price = props.orderList?.number * props.orderList?.price)()

    const handleBill = function(){
      history.push({
        pathname: '/bill',
        state: { data: props.data }
      })

    }
    return (
        <>
        <div className="div--container__dialog-order">
            <Container  onClick={handleBill}>
                <Row>
                    <Col className="col--container__dialog-order">
                        <span className="span--container__dialogo-order" >مشاهده فاکتور</span>
                    </Col>
                    <Col className="col--container__dialog-order">
                    <span className="span--container__dialogo-order" >{price} تومان</span>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}