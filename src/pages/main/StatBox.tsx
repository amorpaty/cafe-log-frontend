type Props = {
    title: string;
    value: string;
};

function StatBox({title,value,}: Props) {
    return (
        <div className="rounded-xl border border-[#EFEAE0] bg-[#FAF7F2] p-4 text-center">
            <p className="text-sm text-gray-500">
                {title}
            </p>
            <h4 className="mt-2 text-2xl font-bold text-[#222222]">
                {value}
            </h4>
        </div>
    );
}

export default StatBox;