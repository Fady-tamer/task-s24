import { useRef } from "react";
import TodoItem from "../TodoListItem";

const TodoList = ({ tasks, setTasks }) => {
  const taskRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const newTasks = [...tasks, taskRef.current.value];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
    taskRef.current.value = "";
  };

  return (
    <div className="TodoList max-w-100 w-[90%] m-5 p-5 flex flex-col rounded-2xl bg-[#ccc]">
      <form onSubmit={submitHandler}>
        <p className="mb-5 text-center text-2xl font-bold">Add Your Task</p>
        <div className="flex gap-3">
          <input
            type="text"
            required
            className="w-8/12 px-5 py-2.5 font-bold outline-0 rounded-lg bg-white"
            ref={taskRef}
          />
          <button
            type="submit"
            className="w-4/12 px-5 py-2.5 font-bold rounded-lg cursor-pointer bg-green-500"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoList;
