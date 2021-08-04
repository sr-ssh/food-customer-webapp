import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';


export const Detail = (props) => {
    return (
        <>
        <div className="div--container__detail">
            <Container>
                <Row>
                    <Col className="col--container__title" >
                         {props.detail?.name}
                    </Col>
                    <Col className="col--container__price">{props.detail?.size?.[0]?.price}</Col>
                </Row>
                <Row className="row--container__detailtext">
                    <span className="span--container__detailtext">{props.detail?.description}</span>
                </Row>
            </Container>
        </div>
        </>
    )
}