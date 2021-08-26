import React, { useEffect } from 'react'
import { Modal, Alert, Button, Col, Row, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

// Components
import { LoaderWhite } from '../base/loader-bg-white'

// Actions
import { addressActions, alertActions } from '../../actions/';



export const DeleteAddress = (props) => {

    const dispatch = useDispatch()
    const addressData = useSelector(state => state.deleteAddress);

    let deleteAddressHandler = () => {
        dispatch(addressActions.deleteAddress({ address: props.address.address, GPS: props.address.GPS }));
        props.onHide(false)
    }

    return (
        <>
            <Modal
                {...props}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
                dialogClassName="modal--delete--address"
                className=" me-4 "
                aria-labelledby="delete--address--modal"
            >

                <Modal.Body className="delete--address-modalBody">
                    <Row className="d-flex flex-column align-items-center">
                        <Row className="px-4">
                            <Col>
                                <span className="fw-bold fs-7">آیا میخواهید این آدرس را پاک کنید؟</span>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <Card className="card-delete-address">
                                    <Card.Body>
                                        <span className="fw-bold fs-6">{props.address.address}</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {addressData.loading ?
                                    <>
                                        <Button className="border-0 cancel--order-but success--color text-light w-100  ms-2" size="lg" type="submit" block disabled>
                                            <LoaderWhite />
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <Button className="border-0 cancel--order-but success--color text-light w-100  ms-2" size="lg" type="submit" block onClick={deleteAddressHandler}>

                                            <span>
                                                بله
                                            </span>
                                        </Button>

                                    </>
                                }
                            </Col>
                            <Col>
                                <Button className="border-0 cancel--order-but danger--color w-100  text-light " size="lg" block onClick={e => props.onHide(false)}>
                                    <span>
                                        خیر
                                    </span>
                                </Button>
                            </Col>
                        </Row>
                    </Row>
                </Modal.Body>
            </Modal>

        </>
    )
}
