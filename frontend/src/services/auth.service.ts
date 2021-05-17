interface Credentials {
  email: string;
  password: string;
}

const authenticate = async (credentials: Credentials) => {
  try {
    const response = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    console.error(e.message);
  }
};

export default authenticate;
