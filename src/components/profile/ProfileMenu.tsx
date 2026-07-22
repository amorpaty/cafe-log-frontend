import { ChevronRight, Image, KeyRound, LogOut } from "lucide-react";
import { getStorageUserId, goLogin, logout } from "../../common/utils/utils";
import { useNavigate } from "react-router-dom";
import { messages } from "../../common/utils/constant";
import { useRef } from "react";
import { postFileApi } from "../../common/utils/apiUtils/apiUtils";

/**
 * @author 남은주
 * @since 26.07.18
 * @description 프로필 메뉴입니다.
 * @returns TSX
 */
type props = {
    setProfileMenuOpen : (value : boolean) => void
    setProfileImg : (value : string) => void
    setShowPinModal : (value : boolean) => void
}

function ProfileMenu({setProfileMenuOpen, setProfileImg, setShowPinModal} : props) {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleProfileImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) {
            return;
        }

        const formData = new FormData();
        const user_id = getStorageUserId();

        formData.append("user_id", user_id || "");
        formData.append("file", file);

        try {
            const res = await postFileApi(
                "/users/profile-image",
                formData
            );

            const data = res.data;

            if(data.code < 0){
                alert(data.msg);
                return;
            }

            setProfileImg(data.profile_img);
            
        } catch (e) {
            alert(e);
        }
    };

    // 로그아웃
    const handleLogout = () => {

        const user_id = getStorageUserId();

        if(!user_id){
            alert(messages.LOGIN_MSG);
            goLogin(navigate);
            return;
        }

        const res = confirm(messages.LOGOUT_CONFIRM_MSG);

        if(!res)
            return;

        logout(navigate);
    }

    return (
        <div className="absolute left-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl 
            border border-[#EEE8DD] bg-white p-2 
            shadow-[0_16px_40px_rgba(31,42,61,0.14)]">
            <div className="space-y-1">
                <button
                    type="button"
                    className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-[#FFF7E6] cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF7E6] text-[#D4A017]">
                        <Image size={18} />
                    </div>

                    <span className="flex-1 text-sm font-medium text-[#344054]">
                        프로필 사진 변경
                    </span>

                    <ChevronRight
                        size={16}
                        className="text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-[#D4A017]"
                    />

                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfileImageChange}
                />

                <button
                    type="button"
                    className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-[#FFF7E6] cursor-pointer"
                    onClick={() => {
                        setProfileMenuOpen(false);
                        setShowPinModal(true);
                    }}
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF7E6] text-[#D4A017]">
                        <KeyRound size={18} />
                    </div>

                    <span className="flex-1 text-sm font-medium text-[#344054]">
                        PIN 번호 변경
                    </span>

                    <ChevronRight
                        size={16}
                        className="text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-[#D4A017]"
                    />
                </button>
            </div>            

            <div className="my-2 h-px bg-[#F0ECE4]" />

            <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-red-500 transition hover:bg-red-50 cursor-pointer"
                onClick={() => handleLogout()}
            >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-50">
                    <LogOut size={18} />
                </div>

                <span className="text-sm font-medium">
                    로그아웃
                </span>
            </button>
        </div>
    );
}

export default ProfileMenu;