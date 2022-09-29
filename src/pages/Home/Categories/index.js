import { useState } from 'react';
import classNames from 'classnames';
import { categories } from '../../../helpers/consts';
import './styles.scss';

const Categories = ({ setFilteredCategory }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClick = (category, index) => {
    setTabIndex(index);
    setFilteredCategory(category);
  };

  return (
    <div className="tab">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className={classNames({
              tab__item: true,
              tab__item_active: index === tabIndex,
            })}
            onClick={() => handleClick(category, index)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
