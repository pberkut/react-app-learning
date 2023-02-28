import { Component } from 'react';
// import initialTodosList from './data/TodosList.json';
import { TodoList } from './Components/TodoList';
import { TodoEditor } from './Components/TodoEditor';
import { Filter } from './Components/Filter';
import { nanoid } from 'nanoid';
import { Modal } from './Components/Modal';
import { IconButton } from './Components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';

export class TodoListApp extends Component {
  state = {
    // todos: initialTodosList,
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({
        todos: parsedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    console.log('App componentDidUpdate');

    if (nextTodos !== prevTodos) {
      console.log('Update Todos, save todos to localstorage');
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    console.log('prevState: ', prevState);
    console.log('currentState: ', this.state);

    // Закрытие модального окна AddTodo сравнение, что изменился массив
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      console.log('Close modal');
      this.toggleModal();
    }
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount');
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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

    // this.toggleModal();
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
    const { todos, filter, showModal } = this.state;

    const totalTodoCount = todos.length;

    // Очень полезная штука когда из массива нужно вытащить общее количство чero-то
    const completedTodoCount = this.calculateCompletedTodos();

    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <div>
          <p>All Todos amount: {totalTodoCount} </p>
          <p>Todos done amount: {completedTodoCount}</p>
        </div>
        <hr />

        <IconButton onClick={this.toggleModal} aria-label="Add Todo">
          <AddIcon width="40" height="40" fill="white" />
        </IconButton>

        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              X
            </button>

            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

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
