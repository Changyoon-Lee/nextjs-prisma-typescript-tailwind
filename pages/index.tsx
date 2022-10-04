import useUser from "@libs/client/useUser";
import React from "react";
// 로그인 여부 확인, 로그인이 되어있다면 홈페이지를 그렇지않다면 계정 생성/로그인 페이지로 이동
export default () => {
  const user = useUser();
  console.log(user)

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
};

