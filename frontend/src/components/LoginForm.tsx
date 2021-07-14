import React, { useState } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { useAppDispatch } from "../hooks/useStore";
import { setCredentials } from "../state/authSlice";
import { LoginRequest } from "../models";
import { useLoginMutation } from "../services/auth.service";
import { useHistory } from "react-router-dom";

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

  return (
    <Segment>
      {isLoading ? (
        <p>Logging in</p>
      ) : (
        <Form size="large" onSubmit={(e) => handleSubmit(e)}>
          <Form.Field>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              name="email"
              placeholder="E-mail address"
              autoComplete="username"
              id="username"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              id="current-password"
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit" color="teal" fluid size="large">
            Submit
          </Button>
        </Form>
      )}
    </Segment>
  );
};

export default LoginForm;
