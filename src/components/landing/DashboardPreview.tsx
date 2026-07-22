function DashboardPreview() {
return ( 
    <div className="rounded-[32px] border bg-white p-7 shadow-lg">
        {/* Header */} 
        <div className="mb-4 flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-500">안녕하세요, 은주님 👋</p>
                <h3 className="font-semibold">오늘도 꾸준하게 성장 중!</h3>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#D4A017]"/>
        </div>
        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-3">
            <div className="rounded-xl bg-[#FFF7E6] p-3">
                <p className="text-xs text-gray-500">오늘 공부</p>
                <p className="mt-1 text-lg font-bold">2.5h</p>
            </div>
            <div className="rounded-xl bg-[#FFF7E6] p-3">
                <p className="text-xs text-gray-500">이번 주</p>
                <p className="mt-1 text-lg font-bold">18h</p>
            </div>
            <div className="rounded-xl bg-[#FFF7E6] p-3">
                <p className="text-xs text-gray-500">연속 기록</p>
                <p className="mt-1 text-lg font-bold">7일</p>
            </div>
            <div className="rounded-xl bg-[#FFF7E6] p-3">
                <p className="text-xs text-gray-500">총 기록</p>
                <p className="mt-1 text-lg font-bold">32회</p>
            </div>
        </div>
        {/* Main Area */}
        <div className="mt-4 grid grid-cols-[30%_27%_40%] gap-2">
            {/* Heatmap */}
            <div className="col-span-2 rounded-2xl border p-3">
                <p className="pb-3 text-sm font-semibold">공부 잔디</p>
                <div className="grid grid-cols-10 gap-1">
                    {Array.from({ length: 60 }).map((_, index) => (
                        <div key={index} className="h-3 w-3 rounded-sm bg-[#F4D88D]"/>
                    ))}
                </div>
            </div>
            {/* Ranking */}
            <div className="rounded-2xl border p-3">
                <p className="pb-3 text-sm font-semibold">카페 TOP3</p>
                <div className="space-y-3 text-sm">
                    <div>🥇 스타벅스 </div>
                    <div>🥈 투썸플레이스</div>
                    <div>🥉 메가커피</div>
                </div>
            </div>
        </div>
        {/* Recent Logs */}
        <div className="mt-4 rounded-2xl border p-4">
            <p className="pb-3 text-sm font-semibold">최근 기록</p>
            <div className="space-y-3">
                <div className="flex justify-between">
                    <span>Spring Boot 공부</span>
                    <span className="text-gray-500">180분</span>
                </div>
                <div className="flex justify-between">
                    <span>React 공부</span>
                    <span className="text-gray-500">120분</span>    
                </div>
                <div className="flex justify-between">
                    <span>독서</span>
                    <span className="text-gray-500">90분</span>
                </div>
            </div>
        </div>
    </div>
);
}

export default DashboardPreview;
