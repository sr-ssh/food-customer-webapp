import React, { useState } from 'react';
import logo from './../../assets/images/payment/Payment-online-was-successful.png'
import logo2 from './../../assets/images/payment/Payment-online-was-unsuccessful.svg'


export const StausPay = (props) => {

    const success= false

    const handlerSuccess = function(success){
            return <div className="success--status__pay">
                 <img src={success?logo:logo2} className="img--success__status-pay"></img>
                 <div className={`div--success__button-status-pay${success?'' : "-faild"}`}>
                     <span className={`span--success__status-pay`}>بازگشت به هپی پیتزا</span>
                 </div>
                 </div>
    }
    return (
        <>
            <div className="statusPay-page">
                 {handlerSuccess(success)}
            </div>
        </>


    )
}