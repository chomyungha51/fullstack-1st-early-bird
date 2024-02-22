import { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";
import { searchUser } from "../apis/user";
import Spinner from "./Spinner";

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedUser, selectUser] = useState();

  useEffect(() => {
    setLoading(true);
    searchUser()
      .then((users) => {
        setUsers(users.users);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const closeDropDown = () => {
    setOpen(false);
  };

  const toggleDropDown = () => {
    setOpen(!isOpen);
  };

  let timer;
  const onInputChange = (e) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setLoading(true);
      searchUser(e.target.value)
        .then((users) => {
          setUsers(users.users);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative group w-[148px]">
        <button
          id="dropdown-button"
          className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          onClick={toggleDropDown}
        >
          <span className="mr-2">
            {selectedUser ? selectedUser.name : "받을 사람 선택"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="dropdown-menu"
          className={`${
            isOpen ? "" : "hidden"
          } absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
        >
          {/* Search input */}
          <input
            id="search-input"
            className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
            type="text"
            placeholder="이름으로 검색"
            autoComplete="off"
            onChange={onInputChange}
          />
          <div className="w-full max-h-40 overflow-y-auto">
            {isLoading ? (
              <div className="flex w-full h-10 justify-center items-center">
                <Spinner />
              </div>
            ) : (
              users.map((user) => (
                <DropdownItem
                  key={user.id}
                  user={user}
                  onClick={selectUser}
                  onClose={closeDropDown}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
