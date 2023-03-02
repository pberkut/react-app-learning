export const Controls = ({ current, total, onChange }) => (
  <section>
    <button type="button" disabled={current === 1} onClick={() => onChange(-1)}>
      Previous
    </button>
    <button
      type="button"
      disabled={current === total}
      onClick={() => onChange(1)}
    >
      Next
    </button>
  </section>
);
