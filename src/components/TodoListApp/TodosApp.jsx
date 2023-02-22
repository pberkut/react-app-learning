import { Component } from 'react';
import initialTodosList from './data/TodosList.json';
import { TodoList } from './Components/TodoList';
import { Form } from './Components/Form';

export class TodoListApp extends Component {
  state = {
    todos: initialTodosList,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Нашли тот todo который нужно!');

          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    // Очень полезная штука когда из массива нужно вытащить общее количство чero-то
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <hr />
        <p>All Todos amount: {totalTodoCount} </p>
        <p>Todos done amount: {completedTodoCount}</p>

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}
