import { useState } from "react";
import Task from "./Task";

function TaskList() {
  const tasksItemsList = [
    "Follow Edukashon.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuitt Codking Bootcamp on Facebook",
  ];

  const [taskValue, setTaskValue] = useState("Just another task");

  console.log(taskValue);
  const inputChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };

  return (
    <div>
      <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
      />
      <ul>
        {tasksItemsList.map((task, index) => {
          return <Task key={index} taskName={task} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
