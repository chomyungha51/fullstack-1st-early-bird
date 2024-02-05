const Ticket = () => {
  return (
    <div class="bg-yellow-200 shadow-sm rounded-lg overflow-hidden relative w-72 h-28 p-5 box-border">
      <h2 class="text-lg font-bold">Ticket Title</h2>
      <p class="text-sm">Description...</p>
      <div class="absolute w-5 h-5 bg-yellow-50 rounded-full -left-2.5 top-1/2 transform -translate-y-1/2"></div>
      <div class="absolute w-5 h-5 bg-yellow-50 rounded-full -right-2.5 top-1/2 transform -translate-y-1/2"></div>
    </div>
  );
};

export default Ticket;
