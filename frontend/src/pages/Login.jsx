import { useNavigate } from "react-router-dom";
import DefaultLayout, { notify } from "../layouts/DefaultLayout";
import { useState } from "react";
import Header from "../layouts/Header";

const Login = ({ user, onChangeUser }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [inputCheck, setInputCheck] = useState(false);

  const login = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
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
        // onChangeUser(data);

        navigate("/", { state: data });

        console.log(data);
        notify("로그인 성공");
      } else if (data.status === "fail") {
        setInputCheck(true);
        notify("로그인 실패");
        setTimeout(() => {
          setInputCheck(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DefaultLayout>
        <Header user={user} onChangeUser={() => onChangeUser(data)} />
        <div className="flex justify-center ">
          <span className="inline-flex flex-col mt-10  bg-yellow-300">
            <span className="inline-flex">
              <img
                className="bg-yellow-400"
                src="src/assets/pwd-icon.png"
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
                src="src/assets/id-icon.png"
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
        {inputCheck && <p className="flex justify-center">확인 해주세요</p>}
      </DefaultLayout>
    </>
  );
};

export default Login;
