function CafeRanking() {
    return (
        <div className="rounded-2xl border p-5">

            <h3 className="mb-4 font-bold">
                카페 랭킹
            </h3>

            <div className="space-y-4">

                {Array.from({ length: 5 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3"
                    >
                        <span className="font-bold">
                            {idx + 1}
                        </span>

                        <div className="h-12 w-12 rounded-lg bg-[#D4A017]" />

                        <div>
                            <p className="font-semibold">
                                스타벅스 강남점
                            </p>

                            <p className="text-xs text-gray-500">
                                18시간 40분
                            </p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default CafeRanking;