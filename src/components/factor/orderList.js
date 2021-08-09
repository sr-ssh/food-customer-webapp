import React from 'react';
import {toFarsiNumber} from '../../helpers/util'
import { Row, Col, Table } from 'react-bootstrap';

// Assets
import deleteIcon from '../../assets/images/factor/delete.svg'


export const OrderList = (props) => {
    const {products,tax,setTotal,setTax,total} = props
    console.log(tax);
    const handleQuantity = function(_,id){
        const numberInFactor = products.map(data=>{
            if(data._id===id && data.quantity){
                setTotal(total - data.price)
                //the tax must be solved because of it's value is incorect ********************************************************************************************
                setTax((tax) - (data.price * (9 / 100)))
                return {...data,quantity:data.quantity - 1}
            }
            return {...data}
        })
        props.setProducts(numberInFactor)

    }
    console.log(tax);
    return (
        <>
            <Row className="m-0 mt-3 p-0">
                <Col className="p-0">
                    <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <Table className="lh-lg p-0" borderless size="sm">
                            <tbody>
                                {products.map(data=><tr>
                                    <td className="m-0 p-0 pb-1"><span className="fw-bold ms-5">{data?.name}</span></td>
                                    <td className="text-center m-0 p-0 ps-3"><span className="fw-bold">{toFarsiNumber(data?.price)}</span><span className="factor--text--details">تومان</span></td>
                                    <td className="m-0 p-0"><span className="fw-bold">{toFarsiNumber(data.quantity||0)}</span><span className="factor--text--details">عدد</span></td>
                                    <td className="m-0 p-0"><img onClick={(e)=>handleQuantity(e,data._id)} src={deleteIcon} className="" height="22px" alt="delete-icon" /></td>
                                </tr>)}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </>


    )
}