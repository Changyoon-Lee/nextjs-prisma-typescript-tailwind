//tweet의 상세정보 보는 페이지
// like 버튼 , 클릭시 데이터 베이스에 저장되어야 함, import useUser from "@libs/client/useUser";

import LayOut from "@components/layout";
import useMutation from "@libs/client/useMutation";
// import { Post } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";



const PostDetail: NextPage = () => {
    const router = useRouter();
    const { data, mutate } = useSWR(router.query.id ? `/api/post/${router.query.id}` : null)
    const [toggleFav] = useMutation(`/api/post/${router.query.id}/fav`)
    const onFavClick = () => {
        if (!data) return;
        toggleFav({});
        mutate({ ...data, isLiked: !data.isLiked }, false)
    }
    console.log(data)
    return (
        <LayOut canGoBack>
            <div className="m-10">
                <h1 className="p-3 border rounded-lg font-semibold text-3xl">postdetail</h1>
                <div className="p-3 border rounded-t-lg bg-blue-100">
                    <div className="text-right font-semibold text-sm text-gray-500">{data?.post?.created}</div>
                    <div className="bg-white p-3 h-16">{data?.post?.message}</div>
                    <div className="flex">
                        <div className="space-x-2">
                            <span>❤️</span><span className="inline-block w-6">0</span>
                        </div>
                        <div className="space-x-2">
                            <span>💬</span><span className="inline-block w-6">1000</span>
                        </div>

                    </div>
                </div>
                <div className="flex justify rounded-b-lg bg-gray-100">
                    <div onClick={onFavClick} className="flex-1 py-2 text-center text-lg font-bold border-r-2 border-gray-300">좋아요</div>
                    <div className="flex-1 py-2 text-center text-lg font-bold ">댓글</div>
                </div>
            </div>
        </LayOut>
    )
};

export default PostDetail