
const BASE_URL = `http://localhost:5173/api`;

export const searchUser = async (userName) => {
  const queryString = userName ? `?name=${userName}` : ``;

  const response = await fetch(`${BASE_URL}/users${queryString}`);
  return await response.json();
};