import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
  Divider,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import RoomIcon from "@material-ui/icons/Room";
import BackupIcon from "@material-ui/icons/Backup";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function MainPageSideBar() {
  const classes = useStyles();

  return (
    <List
      className={classes.root}
      component="nav"
      aria-label="main mailbox folders"
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>U</Avatar>
        </ListItemAvatar>
        <ListItemText primary="User" />
      </ListItem>

      <Divider />

      <ListItem button onClick={() => console.log("click1")}>
        <ListItemIcon>
          <BackupIcon />
        </ListItemIcon>
        <ListItemText primary="Upload File" />
      </ListItem>

      <ListItem button onClick={() => console.log("click2")}>
        <ListItemIcon>
          <RoomIcon />
        </ListItemIcon>
        <ListItemText primary="Show Points" />
      </ListItem>
    </List>
  );
}

export default MainPageSideBar;
