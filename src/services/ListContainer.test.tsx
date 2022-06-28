import { fireEvent, render } from "@testing-library/react";
import ListContainer from "./ListContainer";
import { tasks } from "../fixtures";
import {
  useSelector as rawUseSelector,
  useDispatch as rawUseDispatch,
} from "react-redux";

jest.mock("react-redux");

const useSelector = rawUseSelector as typeof rawUseSelector &
  ReturnType<typeof jest.fn>;

const useDispatch = rawUseDispatch as typeof rawUseDispatch &
  ReturnType<typeof jest.fn>;

describe("[ListContainer] TODO LIST", () => {
  const dispatch = jest.fn();
  test("완료 버튼을 누르면 태스크 제거 메서드가 호출된다.", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        tasks: {
          tasks,
          filteredTasks: tasks,
        },
      })
    );
    useDispatch.mockImplementation(() => dispatch);

    const { getAllByText } = render(<ListContainer />);
    const button = getAllByText("완료");
    fireEvent.click(button[0]);

    expect(dispatch).toBeCalledWith({
      payload: {
        id: 1,
        params: {
          completed: true,
        },
      },
      type: "tasks/updateTask",
    });
  });
});
