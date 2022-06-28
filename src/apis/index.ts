const TASKS_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks = async () => {
  const data = await (await fetch(TASKS_URL)).json();
  return data;
};
