import { Link, useNavigate } from "react-router-dom";
import DefaultLayout, { notify } from "../layouts/DefaultLayout";
import { useState } from "react";
import Header from "../layouts/Header";
import { roles } from "../constants";

const Login = ({ user, onChangeUser }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [inputCheck, setInputCheck] = useState(false);
  const [session, setSession] = useState(true);

  const login = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: id,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        console.log(data);
        onChangeUser({
          username: data.username,
          role: roles[1],
        });

        navigate("/", { state: data });
        setSession(false);

        console.log(data);
      } else if (data.status === "fail") {
        setInputCheck(true);

        setTimeout(() => {
          setInputCheck(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSession(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DefaultLayout>
        <Header user={user} />
        {!session && (
          <div className="flex justify-center ">
            <span className="inline-flex flex-col mt-10  bg-yellow-300">
              <span className="inline-flex">
                <img
                  className="bg-yellow-400"
                  src="public/pwd-icon.png"
                  width={30}
                  height={10}
                />
                <input
                  className="bg-yellow-200 text-black"
                  id="id"
                  value={id}
                  onChange={(event) => setId(event.target.value)}
                />
              </span>
              <span className="inline-flex mt-0.5">
                <img
                  className="bg-yellow-400"
                  src="public/id-icon.png"
                  width={30}
                  height={10}
                />
                <input
                  className="bg-yellow-200 text-black"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </span>
              <button className="text-black" onClick={login}>
                로그인
              </button>
            </span>
          </div>
        )}
        {session && (
          <div className="flex flex-col justify-center mt-7 ">
            <button className="text-yellow-500" onClick={logout}>
              로그아웃
            </button>
            <p className="flex justify-center mt-7">이미 로그인중입니다.</p>
          </div>
        )}
        {inputCheck && <p className="flex justify-center">확인 해주세요</p>}
      </DefaultLayout>
    </>
  );
};

export default Login;
