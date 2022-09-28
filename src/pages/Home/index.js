import { useState } from 'react';
import Categories from './Categories';
import Cards from '../../components/Cards';
import './styles.scss';

const Home = () => {
  const [filteredCategory, setFilteredCategory] = useState('Все');
  return (
    <div className="home">
      <Categories setFilteredCategory={setFilteredCategory} />
      <h2 className="title">Все пиццы</h2>
      <Cards filteredCategory={filteredCategory} />
    </div>
  );
};

export default Home;
