import Navbar from "../../components/Navbar";
import TodoListHeader from "../../components/TodoListHeader";
import TodoListItem from "../../components/TodoListItem";

import { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center relative">
      <Navbar />
      <TodoListHeader tasks={tasks} setTasks={setTasks} />

      {tasks.map((task, index) => {
        return (
          <TodoListItem
            key={index}
            index={index}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
};

export default Home;
