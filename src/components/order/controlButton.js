import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import AddCircleIcon from '@material-ui/icons/AddCircle';


export const ControlButton = () => {
    return (
        <>
        <Container>
            <Row>
                <Col className="col--container__addButton" >
                  <div className="div--container__addButton"></div>
                </Col>
                <Col>
                  <div className="div--container__controltext">1</div>
                </Col>
                <Col className="col--container__minuseButton">
                  <div className="div--container__minuseButton"></div>
                </Col>
            </Row>
        </Container>
        </>
    )
}