import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Detail = ({ detail, price }) => {

    return (
        <>
            <div className="div--container__detail">
                <Container>
                    <Row>
                        <Col className="col--container__title" >
                            {detail?.name}
                        </Col>
                        <Col className="col--container__price">{price?.price}<span className="label--container__price fw-bold">تومان</span></Col>
                    </Row>
                    <Row className="row--container__detailtext">
                        <span className="span--container__detailtext">{detail?.description}</span>
                    </Row>
                </Container>
            </div>
        </>
    )
}