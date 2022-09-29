import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from './orderFragment';

export const CREATE_ORDER = gql`
  ${ORDER_FRAGMENT}
  mutation createOrder($input: OrderInput!) {
    createOrder(order: $input) {
      __typename
      ...orderFragment
      orderedPizzas {
        dough
        size
        price
        amount
        pizzaName
      }
    }
  }
`;
