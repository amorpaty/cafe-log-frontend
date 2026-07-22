import StatBox from "./StatBox";

function Statistics() {
    return (
        <div className="rounded-2xl border p-5">

            <h3 className="mb-4 font-bold">
                통계
            </h3>

            <div className="grid grid-cols-3 gap-3">
                <StatBox title="총 공부시간" value="42시간 30분" />
                <StatBox title="평균" value="2시간 50분" />
                <StatBox title="기록 횟수" value="15회" />
            </div>
        </div>
    );
}

export default Statistics;