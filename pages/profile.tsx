import LayOut from "@components/layout";
import { NextPage } from "next";


const Profile: NextPage = () => {
    return (
        <LayOut title="나의 당근" hasSetting hasTabBar>
            <div className="">
                <div className="flex flex-col">
                    <div className="mx-4 mt-4 flex py-4 items-center cursor-pointer space-x-3">
                        <div className="w-10 h-10 rounded-full bg-slate-400"></div>
                        <div className="flex-1 font-bold">lkingkongl</div>
                        <div className="p-2 rounded-sm bg-gray-100 text-xs font-medium hover:bg-gray-200">프로필 보기</div>
                    </div>
                    <div className="mx-4 flex flex-col space-y-2 border rounded-md my-4 p-4">
                        <div className="flex space-x-3 justify-between items-center">
                            <span className="text-orange-500 text-lg font-bold">@pay</span>
                            <span className="flex-1 font-semibold">0원</span>
                            <span>{`>`}</span>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex-1 py-1 rounded-sm font-semibold bg-gray-100 text-sm text-center hover:bg-gray-200">+ 충전</div>
                            <div className="flex-1 py-1 rounded-sm font-semibold bg-gray-100 text-sm text-center hover:bg-gray-200">₩ 계좌송금</div>
                        </div>
                    </div>
                    <div className="divide-y-[1px]">

                        <div className="space-y-1 p-4">
                            <h5 className="text-sm font-semibold">나의 거래</h5>
                            <div className="py-2 flex space-x-2 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700"><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M9 4H6a1 1 0 00-1 1v15a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1h-3M9 3h6v4H9V3z" /></svg>
                                <span>판매내역</span>
                            </div>
                            <div className="py-2 flex space-x-2 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700"><circle xmlns="http://www.w3.org/2000/svg" cx="7.5" cy="18.5" r="1.5" fill="currentColor" /><circle xmlns="http://www.w3.org/2000/svg" cx="16.5" cy="18.5" r="1.5" fill="currentColor" /><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.6 3m0 0L7 15h10l2-7H5.6z" /></svg>
                                <span>구매내역</span>
                            </div>
                            <div className="py-2 flex space-x-2 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700"><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.574-1.635-4.46-2.135-6.035-.5-1.573 1.635-1.34 3.836 0 5.752C7.306 15.168 9.41 16.89 12 19c2.59-2.11 4.694-3.832 6.035-5.748 1.34-1.916 1.573-4.117 0-5.752C16.46 5.865 13.574 6.365 12 8z" /></svg>
                                <span>관심목록</span>
                            </div>
                            <div className="py-2 flex space-x-2 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700"><g xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"><path d="M18 16V4H8a2 2 0 00-2 2v12" /><path d="M18 20H8a2 2 0 110-4h10c-.673 1.613-.66 2.488 0 4z" /></g></svg>
                                <span>당근가계부</span>
                            </div>
                        </div>
                        <div className="space-y-1 my-4 p-4">
                            <h5 className="text-sm font-semibold">나의 동네생활</h5>
                            <div className="py-2 flex space-x-2 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700"><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M13.5 7.5l3 3M4 20v-3.5L15.293 5.207a1 1 0 011.414 0l2.086 2.086a1 1 0 010 1.414L7.5 20H4z" /></svg>
                                <span>동네생활 글/댓글</span>
                            </div>
                        </div>
                        <div className="space-y-1 my-4 p-4">
                            <h5 className="text-sm font-semibold">동네 가게</h5>
                            <div className="py-2 flex space-x-2 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700"><g xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 19l-.93-.37a1 1 0 001.125 1.35L4 19zm4.706-.936l.474-.881-.317-.17-.352.07.195.98zm-3.082-3.147l.93.37.163-.414-.196-.399-.897.443zM19 12c0 3.246-2.853 6-6.53 6v2c4.641 0 8.53-3.514 8.53-8h-2zM5.941 12c0-3.246 2.854-6 6.53-6V4C7.83 4 3.94 7.514 3.94 12h2zm6.53-6C16.147 6 19 8.754 19 12h2c0-4.486-3.889-8-8.53-8v2zm0 12c-1.205 0-2.328-.3-3.291-.817l-.948 1.761A8.934 8.934 0 0012.471 20v-2zm-8.276 1.98l4.706-.936-.39-1.961-4.706.936.39 1.962zm2.326-5.506A5.564 5.564 0 015.94 12h-2c0 1.2.282 2.338.786 3.36l1.794-.886zm-1.826.073L3.07 18.631l1.858.738 1.624-4.083-1.858-.739z" /><circle cx="9" cy="12" r="1" /><circle cx="12.5" cy="12" r="1" /><circle cx="16" cy="12" r="1" /></g></svg>
                                <span>동네 가게 후기</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </LayOut>
    )
}

export default Profile;