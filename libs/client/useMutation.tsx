import { useState } from "react"

interface UseMutationState {
    loading: boolean;
    data?: {
        ok: boolean;
        error?: string;
    };
    error?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState]

export default function useMutation(url: string): UseMutationResult {
    const [state, setState] = useState<UseMutationState>({
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
                setState((prevState) => ({ ...prevState, data: json }));
                // ...state로 받아오면 이것을 직접 수정할 수 없기 때문에 prevState를 매개변수로 받아서 값 수정한다;
            })
            .catch((err) => setState((prevState) => ({ ...prevState, error: err })))
            .finally(() => setState((prevState) => ({ ...prevState, loading: false })));
        console.log(data);
    }

    return [mutation, state]
}

