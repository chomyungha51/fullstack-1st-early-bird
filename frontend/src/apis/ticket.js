
const BASE_URL = `http://localhost:8080/api`;

export const getTickets = async (status = "all") => {
  const tickets = (
    await fetch(`${BASE_URL}/tickets?status=${status}`)
  ).json();
  return tickets;
};

export const useTicket = async (ticketId) => {
  return fetch(`${BASE_URL}/tickets/${ticketId}`, {
    method: "PATCH",
  });
};

export const addTickets = async (data) => {
  const response = await fetch("http://localhost:8080/tickets", {
      method: "POST", // 또는 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
}