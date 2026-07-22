import Header from "./Header";
import Hero from "./Hero";
import cafelogImg from "../../assets/cafe_log_bg.png";

function WebLanding() {
    
    return (
        <div className="min-h-screen relative bg-[#FAF7F2]">
            <img src={cafelogImg} alt="카공로그" className="absolute bottom-0 left-0 w-[550px]"/>
            <Header/>
            <Hero/>
        </div>
    );
}

export default WebLanding;
