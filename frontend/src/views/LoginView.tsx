import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import {
  MainContent,
  PaddedContainer,
} from "../components/Common/Common.styles";

const LoginView = () => {
  return (
    <MainContent>
      <PaddedContainer>
        <LoginForm></LoginForm>
      </PaddedContainer>
    </MainContent>
  );
};

export default LoginView;
