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


export const Products = ({ productsCategory, basket, setbasket }) => {


  const dispatch = useDispatch()
  const data = useSelector(state => state.getProduct.products)
  const [index, setIndex] = useState(0);
  const [activeOrder, setActiveOrder] = useState({})
  const [number, setNumber] = useState(0)
  const [orderList, setOrderList] = useState([...data])
  const [productSize, setProductSize] = useState("medium");
  let priceAsSize = orderList[index]?.size?.filter(data => data?.name === productSize)

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
  let getObjCurrentProduct = (value, permission) => {
    if (value.length > 0)
      return value.reduce((map, obj) => {
        map._id = obj._id;
        map.name = obj.name;
        map.price = obj?.price + priceAsSize[0].price;
        map.number = permission ? obj.number + 1 : obj.number;
        map.size = priceAsSize[0].name
        return map;
      }, {});
    else
      return {}
  }

  const handleOrderList = (index, type, id) => {

    let product = basket.filter(item => { return item?._id === id && item?.size == productSize })
    if (product.length > 0) {
      let updatedOrder = basket.map((item, indexArray) => {
        if (item._id === id && item.size === productSize) {
          item.number = (type == '+') ? item.number + 1 : item.number - 1
          if (item.number !== 0)
            return { ...item, number: item.number };
        }
        return item;
      });
      updatedOrder = updatedOrder.filter(item => item.number !== 0)
      setbasket(updatedOrder);
    } else {
      let currentOrder = orderList.filter(item => item._id == id);
      currentOrder = getObjCurrentProduct(currentOrder, true);
      setbasket([...basket, currentOrder]);
    }
  }

  useEffect(() => {
    let products = data.filter(item => { return (item.type.name === productsCategory) }).map(data => { return { ...data, number: 0, price: 0 } });
    setOrderList([...products])
    setIndex(0)
  }, [productsCategory, data])

  useEffect(() => {
    let activeProduct = basket.filter(item => {
      if (item._id === orderList[index]?._id && item.size === priceAsSize[0]?.name) return item
    })
    setActiveOrder(getObjCurrentProduct(activeProduct, false));
    setNumber(0)
  }, [productSize, basket, orderList, index])

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
      <Detail detail={orderList[index]} price={priceAsSize?.[0]}></Detail>
      <ControlButton index={index} data={orderList[index]} activeOrder={activeOrder} handleOrderList={handleOrderList} number={orderList[index]?.number} setNumber={setNumber} orderList={orderList} setOrderList={setOrderList}></ControlButton>
      <Dialog basket={basket} ></Dialog>
    </div>
  )
}