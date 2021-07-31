import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';


export const Detail = (props) => {
    console.log(props)
    return (
        <>
        <div className="div--container__detail">
            <Container>
                <Row>
                    <Col className="col--container__title" >
                         {props.detail.title}
                    </Col>
                    <Col className="col--container__price">۷۵ تومان</Col>
                </Row>
                <Row className="row--container__detailtext">
                    <span className="span--container__detailtext">{props.detail.description}</span>
                </Row>
            </Container>
        </div>
        </>
    )
}