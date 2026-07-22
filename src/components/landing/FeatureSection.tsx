function FeatureSection() {

    return (
        <section className="border-t bg-white"> 
            <div className="mx-auto max-w-7xl px-6 py-20 pt-10"> 
                <div className="mb-8">
                    <h2 className="text-center text-3xl font-bold"> <span className="text-[#222222]">카공로그와 함께 더 스마트하게 공부하세요</span> </h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-4"> 
                    <div className="rounded-2xl border bg-white p-8"> 
                        <div className="mb-4 text-4xl">⏰</div> 
                        <h3 className="mb-3 text-lg font-semibold text-[#222222]"> 공부 시간 기록 </h3> 
                        <p className="text-sm leading-6 text-gray-500"> 카페에서 공부한 시간을 쉽고 빠르게 기록할 수 있어요. </p> 
                    </div> 
                    <div className="rounded-2xl border bg-white p-8"> 
                        <div className="mb-4 text-4xl">📈</div> 
                        <h3 className="mb-3 text-lg font-semibold text-[#222222]"> 다양한 통계 분석 </h3> 
                        <p className="text-sm leading-6 text-gray-500"> 주간·월간 공부 패턴을 한눈에 확인할 수 있어요. </p> 
                    </div> 
                    <div className="rounded-2xl border bg-white p-8"> 
                        <div className="mb-4 text-4xl">🏆</div> 
                        <h3 className="mb-3 text-lg font-semibold text-[#222222]"> 카페 랭킹 </h3> 
                        <p className="text-sm leading-6 text-gray-500"> 가장 집중이 잘 되는 카페를 비교해보세요. </p> 
                    </div> 
                    <div className="rounded-2xl border bg-white p-8"> 
                        <div className="mb-4 text-4xl">🌱</div> 
                        <h3 className="mb-3 text-lg font-semibold text-[#222222]"> 성장의 기록 </h3> 
                        <p className="text-sm leading-6 text-gray-500"> 작은 기록이 쌓여 큰 성장을 만듭니다. </p> 
                    </div> 
                </div> 
            </div> 
        </section>
    )
    
}

export default FeatureSection;