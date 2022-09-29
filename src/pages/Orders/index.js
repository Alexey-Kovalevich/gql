import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../../gql/getOrders';
import Order from '../../components/Order';
import EmptyOrders from './EmptyOrders';
import './styles.scss';

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

  const { orders } = data || [];

  const amount = orders.length;
  const price =
    Math.round(orders?.reduce((acc, item) => acc + item.totalPrice, 0) * 100) /
    100;

  return (
    <>
      {orders.length > 0 ? (
        <div className="orders">
          <div className="orders-top">
            <h1 className="orders-top_title">Заказы</h1>
            <div className="orders-top_info">
              <p className="orders-top_text">Всего заказов: {amount}</p>
              <p className="orders-top_text">Цена: ${price}</p>
            </div>
          </div>
          <div className="orders_items">
            {orders.map(({ id, orderedPizzas }) => {
              return (
                <div key={id} className="border">
                  {orderedPizzas.map(
                    ({ amount, dough, pizzaName, price, size }, index) => {
                      return (
                        <Order
                          key={index}
                          name={pizzaName}
                          dough={dough}
                          size={size}
                          amount={amount}
                          price={price}
                        />
                      );
                    }
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <EmptyOrders />
      )}
    </>
  );
};

export default Orders;
