import React,{useState} from 'react';
import { Container, Row ,Col} from 'react-bootstrap';



export const Dialog = (props) => {
    return (
        <>
        <div className="div--container__dialog-order">
            <Container>
                <Row>
                    <Col className="col--container__dialog-order">
                        <span className="span--container__dialogo-order" >مشاهده فاکتور</span>
                    </Col>
                    <Col className="col--container__dialog-order">
                    <span className="span--container__dialogo-order" >{props.orderList.price} تومان</span>
                    </Col>

                </Row>
            </Container>
        </div>
        </>
    )
}