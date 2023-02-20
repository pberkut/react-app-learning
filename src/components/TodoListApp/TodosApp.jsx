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

    const totalTodoCount = todos.length;

    // Очень полезная штука когда из массива нужно вытащить общее количство чего-т о
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    console.log(completedTodoCount);

    return (
      <>
        <p>All Todos amount: {totalTodoCount} </p>
        <p>Todos done amount: {completedTodoCount}</p>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
