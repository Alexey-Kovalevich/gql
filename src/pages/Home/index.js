import React from 'react';
import Cards from '../../components/Cards';
import './styles.scss';

const Home = () => {
  return (
    <div className="home">
      <h2 className="title">Все пиццы</h2>
      <Cards />
    </div>
  );
};

export default Home;
