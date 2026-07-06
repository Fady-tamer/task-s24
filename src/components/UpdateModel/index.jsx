import { useRef } from "react";

const UpdateModel = ({
  index,
  task,
  tasks,
  setTasks,
  isUpdateModelOpen,
  setUpdateModelOpen,
}) => {
  const updateRef = useRef();
  const updateTask = (e) => {
    e.preventDefault();

    const allTasks = [...tasks];
    const newTasks = allTasks.toSpliced(index, 1, updateRef.current.value);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
    setUpdateModelOpen(false);
  };

  const cancel = () => {
    setUpdateModelOpen(false);
  };

  if (!isUpdateModelOpen) return null;

  return (
    <div className="ConfirmationModel absolute top-0 left-0 min-w-dvw min-h-dvh flex justify-center items-center bg-slate-900/40 backdrop-blur-sm transition-opacity">
      <div className="p-15 max-w-100 w-[90%] flex flex-col gap-7 items-center rounded-2xl bg-white">
        <p className="text-2xl font-bold">Update Task</p>
        <form className="flex flex-col gap-5 items-center">
          <input
            type="text"
            ref={updateRef}
            className="px-5 py-3 font-bold outline-0 rounded-lg bg-[#ccc]"
          />
          <div className="flex gap-7">
            <button
              type="submit"
              onClick={updateTask}
              className="px-5 py-3 font-bold rounded-lg cursor-pointer bg-green-500"
            >
              Save
            </button>
            <button
              onClick={cancel}
              className="px-5 py-3 font-bold rounded-lg cursor-pointer bg-red-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModel;
