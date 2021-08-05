import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addressActions } from '../../actions';

// Assets
import editIcon from '../../assets/images/main/edit.svg'


export const AddressCard = ({address, setAddress, selected}) => {


    return (
        
        <Col onClick={() => setAddress(address)}>
            <Card className={`m-auto mt-4 bg-white old--address-card lh-lg pb-2  ${selected ? "address--red--border" : null}`} >
                <Card.Body className="p-0 pe-2 py-2 text-gray">
                    <Row className="pe-2">
                        <Row className="mt-2 d-flex flex-nowrap align-items-center">
                            <Col className="col-10">
                                <Card.Text>
                                    {address.address}
                                </Card.Text>
                            </Col>
                            <Col className="ps-0 me-1 col-auto d-flex justify-content-end">
                                <Card.Link>
                                    <img src={editIcon} height="35px" alt="edit-icon" />
                                </Card.Link>
                            </Col>
                        </Row>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}