import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { filterPizzasByCategory } from '../../helpers/filterPizzasByCategory';
import Card from './Card';
import './styles.scss';
import { GET_PIZZAS } from '../../gql/getPizzas';

const Cards = ({ filteredCategory }) => {
  const { error, loading, data } = useQuery(GET_PIZZAS, {
    onError: (error) => {
      console.log(error);
    },
  });
  const [pizzas, setPizzas] = useState([]);

  console.log('first data: ', data);

  useEffect(() => {
    if (data) {
      const allPizzas = data.pizzas;
      const filteredPizzas = filterPizzasByCategory(
        allPizzas,
        filteredCategory
      );
      setPizzas(filteredPizzas);
    }
  }, [data, filteredCategory]);

  if (error) {
    return 'Error!';
  }

  if (loading) {
    return 'Loading...';
  }

  return (
    <div className="cards">
      {pizzas.map((pizza) => {
        return <Card key={pizza.id} pizza={pizza} />;
      })}
    </div>
  );
};

export default Cards;
