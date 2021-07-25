import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';


export const Detail = () => {
    return (
        <>
        <div className="div--container__detail">
            <Container>
                <Row>
                    <Col className="col--container__title" >
                         رست بیف
                    </Col>
                    <Col className="col--container__price">۷۵ تومان</Col>
                </Row>
                <Row className="row--container__detailtext">
                    <span className="span--container__detailtext">خمیر مخصوص  به همراه سس سیر و ریحان و فیله ی گوساله</span>
                </Row>
            </Container>
        </div>
        </>
    )
}