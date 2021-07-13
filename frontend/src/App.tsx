import LoginForm from "./components/LoginForm";
import { Grid, Segment } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Grid columns="equal">
      <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <Segment>
            <LoginForm></LoginForm>
          </Segment>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
