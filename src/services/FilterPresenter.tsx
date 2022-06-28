interface IFilterPresenterProps {
  onClearFilterClick: () => void;
  onInCompletedFilterClick: () => void;
  onCompletedFilterClick: () => void;
}

const FilterPresenter = ({
  onClearFilterClick,
  onInCompletedFilterClick,
  onCompletedFilterClick,
}: IFilterPresenterProps) => {
  return (
    <div>
      <button onClick={() => onClearFilterClick()}>전체</button>
      <button onClick={() => onInCompletedFilterClick()}>미완료</button>
      <button onClick={() => onCompletedFilterClick()}>완료</button>
    </div>
  );
};

export default FilterPresenter;
