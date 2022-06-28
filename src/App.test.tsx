import { render } from "@testing-library/react";
import App from "./App";
import {
  useSelector as rawUseSelector,
  useDispatch as rawUseDispatch,
} from "react-redux";
import { tasks } from "./fixtures";

jest.mock("react-redux");
const dispatch = jest.fn();

test("renders learn react link", () => {
  const useSelector = rawUseSelector as typeof rawUseSelector &
    ReturnType<typeof jest.fn>;
  const useDispatch = rawUseDispatch as typeof rawUseDispatch &
    ReturnType<typeof jest.fn>;

  useSelector.mockImplementation((selector) =>
    selector({
      tasks: {
        tasks,
        filteredTasks: tasks,
      },
    })
  );
  useDispatch.mockImplementation(() => dispatch);

  const { container } = render(<App />);

  expect(container).toHaveTextContent("TASK1");
});
