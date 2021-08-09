import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { history } from '../../helpers'
import persianJs from 'persianjs/persian.min';

export const Dialog = (props) => {
    let price;
    (() => price = props?.basket?.map(item => item.number * item.price).reduce((a, b) => a + b, 0))()
    const handleBill = () => {
        console.log(props)
        if (props.basket.length > 0) {
            history.push({
                pathname: '/bill',
                state: { data: props.basket }
            })
        }
    }
    return (
        <>
            <div className="div--container__dialog-order">
                <Container onClick={handleBill}>
                    <Row>
                        <Col className="col--container__dialog-order">
                            <span className="span--container__dialogo-order" >مشاهده فاکتور</span>
                        </Col>
                        <Col className="col--container__dialog-order">
                            <span className="span--container__dialogo-order" >{(price && persianJs(price).englishNumber().toString()) || persianJs("0").englishNumber().toString()} تومان</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}