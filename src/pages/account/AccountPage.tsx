import { useState } from "react";
import { Coffee, User, Lock, Eye, EyeOff, ArrowLeft, Rss } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { goLogin } from "../../common/utils/utils";
import { postCallApi } from "../../common/utils/apiUtils/apiUtils";

function AccountPage() {

    const navigate = useNavigate();

    const [nickname, setNickname] = useState("");
    const [pin, setPin] = useState("");
    const [showPin, setShowPin] = useState(false);

    const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        setPin(value);
    };

    const handleNicNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
        setNickname(value);
    }

    const handleRegister = async () => {        
        // 회원가입 API 호출 예정
        if (nickname.length < 2) {
            alert("닉네임은 2자 이상 입력해주세요.");
            return;
        }

        if(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/g.test(nickname)){
            alert("닉네임은 한글, 영문, 숫자만 입력 가능합니다.");
            return;
        }

        if (!/^\d{8}$/.test(pin)) {
            alert("PIN은 숫자 8자리입니다.");
            return;
        }

        const res = await postCallApi("/users/account", {nickname, pin});

        if(res.data.code !== 0){
            alert(res.data.msg);
            return;
        }else{
            confirm(res.data.msg);
            navigate("/login");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FAF7F2] px-6">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
                {/* Logo */}
                <button className="mb-4">
                    <ArrowLeft className="text-gray-500 cursor-pointer" onClick={() => navigate(-1)}/>
                </button>
                <div className="mb-16 text-center">
                    <div className="flex mb-4 text-5xl items-center justify-center"><Coffee size={70} className="text-[#D4A017]"/></div>

                    <div className="mb-4 mt-4">
                        <span className="text-4xl font-bold text-[#D4A017]">카공로그</span>
                    </div>

                    <div className="mb-4 mt-4">
                        <span className="text-lg font-bold text-gray-600">회원가입</span>
                    </div>
                    <div className="mt-4">
                        <p className="mt-4 text-sm font-bold leading-6 text-gray-500">
                            닉네임과 PIN을 설정해주세요
                        </p>
                    </div>
                </div> 

                {/* Nickname */}
                <div className="space-y-4">
                    <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-4">
                        <User size={18} className="mr-3 text-gray-400" />
                        <input
                            type="text"
                            maxLength={10}
                            value={nickname}
                            onChange={(e) => handleNicNameChange(e)}
                            placeholder="닉네임을 입력해주세요"
                            onKeyDown={(e) => {
                                if(e.key !== "Enter")
                                    return;

                                handleRegister();
                            }}
                            className="w-full outline-none placeholder:text-gray-400"
                        />
                    </div>

                    {/* Pin */}
                    <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-4">
                        <Lock size={18} className="mr-3 text-gray-400" />
                        <input
                            type={showPin ? "text" : "password"}
                            value={pin}
                            maxLength={8}
                            inputMode="numeric"
                            onChange={handlePinChange}
                            onKeyDown={(e) => {
                                if(e.key !== "Enter")
                                    return;

                                handleRegister();
                            }}
                            placeholder="PIN 8자리 입력해주세요"
                            className="w-full outline-none placeholder:text-gray-400"
                        />

                        {showPin ? (
                            <Eye
                                size={18}
                                className="cursor-pointer text-gray-400"
                                onClick={() => setShowPin(false)}
                            />
                        ) : (
                            <EyeOff
                                size={18}
                                className="cursor-pointer text-gray-400"
                                onClick={() => setShowPin(true)}
                            />
                        )}
                    </div>
                    {/* Register Button */}
                    <button
                        className="w-full rounded-xl bg-[#D4A017] py-4 font-semibold text-white transition hover:bg-[#BF8F0A] cursor-pointer"
                        onClick={handleRegister}
                    >
                        회원가입
                    </button>
                </div>    

                {/* Login */}
                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-500">
                        이미 계정이 있나요?
                    </span>

                    <button
                        className="ml-2 cursor-pointer font-semibold text-[#D4A017] hover:text-[#BF8F0A] cursor-pointer"
                        onClick={() => goLogin(navigate)}
                    >
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;