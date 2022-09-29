export const filterPizzasByCategory = (allPizzas, filteredCategory) => {
  const filteredPizzas =
    filteredCategory === 'Все'
      ? [...allPizzas]
      : allPizzas.filter((data) => {
          return data.categories?.includes(filteredCategory);
        });
  return filteredPizzas;
};
