import { useDispatch } from "react-redux";
import FilterPresenter from "./FilterPresenter";
import { filterTask, TaskFilter } from "./taskReducer";

const FilterContainer = () => {
  const dispatch = useDispatch();

  const handleClearFilterClick = () => {
    dispatch(filterTask(TaskFilter.CLEAR));
  };
  const handleInCompletedFilterClick = () => {
    dispatch(filterTask(TaskFilter.INCOMPLETED));
  };
  const handleCompletedFilterClick = () => {
    dispatch(filterTask(TaskFilter.COMPLETED));
  };

  return (
    <FilterPresenter
      onClearFilterClick={handleClearFilterClick}
      onInCompletedFilterClick={handleInCompletedFilterClick}
      onCompletedFilterClick={handleCompletedFilterClick}
    />
  );
};

export default FilterContainer;
