import LayOut from "@components/layout";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { Post } from "@prisma/client";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";

interface PostsWithCount extends Post {
  _count: {
    Fav: number;
  }
}
interface PostsResponse {
  ok: boolean;
  posts: PostsWithCount[];
}
// 로그인 여부 확인, 로그인이 되어있다면 홈페이지를 그렇지않다면 계정 생성/로그인 페이지로 이동
const Home: NextPage = () => {
  const [logout, { data: logoutok }] = useMutation("/api/users/logout");
  const router = useRouter();
  const onclick = () => {
    router.push("/tweet/post")
  }
  const onLogoutClick = () => {
    logout("")
  }
  const { user, isLoading } = useUser();
  const { data } = useSWR<PostsResponse>("/api/post");//fetch가 기본적으로 get method로 작동함
  console.log(data, isLoading)

  useEffect(() => {
    if (logoutok) {
      router.push("/log-in")
    }
  }, [logoutok])

  return (
    <LayOut title="상봉제2동" hasTabBar>
      <div>
        <div onClick={onLogoutClick}>logout</div>
        <h1>your Posts {user?.name}</h1>
        {data?.posts?.map((post) => (
          <Link href={`/tweet/${post.id}`} key={post.id}>
            <div className={"border-2 rounded-lg m-10"}>
              <div className={"text-right text-xs border-b-2 bg-blue-100 p-3"}>{post.updated.toString()}</div>
              <div className={"p-3"}>{post.message}</div>
              <div className={"flex justify-end space-x-5 pr-5"}>
                <div className={"space-x-2"}>
                  <span>❤️</span><span className={"inline-block w-6"}>{post._count.Fav}</span></div>
                <div className={"space-x-2"}>
                  <span>💬</span><span className={"inline-block w-6"}>1000</span></div>
              </div>
            </div>
          </Link>
        ))}
        <div onClick={onclick} className={"bg-orange-500 shadow-sm shadow-gray-500 active:bg-orange-400 active:shadow-lg rounded-full fixed right-5 bottom-20 cursor-pointer"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            className="text-white w-8 h-8 m-3"><g xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path d="M12 19V5M19 12H5" /></g></svg>
        </div>
      </div>
    </LayOut>
  )
};

export default Home;