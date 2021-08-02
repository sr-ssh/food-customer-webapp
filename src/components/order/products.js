import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions/orderAction';

//  Components
import { ControlButton } from './controlButton';
import { Detail } from './detail';
import { ToggleButton } from './toggleButton';
import { Dialog } from './dialog';

// Assets
import pizza from '../../assets/images/order/picc_pizza.png'



const data = [
  { title: 'نان سیر', img: pizza, description: "سیر . خمیر تازه . اویشن" },
  { title: 'پپرونی', img: "https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg", description: "گوشت گوساله . پنیر . قارچ . فلفل دلمه ای . پیازجه" },
  { title: 'رست بیف', img: "https://iranmakimah.com/wp-content/uploads/2021/01/phut_0.jpg", description: "کالباس پپرونی . پنیر . قارچ . فلفل دلمه ای" }
]

export const Products = () => {
  const dispatch = useDispatch()
  const getProduct = useSelector(state => state.getProduct)
  const [index, setIndex] = useState(0);
  const [productSize, setProductSize] = useState('');

  const [title, setTitle] = useState('')

  console.log(getProduct);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  // useEffect(() => dispatch(orderAction.getProduct()), [dispatch])


  return (
    <div className="div--container__product">
      <Carousel activeIndex={index} nextLabel={false} prevLabel={false} onSelect={handleSelect} interval={null} className="carousal--product" >
        {data.map(item =>

          <Carousel.Item className="carousal--item__prouduct">

            <img
              className="d-block w-100"
              src={item.img}
              alt="First slide"
            />
          </Carousel.Item>

        )}

      </Carousel>
      <Row className="d-flex justify-content-center aling-align-items-center col-12 m-0 ">
        <ToggleButton sizeProduct={setProductSize}></ToggleButton>
      </Row>
      <Detail detail={data[index]}></Detail>
      <ControlButton></ControlButton>
      <Dialog></Dialog>
    </div>
  )
}