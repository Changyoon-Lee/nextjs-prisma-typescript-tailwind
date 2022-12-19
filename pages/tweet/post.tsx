//계정 생성하는 페이지
import LayOut from "@components/layout";
import useMutation from "@libs/client/useMutation";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";


interface UploadForm {
    message: string;
}
interface UploadPostMutation {
    ok: boolean;
    post: Post;
}

export default function UploadTweet() {
    const { register, handleSubmit } = useForm<UploadForm>({});
    const [uploadPost, { loading, data }] = useMutation<UploadPostMutation>("/api/post");
    const onValid = (validForm: UploadForm) => {
        // backend 로 데이터 전달 되어야 함
        uploadPost(validForm);

    };
    const onInValid = (errors: FieldErrors) => {
        console.log(errors)
    }
    const router = useRouter();
    useEffect(() => {
        if (data?.ok) {
            router.push(`/tweet/${data.post.id}`)
        }

    }, [data, router])

    return (
        <LayOut canGoBack>
            <div className="m-10">
                <form onSubmit={handleSubmit(onValid, onInValid)} className="space-y-6 flex flex-col">
                    <h1 className="font-semibold text-3xl">메세지를 입력하세요</h1>
                    <textarea {...register("message", { required: "any message?" })} placeholder="wrtie your message"
                        className="border-2 border-blue-400 p-5 h-60" />
                    <input type="submit" value={loading ? "Loading..." : "upload tweet"} className="bg-blue-300 font-bold p-3 rounded-lg cursor-pointer" />
                </form>
            </div>
        </LayOut>
    )
}