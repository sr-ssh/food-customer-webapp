import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

// Assets
import deleteIcon from '../../assets/images/factor/delete.svg'


export const OrderList = () => {
    return (
        <>
            <Row className="m-0 mt-3 p-0">
                <Col className="p-0">
                    <div className="table-wrapper-scroll-y my-custom-scrollbar">
                        <Table className="lh-lg p-0" borderless size="sm">
                            <tbody>
                                <tr>
                                    <td className="m-0 p-0 pb-1"><span className="fw-bold ms-5">رست بیف</span></td>
                                    <td className="text-center m-0 p-0 ps-3"><span className="fw-bold">75</span><span className="factor--text--details">تومان</span></td>
                                    <td className="m-0 p-0"><span className="fw-bold">2</span><span className="factor--text--details">عدد</span></td>
                                    <td className="m-0 p-0"><img src={deleteIcon} className="" height="22px" alt="delete-icon" /></td>
                                </tr>
                                <tr>
                                    <td className="m-0 p-0 pb-1"><span className="fw-bold ms-5">پپرونی</span></td>
                                    <td className="text-center m-0 p-0 ps-3"><span className="fw-bold">60</span><span className="factor--text--details">تومان</span></td>
                                    <td className="m-0 p-0"><span className="fw-bold">1</span><span className="factor--text--details">عدد</span></td>
                                    <td className="m-0 p-0"><img src={deleteIcon} className="" height="22px" alt="delete-icon" /></td>
                                </tr>
                                <tr>
                                    <td className="m-0 p-0 pb-1"><span className="fw-bold ms-5">نوشابه کوکا</span></td>
                                    <td className="text-center m-0 p-0 ps-3"><span className="fw-bold">20</span><span className="factor--text--details">تومان</span></td>
                                    <td className="m-0 p-0"><span className="fw-bold">2</span><span className="factor--text--details">عدد</span></td>
                                    <td className="m-0 p-0"><img src={deleteIcon} className="" height="22px" alt="delete-icon" /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </>


    )
}