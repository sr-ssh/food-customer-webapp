import React from 'react'
import { Modal, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { orderAction } from '../../actions'

export const CancelOrder = (props) => {
    const dispatch = useDispatch()

    let cancelLoading = useSelector(state => state.cancelOrder.loading)


    const formHandler = (e) => {
        e.preventDefault()
        dispatch(orderAction.cancelOrder(props.orderId))
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            centered
            className="order-serach-modal"
        >
            <Modal.Body className="add-product px-4">

                    <>
                        <Row>
                            <Col className="text-center">
                                <span className="">آیا از کنسل کردن این سفارش مطمئنید؟</span>
                            </Col>
                        </Row>
                        <Form onSubmit={formHandler} className="d-flex justify-content-around">
                            <Button className="fw-bold order-submit border-0 w-25 mt-4 text-light" onClick={e => props.onHide(false)} size="lg" block>
                                خیر
                            </Button>
                            {
                                cancelLoading ? (
                                    <Button className="fw-bold order-submit border-0 w-50 mt-4" size="lg" disabled>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        در حال حذف...
                                    </Button>
                                ) : (
                                    <Button className="fw-bold order-submit border-0 bg-danger text-light w-25 mt-4" size="lg" type="submit" block>
                                        بله
                                    </Button>
                                )
                            }
                        </Form>
                    </>
            </Modal.Body>
        </Modal>
    )
}
