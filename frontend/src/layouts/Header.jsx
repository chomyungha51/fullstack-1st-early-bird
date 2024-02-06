import { roles } from "../constants";
import { Link, useLocation } from "react-router-dom";

const Header = ({ user, modalOpen }) => {
  const currentPage = useLocation().pathname;

  return (
    <div className="flex justify-center">
      <img
        src="src/assets/logo.png"
        className="h-[320px] w-[300px]"
        width={300}
        height={300}
      />
      {user.role === roles[1] && (
        <button
          className="absolute right-[8rem] top-8 bg-black text-light-yellow border-2 border-light-yellow py-2 px-4 rounded  hover:bg-light-yellow hover:text-black transition-colors duration-300"
          onClick={modalOpen}
        >
          면제권 추가
        </button>
      )}
      {currentPage === "/" ? (
        <Link
          className="top-8 bg-black text-light-yellow border-2 border-light-yellow py-2 px-4 rounded  hover:bg-light-yellow hover:text-black transition-colors duration-300 absolute right-5 p-10"
          to="/login"
        >
          로그인
        </Link>
      ) : (
        <Link
          to="/"
          className="top-8 bg-black text-light-yellow border-2 border-light-yellow py-2 px-4 rounded  hover:bg-light-yellow hover:text-black transition-colors duration-300 absolute right-5 p-10"
        >
          홈
        </Link>
      )}
    </div>
  );
};

export default Header;
