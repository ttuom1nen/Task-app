interface Credentials {
  username: string;
  password: string;
}

const authenticate = async (credentials: Credentials) => {
  const response = await fetch("http://localhost:4000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();
};

export default authenticate;
