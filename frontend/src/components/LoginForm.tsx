import authenticate from "../services/auth.service";
// import { RootState } from "../state/store";
import { Container, Header, Form, Button } from "semantic-ui-react";
import { /*useAppSelector,*/ useAppDispatch } from "../state/hooks";
import { setName } from "../state/userSlice";
import { LoginInfo } from "../models";

const LoginForm = () => {
  // const name = useAppSelector((state: RootState) => state.user.name);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    authenticate({ email, password }).then((loginInfo: LoginInfo) => {
      if (loginInfo) {
        const { user } = loginInfo;
        dispatch(setName(user.name));
      }
    });
  };

  return (
    <Container>
      <Header as="h1">Login</Header>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Field>
          <label>Username</label>
          <input type="text" placeholder="Email" name="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
