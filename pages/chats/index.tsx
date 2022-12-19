import LayOut from "@components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
    return (
        <LayOut title="채팅" hasTabBar>
            <div className="divide-y-[1px]">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                    <Link href={`/chats/${i}`} key={i}>
                        <div className="flex py-4 px-4 items-center cursor-pointer space-x-3 hover:bg-gray-100 active:bg-gray-200">
                            <div className="w-12 h-12 rounded-full bg-slate-400"></div>
                            <div className="flex-1">
                                <span className="text-sm font-bold">Steve Jobs</span>
                                <div className="w-48 text-sm text-gray-700 truncate">see you tomorrow, im fine thank youedddd!!</div>
                            </div>
                            <div className="w-12 h-12 rounded-md bg-slate-400"></div>
                        </div>
                    </Link>
                ))}
            </div>
        </LayOut>
    );
}

export default Chats;