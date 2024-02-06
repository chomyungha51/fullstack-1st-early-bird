import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { getTickets } from "../apis/ticket";
import Header from "../layouts/Header";
import { tabNames } from "../constants";
import TicketContainer from "../components/TicketContainer";


const parseDate = (date) => {
  return date !== null ? date.split("T")[0] : "";
};

const getToday = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};
const Home = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(tabNames[0]);
  const [tickets, setTickets] = useState([]);
  const [AddModalOpen, setAddModal] = useState(false);
  const onClickTab = (tab) => {
    setCurrentTab(tab);
  };
  const onOpen = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
  };

  const openAddModal = () => {
    setAddModal(true)
  }
  const closeAddModal = () => {
    setAddModal(false)
  }


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
        <Header user={user} modalOpen={onOpen} addModalOpen={AddModalOpen} openAddModal={openAddModal} closeAddModal={closeAddModal}/>
        <div className="p-10">
          <TicketContainer
            tickets={tickets}
            currentTab={currentTab}
            onChangeTab={onClickTab}
            modalOpen={modalOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Home;
