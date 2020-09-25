import React from "react";

import BasicForm from "../Components/BasicForm.js";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Link,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../Store/Slices/loginSlice.js";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: "2em",
  },

  text: {
    paddingBottom: "2em",
  },
}));

function LoginView() {
  const classes = useStyle();
  const routerHistory = useHistory();
  const dispatch = useDispatch();

  const loginFormContent = (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      alignContent="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <TextField
          fullWidth
          required
          autoFocus={true}
          name="login"
          id="login_username"
          label="Username"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          required
          type="password"
          name="password"
          id="login_password"
          label="Password"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          LOG IN
        </Button>
      </Grid>
    </Grid>
  );

  function afterLogin(ok, obj) {
    if (ok) {
      dispatch(setLogin(obj.login));
      routerHistory.push("/home");
    }
  }
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h5" component="h1" gutterBottom>
        Login
      </Typography>

      <Typography variant="body2" className={classes.text}>
        <Link component={RouterLink} to="/signup">
          Don't have a account?
        </Link>
      </Typography>

      <BasicForm id="loginForm" afterSubmit={afterLogin}>
        {loginFormContent}
      </BasicForm>
    </Container>
  );
}

export default LoginView;
