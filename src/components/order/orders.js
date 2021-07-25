import React from 'react';

//components
import { Header } from './../base/ordersHeader'

export const orders = () => {
    return (
        <>
        <div className="div--container__orders">
        <Header/>
        <section className="section--container__textlist">
            <ul className="ul--container__order">
                <li className="li--order">پیش غذا</li>
                <li className="li--order">پیتزا</li>
                <li className="li--order">نوشیدنی</li>
                <li className="li--order">سالاد</li>
                <li className="li--order">سس</li>
            </ul>
        </section>
        </div>
        </>
    )
}