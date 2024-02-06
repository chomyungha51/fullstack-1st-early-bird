import { tabNames } from "../constants";
import Ticket from "./Ticket";

const TicketContainer = ({ tickets, currentTab, onChangeTab }) => {
  return (
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
                onClick={() => onChangeTab(tab)}
                name={tab.name}
              >
                {tab.name}
              </div>
            );
          })}
        </div>

        <div className="p-5 bg-yellow-300 rounded-b-lg grid grid-cols-4 grid-rows-2 gap-y-5 h-[calc(100vh-450px)] overflow-y-scroll scrollbar-hide">
          {tickets.length > 0 &&
            tickets?.map((ticket) => {
              return <Ticket key={ticket.id} ticket={ticket} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default TicketContainer;
