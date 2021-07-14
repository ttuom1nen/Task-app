import LoginView from "./views/LoginView";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Switch, Route } from "react-router-dom";

// import "./App.css";

function Hooray() {
  return <p>Jee</p>;
}

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginView} />
      <PrivateRoute path="/">
        <Hooray></Hooray>
      </PrivateRoute>
    </Switch>
  );
}

export default App;
