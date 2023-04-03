// import AppBar from './components/AppBar';
import Layout from './components/Layout';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './redux/operations';
import { getTasks } from './redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      {/* <AppBar /> */}
      {/* <TaskForm /> */}
      {/* <TaskList /> */}
    </Layout>
  );
};

export default App;
