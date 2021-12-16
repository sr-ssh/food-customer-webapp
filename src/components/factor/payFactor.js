import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderAction, payAction } from "../../actions";
import moment from "jalali-moment";
import persianJs from "persianjs/persian.min";
import commaNumber from "comma-number";

//img
import pizzaImg from "../../assets/images/payFactor/wallpaper pizza.svg";
//components
import { LoaderWhite } from "../base/loader-bg-white";

export const PayFactor = (props) => {
  const order = useSelector((state) => state.getFactor.factor);
  let loading = useSelector((state) => state.getFactor.loading);

  const dispatch = useDispatch();

  const totalPrice = (order) => {
    let total = 0;
    order.order.products.map((item) => {
      total += (item.price - item.discount) * item.quantity;
    });
    // add tax
    // total += order.order.deliveryCost + order.tax;
    total += order.order.deliveryCost;
    return total;
  };

  const payOrder = (orderId) => {
    dispatch(payAction.payOrder({ orderId: orderId }));
  };

  useEffect(() => {
    let orderId = localStorage.getItem("orderId");
    console.log(props.match.params.orderId);
    if (props.match.params.orderId)
      dispatch(orderAction.getOrderFactor(props.match.params.orderId));
  }, [dispatch]);

  return (
    <>
      <Image
        src={pizzaImg}
        alt="pizza-image"
        width="370px"
        className="pizz-wallpaper"
      />
      <div className="pay-factor-page">
        <Container className="m-auto pt-4">
          {loading ? (
            <Container className="d-flex justify-content-center mt-6 ">
              <div className="d-flex justify-content-center align-items-center">
                <LoaderWhite />
              </div>
            </Container>
          ) : (
            order?.order && (
              <>
                <Row className="m-0 mt-3 lh-lg">
                  <Col className="d-flex">
                    <Card.Text className="m-0 mb-1 col-4">
                      <span className="order--detailes--order">تاریخ و ساعت :</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="fw-bold ps-2 text--order--details">
                        {persianJs(
                          moment
                            .from(order.order.createdAt, "YYYY/MM/DD")
                            .locale("fa")
                            .format("DD MMMM")
                        )
                          .englishNumber()
                          .toString()}
                      </span>
                      <span className="fw-bold ps-2 text--order--details">
                        {persianJs(
                          moment
                            .from(order.order.createdAt, "YYYY/MM/DD")
                            .locale("fa")
                            .format("HH:mm")
                        )
                          .englishNumber()
                          .toString()}
                      </span>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="m-0 mt-3 ">
                  <Col className="d-flex">
                    <Card.Text className=" m-0 mb-1  col-1">
                      <span className=" order--detailes--order">نام:</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="ps-2 fw-bold text--order--details">
                        {order.order.customer.family}
                      </span>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="m-0 mt-3 ">
                  <Col className="d-flex">
                    <Card.Text className=" m-0 mb-1 col-2">
                      <span className=" order--detailes--order">موبایل:</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="ps-2 fw-bold text--order--details">
                        {order.order.customer.mobile &&
                          persianJs(order.order.customer.mobile)
                            .englishNumber()
                            .toString()}
                      </span>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="m-0 mt-3 ">
                  <Col className="d-flex">
                    <Card.Text className=" m-0 mb-1 col-3">
                      <span className=" order--detailes--order">آدرس مقصد:</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="ps-2 fw-bold text--order--details">
                        {order.order.address}
                      </span>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="m-0 mt-4 pt-2 orderdetails--Container ">
                  <Col>
                    <Row>
                      <Row className="pt-0 ">
                        <div className="lh-lg border-top-red"  >
                          <Table className="lh-lg mt-4 mb-4" borderless size="sm">
                            <thead>
                              <tr>
                                <th className="discount--span fs-6">سفارش</th>
                                <th className="text-center discount--span fs-6">
                                  قیمت{" "}
                                  <span className="order--detailes--order--cards fs-7">
                                    (تومان)
                                  </span>
                                </th>
                                <th className="text-center discount--span fs-6">تعداد</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.order.products.map((product, index) => (
                                <tr key={index}>
                                  <td>{product._id.name}</td>
                                  <td className="text-center">
                                    {persianJs(
                                      commaNumber(
                                        product.price - product.discount
                                      )
                                    )
                                      .englishNumber()
                                      .toString()}
                                    {product.discount !== 0 ? (
                                      <span className="discount--span me-2">
                                        با تخفیف
                                      </span>
                                    ) : null}
                                  </td>
                                  <td className="pe-3">
                                    {persianJs(commaNumber(product.quantity))
                                      .englishNumber()
                                      .toString()}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                        <Row className="border-top-red pt-2 mt-auto flex-column">
                          <Col className="d-flex flex-row m-0 p-0 my-1">
                            <Col className="col-4 col-sm-7 ms-3 pe-1">
                              <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">
                                هزینه ارسال :
                              </span>
                            </Col>
                            <Col className="col-7 px-1 fw-bold">
                              {persianJs(commaNumber(order.order.deliveryCost))
                                .englishNumber()
                                .toString()}
                            </Col>
                          </Col>{" "}
                          <Col className="d-flex flex-row m-0 p-0 my-1">
                            <Col className="col-4 col-sm-7 ms-3 pe-1">
                              <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">
                                تخفیفات :
                              </span>
                            </Col>
                            <Col className="col-7 px-1 fw-bold">
                              {persianJs(commaNumber(order.discounts))
                                .englishNumber()
                                .toString()}
                            </Col>
                          </Col>
                          <Col className="d-flex flex-row m-0 p-0 my-1">
                            <Col className="col-4 col-sm-7 ms-3 pe-1">
                              <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">
                                جمع کل :
                              </span>
                            </Col>
                            <Col className="cool-7 px-1 fw-bold fs-6">
                              {totalPrice(order) &&
                                persianJs(commaNumber(totalPrice(order)))
                                  .englishNumber()
                                  .toString()}
                              <span className="me-2  txt--color--red--one fs-7">
                                تومان
                              </span>
                            </Col>
                          </Col>
                        </Row>
                      </Row>
                    </Row>
                  </Col>
                </Row>
                <Row className="me-2 ms-2 g-0 mt-4">
                  <Col className="d-flex flex-row mt-4">
                    {!order.paid ? (
                      <Col onClick={() => payOrder(props.match.params.orderId)}>
                        <Button className="col-10 ms-auto py-3 btn btn-danger btn--red--one radius-10 pay--button">
                          <Row className="px-3">
                            <Col className="text-center">پرداخت آنلاین </Col>
                          </Row>
                        </Button>
                      </Col>
                    ) : null}
                  </Col>
                </Row>
              </>
            )
          )}
        </Container>
      </div>
    </>
  );
};
