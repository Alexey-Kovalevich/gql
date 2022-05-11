import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Card from './Card';
import './styles.scss';
import { GET_PIZZAS } from '../../gql/getPizzas';

const Cards = () => {
  const { error, loading, data } = useQuery(GET_PIZZAS);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    if (data) {
      const allPizzas = data.pizzas;
      setPizzas(allPizzas);
    }
  }, [data]);

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
