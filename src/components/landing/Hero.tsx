import DashboardPreview from "./DashboardPreview";
import HeroBenefit from "./HeroBenefit";

function Hero(){
    return (
        <section className="relative mx-auto max-w-7xl px-6 py-7"> 
            <div className="grid lg:grid-cols-[45%_55%]"> 
                {/* Left */} 
                <div className="py-4"> 
                    <p className="mb-4 text-sm font-bold text-[#D4A017]"> 카페에서 기록하는 나의 성장 🌱 </p> 
                        <h1 className="text-6xl leading-tight"> <span className="font-extrabold text-[#222222]">공부한 시간, </span> <br /> <span  className="font-extrabold text-[#222222]"> 성장으로 </span>  
                            <span className="font-extrabold text-[#D4A017]"> {" "}기록하세요 </span> 
                        </h1> 
                    <p className="mt-8 text-lg font-bold leading-8 text-[#666666]"> 카공로그는 카페에서 공부한 시간을 기록하고 <br /> 나만의 성장 패턴을 분석해주는 서비스입니다. </p> 
                    <HeroBenefit/>
                </div> 
                {/* Right */} 
                <DashboardPreview />
            </div> 
        </section>
    )
}

export default Hero;