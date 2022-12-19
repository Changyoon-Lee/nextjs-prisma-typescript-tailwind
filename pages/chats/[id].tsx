import LayOut from "@components/layout";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
    return (
        <LayOut canGoBack title="steve jobs">
            <div className="">
                <div className="fixed top-14 drop-shadow-md bg-white inset-x-0 px-4 py-2 flex items-center space-x-4 border-b-[1px] border-gray-200">
                    <div className="w-12 h-12 bg-slate-400 rounded-md" />
                    <div>
                        <p className="text-sm font-bold">Glaxy s22</p>
                        <p className="w-48 text-sm text-gray-700 truncate">cheap galaxy</p>
                    </div>
                </div>
                <div className="mt-14 mb-10 py-6 px-4 space-y-4 flex flex-col snap-end">
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">hi how much are you selling them for</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl text-white bg-orange-500 ">I want ₩2000</span>
                    </div>
                    <div className="flex space-x-2 mr-10">
                        <span className="w-8 h-8 rounded-full bg-slate-400" />
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">no thank you pleasr</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">hi how much are you selling them for</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl text-white bg-orange-500 ">I want ₩2000</span>
                    </div>
                    <div className="flex space-x-2 mr-10">
                        <span className="w-8 h-8 rounded-full bg-slate-400" />
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">no thank you pleasr</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">hi how much are you selling them for</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl text-white bg-orange-500 ">I want ₩2000</span>
                    </div>
                    <div className="flex space-x-2 mr-10">
                        <span className="w-8 h-8 rounded-full bg-slate-400" />
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">no thank you pleasr</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">hi how much are you selling them for</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl text-white bg-orange-500 ">I want ₩2000</span>
                    </div>
                    <div className="flex space-x-2 mr-10">
                        <span className="w-8 h-8 rounded-full bg-slate-400" />
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">no thank you pleasr</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">hi how much are you selling them for</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl text-white bg-orange-500 ">I want ₩2000</span>
                    </div>
                    <div className="flex space-x-2 mr-10">
                        <span className="w-8 h-8 rounded-full bg-slate-400" />
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">no thank you pleasr</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-slate-400" />
                        <div className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">hi how much are you selling them for</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl text-white bg-orange-500 ">I want ₩2000</span>
                    </div>
                    <div className="flex space-x-2 mr-10">
                        <span className="w-8 h-8 rounded-full bg-slate-400" />
                        <span className="max-w-2/3 px-3 py-1 rounded-2xl bg-gray-300">no thank you pleasr</span>
                    </div>
                </div>
                <div className="fixed w-full bottom-0 inset-x-0 border-t border-grey-600 bg-white">
                    <form className="flex items-center px-3 py-1 space-x-3">
                        <button className=" border-gray-300 border w-8 h-8 p-none rounded-full">+</button>
                        <input
                            type="text" placeholder="메세지 보내기"
                            className="shadow-inner px-3 rounded-full w-full border focus:border-orange-500">
                        </input>
                        <button className="bg-orange-500 text-white rounded-full px-3 py-1 hover:bg-orange-700 active:ring-2">send</button>
                    </form>
                </div>
            </div >
        </LayOut>
    );
}

export default ChatDetail;