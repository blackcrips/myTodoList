import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props) {
  return <li className="tasks-tem">{props.taskName}</li>;
}

function TaskList() {
  return (
    <ul>
      <Task taskName="Follow Edukashon.ph on Facebook" />
      <Task taskName="Follow AWS Siklab Pilipinas on Facebook" />
      <Task taskName="Follow Zuitt Codking Bootcamp on Facebook" />
    </ul>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List App</h1>
        <p>The most simple and amazing todo-list React app.</p>

        <TaskList />
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
