import React from 'react'
import { Modal, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { orderAction } from '../../actions'

export const CancelOrder = (props) => {
    const dispatch = useDispatch()

    let cancelLoading = useSelector(state => state.cancelOrder.loading)


    let formHandler = (value) => {
        if (value === true) {
            dispatch(orderAction.cancelOrder(props.orderId))
            dispatch(orderAction.getInLineOrders())
        }
        props.onHide(false)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            centered
            className="order-serach-modal "
        >
            <Modal.Body className="cancel--order--modal px-4 py-4">

                <>
                    <Row>
                        <Col className="text-center pt-2">
                            <span className="fw-bold">آیا از <span className="danger--color--text">کنسل</span> کردن سفارش مطمئن هستید؟</span>
                        </Col>
                    </Row>
                    <Form className="d-flex justify-content-around">
                        {
                            cancelLoading ? (
                                <Button className="cancel--order-but success--color border-0 w-100 mt-4 ms-1" size="lg" disabled>
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
                                <Button className="border-0 cancel--order-but py-3 success--color text-light w-100 mt-4 ms-2" size="lg" type="submit" block onClick={e => formHandler(true)}>
                                    بله
                                </Button>
                            )
                        }
                        <Button className="border-0 cancel--order-but danger--color w-100 mt-4 text-light me-2" onClick={e => formHandler(false)} size="lg" block>
                            خیر
                        </Button>
                    </Form>
                </>
            </Modal.Body>
        </Modal>
    )
}
