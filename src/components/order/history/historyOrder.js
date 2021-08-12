import React, { useEffect } from 'react';
import { Container, Row, Col,Table } from 'react-bootstrap';
import Completed  from '../../../assets/images/order/Completed.svg';
import Canceled  from '../../../assets/images/order/Canceled.svg';
import moment from 'jalali-moment';
import persianJs from 'persianjs/persian.min';

// Components
import { Header } from '../../base/addressHeader'
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../../actions';

export const HistoryOrder = (props) => {

  const finishedOrders = useSelector(state => state.getFinishedOrders.orders)
  const dispatch = useDispatch()

  const totalPrice = (order) => {
    let total = 0
    order.products.map(item => {
        total += item.price * item.quantity
    })
    return total
}

  useEffect(() => {
    dispatch(orderAction.getFinishedOrders())
  }, [dispatch])

  return (
    <>
    <div className="div--container__historyOrder">
    <Header title="تاریخچه سفارش" backLink="/main" backtext="خانه" />
    {
      finishedOrders?.length ?
        finishedOrders.map((item, index) =>
          <div className="div--container__inner-historyOrder">
            <img className="logo--historyDetail" 
              src={`${item.status.status === 1 ? Canceled : item.status.status === 4 ? Completed : null}`} 
              alt="logo"
            />
            <div className="div--container__card-history pb-4">
              <Container>
                  <Row className="row--container__historyDetail">
                      <Col className="col--status__historyDetail">
                      {
                        item.status.status === 1 ? <span className="danger--color--text">کنسل شده</span> : item.status.status === 4 ? 'اتمام یافته' : null
                      }
                      </Col>
                      <Col className="ms-3 py-2 col--date__historyDetail">
                          <span className="ps-2 ">{persianJs(moment.from(item.finishDate, 'YYYY/MM/DD').locale('fa').format('ddd')).englishNumber().toString()}</span>
                          <span className="ps-2 ">
                              {persianJs(moment.from(item.finishDate, 'YYYY/MM/DD').locale('fa').format('DD MMMM')).englishNumber().toString()}
                          </span>
                          <span className="ps-2 ">
                              {persianJs(moment.from(item.finishDate, 'YYYY/MM/DD').locale('fa').format('HH:mm')).englishNumber().toString()}
                          </span>
                      </Col>
                  </Row>
                  <Row className="row--container__address-historyDetail align-items-center me-2">
                      {item.address && persianJs(item.address).englishNumber().toString()}
                  </Row>
              </Container>
              <div className="div--container__card-history-inner pb-4">
                <Table className="table--container__historyDetail"  borderless hover>
                  <thead>
                    <tr className="tr--container__historyDetail" >
                      <th className="th--container__historyDetail">سفارش</th>
                      <th className="th--container__historyDetail text-center">قیمت</th>
                      <th className="th--container__historyDetail text-start">تعداد</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      item.products?.map((pro, index) => 
                        <tr key={index}>
                          <td className="td--container__historyDetail">
                            {pro.name}
                          </td>
                          <td className="td--container__historyDetail text-center">
                            {pro.price && persianJs(pro.price).englishNumber().toString()}
                          </td>
                          <td className="td--container__historyDetail text-start">
                            {pro.quantity && persianJs(pro.quantity).englishNumber().toString()}
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
                <hr className="hr--historyDetail"></hr>
                <Container>
                  <Row className="row--container__tatal-historyDetail">
                      <Col className="col--text__total-historyDetail">جمع کل :</Col>
                      <Col className="col--price__total-historyDetail">{totalPrice(item) && persianJs(totalPrice(item)).englishNumber().toString()}<span className="span--container__toman-historyDetail me-2">تومان</span></Col>
                  </Row>
                </Container>
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