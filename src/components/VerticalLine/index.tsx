import { styled } from "../../stitches.config";

type VerticalLineProps = {
    vlHeight: string;
};

export default function VerticalLine(props: VerticalLineProps) {
    const VerticalLine = styled("div", {
        backgroundColor: "#3b82f6",
        height: props.vlHeight,
        width: "0.1em",
    });

    return (
        <div className="flex justify-center">
            <VerticalLine />
        </div>
    );
}
