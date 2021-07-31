import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { ControlButton } from './controlButton';
import { Detail } from './detail';
import { ToggleButton } from './toggleButton';
import pizza from '../../assets/images/order/picc_pizza.png'
import { Dialog } from './dialog';
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions/orderAction';



export const Products = () => {
  const dispatch = useDispatch()
  const getProduct = useSelector(state => state.getProduct)
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    // console.log(e.target.className==='carousel-control-prev-icon')
  };

  
  useEffect(()=>dispatch(orderAction.getProduct()),[dispatch])

  
    return (
        <div className="div--container__product">
        <Carousel  activeIndex={index} nextLabel={false} prevLabel={false} onSelect={handleSelect} interval={null} className="carousal--product" >
            <Carousel.Item className="carousal--item__prouduct">
    <img
      className="d-block w-100"
      src={getProduct.items?.data?.img}
      alt="First slide"
      />
  </Carousel.Item>

  
</Carousel>
    <ToggleButton></ToggleButton>
    <Detail></Detail>
    <ControlButton></ControlButton>
    <Dialog></Dialog>
        </div>
    )
}