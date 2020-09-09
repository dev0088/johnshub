import { jsonQuery } from "./common";

export async function signupWithAPI(data) {
  return await jsonQuery(`/auth/email/registration/`, "POST", data);
}

export async function loginWithAPI(data) {
  return await jsonQuery(`/auth/email/login/`, "POST", data);
}

export async function logoutWithAPI(data) {
  return await jsonQuery(`/auth/email/loginout/`, "POST", data);
}