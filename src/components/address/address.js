import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Alert, Container } from 'react-bootstrap';

import { addressActions } from '../../actions';
import { LoaderWhite } from '../base/loader-bg-white'
// Components
import { Header } from '../base/header2'
import { OldAddress } from "./oldAddress"
import { NewAddress } from "./newAddress"

export const Address = () => {

    const [newAddress, setNewAddress] = useState(false)
    let alertMessage = useSelector(state => state.alert.message);
    let alerType = useSelector(state => state.alert.type);
    let addresses = useSelector(state => state.getAddresses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addressActions.getAddresses())
    }, [dispatch])

    return (
        <>
            <div className="address--page">
                <Header title="آدرس" backLink="/main" backtext="خانه" />
                {
                    alertMessage &&
                    <>
                        <Row className="justify-content-center text-center ">
                            <Alert variant={alerType}>
                                {alertMessage}
                            </Alert>
                        </Row>
                    </>
                }
                {
                    addresses.loading ?
                        <Container className="d-flex justify-content-center align-items-center mt-4">
                            <LoaderWhite />
                        </Container>
                        : null
                }
                {
                    !addresses.loading ?
                        addresses.addresses?.length ?
                            !newAddress ?
                                <OldAddress addresses={addresses.addresses} setNewAddress={setNewAddress} />
                                : <NewAddress />
                            : <NewAddress />
                        : null
                }
            </div>
        </>


    )
}