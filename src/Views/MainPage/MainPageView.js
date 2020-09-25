import React from "react";

import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SideBar from "./SideBar.js";
import MainMap from "./Map.js";

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

  return (
    <main className={classes.root}>
      <Paper variant="outlined" square className={classes.drawer}>
        <SideBar />
      </Paper>

      <section id="mainMap" className={classes.content}>
        <MainMap containerId="mainMap" />
      </section>
    </main>
  );
}

export default MainPageView;
