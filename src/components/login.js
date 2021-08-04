import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/userActions';

import { Spinner } from 'react-bootstrap'

//css
import logo from './../assets/images/base/happy-pizza.png'
import userLogo from './../assets/images/login/user.svg'
import codeLogo from './../assets/images/login/password.svg'
import mobileLogo from './../assets/images/login/phone.svg'
import { Container, Button, Form, Row, Col, Image, Alert } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';


export const Login = () => {

    let alertMessage = useSelector(state => state.alert.message)
    let alerType = useSelector(state => state.alert.type)
    let loggingInLoading = useSelector(state => state.authentication.loading)

    const [validated, setValidated] = useState(false);
    const [mobileValited, setMobileValidated] = useState(false);
    const [inputs, setInputs] = useState({});
    let verificationCode = useSelector(state => state.verificationCode)
    const { family, mobile, code } = inputs;
    const dispatch = useDispatch()

    const mobileValidation = (value) => {
        var phoneno = /^\d{11}$/;
        if (value.match(phoneno))
            return value
        else {
            setMobileValidated(true)
            return false
        }

    }

    const codeHandler = (e) => {
        e.preventDefault()
        mobile && dispatch(userActions.verificationCode(mobile))
        console.log(inputs.mobile && mobileValited && validated && true)
        console.log(!(inputs.mobile && mobileValited && validated && true))
    }

    const handleChange = (e) => {
        let { id, value } = e.target;
        if (id === "mobile" && value) {
            value = persianJs(value).toEnglishNumber().toString();
            value = mobileValidation(value)
        }

        setInputs(inputs => ({ ...inputs, [id]: value }));
    }

    const formHandeler = e => {
        e.preventDefault();
        if (mobile && code && family)
            dispatch(userActions.login(inputs));
        else
            setValidated(true);
    }

    useEffect(() => {
        dispatch(userActions.appInfo())
    }, [dispatch])

    return (
        <>
            <div id="back-up"></div>
            <div id="back-center" className="back-center-login"></div>
            <div id="back-down"></div>
            <Container fluid className="p-0 d-flex flex-column">
                {
                    mobile &&
                    alertMessage &&
                    <>
                        <div className="modal-backdrop show"></div>
                        <Row className="justify-content-center text-center ">
                            <Alert variant={alerType}>
                                {alertMessage}
                            </Alert>
                        </Row>
                    </>
                }
                <Row className="p-0 m-0 mzLogo">
                    <Col className="">
                        <img className="logo" src={logo} alt="logo" width="190px" />
                    </Col>
                </Row>
                <Row className="ms-0 loginForm">
                    <Col>
                        <Form className="d-flex flex-column justify-content-center" noValidate onSubmit={formHandeler} >
                            <Row className="w-100 me-3 pe-2 inputs">
                                <Col xs={8}>
                                    <Form.Group controlId="family" >
                                        <Image src={userLogo} width="17px" className="mx-2" />
                                        <Form.Label>نام و نام خانوادگی</Form.Label>
                                        <Form.Control className="form-input h-100 login-input" type="text"
                                            onChange={handleChange}
                                            isValid={family && validated && true}
                                            isInvalid={!family && validated && true}
                                            required
                                        />
                                        <Form.Control.Feedback className="me-2" type="invalid">نام و نام خانوادگی خود را وارد کنید!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="w-100 me-3 mt-4 pe-2 inputs">
                                <Col xs={8}>
                                    <Form.Group controlId="mobile" >
                                        <Image src={mobileLogo} width="17px" className="mx-2" />
                                        <Form.Label>موبایل</Form.Label>
                                        <Form.Control className="form-input h-100 login-input" type="number"
                                            onChange={handleChange}
                                            isValid={mobile && mobileValited && true}
                                            isInvalid={!mobile && mobileValited && true}
                                            required />
                                        <Form.Control.Feedback className="me-2" type="invalid">شماره موبایل صحیح نیست!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="w-100 me-3 pe-2 inputs mt-4">
                                <Col xs={8} className="ms-0">
                                    <Form.Group controlId="code">
                                        <Image src={codeLogo} width="17px" className="mx-2" />
                                        <Form.Label>کد تایید</Form.Label>
                                        <Form.Control className="form-input h-100 login-input" type="number"
                                            isValid={code && validated && true}
                                            isInvalid={!code && validated && true}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback className="me-2" type="invalid">کد تایید را وارد کنید!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col className="mt-4 col-4 pe-0 me-0">
                                    <Button className="verification-btn mt-1" onClick={codeHandler}>{verificationCode.loading ? <Spinner animation="border" size="sm" /> : "ارسال کد"}</Button>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">
                                <Col xs={7} className="justify-content-center">
                                    <Button className="login-btn w-100 me-auto d-block fs-6 self-align-center" type="submit" >{loggingInLoading ? <Spinner animation="border" /> : "ورود"}</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

