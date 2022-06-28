import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import Filter from "./services/FilterContainer";
import List from "./services/ListContainer";
import { loadTasks } from "./services/taskReducer";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);
  return (
    <div>
      <h1>Todo</h1>
      <Filter />
      <List />
    </div>
  );
};

export default App;
