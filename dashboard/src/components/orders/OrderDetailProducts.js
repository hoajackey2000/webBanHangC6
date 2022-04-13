import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  if (!loading) {
    // Calculate Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Sản phẩm</th>
          <th style={{ width: "20%" }}>Đơn giá</th>
          <th style={{ width: "20%" }}>Số lượng</th>
          <th style={{ width: "20%" }} className="text-end">
            Toàn bộ
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "40px", height: "40px" }}
                    className="img-xs"
                  />
                </div>
                <div className="info">{item.name}</div>
              </Link>
            </td>
            <td>{String(item.price).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VND </td>
            <td>{item.qty} </td>
            <td className="text-end"> {item.qty * item.price} VND</td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Tổng phụ:</dt> <dd> {String(order.itemsPrice).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VND</dd>
              </dl>
              <dl className="dlist">
                <dt>Phí vận chuyển:</dt> <dd> {String(order.shippingPrice).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VND</dd>
              </dl>
              <dl className="dlist">
                <dt>Tổng cộng:</dt>
                <dd>
                  <b className="h5">{String(order.totalPrice).replace(/(.)(?=(\d{3})+$)/g, '$1,')} VND</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Tình trạng:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      Đã thanh toán
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      Chưa thanh toán
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
