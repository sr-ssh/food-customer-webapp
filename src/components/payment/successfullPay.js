import React, { useState } from 'react';
import logo from './../../assets/images/payment/Payment-online-was-successful.png'
import logo2 from './../../assets/images/payment/Payment-online-was-unsuccessful.svg'
import { history } from '../../helpers'


export const SuccessfullPay = (props) => {

    const success= true
    const handleReturnToApp = function(){
        history.push({
                pathname: '/'
            })
    }

    const handlerSuccess = function(success){
            return <div className="success--status__pay">
                 <img src={success?logo:logo2} className="img--success__status-pay"></img>
                 <div className={`div--success__button-status-pay${success?'' : "-faild"}`}>
                     <span onClick={handleReturnToApp} className={`span--success__status-pay`}>بازگشت به هپی پیتزا</span>
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