import { tasks } from "../fixtures";
import configrueStore from "redux-mock-store";
import taskReducer, {
  filterTask,
  loadTasks,
  setTasks,
  TaskFilter,
  updateTask,
} from "./taskReducer";
import thunk from "redux-thunk";
import { MockAnyAction } from "./types";

describe("[taskReducer] 테스트 테스트", () => {
  test("첫 테스크를 로딩한다.", async () => {
    const mockStore = configrueStore([thunk]);
    const store = mockStore({
      tasks: [],
    });

    await store.dispatch(loadTasks() as MockAnyAction);
    const actions = store.getActions();
    expect(actions).not.toHaveLength(0);
  });

  test("다수의 테스크를 세팅한다.", () => {
    const state = taskReducer(
      {
        tasks: [],
        filteredTasks: [],
        filterStatus: TaskFilter.CLEAR,
      },
      setTasks(tasks)
    );
    expect(state.tasks).toBe(tasks);
  });

  test("테스크를 완료시킨다.", () => {
    const state = taskReducer(
      {
        tasks: [
          { userId: 1, id: 1, title: "완료 되어야할 컨텐츠", completed: false },
        ],
        filteredTasks: [],
        filterStatus: TaskFilter.CLEAR,
      },
      updateTask({
        id: 1,
        params: {
          completed: true,
        },
      })
    );
    expect(state.tasks[0].completed).toBe(true);
  });

  test("테스크에 필터를 건다.", () => {
    const state = taskReducer(
      {
        tasks: [
          { userId: 1, id: 1, title: "삭제 되어야할 컨텐츠", completed: false },
        ],
        filteredTasks: [
          { userId: 1, id: 1, title: "삭제 되어야할 컨텐츠", completed: false },
        ],
        filterStatus: TaskFilter.CLEAR,
      },
      filterTask(TaskFilter.COMPLETED)
    );
    expect(state.filteredTasks).toHaveLength(0);
  });
});
