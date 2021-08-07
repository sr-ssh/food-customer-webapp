import React,{useState} from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import Low_off from './../../assets/images/order/Low-off.svg'
import addIcon from './../../assets/images/main/add.svg'


export const ControlButton = (props) => {

  const handleNumber = (_,i)=> props.handleOrderList(props.index,i)

 
    return (
        <>
        <Container>
            <Row>
                <Col className="col--container__addButton" >
                  <div className="div--container__addButton" onClick={(e)=>handleNumber(e,"+")}>
                  <img src={addIcon} height="40px" alt="add-icon" />
                  </div>
                </Col>
                <Col className="col--container__productPrice" xs={3}>
                  <div className="div--container__controltext">
                    <span className="span--container__price">{props.number}</span>
                  </div>
                </Col>
                <Col className="col--container__minuseButton">
                  <div className="div--container__minuseButton"onClick={(e)=>handleNumber(e,"-")} >
                  <img src={Low_off} height="40px" alt="minus-icon" />
                  </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}