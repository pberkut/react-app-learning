export const Filter = ({ value, onChange }) => (
  <label>
    Filter
    <input type="text" value={value} onChange={onChange} />
  </label>
);
