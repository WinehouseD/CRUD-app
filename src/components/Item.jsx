import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Item = ({
  id,
  title,
  status,
  onUpdateStatus,
  onRemoveTask,
  onEditTask,
}) => {
  return (
    <div>
      <ListItem>
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            checked={status}
            onChange={() => onUpdateStatus(id)}
          />
          <IconButton
            onClick={() => onRemoveTask(id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={onEditTask} edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
};

export default Item;
