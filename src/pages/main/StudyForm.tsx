function StudyForm() {
    return (
        <div className="rounded-2xl border p-5">

            <h3 className="mb-4 font-bold">
                기록 추가
            </h3>

            <input
                placeholder="공부 제목"
                className="mb-3 h-11 w-full rounded-lg border px-3"
            />

            <select
                className="mb-3 h-11 w-full rounded-lg border px-3"
            >
                <option>
                    스타벅스 강남점
                </option>
            </select>

            <textarea
                rows={5}
                className="w-full rounded-lg border p-3"
            />

            <button
                className="mt-4 h-11 w-full rounded-lg bg-[#D4A017] text-white"
            >
                저장하기
            </button>

        </div>
    );
}

export default StudyForm;