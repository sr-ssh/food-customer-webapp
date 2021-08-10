import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Low_off from './../../assets/images/order/Low-off.svg'
import addIcon from './../../assets/images/main/add.svg'
import persianJs from 'persianjs/persian.min';

export const ControlButton = (props) => {

  const handleNumber = (_, i, id) => props.handleOrderList(props.index, i, id)

  return (
    <>
      <Container>
        <Row>
          <Col className="col--container__addButton" >
            <div className="div--container__addButton" onClick={(e) => handleNumber(e, "+", props.data?._id)}>
              <img src={addIcon} height="40px" alt="add-icon" />
            </div>
          </Col>
          <Col className="col--container__productPrice" xs={3}>
            <div className="div--container__controltext">
              <span className="span--container__price">{props.activeOrder.quantity && persianJs(props.activeOrder.quantity).englishNumber().toString() || persianJs('0').englishNumber().toString()}</span>
            </div>
          </Col>
          <Col className="col--container__minuseButton">
            <div className="div--container__minuseButton" onClick={(e) => handleNumber(e, "-", props.data?._id)} >
              <img src={Low_off} height="40px" alt="minus-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}