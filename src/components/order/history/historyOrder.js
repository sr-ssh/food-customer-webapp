import React, { useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Completed from '../../../assets/images/order/Completed.svg';
import Canceled from '../../../assets/images/order/Canceled.svg';
import moment from 'jalali-moment';
import persianJs from 'persianjs/persian.min';
import commaNumber from 'comma-number'

// Components
import { Header } from '../../base/addressHeader'
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../../actions';

export const HistoryOrder = (props) => {

  const finishedOrders = useSelector(state => state.getFinishedOrders.orders)
  const dispatch = useDispatch()

  const discounts = (order) => {
    let discount = 0
    order.products.map(item => {
      discount += item.discount * item.quantity
    })
    return discount
}

  useEffect(() => {
    dispatch(orderAction.getFinishedOrders())
  }, [dispatch])

  return (
    <>
      <div className="div--container__historyOrder">
        <Header title="تاریخچه سفارش" backLink='/main' backtext="خانه" />
        {
          finishedOrders?.length ?
            finishedOrders.map((item, index) =>
              <div className="div--container__inner-historyOrder">
                <img className="logo--historyDetail"
                  src={`${item.order.status.status === 1 ? Canceled : item.order.status.status === 4 ? Completed : null}`}
                  alt="logo"
                />
                <div className="div--container__card-history pb-4">
                  <Container>
                    <Row className="row--container__historyDetail ms-0">
                      <Col xs={4} className="col--status__historyDetail">
                        {
                          item.order.status.status === 1 ? <span className="danger--color--text">کنسل شده</span> : item.order.status.status === 4 ? 'اتمام یافته' : null
                        }
                      </Col>
                      <Col xs={8} className="py-2 px-0 col--date__historyDetail text-start">
                        <span className="ps-2 ">{persianJs(moment.from(item.order.finishDate, 'YYYY/MM/DD').locale('fa').format('ddd')).englishNumber().toString()}</span>
                        <span className="ps-2 ">
                          {persianJs(moment.from(item.order.finishDate, 'YYYY/MM/DD').locale('fa').format('DD MMMM')).englishNumber().toString()}
                        </span>
                        <span className="ps-2 ">
                          {persianJs(moment.from(item.order.finishDate, 'YYYY/MM/DD').locale('fa').format('HH:mm')).englishNumber().toString()}
                        </span>
                      </Col>
                    </Row>
                    <Row className="row--container__address-historyDetail align-items-center me-2">
                      {item.order.address && persianJs(item.order.address).englishNumber().toString()}
                    </Row>
                  </Container>
                  <div className="div--container__card-history-inner pb-4">
                    <Table className="table--container__historyDetail" borderless>
                      <thead>
                        <tr className="tr--container__historyDetail" >
                          <th className="th--container__historyDetail fw-bold">سفارش</th>
                          <th className="th--container__historyDetail fw-bold text-end">قیمت</th>
                          <th className="th--container__historyDetail fw-bold text-start">تعداد</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          item.order.products?.map((pro, index) =>
                            <tr key={index}>
                              <td className="td--container__historyDetail">
                                {pro.name}
                              </td>
                              <td className="td--container__historyDetail text-end">
                                {pro.price && persianJs(commaNumber(pro.price - pro.discount)).englishNumber().toString()}
                                {pro.discount !== 0 ? <span className="discount--span me-2">با تخفیف</span> : null}
                              </td>
                              <td className="td--container__historyDetail text-center">
                                {pro.quantity && persianJs(pro.quantity).englishNumber().toString()}
                              </td>
                            </tr>
                          )
                        }
                      </tbody>
                    </Table>
                    <Row className="border-top-red pt-2 mt-auto ms-auto flex-column">
                      <Col className="d-flex flex-row m-0 p-0 mb-1">
                        <Col className="col-4 col-sm-7 ms-3 pe-1">
                          <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">هزینه ارسال :</span>
                        </Col>
                        <Col className="col-7 px-1 fw-bold">
                          {persianJs(commaNumber(item.order.deliveryCost)).englishNumber().toString()}
                        </Col>
                      </Col>
                      {/* add tax */}
                      {/* <Col className="d-flex flex-row m-0 p-0 mb-1">

                        <Col className="col-4 col-sm-7 ms-3 pe-1">
                          <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">مالیات :</span>
                        </Col>
                        <Col className="col-7 px-1 fw-bold">
                          {persianJs(commaNumber(item.tax)).englishNumber().toString()}
                        </Col>
                      </Col> */}
                      <Col className="d-flex flex-row m-0 p-0 mb-1">
                        <Col className="col-4 col-sm-7 ms-3 pe-1">
                          <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">تخفیفات :</span>
                        </Col>
                        <Col className="col-7 px-1 fw-bold">
                          {persianJs(commaNumber(discounts(item.order))).englishNumber().toString()}
                        </Col>
                      </Col> 
                      <Col className="d-flex flex-row m-0 p-0 mb-1">
                        <Col className="col-4 col-sm-7 ms-3 pe-1">
                          <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">جمع کل :</span>
                        </Col>
                        <Col className="cool-7 px-1 fw-bold fs-6">
                          {item.total && persianJs(commaNumber(item.total - item.tax)).englishNumber().toString()}<span className="me-2  txt--color--red--one fs-7">تومان</span>
                        </Col>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            )
            : null
        }
      </div>
    </>
  )
}