import React from 'react';
import { Col } from 'react-bootstrap';


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