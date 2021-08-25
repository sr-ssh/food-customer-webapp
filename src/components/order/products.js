import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions/orderAction';

//  Components
import { ControlButton } from './controlButton';
import { Detail } from './detail';
import { ToggleButton } from './toggleButton';
import { Dialog } from './dialog';

import pizaaIcon from './../../assets/images/order/products/pizza-banner-1.png'

export const Products = ({ productsCategory, basket, setbasket, props }) => {


  const dispatch = useDispatch()
  const data = useSelector(state => state.getProduct.products)
  const [index, setIndex] = useState(0);
  const [activeOrder, setActiveOrder] = useState({})
  const [quantity, setNumber] = useState(0)
  const [activeOption, setActiveOption] = useState(true)
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
  console.log(basket, orderList)


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setNumber(0)
    setActiveOption(!activeOption)
  };

  let getObjCurrentProduct = (value, permission) => {
    console.log(value)
    if (value.length > 0)
      return value.reduce((map, obj) => {
        console.log(map, obj);
        map._id = obj._id;
        map.name = obj.name;
        map.price = parseInt(obj?.price) + parseInt(priceAsSize[0].price);
        map.discount = parseInt(priceAsSize[0].discount);
        console.log(obj, priceAsSize[0], parseInt(obj?.discount) + parseInt(priceAsSize[0].discount))
        map.quantity = permission ? obj.quantity + 1 : obj.quantity;
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
          item.quantity = (type == '+') ? item.quantity + 1 : item.quantity - 1;
        }
        return item;
      });
      updatedOrder = updatedOrder.filter(item => item.quantity !== 0)
      setbasket(updatedOrder);
    } else {
      if (type === '+') {
        let currentOrder = orderList.filter(item => item._id == id);
        console.log("currentOrder",currentOrder)
        currentOrder = getObjCurrentProduct(currentOrder, true);
        setbasket([...basket, currentOrder]);
      }
    }
  }

  useEffect(() => {
    let products = data
      .filter(item => { return (item.type.name === productsCategory) })
      .map(data => { return { ...data, quantity: 0, price: 0 } });
      
    setOrderList([...products])
    setProductSize("medium")
    setIndex(0)
  }, [productsCategory, data])


  useEffect(() => {
    setProductSize("medium")
  }, [index])

  useEffect(() => {

    if (props.location.state) {
      props.location.state.state = props.location.state?.state.filter(item => item !== null)
      setbasket(props.location.state.state)
      props.location.state = null
    }

    let activeProduct = basket.filter(item => {
      if (item._id === orderList[index]?._id && item.size === priceAsSize[0]?.name) return item
    })
    console.log("activeProduct", activeProduct)
    setActiveOrder(getObjCurrentProduct(activeProduct, false));
    setNumber(0)
  }, [productSize, basket, orderList, index])

  useEffect(() => dispatch(orderAction.getProduct()), [dispatch])

  return (
    <div className="div--container__product mt-4 ms-0">
      <Carousel
        fade
        activeIndex={index}
        nextLabel={false}
        prevLabel={false}
        onSelect={handleSelect}
        interval={null}
        wrap={false}
        className="carousal--product mb-2" >
        {orderList?.map(item =>
          <Carousel.Item className="carousal--item__prouduct text-center">
            {item.supply !== 0 ?
              null :
              <>
                <Carousel.Caption className="w-100">
                  <span className="text--product--unavailable w-100 fw-bold">تموم شد</span>
                </Carousel.Caption>
              </>
            }
            <img
              className="d-block carousel--img"
              src={item.img}
              // src={pizaaIcon}
              alt="First slide"
            />

          </Carousel.Item>
        )}
      </Carousel>
      {/* {
        productsCategory === "پیتزا"
          ? <Row className="d-flex justify-content-center aling-align-items-center col-12 m-0 mt-4 ">
            <ToggleButton sizeProduct={setProductSize} activeOptions={activeOption} activeOrder={orderList[index]} ></ToggleButton>
          </Row>
          : null
      } */}
      <Detail detail={orderList[index]} price={priceAsSize?.[0]}></Detail>
      <ControlButton index={index} productSize={productSize} data={orderList[index]} activeOrder={activeOrder} handleOrderList={handleOrderList} quantity={orderList[index]?.quantity} setNumber={setNumber} orderList={orderList} setOrderList={setOrderList}></ControlButton>
      <Dialog basket={basket} ></Dialog>
    </div >
  )
}