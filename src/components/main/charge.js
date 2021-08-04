import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';
import commaNumber from 'comma-number'

import { useDispatch, useSelector } from 'react-redux';
import { chargeAction } from '../../actions/chargeAction';



export const Charge = () => {

    const charge = useSelector(state => state.getCharge.charge)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(chargeAction.getCharge())
    }, [dispatch])

    return (
        <>
        <Row className="col-7 col-sm-5 user--charge--account">
            <Col className="user--charge--account--col fw-bold">
                <div>شارژ شما :</div>
                {
                    charge && <div> <span className="text-danger display-7">{persianJs(commaNumber(charge)).englishNumber().toString()}</span> تومان</div>
                }
            </Col>
        </Row>
        </>
    )
}