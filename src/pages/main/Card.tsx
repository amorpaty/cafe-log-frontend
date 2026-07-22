type Props = {
    title: string;
    children: React.ReactNode;
};

function Card({ title, children }: Props) {
    return (
        <div className="rounded-2xl border p-5">
            <h3 className="mb-4 font-bold">
                {title}
            </h3>

            {children}
        </div>
    );
}

export default Card;