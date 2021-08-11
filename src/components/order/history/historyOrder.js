import React from 'react';
import { Container, Row, Col,Table } from 'react-bootstrap';
import Completed  from '../../../assets/images/order/Completed.svg';
import Canceled  from '../../../assets/images/order/Canceled.svg';

export const HistoryOrder = (props) => {

  return (
    <>
    <div className="div--container__historyOrder">
    <div className="div--container__inner-historyOrder">
        <img className="logo--historyDetail" src={Completed} alt="logo"  />
        <div className="div--container__card-history">
         <Container>
             <Row className="row--container__historyDetail">
                 <Col className="col--status__historyDetail">اتمام یافته</Col>
                 <Col className="col--date__historyDetail">یکشنبه ۳ مرداد  ۱۲:۲۵</Col>
             </Row>
             <Row className="row--container__address-historyDetail">
                 امیریه ۳۱ . آراسته ۱. مجتمع سهند . طبقه ۳ واحد ۶
             </Row>
         </Container>
        <div className="div--container__card-history-inner">

        <Table className="table--container__historyDetail"  borderless hover>
  <thead>
    <tr className="tr--container__historyDetail" >
      <th className="th--container__historyDetail">سفارش</th>
      <th className="th--container__historyDetail">قیمت</th>
      <th className="th--container__historyDetail">تعداد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="td--container__historyDetail">رست بیف </td>
      <td className="td--container__historyDetail">۸۵</td>
      <td className="td--container__historyDetail">۲</td>
    </tr>
    <tr>
      <td className="td--container__historyDetail">پپرونی</td>
      <td className="td--container__historyDetail">۶۰</td>
      <td className="td--container__historyDetail">۱</td>
    </tr>
    <tr>
      <td className="td--container__historyDetail">نوشابه کوکا </td>
      <td className="td--container__historyDetail">۲۰</td>
      <td className="td--container__historyDetail">۲</td>
    </tr>
    
  </tbody>
</Table>
<hr className="hr--historyDetail"></hr>
<Container>
             <Row className="row--container__tatal-historyDetail">
                 <Col className="col--text__total-historyDetail">جمع کل :</Col>
                 <Col className="col--price__total-historyDetail">۲۳۰ <span className="span--container__toman-historyDetail">تومان</span></Col>
             </Row>
</Container>
        </div>
        </div>
        </div>       
        <div className="div--container__inner-historyOrder">
        <img className="logo--historyDetail" src={Canceled} alt="logo"  />
        <div className="div--container__card-history">
         <Container>
             <Row className="row--container__historyDetail">
                 <Col className="col--status__historyDetail">اتمام یافته</Col>
                 <Col className="col--date__historyDetail">یکشنبه ۳ مرداد  ۱۲:۲۵</Col>
             </Row>
             <Row className="row--container__address-historyDetail">
                 امیریه ۳۱ . آراسته ۱. مجتمع سهند . طبقه ۳ واحد ۶
             </Row>
         </Container>
        <div className="div--container__card-history-inner">

        <Table className="table--container__historyDetail"  borderless hover>
  <thead>
    <tr className="tr--container__historyDetail" >
      <th className="th--container__historyDetail">سفارش</th>
      <th className="th--container__historyDetail">قیمت</th>
      <th className="th--container__historyDetail">تعداد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="td--container__historyDetail">رست بیف </td>
      <td className="td--container__historyDetail">۸۵</td>
      <td className="td--container__historyDetail">۲</td>
    </tr>
    <tr>
      <td className="td--container__historyDetail">پپرونی</td>
      <td className="td--container__historyDetail">۶۰</td>
      <td className="td--container__historyDetail">۱</td>
    </tr>
    <tr>
      <td className="td--container__historyDetail">نوشابه کوکا </td>
      <td className="td--container__historyDetail">۲۰</td>
      <td className="td--container__historyDetail">۲</td>
    </tr>
    
  </tbody>
</Table>
<hr className="hr--historyDetail"></hr>
<Container>
             <Row className="row--container__tatal-historyDetail">
                 <Col className="col--text__total-historyDetail">جمع کل :</Col>
                 <Col className="col--price__total-historyDetail">۲۳۰ <span className="span--container__toman-historyDetail">تومان</span></Col>
             </Row>
</Container>
        </div>
        </div>
        </div>       
        <div className="div--container__inner-historyOrder">
        <img className="logo--historyDetail" src={Completed} alt="logo"  />
        <div className="div--container__card-history">
         <Container>
             <Row className="row--container__historyDetail">
                 <Col className="col--status__historyDetail">اتمام یافته</Col>
                 <Col className="col--date__historyDetail">یکشنبه ۳ مرداد  ۱۲:۲۵</Col>
             </Row>
             <Row className="row--container__address-historyDetail">
                 امیریه ۳۱ . آراسته ۱. مجتمع سهند . طبقه ۳ واحد ۶
             </Row>
         </Container>
        <div className="div--container__card-history-inner">

        <Table className="table--container__historyDetail"  borderless hover>
  <thead>
    <tr className="tr--container__historyDetail" >
      <th className="th--container__historyDetail">سفارش</th>
      <th className="th--container__historyDetail">قیمت</th>
      <th className="th--container__historyDetail">تعداد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="td--container__historyDetail">رست بیف </td>
      <td className="td--container__historyDetail">۸۵</td>
      <td className="td--container__historyDetail">۲</td>
    </tr>
    <tr>
      <td className="td--container__historyDetail">پپرونی</td>
      <td className="td--container__historyDetail">۶۰</td>
      <td className="td--container__historyDetail">۱</td>
    </tr>
    <tr>
      <td className="td--container__historyDetail">نوشابه کوکا </td>
      <td className="td--container__historyDetail">۲۰</td>
      <td className="td--container__historyDetail">۲</td>
    </tr>
    
  </tbody>
</Table>
<hr className="hr--historyDetail"></hr>
<Container>
             <Row className="row--container__tatal-historyDetail">
                 <Col className="col--text__total-historyDetail">جمع کل :</Col>
                 <Col className="col--price__total-historyDetail">۲۳۰ <span className="span--container__toman-historyDetail">تومان</span></Col>
             </Row>
</Container>
        </div>
        </div>
        </div>       
      </div>
    </>
  )
}