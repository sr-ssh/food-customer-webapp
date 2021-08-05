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



// const data = [
//   {title:'نان سیر',img:pizza,price:"30",number:0,description:"سیر . خمیر تازه . اویشن"},
//   {title:'پپرونی',img:"https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg",price:"45",number:0,description:"گوشت گوساله . پنیر . قارچ . فلفل دلمه ای . پیازجه"},
//   {title:'رست بیف',img:"https://iranmakimah.com/wp-content/uploads/2021/01/phut_0.jpg",price:"25",number:0,description:"کالباس پپرونی . پنیر . قارچ . فلفل دلمه ای"}
// ]

export const Products = ({ productsCategory }) => {


  const dispatch = useDispatch()
  const data = useSelector(state => state.getProduct.products)
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(0)
  const [orderList, setOrderList] = useState([...data])
  const [productSize, setProductSize] = useState("medium");

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
              src={pizza}
              alt="First slide"
            />
          </Carousel.Item>
        )}
      </Carousel>
      <Row className="d-flex justify-content-center aling-align-items-center col-12 m-0 ">
        <ToggleButton sizeProduct={setProductSize}></ToggleButton>
      </Row>
      <Detail detail={orderList[index]} productSize={productSize}></Detail>
      <ControlButton index={index} handleOrderList={handleOrderList} data={data[index]} number={orderList[index]?.number} setNumber={setNumber} orderList={orderList} setOrderList={setOrderList}></ControlButton>
      <Dialog orderList={orderList[index]} data={orderList.filter(item => item.number)}></Dialog>
    </div>
  )
}