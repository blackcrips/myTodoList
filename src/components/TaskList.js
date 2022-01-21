import Task from "./Task";

function TaskList() {
  const tasksItemsList = [
    "Follow Edukashon.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuitt Codking Bootcamp on Facebook",
  ];

  return (
    <div>
      <input className="task-input" />
      <ul>
        {tasksItemsList.map((task, index) => {
          return <Task key={index} taskName={task} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
