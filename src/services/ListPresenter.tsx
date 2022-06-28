import { Task } from "./types";

interface IListProps {
  tasks: Task[];
  onClick: (id: number) => void;
}

const ListPresenter = ({ tasks, onClick }: IListProps) => {
  if (tasks.length === 0) return <p>남은 작업이 없습니다.</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          {!task.completed && (
            <button onClick={() => onClick(task.id)}>완료</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListPresenter;
