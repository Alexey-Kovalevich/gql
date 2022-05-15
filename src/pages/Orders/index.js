import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../../gql/getOrders';
import EmptyOrders from './EmptyOrders';

const Orders = () => {
  const { error, loading, data } = useQuery(GET_ORDERS, {
    onError: (error) => {
      console.log(error);
    },
  });
  if (error) {
    return 'Error!';
  }

  if (loading) {
    return 'Loading...';
  }

  console.log(data);
  return (
    <div className="cart">
      <div className="cart_top">
        <h1 className="top-title">Заказы</h1>
      </div>
      <div className="cart_orders">
        <div className="order">
          <div className="order_desc">
            <div className="desc_general">
              <h4 className="desc_title">lala</h4>
              <p className="desc_p">lala см</p>
            </div>
          </div>
          <div className="order_count">
            <p className="count_value">2</p>
          </div>
          <h4 className="order_price">$2</h4>
        </div>
      </div>
    </div>
  );
};

export default Orders;
