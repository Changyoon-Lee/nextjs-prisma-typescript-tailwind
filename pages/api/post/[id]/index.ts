
import { NextApiRequest, NextApiResponse } from "next";
import db from "@libs/server/db";

import { withAPISession } from "@libs/server/withSession";
import withHandler from "@libs/server/withHandler";

//여기서는 포스트 내용, 하트 갯수, 내가 하트눌렀는지 여부가 필요함


async function handler(req: NextApiRequest, res: NextApiResponse) {

    const post = await db.post.findUnique({
        where: {
            id: +req.query.id.toString()
        },
        include: {
            _count: {
                select: {
                    Fav: true
                }
            }
        }
    })
    const isLiked = Boolean(await db.fav.findFirst({
        where: {
            postId: +req.query.id.toString(),
            userId: req.session.user?.id
        }
    }))
    res.json({
        ok: true,
        post,
        isLiked
    })

}



export default withAPISession(withHandler({
    methods: ["GET"],
    handler,
}));
//post를 handling하는 함수를 이용
//ironsession 함수로 한번더감싸면 내부에서 session을 다룰수 있게됨
