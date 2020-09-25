import React from "react";

import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SideBar from "./SideBar.js";
import MainMap from "./Map.js";

//store
import { useSelector } from "react-redux";
import { selectLogged, selectLogin } from "../../Store/Slices/loginSlice.js";

import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 400,
    flexShrink: 1,
    flexGrow: 1,
  },
  content: {
    flexGrow: 10,
    padding: theme.spacing(3),
    height: "1000px",
  },
}));

function MainPageView() {
  const classes = useStyles();
  const username = useSelector(selectLogin);
  const isLogged = useSelector(selectLogged);

  //User not logged - redirect to login
  if (!isLogged) {
    return <Redirect to="/login" />;
  }

  return (
    <main className={classes.root}>
      <Paper variant="outlined" square className={classes.drawer}>
        <SideBar username={username} />
      </Paper>

      <section id="mainMap" className={classes.content}>
        <MainMap containerId="mainMap" />
      </section>
    </main>
  );
}

export default MainPageView;
