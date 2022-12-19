
import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import { withAPISession } from "@libs/server/withSession";




async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.session.user) {
        req.session.destroy();
        res.json({ ok: true });

    } else {
        res.json({ ok: false, error: "no session exist" })

    }
}

export default withAPISession(withHandler({
    methods: ["POST"],
    handler,
    isPrivate: false
}));
//post를 handling하는 함수를 이용
//ironsession 함수로 한번더감싸면 내부에서 session을 다룰수 있게됨
