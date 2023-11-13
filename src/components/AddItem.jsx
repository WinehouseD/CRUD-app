import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddItem = ({ onAddTask }) => {
  const [tasksTitle, setTasksTitle] = useState("");

  const addTask = () => {
    if (tasksTitle.trim() !== "") {
      onAddTask(tasksTitle);
    }
    setTasksTitle("");
  };

  return (
    <div className="input-field">
      <TextField
        type="text"
        variant="outlined"
        id="outlined-basic"
        autoComplete="off"
        label="Task name"
        value={tasksTitle}
        onChange={(e) =>
          setTasksTitle(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          )
        }
        inputProps={{ maxLength: 20 }}
        fullWidth
      />
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ marginTop: "0.6rem" }}
        onClick={addTask}
      >
        Add Task
      </Button>
    </div>
  );
};

export default AddItem;
