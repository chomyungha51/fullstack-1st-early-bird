const BASE_URL = import.meta.env.VITE_BASE_URL;

export const searchUser = async (userName) => {
  const queryString = userName ? `?name=${userName}` : ``;

  const response = await fetch(`${BASE_URL}/users${queryString}`);
  return await response.json();
};