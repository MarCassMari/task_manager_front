import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const apiUrl = process.env.REACT_APP_URL;
      const { data } = await axios.get(`${apiUrl}/tasks`);
      setTasks(data);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <div className="tasks-lists">
          {tasks
            .filter((task) => !task.isCompleted)
            .map((lastTask) => (
              <p>{lastTask.description}</p>
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluidas</h3>
        <div className="tasks-lists">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <p>{completedTask.description}</p>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Tasks;
