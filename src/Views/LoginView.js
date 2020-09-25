import React from "react";

import BasicForm from "../Components/BasicForm.js";
import { Button, TextField, Grid, Link, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  container: {},
}));

function LoginView() {
  const classes = useStyle();

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
          autoFocus={true}
          name="login"
          id="usernameField_logIn"
          label="Username"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          type="password"
          name="password"
          id="passowordField_logIn"
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

  return (
    <Container maxWidth="sm">
      <BasicForm id="loginForm" afterSubmit={() => console.log("submited")}>
        {loginFormContent}
      </BasicForm>
    </Container>
  );
}

export default LoginView;
