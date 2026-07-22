type Props = {
    title: string;
    value: string;
};

function SummaryCard({ title, value }: Props) {
    return (
        <div className="flex-1 rounded-2xl border p-5">
            <p className="text-sm text-gray-500">
                {title}
            </p>

            <h3 className="mt-3 text-2xl font-bold">
                {value}
            </h3>

            <div className="mt-4 h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[70%] rounded-full bg-[#D4A017]" />
            </div>
        </div>
    );
}

export default SummaryCard;