import { Coffee } from "lucide-react";
import { movePage } from "../../common/utils/utils";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const handleLogin = () => {
        movePage(navigate, "/login");
    }

    return (
        <header className="sticky top-0 z-50 h-[72px] border-b bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Coffee size={24} className="text-[#D4A017]"/>
                    <span className="text-xl font-bold text-[#222222]"> 카공로그</span>
                </div>
                {/* Buttons */}
                <div className="flex gap-3">
                    {/* <button className="rounded-lg border px-4 py-2">로그인</button> */}
                    <button className="rounded-lg bg-[#D4A017] px-4 py-2 text-white hover:bg-[#BF8F0A] cursor-pointer"
                        onClick={handleLogin}
                    >시작하기</button>
                </div>
            </div>
        </header>
    );
}

export default Header;