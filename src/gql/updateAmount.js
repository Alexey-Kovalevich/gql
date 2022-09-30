import { gql } from '@apollo/client';

export const UPDATE_AMOUNT = gql`
  mutation updateAmount($amount: Int!) {
    updateAmount(amount: $amount)
  }
`;
