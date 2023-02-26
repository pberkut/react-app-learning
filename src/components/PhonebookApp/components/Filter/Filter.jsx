export const Filter = ({ value, setValue }) => {
  return (
    <label>
      Filter
      <input type="text" value={value} onChange={setValue} />
    </label>
  );
};
