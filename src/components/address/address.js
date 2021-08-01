import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Alert, Col, Spinner, Container } from 'react-bootstrap';

import { addressActions } from '../../actions';

// Components
import { Header } from '../base/header2'
import { OldAddress } from "./oldAddress"
import { NewAddress } from "./newAddress"

export const Address = () => {

    let alertMessage = useSelector(state => state.alert.message);
    let alerType = useSelector(state => state.alert.type);
    let addresses = useSelector(state => state.getAddresses);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addressActions.getAddresses())
    }, [])
    return (
        <>
            <div className="address--page">
                <Header title="آدرس" backLink="/" backtext="خانه" />
                {
                    alertMessage &&
                    <>

                        <Row className="justify-content-center text-center ">
                            <Alert variant={alerType}>
                                {alertMessage}
                            </Alert>
                        </Row>.

                    </>
                }
                {
                    addresses.loading ?
                        <Container>
                            <Row>
                                <Col className="col-3 mt-2 m-auto ">
                                    <Spinner className="m-auto d-block" animation="border" />
                                </Col>
                            </Row>
                        </Container>
                        : null
                }
                {
                    !addresses.loading ?
                        addresses.length > 0 ?
                            <OldAddress />
                            : <NewAddress />
                        : null
                }


            </div>
        </>


    )
}