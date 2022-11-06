import { keyframes, styled } from "../../stitches.config";

type TextBubbleProps = {
    tbSide: "right" | "left";
    children: React.ReactNode;
};

export default function TextBubble(props: TextBubbleProps) {

    const scaleUp = keyframes({
        "0%": { marginTop: "0px" },
        "50%": { marginTop: "5px" },
    });

    const TextBubble = styled("div", {
        textAlign: "center",
        width: "20em",
        padding: "1em 1em",
        border: "1px solid #0ea5e9",
        color: "white",
        animation: `${scaleUp} 2.5s infinite`,
        variants: {
            side: {
                left: {
                    borderRadius: "3rem 0rem 3rem",
                    marginLeft: "auto",
                },
                right: {
                    borderRadius: "0rem 3rem 0rem",
                    marginRight: "auto",
                },
            },
        },
    });

    return (
        <div className="grid grid-cols-2">
            {props.tbSide === "right" && <span className="col-span-1"></span>}
            <TextBubble
                className="shadow-lg shadow-cyan-500/50 col-span-1"
                side={props.tbSide}
            >
                {props.children}
            </TextBubble>
        </div>
    );
}
