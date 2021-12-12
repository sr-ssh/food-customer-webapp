import React, { useEffect } from "react";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { orderAction, payAction } from "../../actions";
import moment from "jalali-moment";
import persianJs from "persianjs/persian.min";
import commaNumber from "comma-number";

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
      <div className="order--details--page">
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
                <Card className="m-auto bg-white border-0 lh-lg rounded-4 ">
                  <Card.Body className="p-2 px-3 text-gray mb-2">
                    <Card.Title className="m-0 p-0 pe-2 pb-2 mt-2">
                      <div className="card--title--order-details fw-bold">
                        {order.order.status.name}
                      </div>
                    </Card.Title>
                    <Row className="m-0 mt-2">
                      <Col className="d-flex ">
                        <Card.Text className="m-0 mb-1 col-3">
                          <span className="order--detailes--order">
                            سفارش :
                          </span>
                        </Card.Text>
                        <Card.Text>
                          <span className="fw-bold ps-2 text--order--details">
                            {persianJs(
                              moment
                                .from(order.order.createdAt, "YYYY/MM/DD")
                                .locale("fa")
                                .format("ddd")
                            )
                              .englishNumber()
                              .toString()}
                          </span>
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
                    <Row className="m-0 mt-2 ">
                      <Col className="d-flex">
                        <Card.Text className=" m-0 mb-1  col-3">
                          <span className=" order--detailes--order">نام:</span>
                        </Card.Text>
                        <Card.Text>
                          <span className="ps-2 fw-bold text--order--details">
                            {order.order.customer.family}
                          </span>
                        </Card.Text>
                      </Col>
                    </Row>
                    <Row className="m-0 mt-2 ">
                      <Col className="d-flex">
                        <Card.Text className=" m-0 mb-1  col-3">
                          <span className=" order--detailes--order">
                            موبایل:
                          </span>
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
                    <Row className="m-0 mt-2 ">
                      <Col className="d-flex">
                        <Card.Text className=" m-0 mb-1  col-3">
                          <span className=" order--detailes--order">آدرس:</span>
                        </Card.Text>
                        <Card.Text>
                          <span className="ps-2 fw-bold text--order--details">
                            {order.order.address}
                          </span>
                        </Card.Text>
                      </Col>
                    </Row>
                    <Row className="m-0 mt-3 orderdetails--Container">
                      <Col>
                        <Row>
                          <Card className="border-0 p-3 pt-2 orderdetails--Container orderdetails--Container--bg">
                            <Card.Body className="p-0 orderdetails--flex">
                              <Row className="pt-0">
                                <div>
                                  <Table className="lh-lg" borderless size="sm">
                                    <thead>
                                      <tr>
                                        <th className="fw-bold">سفارش</th>
                                        <th className="fw-bold text-center">
                                          قیمت{" "}
                                          <span className="order--detailes--order--cards">
                                            (تومان)
                                          </span>
                                        </th>
                                        <th className="fw-bold text-center">
                                          تعداد
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {order.order.products.map(
                                        (product, index) => (
                                          <tr key={index}>
                                            <td>{product._id.name}</td>
                                            <td className="text-center">
                                              {persianJs(
                                                commaNumber(
                                                  product.price -
                                                    product.discount
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
                                              {persianJs(
                                                commaNumber(product.quantity)
                                              )
                                                .englishNumber()
                                                .toString()}
                                            </td>
                                          </tr>
                                        )
                                      )}
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
                                      {persianJs(
                                        commaNumber(order.order.deliveryCost)
                                      )
                                        .englishNumber()
                                        .toString()}
                                    </Col>
                                  </Col>
                                  {/* add tax */}
                                  {/* <Col className="d-flex flex-row m-0 p-0 my-1">
                                                                    <Col className="col-4 col-sm-7 ms-3 pe-1">
                                                                        <span className="order--detailes--order--cards fw-bold order--details--text--footer-cards--order">مالیات :</span>
                                                                    </Col>
                                                                    <Col className="col-7 px-1 fw-bold">
                                                                        {persianJs(commaNumber(order.tax)).englishNumber().toString()}
                                                                    </Col>
                                                                </Col> */}
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
                                      {totalPrice(order) && persianJs(commaNumber(totalPrice(order)))
                                        .englishNumber()
                                        .toString()}
                                      <span className="me-2  txt--color--red--one fs-7">
                                        تومان
                                      </span>
                                    </Col>
                                  </Col>
                                </Row>
                              </Row>
                            </Card.Body>
                          </Card>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="m-0 mt-2">
                      <Col className="d-flex ">
                        <Card.Text className="m-0 mb-1 col-4">
                          <span className="order--detailes--order">
                            توضیحات :
                          </span>
                        </Card.Text>
                        <Card.Text>
                          <span className="fw-bold ps-2 text--order--details">
                            {order.order.description}
                          </span>
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Row className="me-2 ms-2 g-0 mt-4">
                  <Col className="d-flex flex-row mt-4">
                    {!order.paid ? (
                      <Col onClick={() => payOrder(props.match.params.orderId)}>
                        <Button className="col-12  main-card-btn-order-checkout btn btn-danger btn--red--one ">
                          <Row className="px-3">
                            <Col className="text-center">پرداخت </Col>
                            {/* <Col className="text-start">
                              {persianJs(commaNumber(order.total))
                                .englishNumber()
                                .toString()}{" "}
                              تومان
                            </Col> */}
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
