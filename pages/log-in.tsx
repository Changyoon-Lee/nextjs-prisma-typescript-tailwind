// 로그인 진행하는 페이지//계정 생성하는 페이지
import useMutation from "@libs/client/useMutation";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";


interface LoginForm {
    email: string;
    password: string;
}

export default function CreateUser() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        mode: "onChange"
    });
    const [login, { loading, data, error }] = useMutation("/api/users/login");
    const onValid = (validForm: LoginForm) => {
        // backend 로 데이터 전달 되어야 함
        console.log(validForm, "=====")
        login(validForm);

    };
    console.log(loading, data, error);
    const onInValid = (errors: FieldErrors) => {
        console.log(errors)
    }

    const router = useRouter();
    useEffect(() => {
        if (data?.ok === true) {
            router.push("/",)
        } else if (data?.error) {
            alert(data?.error)
        } else {
            console.log("what's going on?")
        }

    }, [data?.error, data?.ok])

    return (
        <div className="m-10">
            <form onSubmit={handleSubmit(onValid, onInValid)} className="space-y-6 flex flex-col">
                <h1 className="font-semibold text-3xl">로그인 하세요</h1>
                <div className="flex">
                    <span className="block w-36 text-center bg-blue-200 p-3 rounded-l-lg">이메일 주소</span>
                    <input type="email"
                        {...register("email", {
                            required: "email 계정을 입력하세요",

                        })}
                        className={`max-w-md flex-1 rounded-r-lg border-2 focus:outline-none ${errors?.email?.message ? "border-red-500  focus:bg-yellow-200" : "border"}`} />
                    <span className="ml-5 text-red-500">{errors?.email?.message}</span>
                </div>
                <div className="flex">
                    <span className="block w-36 text-center bg-blue-200 p-3 rounded-l-lg">비밀 번호</span>
                    <input type="password"
                        {...register("password", {
                            required: "패스워드를 입력하세요",
                        })}
                        className={`max-w-md flex-1 rounded-r-lg border-2 focus:outline-none ${errors?.password?.message ? "border-red-500  focus:bg-yellow-200" : "border"}`} />
                    <span className="right-2 ml-5 text-red-500">{errors?.password?.message}</span>
                </div>
                <input type="submit" value={loading ? "Loading..." : "login"} className="bg-blue-300 font-bold p-3 rounded-lg cursor-pointer" />
            </form>
            <Link href={"/api/users/create"}>
                <a>새로운 계정 생성하기</a>
            </Link>
        </div>
    )
}