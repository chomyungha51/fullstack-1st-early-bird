const BASE_URL = `http://localhost:8080/api`;

export const getTickets = async (status = "all") => {
  const tickets = (await fetch(`${BASE_URL}/tickets?status=${status}`)).json();
  return tickets;
};

export const useTicket = async (ticketId) => {
  return fetch(`${BASE_URL}/tickets/${ticketId}`, {
    method: "PATCH",
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
