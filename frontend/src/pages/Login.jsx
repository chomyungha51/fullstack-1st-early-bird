import { Link, useNavigate } from "react-router-dom";
import DefaultLayout, { notify } from "../layouts/DefaultLayout";
import { useState } from "react";


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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: id,
          password: password
        })
      });

      const data = await response.json();

      if (data.status === 'success') {
        // onChangeUser(data);

        navigate("/", { state: data });

        console.log(data);
      } else if (data.status === 'fail') {
        setInputCheck(true);

        setTimeout(() => {
          setInputCheck(false)
        }, 1000)

      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <DefaultLayout>
        <div className="flex justify-center">
          <img src="src/assets/logo.png"
            className=""
            width={300}
            height={300} />
        </div>
        <Link className="flex justify-center" to="/">
          홈 화면으로 이동 </Link>
        <div className="flex justify-center ">
          <span className="inline-flex flex-col mt-10  bg-yellow-300">
            <span className="inline-flex">
              <img className="bg-yellow-400" src="src/assets/pwd-icon.png" width={30} height={10} />
              <input className="bg-yellow-200 text-black" id='id' value={id} onChange={event => setId(event.target.value)} />
            </span>
            <span className="inline-flex mt-0.5">
              <img className="bg-yellow-400" src="src/assets/id-icon.png" width={30} height={10} />
              <input className="bg-yellow-200 text-black" id='password' type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </span>
            <button className="text-black" onClick={login}>로그인</button>
          </span>
        </div>
        {inputCheck && <p className="flex justify-center">확인 해주세요</p>}
      </DefaultLayout>
    </>
  );
};

export default Login;
