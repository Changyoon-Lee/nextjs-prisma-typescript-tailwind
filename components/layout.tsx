import cls from "@libs/server/utils";
import Link from "next/link";
import { useRouter } from "next/router";
// import img from "next/img";

interface LayoutProps {
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    hasSetting?: boolean;
    children: React.ReactNode
}

export default function LayOut({
    title,
    canGoBack,
    hasTabBar,
    hasSetting,
    children
}: LayoutProps) {

    const router = useRouter();
    const onClick = () => {
        router.back();
    }
    return (
        <div>
            <div className="fixed bg-white max-w-xl m-auto top-0 h-14 border-b inset-x-0 px-3 flex justify-between items-center">
                <div className="flex flex-row items-center">
                    {canGoBack
                        ? <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-gray-700 cursor-pointer"><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l-7 7 7 7" /></svg>
                        : null}
                    {title ? <span className="font-bold px-2">{title}</span> : null}
                </div>
                {hasSetting ?
                    <>
                        <div className="text-gray-100">나의 당근</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="cursor-pointer w-8 h-8 text-gray-800 hover:text-orange-800"><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10.47 4.32c.602-1.306 2.458-1.306 3.06 0l.218.473a1.684 1.684 0 002.112.875l.49-.18c1.348-.498 2.66.814 2.162 2.163l-.18.489a1.684 1.684 0 00.875 2.112l.474.218c1.305.602 1.305 2.458 0 3.06l-.474.218a1.684 1.684 0 00-.875 2.112l.18.49c.498 1.348-.814 2.66-2.163 2.162l-.489-.18a1.684 1.684 0 00-2.112.875l-.218.473c-.602 1.306-2.458 1.306-3.06 0l-.218-.473a1.684 1.684 0 00-2.112-.875l-.49.18c-1.348.498-2.66-.814-2.163-2.163l.181-.489a1.684 1.684 0 00-.875-2.112l-.474-.218c-1.305-.602-1.305-2.458 0-3.06l.474-.218a1.684 1.684 0 00.875-2.112l-.18-.49c-.498-1.348.814-2.66 2.163-2.163l.489.181a1.684 1.684 0 002.112-.875l.218-.474z" /></svg>
                    </>
                    : null}
            </div>
            <div className={cls("pt-14", hasTabBar ? "pb-24" : "")}>
                {children}
            </div>
            {hasTabBar ? <nav className="fixed bottom-0 bg-white text-gray-800 max-w-xl w-full flex justify-around border-t text-xs pt-3 pb-2 space-x-2">
                <Link href='/'>
                    <a className="flex flex-col items-center space-y-1 hover:bg-gray-100">
                        <img src={`icons/home${router.pathname === "/" ? "_dark" : ""}.png`} alt="home" className="w-7 h-7" />
                        <span>홈</span>
                    </a>
                </Link>
                <Link href='/'>
                    <a className="flex flex-col items-center space-y-1 hover:bg-gray-100">
                        <img src={`icons/house${router.pathname === "/dongne" ? "_dark" : ""}.png`} alt="home" className="w-7 h-7" />
                        <span>동네생활</span>
                    </a>
                </Link>
                <Link href='/'>
                    <a className="flex flex-col items-center space-y-1 hover:bg-gray-100">
                        <img src={`icons/location${router.pathname === "/place" ? "_dark" : ""}.png`} alt="home" className="w-7 h-7" />
                        <span>내 근처</span>
                    </a>
                </Link>
                <Link href='/chats'>
                    <a className="flex flex-col items-center space-y-1 hover:bg-gray-100">
                        <img src={`icons/chat${router.pathname === "/chats" ? "_dark" : ""}.png`} alt="home" className="w-7 h-7" />
                        <span>채팅</span>
                    </a>
                </Link>
                <Link href='/profile'>
                    <a className="flex flex-col items-center space-y-1 hover:bg-gray-100">
                        <img src={`icons/user${router.pathname === "/profile" ? "_dark" : ""}.png`} alt="home" className="w-7 h-7" />
                        <span>나의 당근</span>
                    </a>
                </Link>

            </nav> : null}
        </div>
    )
}