import React from "react";
import LoginForm from "../components/LoginForm";
import { Grid, Header, Message } from "semantic-ui-react";

const LoginView = () => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <LoginForm></LoginForm>
        <Message>
          No account yet? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginView;
