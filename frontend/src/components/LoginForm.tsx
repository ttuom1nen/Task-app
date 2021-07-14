import React, { useState } from "react";
import { Segment, Container, Header, Form, Button } from "semantic-ui-react";
import { useAppDispatch } from "../hooks/useStore";
import { setCredentials } from "../state/authSlice";
import { LoginRequest /*, LoginResponse*/ } from "../models";
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
      <Header as="h2">Login</Header>
      {isLoading ? (
        <p>Logging in</p>
      ) : (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Field>
            <label>Username</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              autoComplete="username"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              id="current-password"
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Segment>
  );
};

export default LoginForm;
