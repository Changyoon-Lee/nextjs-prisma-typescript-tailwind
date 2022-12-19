
import { NextApiRequest, NextApiResponse } from "next";
import db from "@libs/server/db";
import withHandler from "@libs/server/withHandler";
import { withAPISession } from "@libs/server/withSession";




async function handler(req: NextApiRequest, res: NextApiResponse) {
    const profile = await db.user.findUnique({
        where: {
            id: req.session.user?.id
        }
    })
    if (true) {
        res.json({
            ok: true,
            profile
        })
        // } else {
        //     res.json({
        //         ok: false
        //     })
    }
}

export default withAPISession(withHandler({
    methods: ["GET"],
    handler,
    isPrivate: false
}));
//post를 handling하는 함수를 이용
//ironsession 함수로 한번더감싸면 내부에서 session을 다룰수 있게됨
