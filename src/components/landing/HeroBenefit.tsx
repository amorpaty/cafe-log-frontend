import { BarChart3, Trophy, Sprout } from "lucide-react";
import { useMediaQuery } from "react-responsive";

function HeroBenefit(){

    const isMobile = useMediaQuery({
      maxWidth: 767
    });

    return (
      <div className= {isMobile ? "mt-8 flex items-center font-bold p-3 pl-0 pr-0 gap-2" : "mt-8 flex items-center font-bold p-3 pl-0 pr-0 gap-4"}>
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center">
            <BarChart3 size={24}  className="text-[#D4A017]"/>
          </div>
          <div>
            <p className="text-xs text-[#666666]">통계로 확인하는</p>
            <p className="text-[#222222]">나의 성장</p>
          </div>
        </div>
        <div className="h-8 border-r" />
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center">
            <Trophy size={24} className="text-[#D4A017]"/>
          </div>
          <div>
            <p className="text-xs text-[#666666]">카페 랭킹으로</p>
            <p className=" text-[#222222]">동기부여</p>
          </div>
        </div>
        <div className="h-8 border-r" />
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center">
            <Sprout size={24} className="text-[#D4A017]"/>
          </div>
          <div>
            <p className="text-xs text-[#666666]">꾸준한 기록으로</p>
            <p className=" text-[#222222]">나를 변화</p>
          </div>
        </div>
      </div>
    )
}

export default HeroBenefit;