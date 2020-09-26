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
import AirportTable from "./AirportTable.js";

//Store
import { useDispatch } from "react-redux";
import { SetAirports } from "../../Store/Slices/airportSlice";

//default airports example
import defaultAirports from "../../locationsExemple.json";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function MainPageSideBar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
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

        <ListItem
          button
          onClick={() => dispatch(SetAirports(defaultAirports.aerodromes))}
        >
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary="Load Example Airports" />
        </ListItem>

        <ListItem>
          <AirportTable />
        </ListItem>
      </List>
    </>
  );
}

export default MainPageSideBar;
