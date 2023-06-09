import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addressActions, alertActions } from '../../actions';
import { LoaderRed } from '../base/loader-bg-red'




// Assets
import addIcon from '../../assets/images/main/add-red.svg'
// Components 
import { AddressCard } from './AddressCard';
import { DeleteAddress } from './deleteAddress';


export const OldAddress = ({ addresses, setNewAddress }) => {

    const [address, setAddress] = useState({})
    const [deleteAddressModal, setDeleteAddressModal] = useState(false);
    const addressData = useSelector(state => state.newAddress);
    let { message: alertMessage, type: alerType } = useSelector(state => state.alert)

    const dispatch = useDispatch()

    const selectAddress = () => {
        if (address.address)
            dispatch(addressActions.newAddress({ lng: address.GPS.coordinates[0], lat: address.GPS.coordinates[1], address: address.address }, address._id))
        else {
            dispatch(alertActions.error('یک ادرس را انتخاب کنید'))
            setTimeout(() => {
                dispatch(alertActions.clear());
            }, 1500);
        }
    }

    useEffect(() => {
        if (alerType === "success") {
            setTimeout(() => {
                dispatch(addressActions.getAddresses())
                dispatch(alertActions.clear());
            }, 1500);
        } else {
            setTimeout(() => {
                dispatch(alertActions.clear());
            }, 1500);
        }
    }, [alertMessage])


    return (
        <>
            <div id="old--address-scroller-container">
                {
                    alertMessage ?
                        (
                            <Row className="d-flex mx-1 justify-content-center ">
                                <Alert className="m-0 w-100 alert-cancel-product-order mt-2" variant={alerType}>
                                    {alertMessage}
                                </Alert>
                            </Row>
                        ) :
                        null
                }
                <div id="old--address-scroller-container-cards">
                    <Container className="m-0">
                        <Row className="d-flex flex-column" >

                            {
                                addresses.map((addresss, index) => <AddressCard key={index} address={addresss} setAddress={setAddress} setDeleteAddressModal={setDeleteAddressModal} selected={address === addresss ? true : false} />)
                            }

                        </Row>
                    </Container>
                </div>
            </div>
            <Container fluid className="m-0 d-flex flex-column ms-0 align-items-center justify-content-end main-add-address ">
                <Row className="m-0 mb-2 ">
                    <Col className="col-12 px-0">
                        <Button className=" d-flex flex-row justify-content-center align-items-center btn--checkout--order btn--dark--one" onClick={() => setNewAddress(true)}>
                            <img className="mx-2" src={addIcon} height="25px" alt="edit-icon" /><span className="mx-3 text-light ">آدرس جدید</span>
                        </Button>
                    </Col>
                </Row>
                <Row className="m-0 mb-2 w-100  ">
                    <Col className="col-12 px-0">
                        <Button type="submit" className="col-12 py-3 d-flex flex-row justify-content-center align-items-center btn--add--new--address btn--red--one" onClick={selectAddress}>
                            {
                                addressData.loading ?
                                    <LoaderRed />
                                    : <span className="ps-2">ادامه</span>
                            }
                        </Button>
                    </Col>
                </Row>
            </Container>
            <DeleteAddress show={deleteAddressModal} onHide={() => { setDeleteAddressModal(false) }} address={address} />
        </>
    )
}