import DefaultLayout, { notify } from "../layouts/DefaultLayout";
import Header from "../layouts/Header";

const Login = ({ user, onChangeUser }) => {
  // TODO : 아이디 비밀번호 입력받기

  const login = () => {
    // TODO : 로그인 api 호출 및 response에 따른 처리
    notify("로그인 성공/실패");
  };
  return (
    <>
      <DefaultLayout>
        <Header user={user} />

        <div>
          <div>
            아이디
            <input />
          </div>
          <div>
            비밀번호
            <input />
          </div>
          <button onClick={login}>로그인</button>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Login;
