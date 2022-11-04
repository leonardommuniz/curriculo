import { keyframes, styled } from "../../stitches.config";

type ButtonProps = {
    text: string;
    bgcolor?: string;
    txtColor?: string;
    type: "button" | "icon";
};

export default function Button(props: ButtonProps){

    const scaleUp = keyframes({
        "0%": { marginTop: "0px" },
        "50%": { marginTop: "5px" },
    });

    const Button = styled("button", {
        backgroundColor: props.bgcolor,
        color: props.txtColor,
        width: "100%",
        "&:hover": {
            animation: `${scaleUp} 0.7s infinite`,
        },
        variants: {
            type: {
                icon: {
                    borderRadius: "0.25rem",
                },
                button: {
                    borderRadius: "0.5rem",
                },
            },
        },
    });

   return (
       <Button
           className=" p-4 border-solid border-2 border-gray-100 bg-slate-800 rounded-lg"
           type={props.type}
       >
           {props.text}
       </Button>
   );
} 