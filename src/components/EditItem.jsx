import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const EditItem = ({ taskToEdit, onEditTask, open, handleClose }) => {
  const [tasksTitle, setTasksTitle] = useState("");

  useEffect(() => {
    setTasksTitle(taskToEdit.title);
  }, [taskToEdit]);

  const editTask = () => {
    if (tasksTitle.trim() !== "") {
      onEditTask(taskToEdit.id, tasksTitle);
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ style: { borderRadius: 10 } }}
    >
      <DialogTitle>EDIT TASK</DialogTitle>
      <DialogContent>
        <DialogContentText>Update the task name:</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="taskName"
          type="text"
          fullWidth
          value={tasksTitle}
          onChange={(e) => setTasksTitle(e.target.value)}
          inputProps={{ maxLength: 20 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={editTask} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditItem;
