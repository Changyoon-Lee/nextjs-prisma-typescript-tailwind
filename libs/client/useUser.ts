import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useUser() {
    const { data, error } = useSWR("/api/users/me"); // url이 마치 key처럼 내부적으로 활용됨, fetcher는 _app.tsx에 전역으로 설정되어있음
    const router = useRouter();
    useEffect(() => {
        if (data && !data.ok) {
            console.log("useUser's data:", data)
            router.replace("/log-in")
        }
    }, [data, router])

    return { user: data?.profile, isLoading: !data && !error };
}