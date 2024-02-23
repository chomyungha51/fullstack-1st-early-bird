import { useEffect, useRef, useState } from "react";
import { enteredTodoFormIsNotEmpty } from "../utils/utils";
import { addTickets } from "../apis/ticket";
import Dropdown from "../components/Dropdown";

const NewTicketForm = ({ closeAddModal, children }) => {
  const [user, setUser] = useState({ id: 0, name: "" });
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isFormInvalid, setInvalid] = useState(true);
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    if (enteredTodoFormIsNotEmpty(user.name, description)) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }, [user, description]);

  const issueTicket = () => {
    addTickets({
      userId: user.id,
      description: description,
      expireAt: date,
    })
      .then((response) => {
        closeAddModal();
        if (response.ok) {
          alert("지각 면제권이 발행되었습니다.");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <div className="flex-col justify-start">
        <h3 className="flex text-3xl justify-center">지각 면제권 발행</h3>
        <div className="flex-col w-full h-full">
          <div className="flex my-5">
            <label htmlFor="userId" className="flex items-center text-lg w-24">
              받을 사람
            </label>
            <Dropdown key={user.id} selectedUser={user} onSelect={setUser} />
          </div>
          <div className="flex my-5">
            <label
              htmlFor="description"
              className="flex items-center text-lg w-24"
            >
              받는 이유
            </label>
            <textarea
              name="description"
              rows="3"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className="flex my-5">
            <label htmlFor="expiredAt" className="text-lg w-24">
              만료일자
            </label>
            <input
              type="date"
              name="expiredAt"
              onChange={handleChange}
              ref={dateInputRef}
            />
          </div>
          {isFormInvalid && (
            <div className="mt-2 text-red-500 mb-5">
              모든 항목을 채워서 작성해주세요
            </div>
          )}

          <div className="flex justify-end gap-4">
            <button
              className="w-20 h-10 rounded-sm text-white bg-black hover:bg-gray-400"
              type="button"
              onClick={closeAddModal}
            >
              취소
            </button>
            <button
              className="w-20 h-10 rounded-sm text-black bg-yellow-500 disabled:bg-gray-400 hover:bg-gray-700"
              type="button"
              onClick={issueTicket}
              disabled={isFormInvalid}
            >
              추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTicketForm;
