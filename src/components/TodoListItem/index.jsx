import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import ConfirmationModel from "../confirmationModel";
import UpdateModel from "../UpdateModel";

const TodoItem = ({ index, task, tasks, setTasks }) => {
  const [isDeleteModelOpen, setDeleteModelOpen] = useState(false);
  const openDeleteModel = () => {
    setDeleteModelOpen(true);
  };

  const [isUpdateModelOpen, setUpdateModelOpen] = useState(false);
  const openUpdateModel = () => {
    setUpdateModelOpen(true);
  };

  return (
    <div className="todoItem max-w-100 w-[90%] mx-auto my-2.5 p-5 flex justify-between items-center rounded-2xl bg-[#ccc]">
      <p className="text-2xl font-bold">{task}</p>
      <div className="flex gap-3 text-2xl">
        <FiEdit
          onClick={openUpdateModel}
          className="text-yellow-500 cursor-pointer"
        />
        <MdDelete
          onClick={openDeleteModel}
          className="text-red-500 cursor-pointer"
        />
      </div>
      <UpdateModel
        key={index + 1}
        index={index}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        isUpdateModelOpen={isUpdateModelOpen}
        setUpdateModelOpen={setUpdateModelOpen}
      />
      <ConfirmationModel
        key={index + 2}
        index={index}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        isDeleteModelOpen={isDeleteModelOpen}
        setDeleteModelOpen={setDeleteModelOpen}
      />
    </div>
  );
};

export default TodoItem;
