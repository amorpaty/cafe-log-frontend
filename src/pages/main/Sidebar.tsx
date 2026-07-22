import {
    Home,
    FileText,
    BarChart3,
    Trophy,
    Settings,
    Menu,
    X,
    Coffee,
    Leaf
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ProfileMenu from "../../components/profile/ProfileMenu";

type Props = {
    open : boolean;
    setOpen : (value: boolean) => void
    selMenu : number,
    setSelMenu : (value : number) => void;
    nickName : string,
    profileImg : string,
    setProfileImg : (value : string) => void
    setShowPinModal : (value: boolean) => void
};

const menus = [
    {
        key : 0,
        icon: Home,
        label: "대시보드",
        path: "/main",
    },
    {
        key : 1,
        icon: FileText,
        label: "기록 목록",
        path: "/record",
    },
    {
        key : 2,
        icon: BarChart3,
        label: "통계",
        path: "/statistics",
    },
    {
        key : 3,
        icon: Trophy,
        label: "카페 랭킹",
        path: "/ranking",
    },
    {
        key : 4,
        icon: Settings,
        label: "설정",
        path: "/setting",
    },
];

function Sidebar({open, setOpen, selMenu, setSelMenu, nickName, profileImg, setProfileImg, setShowPinModal}: Props) {

    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    const handleOpenMenu = (menuKey : number) => {
        if(selMenu === menuKey)
            return;
        setSelMenu(menuKey);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setProfileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // 프로필 메뉴 보기
    const showProfileMenu = (isOpen : boolean) => {
        setProfileMenuOpen(isOpen);
    }

    // 프로필 이미지 크게 보기
    const showProfileImg = (imgUrl : string) => {

    }

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="fixed right-7 top-7 z-50 rounded-lg bg-white p-2 shadow cursor-pointer lg:hidden"
                onClick={() => setOpen( !open )}
            >
                <Menu size={22} />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    flex flex-col
                    fixed left-0 top-0 z-50
                    h-screen w-[260px] bg-white
                    transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-7 pb-4 h-[10%]">
                    <div className="flex items-center gap-2">
                        <Coffee
                            size={24}
                            className="text-[#D4A017]"
                        />
                        <span className="text-xl font-bold text-[#222222]">
                            카공로그
                        </span>
                    </div>

                    <button
                        className="lg:hidden cursor-pointer"
                        onClick={() => setOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="relative w-full flex items-center gap-3 px-6 py-3 text-gray-700"
                    ref={menuRef}
                >
                    {
                        profileImg ?
                        (
                            <img
                                src={`http://localhost:8080${profileImg}`}
                                className="h-10 w-10 rounded-full object-cover cursor-pointer"
                                onClick={() => showProfileImg(profileImg)}
                            />
                        )
                        :
                        (
                            <button  className="flex h-10 w-10 rounded-full bg-[#D4A017] items-center justify-center cursor-pointer"
                                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                            >
                                <Leaf size={27} color="#ffffff" strokeWidth={2}/>
                            </button>
                        )
                    }
                    <span className="cursor-pointer" onClick={() => showProfileMenu(!profileMenuOpen)}>{nickName}님</span>
                    {profileMenuOpen && (
                        <ProfileMenu
                            setProfileMenuOpen={setProfileMenuOpen}
                            setProfileImg={setProfileImg}
                            setShowPinModal={setShowPinModal}
                        />
                    )}
                </div>

                {/* Menu */}
                <nav className="flex-1 p-4">
                    {menus.map((menu) => (
                        <button
                            key={menu.key}
                            className={`
                                mb-2 flex w-full items-center gap-3
                                rounded-xl px-4 py-3
                                text-left transition
                                cursor-pointer
                                ${
                                    selMenu === menu.key
                                        ? "bg-[#FFF7E6] text-[#D4A017]"
                                        : "text-gray-700 hover:bg-[#FFF7E6] hover:text-[#D4A017]"
                                }
                            `}
                            onClick={() => handleOpenMenu(menu.key)}
                        >
                            <menu.icon size={18} />
                            <span>{menu.label}</span>
                        </button>
                    ))}

                </nav>
                {/* Bottom Card */}
                <div className="p-4">
                    <div className="rounded-3xl border border-[#EFEAE0] bg-[#FAF7F2] p-4 text-center shadow-sm">
                        <div className="mb-4 text-4xl">
                            🌱
                        </div>
                        <p className="text-sm font-bold leading-7 text-[#333]">
                            오늘도
                            <br />
                            성장하는 하루가
                            <br />
                            되길 바라요!
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;