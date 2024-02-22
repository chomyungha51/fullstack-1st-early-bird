

const BASE_URL = `http://localhost:5173/api`;

export const getTickets = async (status = "all") => {
  const tickets = (await fetch(`${BASE_URL}/tickets?status=${status}`)).json();
  return tickets;
};

export const useTicket = async (ticketId) => {
  return fetch(`${BASE_URL}/tickets/${ticketId}`, {
    method: "PATCH",
  });
};

export const addTickets = async (data) => {
  const response = await fetch(`${BASE_URL}/tickets`, {
    method: "POST", // 또는 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const searchUser = async (keyword) => {
  const data = (
    await fetch(
      `${BASE_URL}/users${keyword === undefined ? "" : `?name=${keyword}`}`
    )
  ).json();
  return data;
};
