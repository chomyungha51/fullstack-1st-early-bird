import { useTicket } from "../apis/ticket";

const TicketUseModal = ({ ticket, onOpen, onClose }) => {
  const ticketUsername = ticket.user.name;

  const useTicketAction = () => {
    useTicket(ticket.id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("지각 면제권 사용에 실패했습니다.");
        }
        alert(`${ticketUsername}님의 지각 면제권이 사용되었습니다!!`);
      })
      .catch((err) => {
        alert(err.message);
        console.error(err);
      });

    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-300 bg-opacity-80">
      <div className="absolute top-[calc(50vh-120px)] left-[calc(50vw-290px)] bg-white p-10 rounded-2xl">
        <div className="flex-col justify-between mt-7 w-[580px]">
          <div className="flex justify-center text-black text-2xl mb-16">
            정말&nbsp;
            <span className="text-3xl font-bold">{`"${ticketUsername}"`}</span>
            &nbsp;님의 지각 면제권을 사용하시겠습니까?
          </div>
          <div className="flex w-fill h-10 justify-center">
            <button
              className="text-xl text-black w-32 h-12 rounded-sm bg-yellow-300 hover:bg-yellow-100"
              onClick={useTicketAction}
            >
              사용
            </button>
            <div className="w-8" />
            <button
              className="text-xl text-white w-32 h-12 rounded-sm bg-black hover:bg-gray-500"
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketUseModal;
