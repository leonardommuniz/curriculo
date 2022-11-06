type TextBlockProps = {
    tbTitle: string,
    children: React.ReactNode;
};
export default function TextBlock(props: TextBlockProps) {
    return (
        <div className="text-white container mx-auto  py-10">
            <div className="text-5xl font-extrabold text-center text-4xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    {props.tbTitle}
                </span>
            </div>
            {props.children}
            
        </div>
    );
}
