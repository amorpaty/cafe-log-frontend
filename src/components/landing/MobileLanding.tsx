import { Coffee } from "lucide-react";
import cafelogImgbg from "../../assets/cafe_log_bg_mb.png";
import { movePage } from "../../common/utils/utils";
import { useNavigate } from "react-router-dom";


function MobileLanding() {

    const navigate = useNavigate();

    const handleLogin = () => {
        movePage(navigate, "/login");
    }

    return (
        <div className="min-h-screen bg-[#FAF7F2] flex flex-col px-6 py-8"
            style={{
                backgroundImage: `url(${cafelogImgbg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom",
                backgroundSize: "contain",
            }}
        >
        {/* Logo */}
            <div className="mt-8 flex items-center gap-2">
            {/* <div className="mt-4 flex justify-center"> */}
                <Coffee size={24} className="text-[#D4A017]"/>  
                <span className="text-xl font-bold text-[#222222]"> 카공로그</span>
            </div>

        {/* Title */}
            <div className="mt-10 text-center">
                <h1 className="text-4xl leading-tight">
                    <span className="font-extrabold text-[#222222]">카페에서 기록하는</span>
                    <br />
                    <span className="font-extrabold text-[#222222]">나의</span>
                    <span className="font-extrabold text-[#D4A017]"> 성장 🌱</span>
                </h1>   
                <p className="mt-6 text-lg font-bold leading-8 text-[#666666]">
                작은 기록이 쌓여
                <br />
                내일의 큰 성장을 만듭니다.
                </p>
            </div>

            {/* Buttons */}
            <div className="mt-20 relative space-y-3">
                <button className="h-14 w-full rounded-xl bg-[#D4A017] font-semibold text-white shadow-sm" onClick={handleLogin}>
                    시작하기
                </button>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center">
                <div className="flex-1 border-t" />
            </div>
        </div>
    );
}

export default MobileLanding;