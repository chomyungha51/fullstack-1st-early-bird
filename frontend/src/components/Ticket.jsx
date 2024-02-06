const Ticket = ({ ticket }) => {
  const { id, userName, description, expiredAt, usedAt, createdAt, enable } =
    ticket;

  return (
    <div className="place-self-center bg-yellow-50 shadow-sm rounded-lg overflow-hidden relative w-96 h-[190px] p-6 box-border text-black">
      <div className="flex justify-between align-middle ">
        <p className="font-bold my-2 text-2xl">{userName}의 면제권</p>
        {enable && (
          <button className="bg-yellow-300 hover:shadow-lg py-2 px-4 rounded text-lg">
            사용하기
          </button>
        )}
      </div>
      <div className="text-sm rounded-lg w-full">
        <div className="my-2 h-8">{description}</div>
        <div className="flex justify-between">
          <p>발행일자:</p>
          <p>{createdAt}</p>
        </div>

        <div className="flex justify-between">
          <p>만료일자:</p>
          <p>{expiredAt}</p>
        </div>
        <div
          className={`flex justify-between ${usedAt.length <= 0 && "hidden"}`}
        >
          <p>사용일자:</p>
          <p>{usedAt}</p>
        </div>
      </div>

      <div className="absolute w-5 h-5 bg-yellow-300 rounded-full -left-2.5 top-1/2 transform -translate-y-1/2"></div>
      <div className="absolute w-5 h-5 bg-yellow-300 rounded-full -right-2.5 top-1/2 transform -translate-y-1/2"></div>
    </div>
  );
};

export default Ticket;
