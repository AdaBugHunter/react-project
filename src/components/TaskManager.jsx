import { useState } from "react";

function TaskManager() {
  const [taskTitle, setTaskTitle] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", done: false },
    { id: 2, title: "Practice components", done: true }
  ]);

  function addTask() {
    if (!taskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      done: false
    };

    setTasks((previous) => [...previous, newTask]);
    setTaskTitle("");
  }

  function removeTask(id) {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );
  }

  function toggleTask(id) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  return (
    <div>
      <h2>Task Manager</h2>

      <input
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
        placeholder="Task title"
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((task) => (
        <div key={task.id}>
          <span>
            {task.title} - {task.done ? "Done" : "Pending"}
          </span>

          <button onClick={() => toggleTask(task.id)}>
            Toggle
          </button>

          <button onClick={() => removeTask(task.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskManager;