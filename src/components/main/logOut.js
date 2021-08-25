import React from 'react'
import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import { userActions } from '../../actions'

export const LogOut = (props) => {

    const formHandler = (e) => {
        e.preventDefault()
        userActions.logout()
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
                            <span className="fw-bold">آیا از خارج شدن خود مطمئن هستید؟</span>
                        </Col>
                    </Row>
                    <Form onSubmit={formHandler} className="d-flex justify-content-around">

                        <Button className="border-0 cancel--order-but py-3 success--color text-light w-100 mt-4 ms-2" size="lg" type="submit" block>
                            بله
                        </Button>
                        <Button className="border-0 cancel--order-but danger--color w-100 mt-4 text-light me-2" onClick={e => props.onHide(false)} size="lg" block>
                            خیر
                        </Button>
                    </Form>
                </>
            </Modal.Body>
        </Modal>
    )
}
