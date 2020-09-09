import { jsonQuery, query, getLocalToken } from "./common";

export const getUserInfoFromLocal = () => {
  const token = getLocalToken();
  const userInfo = token ? token.user : null;
  return userInfo;
}

export async function apiUserById(id) {
  return await query(`/auth/email/user/${id}/`);
}

export async function apiUpdateUser(id, data) {
  return await jsonQuery(`/auth/email/user/${id}/`, 'PUT', data);
}

export async function apiUpdateUserPassword(data) {
  return await jsonQuery(`/auth/email/password/change/`, 'POST', data);
}
