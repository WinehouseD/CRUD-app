import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "./auth";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    setLoading(false);
  }, []);

  const addTask = (title) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuidv4(),
        title,
        status: false,
      },
    ]);
  };

  const updateStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id) => {
    setEditTaskId(id);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditTaskId(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const editTask = (id, title) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, title } : task))
    );
    handleCloseEditModal();
  };

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  return (
    <div className="container">
      <header>
        TODOS
        <Button
          style={{ position: "absolute", top: "0.8rem", right: "4rem" }}
          onClick={handleLogout}
          variant="contained"
          color="primary"
        >
          Logout
        </Button>
      </header>
      <h1>Note</h1>
      {editTaskId !== null && (
        <EditItem
          taskToEdit={tasks.find((task) => task.id === editTaskId)}
          onEditTask={editTask}
          open={isEditModalOpen}
          handleClose={handleCloseEditModal}
        />
      )}
      <AddItem onAddTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <Item
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            onUpdateStatus={updateStatus}
            onRemoveTask={removeTask}
            onEditTask={() => handleEditTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
