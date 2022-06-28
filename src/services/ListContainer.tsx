import { useAppDispatch, useAppSelector } from "../hooks";
import ListPresenter from "./ListPresenter";
import { filterTask, updateTask } from "./taskReducer";

const ListContainer = () => {
  const { tasks, filterStatus } = useAppSelector((state) => ({
    tasks: state.tasks.filteredTasks,
    filterStatus: state.tasks.filterStatus,
  }));
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    dispatch(updateTask({ id, params: { completed: true } }));
    dispatch(filterTask(filterStatus));
  };

  return <ListPresenter tasks={tasks} onClick={handleClick} />;
};

export default ListContainer;
