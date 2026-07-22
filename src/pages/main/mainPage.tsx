import { useEffect, useState } from "react";
import { checkUser, getStorageUserId } from "../../common/utils/utils";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardFrame from "./DashboardFrame";
import { getCallApi } from "../../common/utils/apiUtils/apiUtils";
import PinChangeModal from "../../components/profile/PinChangeModal";

function MainPage() {

    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selMenu, setSelMenu] = useState(0);
    const [nickName, setNickName] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [showPinModal, setShowPinModal] = useState(false);

    useEffect(() => {

        const accessChecked = async () => {
            const res = await checkUser();

            if(res.data.code !== 0){
                alert(res.data.msg);
                navigate("/");
            }
        } 

        accessChecked();
        setSidebarOpen(false);
        setSelMenu(selMenu);

        getUserInfo();

    }, []); 
    
    // 사용자 정보 조회
    const getUserInfo = async () => {
        const user_id = getStorageUserId();
        const res = await getCallApi("/users/getUserInfo", {user_id});

        const data = res.data;
        if(data.code !== 0){
            alert(res.data.msg);
            return;
        }

        setNickName(data.nickname);
        setProfileImg(data.profile_img);
    }

    const renderFrame = () => {

        switch (selMenu) {
            case 0:
                return <DashboardFrame nickName={nickName}/>;
            // case 1:
            //     return <RecordListPage />;

            // case 2:
            //     return <StatisticsPage />;

            // case 3:
            //     return <RankingPage />;

            // case 4:
            //     return <SettingPage />;
            default:
                return <DashboardFrame nickName={nickName}/>;
        }
    }
    
    return (
        <div className="flex min-h-screen overflow-hidden bg-[#FAF7F2] p-4 lg:p-6">  
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} 
                selMenu={selMenu} setSelMenu={setSelMenu} nickName={nickName}
                profileImg={profileImg} setProfileImg={setProfileImg} setShowPinModal={setShowPinModal} />
            <main className="hide-scrollbar h-full overflow-auto lg:ml-[260px]">
                <div className="h-full mx-auto max-w-[1600px] rounded-3xl bg-white shadow-sm">
                    {renderFrame()}
                </div>
            </main>
            {showPinModal && (
                <PinChangeModal
                    open={showPinModal}
                    onClose={() => setShowPinModal(false)}
                />
            )}    
        </div>
    );
}

export default MainPage;
