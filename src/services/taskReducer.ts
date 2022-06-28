import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks } from "../apis";
import { Task } from "./types";

const REDUCER_NAME = "tasks";

export enum TaskFilter {
  CLEAR,
  COMPLETED,
  INCOMPLETED,
}

// ASYNC
export const loadTasks = createAsyncThunk(
  `${REDUCER_NAME}/fetchByIdStatus`,
  async () => {
    const data = await fetchTasks();
    return data;
  }
);

// Slice
export const taskSlice = createSlice({
  name: REDUCER_NAME,
  initialState: {
    tasks: [],
    filteredTasks: [],
    filterStatus: TaskFilter.CLEAR,
  } as { tasks: Task[]; filteredTasks: Task[]; filterStatus: TaskFilter },
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: number; params: Partial<Task> }>
    ) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (!task) throw new Error("Invalid value");
      Object.assign(task, {
        ...task,
        ...action.payload.params,
      });
    },
    filterTask: (state, action: PayloadAction<TaskFilter>) => {
      switch (action.payload) {
        case TaskFilter.CLEAR:
          state.filteredTasks = state.tasks;
          state.filterStatus = TaskFilter.CLEAR;
          break;
        case TaskFilter.COMPLETED:
          state.filteredTasks = state.tasks.filter((task) => task.completed);
          state.filterStatus = TaskFilter.COMPLETED;
          break;
        case TaskFilter.INCOMPLETED:
          state.filteredTasks = state.tasks.filter((task) => !task.completed);
          state.filterStatus = TaskFilter.INCOMPLETED;
          break;
        default:
          throw new Error("Invalid Filter");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.filteredTasks = action.payload;
    });
  },
});

export default taskSlice.reducer;

export const { setTasks, updateTask, filterTask } = taskSlice.actions;
