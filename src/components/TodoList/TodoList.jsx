export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <p>{text}</p>
        <button>Remove</button>
      </li>
    ))}
  </ul>
);
