import React from "react";
import Task from "./Task";

function TaskList({ tasks, loading }) {
  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">no item</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </div>
  );
}

export default TaskList;
