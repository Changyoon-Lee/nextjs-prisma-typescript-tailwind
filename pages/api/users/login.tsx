
import { NextApiRequest, NextApiResponse } from "next";
import db from "@libs/server/db";
import { withHandler } from "@libs/server/withHandler";
import { withAPISession } from "@libs/server/withSession";




async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;
    let user = await db.user.findUnique({
        where: {
            email,
        }
    })
    if (!user) {
        res.json({ ok: false, error: "email is not exist" });

    } else {
        if (user.password === password) {
            req.session.user = {
                id: user.id
            }
            await req.session.save();
            console.log(req.session);
            res.json({ ok: true })
        }
        else {
            res.json({ ok: false, error: "wrong password" })
        }
    }
}

export default withAPISession(withHandler({
    method: "POST",
    handler,
    isPrivate: false
}));
//post를 handling하는 함수를 이용
//ironsession 함수로 한번더감싸면 내부에서 session을 다룰수 있게됨
