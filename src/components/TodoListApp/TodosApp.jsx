import { Component } from 'react';
import initialTodosList from './data/TodosList.json';
import { TodoList } from './Components/TodoList';
import { TodoEditor } from './Components/TodoEditor';
import { Filter } from './Components/Filter';
import { nanoid } from 'nanoid';

export class TodoListApp extends Component {
  state = {
    todos: initialTodosList,
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: nanoid(3),
      text,
      completed: false,
    };

    // Добавление в массив [...старый, ...новыйЭлемент]
    // ! Решение для homework # 2 Phonebokk
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);
    // Сокращенный вариант. Рефакторинг предыдущего кода
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));

    //  Вариант более подробно расписан
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли тот todo который нужно!');

    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    // https://youtu.be/2tPxoJxaCes?t=5218
    // Сократили toLowerCaser(). Оптимизация
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;

    // Очень полезная штука когда из массива нужно вытащить общее количство чero-то
    const completedTodoCount = this.calculateCompletedTodos();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <p>All Todos amount: {totalTodoCount} </p>
        <p>Todos done amount: {completedTodoCount}</p>

        <hr />

        <TodoEditor onSubmit={this.addTodo} />

        <hr />

        <Filter value={filter} onChange={this.changeFilter} />

        <hr />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}
