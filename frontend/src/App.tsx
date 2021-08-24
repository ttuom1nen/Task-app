import React, { useState } from "react";
import LoginView from "./views/LoginView";
import MainView from "./views/MainView";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import defaultTheme from "./themes/default.theme";
import { defaultTheme, darkTheme } from "./themes/themes";

function App() {
  const [theme, setTheme] = useState<any>(defaultTheme);

  const switchTheme = () => {
    console.log("switchTheme");
    setTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <button onClick={switchTheme}>switch</button>
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
