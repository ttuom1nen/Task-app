export interface LoginInfo {
  user: User;
  token: string;
}

export interface User {
  age: number;
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
