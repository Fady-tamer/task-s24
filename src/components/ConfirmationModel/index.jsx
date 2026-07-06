const ConfirmationModel = ({
  index,
  task,
  tasks,
  setTasks,
  isDeleteModelOpen,
  setDeleteModelOpen,
}) => {
  const deleteTask = () => {
    const filteredTasks = tasks.filter((task, i) => i != index);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
    setTasks(filteredTasks);
    setDeleteModelOpen(false);
  };

  const cancel = () => {
    setDeleteModelOpen(false);
  };

  if (!isDeleteModelOpen) return null;

  return (
    <div className="ConfirmationModel absolute top-0 left-0 min-w-dvw min-h-dvh flex justify-center items-center bg-slate-900/40 backdrop-blur-sm transition-opacity">
      <div className="p-15 max-w-100 w-[90%] flex flex-col gap-7 items-center rounded-2xl bg-white">
        <p className="text-2xl text-center font-bold">
          Are You Sure To Delete This Task?
        </p>
        <div className="flex gap-7">
          <button
            onClick={deleteTask}
            className="px-5 py-3 font-bold rounded-lg cursor-pointer bg-green-500"
          >
            Sure
          </button>
          <button
            onClick={cancel}
            className="px-5 py-3 font-bold rounded-lg cursor-pointer bg-red-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModel;
