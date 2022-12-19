import { NextApiHandler, } from "next";

type method = "GET" | "POST" | "DELETE";

interface ConfigHandler {
    methods: method[];
    handler: NextApiHandler;
    isPrivate?: boolean;
}


const withHandler = ({
    methods,
    handler,
    isPrivate = true,
}: ConfigHandler
): NextApiHandler => {// withHandler 의 결과는 nextapihandler, fn의 결과도 nextapihandler
    return async function (req, res) {
        console.log("asdf", req.session)
        if (req.method && !methods.includes(req.method as any)) {//사용자가입력한 method와 세팅된 method가 다른지 체크
            return res.status(405).end();// 405 : 허용되지 않은 method사용
        }
        if (isPrivate && !req.session.user) {
            console.log("withhandler:", req.session)
            return res.status(401).json({ ok: false, error: "please login" })
        }
        try {
            await handler(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error })// 500: 서버 처리 오류 
        }
    }
}

export default withHandler