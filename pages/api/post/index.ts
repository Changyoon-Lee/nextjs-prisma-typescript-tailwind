
import { NextApiRequest, NextApiResponse } from "next";
import db from "@libs/server/db";

import { withAPISession } from "@libs/server/withSession";
import withHandler from "@libs/server/withHandler";



async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        // 여기서는 상품목록과 각 상품의 하트개수가 필요함
        const posts = await db.post.findMany(
            {
                include: {
                    _count: {
                        select: {
                            Fav: true
                        }
                    }
                },
                where: {
                    userId: req.session.user?.id
                },
            }
        )
        res.json({
            ok: true,
            posts
        })
    } else if (req.method === "POST") {

        const {
            body: { message },
            session: { user }
        } = req;

        const post = await db.post.create({
            data: {
                message,
                User: {
                    connect: {
                        id: user?.id
                    }
                }
            }
        })
        res.json({ ok: true, post })
    }
}


export default withAPISession(withHandler({
    methods: ["POST", "GET"],
    handler,
}));
//post를 handling하는 함수를 이용
//ironsession 함수로 한번더감싸면 내부에서 session을 다룰수 있게됨
