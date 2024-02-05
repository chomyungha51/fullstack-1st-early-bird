import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { getTickets } from "../apis/ticket";
import Ticket from "../components/Ticket";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onClose = () => {
    setModalOpen(false);
  };
  // GET tickets api
  getTickets("enable").then((res) => console.log(res));
  return (
    <>
      <DefaultLayout>
        <img src="src/assets/logo.png" width={500} height={500} />
        <Link to="/login"> 로그인 페이지로 이동 </Link>
        <div>
          <button onClick={() => setModalOpen(!modalOpen)}>면제권 추가</button>
          <div class="flex justify-center items-center">
            <div class="inline-block">
              <div class="flex">
                <div class="px-4 py-2 bg-yellow-400 text-white rounded-t-lg">
                  사용가능
                </div>

                <div class="px-4 py-2 bg-yellow-200 text-black rounded-t-lg cursor-pointer">
                  사용완료 · 기간만료
                </div>
                <div class="px-4 py-2 bg-yellow-200 text-black rounded-t-lg cursor-pointer">
                  전체
                </div>
              </div>

              <div class="p-5 bg-yellow-50 border rounded-b-lg">
                <Ticket />
              </div>
            </div>
          </div>
          {/* <div>
            면제권 리스트
            <div className="flex justify-around w-full">
              <div>
                미사용
                <div className="border-2 border-solid border-slate-400 rounded-lg">
                  <div>티켓 번호 : 1</div>
                  <div>티켓 설명 : 백엔드 퀴즈</div>
                  <div>사용자: 조명하</div>
                  <div>생성 일자: 2024-02-05</div>
                </div>
              </div>
              <div>
                사용 완료
                <div>
                 
                </div>
              </div>
              <div>전체</div>
            </div>
          </div> */}
        </div>
        <Modal open={modalOpen} onClose={onClose} />
      </DefaultLayout>
    </>
  );
};

export default Home;
