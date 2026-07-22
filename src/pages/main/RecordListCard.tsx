export function RecordListCard() {
    return (
        <div className="rounded-2xl border p-5">
            <div className="mb-4 flex items-center justify-between">

                <input
                    placeholder="제목 검색"
                    className="h-10 rounded-lg border px-3"
                />
                <button className="rounded-lg bg-[#D4A017] px-4 py-2 text-white">
                    + 기록 추가
                </button>
            </div>
        </div>
    );
}

