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
  const [index,setIndex] = useState(0)
  console.log(getProduct.items?.data)


  
  useEffect(()=>dispatch(orderAction.getProduct()),[dispatch])

  const handleSelect = function(selectedIndex,e){
     
  }
    return (
        <div className="div--container__product">
        <Carousel  onSelect={handleSelect} indicators={false} nextLabel={false} prevLabel={false} interval={null} className="carousal--product" >
          {getProduct.items?.data.map(data=>{
  <Carousel.Item className="carousal--item__prouduct">
    <img
      className="d-block w-100"
      src={data.img}
      alt="First slide"
    />
  </Carousel.Item>

          })}
  
</Carousel>
    <ToggleButton></ToggleButton>
    <Detail></Detail>
    <ControlButton></ControlButton>
    <Dialog></Dialog>
        </div>
    )
}