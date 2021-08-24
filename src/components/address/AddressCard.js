import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// Assets
import editIcon from '../../assets/images/main/edit.svg'
import deleteIcon from '../../assets/images/address/delet.svg'

import { history } from '../../helpers';


export const AddressCard = ({ address, setAddress, selected, setDeleteAddressModal }) => {

    const editAddress = (address) => {
        history.push({
            pathname: '/address/edit',
            state: { address }
        })
    }
    let deleteAddressHandler = () => {
        setDeleteAddressModal(true)
    }
    return (

        <Col onClick={() => setAddress(address)}>
            <Card className={`m-0 mx-2 mt-4 bg-white old--address-card lh-lg  ${selected ? "address--red--border" : null}`} >
                <Card.Body className="px-2 py-2 text-gray">
                    <Row className="px-2 d-flex flex-column  ">
                        <Row className="mt-1 d-flex flex-nowrap flex-row">
                            <Col className="col-12">
                                <Card.Text>
                                    {address.address}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="justify-content-end ms-0 ps-0">
                            <Col className="ps-0 me-1 col-auto d-flex justify-content-end" onClick={() => editAddress(address)}>
                                <Card.Link>
                                    <img src={editIcon} height="35px" alt="edit-icon" />
                                </Card.Link>
                            </Col>
                            <Col className="ps-0 me-1 col-auto d-flex justify-content-end" onClick={deleteAddressHandler}>
                                <Card.Link>
                                    <img src={deleteIcon} height="35px" alt="edit-icon" />
                                </Card.Link>
                            </Col>
                        </Row>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}