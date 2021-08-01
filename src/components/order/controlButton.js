import React,{useState} from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import Low_off from './../../assets/images/order/Low-off.svg'
import addIcon from './../../assets/images/main/add.svg'


export const ControlButton = (props) => {
  const [number,setNumber] = useState(0) 

  const handleAddNumber = ()=>{
    setNumber(number + 1)
    props.setOrderList({...props.data,number : number + 1,price:(number + 1) * (props.data.price)})
  }
  const handleMinusNumber = ()=>{
    setNumber(number - 1)
    props.setOrderList({...props.data,number : number - 1,price:(number - 1) * (props.data.price)})
  }

 console.log(props)
 
    return (
        <>
        <Container>
            <Row>
                <Col className="col--container__addButton" >
                  <div className="div--container__addButton" onClick={handleAddNumber}>
                  <img src={addIcon} height="40px" alt="add-icon" />
                  </div>
                </Col>
                <Col className="col--container__productPrice" xs={3}>
                  <div className="div--container__controltext">
                    <span className="span--container__price">{number}</span>
                  </div>
                </Col>
                <Col className="col--container__minuseButton">
                  <div className="div--container__minuseButton" onClick={handleMinusNumber}>
                  <img src={Low_off} height="40px" alt="minus-icon" />
                  </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}