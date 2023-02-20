import { Component } from 'react';
import initialTodosList from './data/TodosList.json';
import { TodoList } from './TodoList';

export class TodoListApp extends Component {
  state = {
    todos: initialTodosList,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    console.log(completedTodos);

    return (
      <>
        <p>All Todos amount: {todos.length} </p>
        <p>Todos done amount: {completedTodos}</p>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
