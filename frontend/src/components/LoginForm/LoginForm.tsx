import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/useStore";
import { setCredentials } from "../../state/authSlice";
import { LoginRequest } from "../../models";
import { useLoginMutation } from "../../services/auth.service";
import { useHistory } from "react-router-dom";
import { PaddedContainer } from "../Common/Common.styles";
import { CustomButton } from "../Common/CustomButton.styles";
import { CustomInput } from "../Common/CustomInput.styles";
import { Form } from "./LoginForm.styles";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();

  const [formState, setFormState] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();

  const loginUser = async () => {
    try {
      const user = await login(formState).unwrap();
      dispatch(setCredentials(user));
      push("/");
    } catch (e) {
      console.error(e);
      // TODO: Show error toast
    }
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    loginUser();
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  if (isLoading) {
    return <p>Logging in</p>;
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <PaddedContainer>
        <CustomInput
          placeholder="Email"
          name="email"
          autoComplete="username"
          id="username"
          onChange={handleChange}
        ></CustomInput>
      </PaddedContainer>
      <PaddedContainer>
        <CustomInput
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          id="current-password"
          onChange={handleChange}
        ></CustomInput>
      </PaddedContainer>
      <PaddedContainer>
        <CustomButton type="submit" onSubmit={(e) => handleSubmit(e)}>
          Login
        </CustomButton>
      </PaddedContainer>
    </Form>
  );
};

export default LoginForm;
