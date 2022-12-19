import { useState } from "react"

interface UseMutationState<T> {
    loading: boolean;
    data?: T;
    error?: object;
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>]

export default function useMutation<T = any>(url: string): UseMutationResult<T> {
    const [state, setState] = useState<UseMutationState<T>>({
        loading: false,
    })
    function mutation(data: any) {
        setState({ loading: true });
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        }).then((response) => response.json().catch(() => { }))
            .then((json) => {
                setState((prevState) => ({ ...prevState, data: json, loading: false }));
                // ...state로 받아오면 이것을 직접 수정할 수 없기 때문에 prevState를 매개변수로 받아서 값 수정한다;
            }).then(() => { console.log("mutation:", state) })
            .catch((err) => setState((prevState) => ({ ...prevState, error: err, loading: false })));

    }

    return [mutation, { ...state }]
}

