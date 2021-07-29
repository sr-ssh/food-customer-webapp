import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Alert } from 'react-bootstrap';



// Components
import { Header } from '../base/header2'
// import { OldAddress } from "./oldAddress"
import { NewAddress } from "./newAddress"

export const Address = () => {

    let alertMessage = useSelector(state => state.alert.message);
    let alerType = useSelector(state => state.alert.type)

    return (
        <>
            <div className="address--page">
                <Header title="آدرس" backLink="" backtext="خانه" />
                {
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
                <NewAddress />
                {/* <OldAddress /> */}
            </div>
        </>


    )
}