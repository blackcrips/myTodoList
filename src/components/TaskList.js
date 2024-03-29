import { useState } from "react";
import Task from "./Task";

function TaskList() {
  const [tasksItemsList, setTaskItemList] = useState([
    "Follow Edukashon.ph on Facebook",
    "Follow AWS Siklab Pilipinas on Facebook",
    "Follow Zuitt Codking Bootcamp on Facebook",
  ]);

  const [taskValue, setTaskValue] = useState("");

  const inputChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };
  const addTaskHandler = (e) => {
    setTaskItemList([e.target.value, ...tasksItemsList]);
  };

  return (
    <div>
      <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
        onBlur={addTaskHandler}
        value={taskValue}
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
