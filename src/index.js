import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskList from "./components/TaskList";

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
