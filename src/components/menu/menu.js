import React, { useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import moment from 'jalali-moment';
import persianJs from 'persianjs/persian.min';
import commaNumber from 'comma-number'

// Components
// import { Header } from '../../base/addressHeader'
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../actions';

export const Menu = (props) => {

  const dispatch = useDispatch()
  const menu = useSelector(state => state.getProduct.products)


  useEffect(() => {
    dispatch(orderAction.getProduct())
  }, [dispatch])

  return (
    <>
      <div className="div--container__historyOrder">
        {/* <Header title="تاریخچه سفارش" backLink='/main' backtext="خانه" /> */}
        {
          menu?.length ?
            // menu.map((item, index) =>
              <div className="div--container__inner-historyOrder">
               
                <div className="div--container__card-history py-4">
                  
                  <div className="div--container__card-history-inner pb-4">
                   
                        {
                          menu?.map((pro, index) =>
                            <Row key={index} className="column-flex">
                              <Col className="td--container__historyDetail">
                                {pro.name}
                              </Col>
                              <Col className="td--container__historyDetail text-end">
                                {pro.size[0].price && persianJs(commaNumber(pro.size[0].price - pro.size[0].discount)).englishNumber().toString()}
                                {pro.discount !== 0 ? <span className="discount--span me-2">با تخفیف</span> : null}
                              </Col>
                              <Col className="td--container__historyDetail text-center">
                                <img src={pro.img} height="100px"/>
                              </Col>
                            </Row>
                          )
                        }
                  </div>
                </div>
              </div>
            // )
            : null
        }
      </div>
    </>
  )
}