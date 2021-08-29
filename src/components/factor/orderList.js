import React, { useState } from 'react';
import {toFarsiNumber} from '../../helpers/util'
import { Row, Col, Table, Card } from 'react-bootstrap';
import commaNumber from 'comma-number'
import persianJs from 'persianjs/persian.min';


// Assets
import deleteIcon from '../../assets/images/factor/delete.svg'
import { Refresh } from '@material-ui/icons';
import { translate } from '../../helpers';


export const OrderList = (props) => {

    const {products,tax,setTotal,setTax,total, setDiscounts, discounts} = props
    const [refresh, setRefresh] = useState(false)
    
    const handleQuantity = function(_, id, size){
        const numberInFactor = products.map(data=>{
            console.log(products)
            if(data && data._id===id && data.quantity && data.size === size){
                setTotal(total - data.price)
                setDiscounts(discounts - data.discount)
                setTax(tax - data.price * (9 / 100))
                setRefresh(!refresh)
                console.log(data)
                if(!(data.quantity - 1))
                    return null
                return {...data,quantity:data.quantity - 1}
            }
            return {...data}
        })
        props.setProducts(numberInFactor)
    }
    
    
    return (
        <>
        <Card className="mt-2 mx-2 main-card-order border-0 mb-2">
            <Card.Body className="main-card-order p-1 pb-0 bg-white orderdetails--flex">
            <Row className="m-0 mt-1 p-0 px-3">
                <Col className="p-0">
                    <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <Table className="p-0" borderless size="sm" responsive>
                            <thead>
                                <tr>
                                    <th className="fw-bold fs-7">سفارش</th>
                                    <th className="fw-bold text-center">قیمت <span className="order--detailes--order--cards fs-8">(تومان)</span></th>
                                    <th className="fw-bold text-center">تعداد</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(data=>
                                        data && data._id && <tr>
                                        <td className="m-0 p-0 pb-1">
                                            <span className="fw-bold ms-4">{data?.name}</span>
                                        </td>
                                        <td className="text-center m-0 p-0 ps-3">
                                            <span className="fw-bold">{(data?.price && persianJs(commaNumber(data.price - data.discount)).englishNumber().toString()) || persianJs("0").englishNumber().toString()}</span>
                                        </td>
                                        <td className="m-0 p-0 text-center">
                                            <span className="fw-bold">{toFarsiNumber(data?.quantity||0)}</span>
                                        </td>
                                        <td className="m-0 p-0">
                                            <img onClick={(e)=>handleQuantity(e,data._id, data.size)} src={deleteIcon} className="" height="22px" alt="delete-icon" /></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
            </Card.Body>
        </Card>
        </>
    )
}