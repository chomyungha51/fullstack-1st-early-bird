import { useEffect, useState } from "react";
import { searchUser } from "../apis/ticket";

const UserSearchInput = () => {
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const delayDebounceTimer = setTimeout(() => {
      searchUser(keyword).then((res) => {
        console.log(res);
      });
    }, 500);
    return () => clearTimeout(delayDebounceTimer);
  }, [keyword]);

  return (
    <>
      <input value={keyword} onChange={onChangeKeyword} />
      <select>
        <option />
      </select>
    </>
  );
};
export default UserSearchInput;
