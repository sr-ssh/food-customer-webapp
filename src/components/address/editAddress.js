import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { LoaderRed } from '../base/loader-bg-red'
import { addressActions } from '../../actions/addressActions';

// Components
import { Header } from '../base/addressHeader'
import { StaticMap } from './staticMap'
import { Maps } from "./maps";

export const EditAddress = (props) => {

    const [oldLoc, setOldLoc] = useState({});
    const [address, setAddress] = useState({});
    const [validate, setValidate] = useState(false);
    const [selectedItem, setItem] = useState("")
    const [itemLocation, setItemLocation] = useState({})
    const [isPickAddress, setIsPickAddress] = useState(false)
    let alertMessage = useSelector(state => state.alert.message);
    let alerType = useSelector(state => state.alert.type);

    const dispatch = useDispatch()
    const addressData = useSelector(state => state.newAddress);

    const addressHandler = e => {
        setAddress({ ...address, address: e.target.value })
    }

    const formHandler = (e) => {
        e.preventDefault()
        if (address.lat && address.lng && address.address) {
            dispatch(addressActions.editAddress({ oldLoc, newLoc: address }));
            setValidate(false)
        }
        else
            setValidate(true)
    }


    useEffect(() => {
        if (props.location.state != undefined) {
            setOldLoc({ lat: props?.location.state?.address.GPS.coordinates[1], lng: props?.location.state?.address.GPS.coordinates[0], address: props?.location.state?.address.address });
            setAddress({ lat: props?.location.state?.address.GPS.coordinates[1], lng: props?.location.state?.address.GPS.coordinates[0], address: props?.location.state?.address.address });
            setItemLocation({ lat: props?.location.state?.address.GPS.coordinates[1], lng: props?.location.state?.address.GPS.coordinates[0] })
        }
    }, [props.location.state])


    return (
        <>
            <div className="address--page">
                <Header title="تغییر آدرس" backLink="/address" backtext="آدرس ها" locating={false} />
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
                <Container className="m-0 mx-auto new--address--container d-flex flex-column justify-content-between">
                    <div className="m-0 px-3 mt-3 w-100">
                        <Row className="mb-2">
                            <span className="label--maps">لطفا موقعیت خود را انتخاب کنید</span>
                        </Row>
                        <Row className="row--static--map" onClick={() => setIsPickAddress(true)}>
                            <Col className="p-0 w-100">
                                <StaticMap address={address} />
                            </Col>
                        </Row>
                    </div>
                    <Row className="m-0 mt-2 mb-auto new--address--inputs">
                        <Col className="p-0 new--address--description-input">
                            <Form.Group controlId="description">
                                <Form.Label className="pe-2">لطفا آدرس دقیق را بنویسید</Form.Label>
                                <Card className="border-0 bg-transparent" >
                                    <Form.Control as="textarea" name="description" onChange={addressHandler} className="new--address--exact--text-container" isValid={address.description && validate && true} isInvalid={!address.description && validate && true} required />
                                </Card>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="m-0 w-100">
                        <Col className="col-12 px-0">
                            <Button type="submit" className="col-12 py-3 d-flex flex-row justify-content-center align-items-center btn--add--new--address btn--red--one" onClick={formHandler}>
                                {
                                    addressData.loading ?
                                        <LoaderRed />
                                        : <span className="ps-2">ادامه</span>
                                }
                            </Button>
                        </Col>
                    </Row>
                    <Maps show={isPickAddress} onHide={() => { setIsPickAddress(false) }} setAddress={setAddress} selectedItem={selectedItem} setItem={setItem} itemLocation={itemLocation} setItemLocation={setItemLocation} />
                </Container>
            </div>
        </>


    )
}