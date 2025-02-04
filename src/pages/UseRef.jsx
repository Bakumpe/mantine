import React, { useState } from "react";
import Header from "../components/Header";


function UseRef() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(""); 
    }
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const completedTask = tasks[index];
    setTasks(updatedTasks);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  const handleDeleteTask = (index, completed = false) => {
    if (completed) {
        const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
        setCompletedTasks(updatedCompletedTasks);
    } else {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
};


  const handleEditTask = (index) => {
    const newTaskText = prompt("Edit Task:", tasks[index].text);
    if (newTaskText !== null) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: newTaskText } : task
      );
      setTasks(updatedTasks);
    }
  };
  return (
    <>
      <Header />
      <div className="useRef">
        <h1>To do List </h1>
        <div className="toDo">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ul className="myList">
          <h1>My Tasks</h1>
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <div>
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleCompleteTask(index)}>
                  Add To Complete
                </button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <ul className="myCompleteList">
          <h1>Completed Tasks</h1>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                <span style={{ textDecoration: "line-through" }}>
                  {task.text}
                </span>
                <button onClick={() => handleDeleteTask(index, true)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
}
export default UseRef;
