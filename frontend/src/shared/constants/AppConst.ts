import { AuthUser } from "../../types/models/AuthUser";

export const authRole = {
  admin: ["admin"],
  user: ["user", "admin"],
};

export enum RoutePermittedRole {
  Admin = "admin",
  User = "user",
}

export const defaultUser: AuthUser = {
  uid: "john-alex",
  displayName: "John Alex",
  email: "demo@example.com",
  token: "access-token",
};
export const initialUrl = "/dashboards/crypto"; // this url will open after login

export const API_URL = "http://localhost:4000/api";
