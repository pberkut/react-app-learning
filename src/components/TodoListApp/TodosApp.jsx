import { Component } from 'react';
import initialTodosList from './data/TodosList.json';
import { TodoList } from './Components/TodoList';

export class TodoListApp extends Component {
  state = {
    todos: initialTodosList,
    username: '',
    number: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    console.log(Date.now());

    // Очень полезная штука когда из массива нужно вытащить общее количство чero-то
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <label>
          Name
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <p>All Todos amount: {totalTodoCount} </p>
        <p>Todos done amount: {completedTodoCount}</p>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
