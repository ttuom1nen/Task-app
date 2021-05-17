import authenticate from "../services/auth.service";
import { Container, Header, Form, Checkbox, Button } from "semantic-ui-react";

const LoginForm = () => {
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    authenticate({ email, password }).then((user) => {
      if (user) {
        console.log(user);
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
