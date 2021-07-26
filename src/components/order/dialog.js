import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';


export const Dialog = () => {
    return (
        <>
        <div className="div--container__dialog-order">
            <Container>
                <Row>
                    <Col className="col--container__dialog-order">
                        <span className="span--container__dialogo-order" >مشاهده فاکتور</span>
                    </Col>
                    <Col className="col--container__dialog-order">
                    <span className="span--container__dialogo-order" >۲۳۰ تومان</span>
                    </Col>

                </Row>
            </Container>
        </div>
        </>
    )
}