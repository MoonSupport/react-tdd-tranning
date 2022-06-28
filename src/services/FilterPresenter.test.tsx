import { render } from "@testing-library/react";

import FilterPresenter from "./FilterPresenter";

const noop = () => {};

describe("[FilterPresenter] Filter", () => {
  test("전체, 미완료, 완료 필터 버튼을 렌더링 한다.", () => {
    const { container } = render(
      <FilterPresenter
        onClearFilterClick={noop}
        onCompletedFilterClick={noop}
        onInCompletedFilterClick={noop}
      />
    );

    expect(container).toHaveTextContent("전체");
    expect(container).toHaveTextContent("미완료");
    expect(container).toHaveTextContent("완료");
  });
});
