import React, { useState } from "react";

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

import UploadDialog from "./UploadDialog.js";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function MainPageSideBar(props) {
  const classes = useStyles();
  const username = props.username;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <UploadDialog
        open={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      />
      <List
        className={classes.root}
        component="nav"
        aria-label="main mailbox folders"
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={username} />
        </ListItem>

        <Divider />

        <ListItem button onClick={() => setIsDialogOpen(true)}>
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
    </>
  );
}

export default MainPageSideBar;
