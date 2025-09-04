import "./App.css";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const fetchTasks = async () => {
    try {
      const apiUrl = process.env.REACT_APP_URL;
      const response = await axios.get(`${apiUrl}/tasks`);
      console.log(response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>Task Manager</h1>
    </div>
  );
};
export default App;
