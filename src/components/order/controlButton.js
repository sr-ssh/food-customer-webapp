import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Low_off from './../../assets/images/order/Low-off.svg'
import addIcon from './../../assets/images/main/add.svg'
import persianJs from 'persianjs/persian.min';

export const ControlButton = (props) => {

  const handleNumber = (_, i, id) => props.handleOrderList(props.index, i, id)
  const [notExist, setNotExist] = useState(false)


  useEffect(() => {
    if (props.activeOrder?.quantity === props.data?.supply)
      setNotExist(true)
    else
      setNotExist(false)
  }, [props.activeOrder])

  return (
    <>
      <Container className="mb-4 pb-4">
        <Row className="d-flex justify-content-center aling-items-center">
          {
            (props.data?.supply !== 0 && props.productSize === 'medium') ?
              <>
                {notExist ?
                  <Col>
                    <div className="d-flex justify-content-end align-items-center my-2">
                      <span className="fs-5 out--of--stock">ناموجود</span>
                    </div>
                  </Col> :
                  <Col className=" d-flex justify-content-end align-items-center " >
                    <div className="div--container__addButton ms-0" onClick={(e) => handleNumber(e, "+", props.data?._id)}>
                      <img src={addIcon} height="40px" alt="add-icon" />
                    </div>
                  </Col>
                }
                <Col className="col--container__productPrice" xs={3}>
                  <div className="div--container__controltext">
                    <span className="span--container__price">{props.activeOrder.quantity && persianJs(props.activeOrder.quantity).englishNumber().toString() || persianJs('0').englishNumber().toString()}</span>
                  </div>
                </Col>
                <Col>
                  <div className="div--container__minuseButton" onClick={(e) => handleNumber(e, "-", props.data?._id)} >
                    <img src={Low_off} height="40px" alt="minus-icon" />
                  </div>
                </Col>
              </>
              :
              <Col >
                <div className="d-flex justify-content-center align-items-center my-2">
                  <span className="fs-5 out--of--stock">ناموجود</span>
                </div>
              </Col>
          }
        </Row>
      </Container>
    </>
  )
}