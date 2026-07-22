import Card from "./Card";
import RecentRecord from "./RecentRecord";
import SummaryCard from "./SummaryCard";

/**
 * @author 남은주
 * @since 26.07.18
 * @description 대시보드 영역 입니다.
 * @returns 
 */

type Props = {
    nickName: string;
};

function DashboardFrame ({nickName}: Props){

    return (
        <div className="relative p-6">
            <div className="mt-3 flex flex-col gap-4 lg:flex-row">
                <div>
                    <span className="text-xl font-bold text-gray-700">
                        안녕하세요, {nickName}님👋
                    </span>

                    <p className="mt-2 text-sm text-gray-500">
                        오늘도 꾸준하게 좋은 하루 보내세요.
                    </p>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                <SummaryCard title="오늘 공부시간" value="2시간 30분" />
                <SummaryCard title="이번 달 누적 시간" value="32시간 15분" />
                <SummaryCard title="기록 횟수" value="12회" />
                <SummaryCard title="연속 카공일" value="7일 🔥" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr_1fr]">
                <Card title="공부 잔디">
                    <div className="grid grid-cols-20 gap-1">
                        {Array.from({ length: 140 }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-4 w-4 rounded ${
                                    Math.random() > 0.4
                                        ? "bg-[#D4A017]"
                                        : "bg-[#F3E7BF]"
                                }`}
                            />
                        ))}
                    </div>
                    <div className="pt-4 text-gray-700">카공한 날을 클릭하면 기록을 볼 수 있어요~!</div>
                </Card>

                <Card title="최근 기록">
                    <RecentRecord />
                    <RecentRecord />
                    <RecentRecord />
                </Card>

                <Card title="이번 주 공부 시간">
                    <div className="flex h-[180px] items-end justify-between gap-2">
                        {[60, 120, 80, 50, 100, 180, 30].map((h, idx) => (
                            <div
                                key={idx}
                                className="w-8 rounded-t bg-[#D4A017]"
                                style={{ height: `${h}px` }}
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default DashboardFrame;
