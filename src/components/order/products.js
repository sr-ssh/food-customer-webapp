import React from 'react';
import { Carousel } from 'react-bootstrap';
import { ControlButton } from './controlButton';
import { Detail } from './detail';
import { ToggleButton } from './toggleButton';
import pizza from '../../assets/images/order/picc_pizza.png'
import { Dialog } from './dialog';

export const Products = () => {
    return (
        <div className="div--container__product">
        <Carousel nextLabel={false} prevLabel={false} interval={null} className="carousal--product" >
  <Carousel.Item className="carousal--item__prouduct">
    <img
      className="d-block w-100"
      src={pizza}
      alt="First slide"
    />
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

  </Carousel.Item> */}
</Carousel>
    <ToggleButton></ToggleButton>
    <Detail></Detail>
    <ControlButton></ControlButton>
    <Dialog></Dialog>
        </div>
    )
}