import { Container, Header, Form, Checkbox, Button } from "semantic-ui-react";

const LoginForm = () => {
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    const username = target.username.value;
    const password = target.password.value;
  };

  return (
    <Container>
      <Header as="h1">First Header</Header>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Field>
          <label>Username</label>
          <input type="text" placeholder="Username" name="username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
