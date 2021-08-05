import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions/orderAction';


//components
import { Header } from './../base/ordersHeader'
import { Products } from "./products"


export const Orders = () => {

    const dispatch = useDispatch()
    const orderProductCategory = useSelector(state => state.getOrderProductsTypes.productCategory)
    const [activeCategory, setActiveCategory] = useState(1)

    let categoryHandler = (e) => {
        setActiveCategory(e)
    }

    useEffect(() => dispatch(orderAction.getOrderProductsTypes()), [dispatch])
    return (
        <>
            <div className="div--container__orders">
                <Header />
                <section className="section--container__textlist-order">
                    <ul className="ul--container__order">
                        {
                            orderProductCategory.map((item, index) => <li className={`li--order ${activeCategory == index ? "active--category" : null}`} onClick={() => categoryHandler(index)}>{item}</li>)
                        }
                    </ul>
                </section>
                <Products productsCategory={orderProductCategory[activeCategory]} />
            </div>
        </>
    )
}