import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import Sidebar from 'react-sidebar'
import { history } from '../../helpers';
import moment from 'jalali-moment';
import persianJs from 'persianjs/persian.min';

//icons
import menuIcon from './../../assets/images/base/menu.svg'
import logo from './../../assets/images/base/happy-pizza.png'
import addIcon from './../../assets/images/main/add.svg'
import waitingIcon from './../../assets/images/main/waiting.svg'
import peymentIcon from './../../assets/images/main/peyment.svg'
import deliveryIcon from './../../assets/images/main/delivery.svg'
import coookingIcon from './../../assets/images/main/coooking.svg'
import chefIcon from './../../assets/images/main/chef.svg'
import waitingdoneIcon from './../../assets/images/main/waitingdone.svg'
import deliverydoneIcon from './../../assets/images/main/deliverydone.svg'
import coookingdoneIcon from './../../assets/images/main/coookingdone.svg'
import chefdoneIcon from './../../assets/images/main/chefdone.svg'
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions/orderAction';
import { InLineOrderHeader } from './inLineOrderHeader';





export const InLineOrderText = ({order}) => {


    return (
        <>
        <Col className="p-0 py-2">
            <p className="main-text-card-description-order fw-bold">
                {
                    (!order.paid) && order.status.status === 0
                    ? "لطفا از طریق دکمه پرداخت نسبت به نهایی کردن سفارش خود اقدام کنی."
                    : order.paid && order.status.status === 0
                    ? "سفارش شما در صف انتظار برای آماده سازی آشپز است."
                    : order.status.status === 5
                    ? "سفارش شما در حال اماده سازی برای پخت است."
                    : order.status.status === 2
                    ? "سفارش شما در حال پخت می باشد و بزودی ارسال خواهد گردید."
                    : order.status.status === 3
                    ? "سفارش شما بزودی به دستتان خواهد رسید."
                    : null
                }
            </p>
        </Col>
        </>
    )
}