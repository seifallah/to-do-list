import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListAltIcon from '@material-ui/icons/ListAlt';
const TodoItem = ({item, handleDelete, handleEdit}) => {

    return (
  
    <ListItem>
         <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
    <ListItemText
      primary={item.name}
      secondary={item.description?item.description : null}
    />
    <ListItemSecondaryAction>
    <Chip
        variant="outlined"
        label={item.status==="1"?"comleted":"not yet"}
        color={item.status==="1"?"primary":"secondary"}
      />
    <IconButton edge="start" aria-label="edit" onClick={() => handleEdit(item)}>
        <EditIcon />
    </IconButton>
    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
        <DeleteIcon />
    </IconButton>
    </ListItemSecondaryAction>
  </ListItem>    
    
    
    
    
    
    
    );
}
 
export default TodoItem;