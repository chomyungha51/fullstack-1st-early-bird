import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { getTickets } from "../apis/ticket";
import Ticket from "../components/Ticket";
const tabNames = [
  { status: "enable", name: "사용가능" },
  { status: "disable", name: "사용완료 · 기간만료" },
  { status: "all", name: "전체" },
];
const parseDate = (date) => {
  return date !== null ? date.split("T")[0] : "";
};

const getToday = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};
const Home = () => {
  // const tickets = [
  //   {
  //     id: 2,
  //     userName: "test",
  //     description: "테스트입니다",
  //     expiredAt: "2024-02-05T00:00:00",
  //     usedAt: "2024-02-05T00:00:00",
  //     createdAt: "2024-02-05T00:00:00",
  //   },
  //   {
  //     id: 3,
  //     userName: "test",
  //     description: "테스트입니다",
  //     expiredAt: "2024-02-05T00:00:00",
  //     usedAt: "2024-02-05T00:00:00",
  //     createdAt: "2024-02-05T00:00:00",
  //   },
  // ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(tabNames[0]);
  const [tickets, setTickets] = useState([]);
  const onClickTab = (tab) => {
    setCurrentTab(tab);
  };

  const onClose = () => {
    setModalOpen(false);
  };
  // GET tickets api

  useEffect(() => {
    getTickets(currentTab.status).then((res) => {
      const parsedData = res.ticketList.map((data) => {
        return {
          ...data,
          createdAt: parseDate(data.createdAt),
          expiredAt: parseDate(data.expiredAt),
          usedAt: parseDate(data.usedAt),
          enable:
            data.usedAt === null &&
            parseDate(data.expiredAt).length > 0 &&
            parseDate(data.expiredAt) < getToday(),
        };
      });

      setTickets(
        parsedData
          .sort((a, b) => a.createdAt < b.createdAt)
          .sort((a, b) => (a.enable ? -1 : 1))
      );
    });
  }, [currentTab]);
  return (
    <>
      <DefaultLayout>
        <div className="flex justify-center">
          <img
            src="src/assets/logo.png"
            className=""
            width={300}
            height={300}
          />
          <button
            className="absolute right-[8rem] top-8 bg-black text-yellow-300 border-2 border-yellow-300 py-2 px-4 rounded font-bold hover:bg-yellow-300 hover:text-black transition-colors duration-300"
            onClick={() => setModalOpen(!modalOpen)}
          >
            면제권 추가
          </button>
          <Link
            className="top-8 bg-black text-yellow-300 border-2 border-yellow-300 py-2 px-4 rounded font-bold hover:bg-yellow-300 hover:text-black transition-colors duration-300 absolute right-5 p-10"
            to="/login"
          >
            로그인
          </Link>
        </div>

        <div className="p-10">
          <div className="flex justify-end"></div>

          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full">
              <div className="w-full flex">
                {tabNames.map((tab, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        tab.name === currentTab.name
                          ? "bg-yellow-300"
                          : "bg-yellow-50 hover:brightness-95"
                      } text-black px-4 py-2  rounded-t-lg cursor-pointer w-full text-center`}
                      onClick={() => onClickTab(tab)}
                      name={tab.name}
                    >
                      {tab.name}
                    </div>
                  );
                })}
              </div>

              <div className="p-5 bg-yellow-300 rounded-b-lg grid grid-cols-3 gap-y-5 ">
                {tickets.length > 0 &&
                  tickets?.map((ticket) => {
                    return <Ticket key={ticket.id} ticket={ticket} />;
                  })}
              </div>
            </div>
          </div>
        </div>
        <Modal open={modalOpen} onClose={onClose} />
      </DefaultLayout>
    </>
  );
};

export default Home;
