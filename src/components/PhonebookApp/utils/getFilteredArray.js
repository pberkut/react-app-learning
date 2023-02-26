export const getFilteredArray = (items, key, filterValue) => {
  return items.filter(item =>
    item[key].toLowerCase().includes(filterValue.toLowerCase().trim())
  );
};
