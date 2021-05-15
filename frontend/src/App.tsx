import { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import { Grid, Segment } from "semantic-ui-react";
import "./App.css";

function App() {
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "http://localhost:4000/tasks?sortBy=createdAt:desc",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = await response.json();
  //     console.log(data);
  //   })();
  // }, []);

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
