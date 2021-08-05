import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Detail = ({ detail, productSize }) => {

    // get product size & price base on productSize that passed from Props
    let productPrice = detail?.size.filter(item => { if (item.name == productSize) { return { item } } })

    // reduce productPrice to get the price of product from object in array
    productPrice = productPrice?.reduce((total, currentValue) => {
        return currentValue.price
    }, [])

    return (
        <>
            <div className="div--container__detail">
                <Container>
                    <Row>
                        <Col className="col--container__title" >
                            {detail?.name}
                        </Col>
                        <Col className="col--container__price">{productPrice}<span className="label--container__price fw-bold">تومان</span></Col>
                    </Row>
                    <Row className="row--container__detailtext">
                        <span className="span--container__detailtext">{detail?.description}</span>
                    </Row>
                </Container>
            </div>
        </>
    )
}