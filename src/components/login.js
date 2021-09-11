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
import {Counter} from './base/counter'

export const Login = () => {

    let [counting, setCounting] = useState(false)
    let alertMessage = useSelector(state => state.alert.message)
    let alerType = useSelector(state => state.alert.type)
    let loggingInLoading = useSelector(state => state.authentication.loading)

    const [validated, setValidated] = useState(false);
    const [mobileValited, setMobileValidated] = useState(false);
    const [inputs, setInputs] = useState({});
    let verificationCode = useSelector(state => state.verificationCode)
    let { family, mobile, code } = inputs;
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
    var
    persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
    fixNumbers = function (str)
    {
      if(typeof str === 'string')
      {
        for(var i=0; i<10; i++)
        {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    };

    const codeHandler = (e) => {
        e.preventDefault()
        if(!mobile)
            setMobileValidated(true)
        else{
            mobile && dispatch(userActions.verificationCode(fixNumbers(mobile)))
            setCounting(true)
        }
    }

    const handleChange = (e) => {
        let { id, value } = e.target;
        if (id === "mobile" && value) {
            console.log(value);
            // value = persianJs(value).toEnglishNumber().toString();
            value = fixNumbers(value);
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
            <div id="back-up" className=" ms-0 "></div>
            <div id="back-up-over" className=" ms-0 "></div>
            <div id="back-center" className="back-center-login ms-0 me-0"></div>
            <div id="back-down" className=" ms-0 "></div>
            <Container fluid className="p-0 d-flex flex-column ms-0">
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
                <Row className="p-0 m-0 mzLogo ms-0">
                    <Col className="">
                        <img className="logo" src={logo} alt="logo" width="190px" />
                    </Col>
                </Row>
                <Row className="ms-0 loginForm  ms-0">
                    <Col className="ms-0">
                        <Form className="d-flex flex-column justify-content-center  ms-0" noValidate onSubmit={formHandeler} >
                            <Row className="w-100 pe-2 inputs ms-0">
                                <Col xs={8} className="me-4">
                                    <Form.Group controlId="family" className="me-2">
                                        <Image src={userLogo} width="17px" className="mx-2 ms-0" />
                                        <Form.Label>نام و نام خانوادگی</Form.Label>
                                        <Form.Control className="form-input h-100 login-input ms-0" type="text"
                                            onChange={handleChange}
                                            isValid={family && validated && true}
                                            isInvalid={!family && validated && true}
                                            required
                                        />
                                        <Form.Control.Feedback className="me-2" type="invalid">نام و نام خانوادگی خود را وارد کنید!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="w-100 mt-4 pe-2 ms-0 inputs">
                                <Col xs={8} className="me-4">
                                    <Form.Group controlId="mobile" className="me-2">
                                        <Image src={mobileLogo} width="17px" className="mx-2 ms-0" />
                                        <Form.Label>موبایل</Form.Label>
                                        <Form.Control className="form-input h-100 login-input ms-0" type="number"
                                            pattern="\d*"
                                            onChange={handleChange}
                                            isValid={mobile && mobileValited && true}
                                            isInvalid={!mobile && mobileValited && true}
                                            required />
                                        <Form.Control.Feedback className="me-2" type="invalid">لطفا شماره موبایل خود را به حروف انگلیسی وارد کنید!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="w-100 pe-2 ms-0 inputs mt-4">
                                <Col xs={8} className="me-4">
                                    <Form.Group controlId="code" className="me-2">
                                        <Image src={codeLogo} width="17px" className="mx-2" />
                                        <Form.Label>کد تایید</Form.Label>
                                        <Form.Control className="form-input h-100 login-input ms-0" type="number"
                                            pattern="\d*"
                                            isValid={code && validated && true}
                                            isInvalid={!code && validated && true}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback className="me-2" type="invalid">کد تایید را وارد کنید!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col className="mt-4 col-3 pe-0 me-0 ms-0">
                                    <Button className="verification-btn mt-1" onClick={codeHandler} disabled={counting}>
                                        {!counting ? 
                                            verificationCode.loading ? <Spinner animation="border" size="sm" /> : "ارسال کد"
                                            : <Counter counting={counting} setCounting={setCounting} startpoint={2*60}/>   
                                        }
                                        {/* <Countdown date={Date.now() + 120000} renderer={({minutes, seconds}) => {
                                            return (
                                            <span>
                                            {minutes}:{seconds}
                                            </span>
                                        );}} autoStart={false} ref={countdownref}>
                                        </Countdown> */}
                                        </Button>
                                </Col>
                            </Row>

                            <Row className="justify-content-center">
                                <Col xs={7} className="justify-content-center ms-0">
                                    <Button className="login-btn w-100 me-auto d-block fs-6 ms-0 self-align-center" type="submit" >{loggingInLoading ? <Spinner animation="border" /> : "ورود"}</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

