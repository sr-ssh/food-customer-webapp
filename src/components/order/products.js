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
import pizza from '../../assets/images/order/products/picc_pizza.png'


export const Products = ({ productsCategory }) => {


  const dispatch = useDispatch()
  const data = useSelector(state => state.getProduct.products)
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(0)
  const [orderList, setOrderList] = useState([...data])
  const [productSize, setProductSize] = useState('');

  // function toFarsiNumber(n) {
  //   const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  //   return n
  //     .toString()
  //     .split('')
  //     .map(x => farsiDigits[x])
  //     .join('');
  // }


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setNumber(0)
  };

  const handleOrderList = function (index, type) {
    setOrderList(orderList.map((item, i) => {
      if (item === orderList[index]) return type === '+' ? { ...item, number: item?.number + 1 } : { ...item, number: item?.number - 1 }
      return item
    }))
  }

  useEffect(() => {
    let products = data.filter(item => { return (item.type.name === productsCategory) });
    setOrderList([...products])
    setIndex(0)
  }, [productsCategory, data])


  console.log(orderList);

  useEffect(() => dispatch(orderAction.getProduct()), [dispatch])
  return (
    <div className="div--container__product">
      <Carousel activeIndex={index} nextLabel={false} prevLabel={false} onSelect={handleSelect} interval={null} className="carousal--product" >
        {orderList?.map(item =>
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
      <Detail detail={orderList[index]}></Detail>
      <ControlButton index={index} handleOrderList={handleOrderList} data={data[index]} number={orderList[index]?.number} setNumber={setNumber} orderList={orderList} setOrderList={setOrderList}></ControlButton>
      <Dialog orderList={orderList[index]} data={orderList.filter(item => item.number)}></Dialog>
    </div>
  )
}