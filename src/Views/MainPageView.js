import React from "react";

import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 400,
    flexShrink: 1,
    flexGrow: 1,
    backgroundColor: "red",
  },
  content: {
    flexGrow: 10,
    padding: theme.spacing(3),
    backgroundColor: "blue",
  },
}));

function MainPageView() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <aside className={classes.drawer}>
        <h1>This is a drawer</h1>
      </aside>

      <section className={classes.content}>
        <h1>THe map will be here</h1>
      </section>
    </main>
  );
}

export default MainPageView;
