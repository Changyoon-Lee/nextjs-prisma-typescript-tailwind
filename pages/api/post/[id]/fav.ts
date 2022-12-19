
import { NextApiRequest, NextApiResponse } from "next";
import db from "@libs/server/db";

import { withAPISession } from "@libs/server/withSession";
import withHandler from "@libs/server/withHandler";




async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query: { id }, session: { user } } = req;

    const isExist = await db.fav.findFirst({
        where: {
            postId: +id.toString(),
            userId: user?.id
        }
    });
    if (isExist) {
        await db.fav.delete({ where: { id: isExist.id } })
        res.json({
            ok: true,
            isLiked: false
        })
    } else {
        await db.fav.create({
            data: {
                User: {
                    connect: {
                        id: user?.id
                    }
                },
                Post: {
                    connect: {
                        id: +id.toString()
                    }
                }

            }
        })
        res.json({
            ok: true,
            isLiked: true
        })
    }


}


export default withAPISession(withHandler({
    methods: ["POST"],
    handler,
}));
//post를 handling하는 함수를 이용
//ironsession 함수로 한번더감싸면 내부에서 session을 다룰수 있게됨
