function RecordList() {
    return (
        <div className="rounded-2xl border p-5">

            <div className="mb-4 flex justify-between">
                <input
                    placeholder="검색"
                    className="rounded-lg border px-3 py-2"
                />

                <button className="rounded-lg bg-[#D4A017] px-3 text-white">
                    +
                </button>
            </div>

            <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl border p-3"
                    >
                        Spring Boot 공부
                    </div>
                ))}
            </div>

        </div>
    );
}

export default RecordList;