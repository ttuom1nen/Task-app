// import authenticate from "../services/_auth.service";
// import { RootState } from "../state/store";
import React, { useState } from "react";
import { Container, Header, Form, Button } from "semantic-ui-react";
import { /*useAppSelector,*/ useAppDispatch } from "../state/hooks";
import { setCredentials } from "../state/authSlice";
import { LoginRequest /*, LoginResponse*/ } from "../models";
import { useLoginMutation } from "../services/auth.service";

const LoginForm = () => {
  // const name = useAppSelector((state: RootState) => state.user.name);
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();

  const loginUser = async () => {
    try {
      const user = await login(formState).unwrap();
      dispatch(setCredentials(user));
      // TODO: push('/')
    } catch (err) {
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
    <Container>
      <Header as="h1">Login</Header>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
