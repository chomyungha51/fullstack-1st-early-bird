export const getTickets = async (status = "all") => {
  const tickets = (
    await fetch(`http://localhost:8080/tickets?status=${status}`)
  ).json();
  return tickets;
};
