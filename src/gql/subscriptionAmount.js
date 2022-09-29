import { gql } from '@apollo/client';

export const SUBSCRIPTION_AMOUNT = gql`
  subscription Subscription {
    amountUpdated
  }
`;
