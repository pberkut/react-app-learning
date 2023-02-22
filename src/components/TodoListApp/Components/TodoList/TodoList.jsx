export const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Remove</button>
      </li>
    ))}
  </ul>
);
