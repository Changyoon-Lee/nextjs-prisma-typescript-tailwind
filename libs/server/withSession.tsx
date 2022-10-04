import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: number;
        }
    }
}

//serverside rendering기능과, 세션wrapper기능 구현
const cookieOptions = {
    cookieName: "userSession",
    password: process.env.COOKIE_PASSWORD!// !는 해당변수가 무조건 존재할거라고 typescript에 명시해주는것
}

export function withAPISession(fn: any) {
    return withIronSessionApiRoute(fn, cookieOptions)
}