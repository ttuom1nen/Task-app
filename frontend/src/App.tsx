import React from "react";
import LoginView from "./views/LoginView";
import MainView from "./views/MainView";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/themes";
import "./App.css";

function App() {
  // const [theme, setTheme] = useState<any>(defaultTheme);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Switch>
        <Route exact path="/login" component={LoginView} />
        <PrivateRoute path="/">
          <MainView></MainView>
        </PrivateRoute>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
