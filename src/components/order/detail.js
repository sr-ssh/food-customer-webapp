import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';

export const Detail = ({ detail, price }) => {

    console.log(price);
    return (
        <>
            <div className="div--container__detail">
                <Container>
                    <Row>
                        <Col className="col--container__title" >
                            {detail?.name}
                        </Col>
                        <Col className="col--container__price">{price && persianJs(price.price).englishNumber().toString() || 0}<span className="label--container__price fw-bold">تومان</span></Col>
                    </Row>
                    <Row className="row--container__detailtext">
                        <span className="span--container__detailtext">{detail?.description}</span>
                    </Row>
                </Container>
            </div>
        </>
    )
}