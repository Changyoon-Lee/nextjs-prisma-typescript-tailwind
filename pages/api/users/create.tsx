
import { NextApiRequest, NextApiResponse } from "next";
import db from "@libs/server/db";
import withHandler from "@libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password } = req.body;
    let user = await db.user.findUnique({
        where: {
            email,
        }
    })
    if (!user) {
        user = await db.user.create({
            data: {
                name,
                email,
                password
            }
        });
        res.json({ ok: true });

    } else {
        res.json({ ok: false, error: "email is already exist" })
    }
}

export default withHandler({
    methods: ["POST"],
    handler
});
//post를 handling하는 함수를 이용