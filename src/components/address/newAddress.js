import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Form, Button, Spinner } from 'react-bootstrap';

import { Map } from "./map";
import { addressActions } from '../../actions/addressActions';



export const NewAddress = () => {

    const [address, setAddress] = useState({ lat: "", lng: "", address: "" });

    const dispatch = useDispatch()
    const addressData = useSelector(state => state.newAddress);

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(addressActions.newAddress(address));
    }
    return (
        <>
            <Container className="m-0 mx-auto new--address--container d-flex flex-column justify-content-between">
                <Row className="m-0 mt-2" style={{ height: "57vh" }}>
                    <Col className="p-0 " style={{ height: "57vh" }}>
                        <Card className="border-0 bg-transparent text-light" style={{ height: "57vh" }} >
                            <Card.Title className="pe-2 card--title--new--address">موقعیت تان را انتخاب  کنید</Card.Title>
                            <Card.Body className="p-0">
                                <Map />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="m-0 mb-auto   new--address--inputs">
                    <Col className="p-0 new--address--description-input">
                        <Form.Group controlId="description">
                            <Form.Label className="pe-2">لطفا آدرس دقیق را بنویسید</Form.Label>
                            <Card className="border-0 bg-transparent" >
                                <Form.Control as="textarea" name="description" className="new--address--exact--text-container" />
                            </Card>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="m-0 mt-3 w-100  ">
                    <Col className="col-12 px-0">
                        <Button type="submit" className="col-12 py-3 d-flex flex-row justify-content-center align-items-center btn--add--new--address btn--red--one" onClick={formHandler}>
                            {
                                addressData.loading ? <Spinner animation="grow" variant="light" />
                                    :
                                    <span className="ps-2">ادامه</span>
                            }
                        </Button>
                    </Col>
                </Row>

            </Container>
        </>


    )
}