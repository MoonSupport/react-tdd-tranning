import { fireEvent, render } from "@testing-library/react";
import FilterContainer from "./FilterContainer";
import {
  useSelector as rawUseSelector,
  useDispatch as rawUseDispatch,
} from "react-redux";
import { TaskFilter } from "./taskReducer";

jest.mock("react-redux");

const useDispatch = rawUseDispatch as typeof rawUseDispatch &
  ReturnType<typeof jest.fn>;

describe("[FilterContainer] Filter", () => {
  const dispatch = jest.fn();

  test("전체 필터를 누르면 함수가 실행된다.", () => {
    useDispatch.mockImplementation(() => dispatch);
    const { getByText } = render(<FilterContainer />);
    const button = getByText("전체");
    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      payload: TaskFilter.CLEAR,
      type: "tasks/filterTask",
    });
  });

  test("완료 필터를 누르면 완료 함수가 실행된다.", () => {
    useDispatch.mockImplementation(() => dispatch);
    const { getByText } = render(<FilterContainer />);
    const button = getByText("완료");
    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      payload: TaskFilter.COMPLETED,
      type: "tasks/filterTask",
    });
  });

  test("미완료 필터를 누르면 미완료 함수가 실행된다.", () => {
    useDispatch.mockImplementation(() => dispatch);
    const { getByText } = render(<FilterContainer />);
    const button = getByText("미완료");
    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      payload: TaskFilter.INCOMPLETED,
      type: "tasks/filterTask",
    });
  });
});
