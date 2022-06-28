import { AsyncThunkAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type MockAnyAction = AsyncThunkAction<any, void, {}> & { type: any };
