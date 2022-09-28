export const filterPizzasByCategory = (allPizzas, filteredCategory) => {
  const filteredPizzas =
    filteredCategory === 'Все'
      ? [...allPizzas]
      : allPizzas.filter(({ categories }) => {
          console.log(categories);
          return categories?.include(filteredCategory);
        });
  return filteredPizzas;
};
