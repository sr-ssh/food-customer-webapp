import React, { useState } from 'react';
import {toFarsiNumber} from '../../helpers/util'
import { Row, Col, Table } from 'react-bootstrap';
import commaNumber from 'comma-number'
import persianJs from 'persianjs/persian.min';


// Assets
import deleteIcon from '../../assets/images/factor/delete.svg'
import { Refresh } from '@material-ui/icons';
import { translate } from '../../helpers';


export const OrderList = (props) => {

    const {products,tax,setTotal,setTax,total} = props
    const [refresh, setRefresh] = useState(false)
    
    const handleQuantity = function(_, id, size){
        const numberInFactor = products.map(data=>{
            console.log(products)
            if(data && data._id===id && data.quantity && data.size === size){
                setTotal(total - data.price)
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
            <Row className="m-0 mt-3 p-0 px-3">
                <Col className="p-0">
                    <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <Table className="lh-lg p-0" borderless size="sm" responsive>
                            <tbody>
                                {
                                    products.map(data=>
                                        data && data._id && <tr>
                                        <td className="m-0 p-0 pb-1">
                                            <span className="fw-bold ms-4">{data?.name}</span>
                                        </td>
                                        <td className="text-center m-0 p-0 ps-3">
                                            <span className="fw-bold">{(data?.price && persianJs(commaNumber(data.price - data.discount)).englishNumber().toString()) || persianJs("0").englishNumber().toString()}</span>
                                            <span className="factor--text--details">تومان</span>
                                        </td>
                                        <td className="m-0 p-0">
                                            <span className="fw-bold">{toFarsiNumber(data?.quantity||0)}</span>
                                            <span className="factor--text--details">عدد</span>
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
        </>
    )
}