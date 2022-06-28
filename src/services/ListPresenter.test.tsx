import { fireEvent, render } from "@testing-library/react";
import ListPresenter from "./ListPresenter";
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

const noop = () => {};

describe("[ListPresenter] TODO LIST", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks: {
        tasks,
      },
    })
  );

  test("리스트가 없다면 없음을 출력한다.", () => {
    const { container } = render(<ListPresenter onClick={noop} tasks={[]} />);
    expect(container).toHaveTextContent("남은 작업이 없습니다.");
  });

  test("리스트가 있다면 리스트를 출력한다.", () => {
    const { container, getAllByText } = render(
      <ListPresenter onClick={noop} tasks={tasks} />
    );
    const button = getAllByText("완료");

    expect(container).toHaveTextContent("TASK1");
    expect(button).toBeTruthy();
  });
});
