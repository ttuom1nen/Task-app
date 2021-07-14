import React from "react";
import LoginForm from "../components/LoginForm";
import { Container, Grid, Segment, Header } from "semantic-ui-react";

const LoginView = () => {
  return (
    <Container>
      <Header as="h1">Login to Task App</Header>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <LoginForm></LoginForm>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default LoginView;
