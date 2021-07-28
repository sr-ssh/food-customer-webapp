import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


// Components
import { Header } from '../base/header2'
import { OldAddress } from "./oldAddress"


export const Address = () => {
    return (
        <>
            <div className="old--address--page">
                <Header title="آدرس" backLink="" backtext="خانه" />
                <OldAddress />
            </div>
        </>


    )
}