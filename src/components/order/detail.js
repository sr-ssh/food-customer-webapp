import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';
import commaNumber from 'comma-number'


export const Detail = ({ detail, price }) => {

    return (
        <>
            <div className="div--container__detail">
                <Container>
                    <Row>
                        <Col className="col--container__title fw-bold fs-5" >
                            {detail?.name}
                        </Col>
                        <Col className="col--container__price fs-5">{price && persianJs(commaNumber(price.price)).englishNumber().toString() || 0}<span className="label--container__price fw-bold">تومان</span></Col>
                    </Row>
                    <Row className="row--container__detailtext px-4 mx-2">
                        <span className="span--container__detailtext fw-bold">{detail?.description}</span>
                    </Row>
                </Container>
            </div>
        </>
    )
}