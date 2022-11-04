import * as HoverCard from "@radix-ui/react-hover-card";
import { styled, keyframes } from "../../../stitches.config";
import TooltipIcon from "./TooltipIcon";

type IconProps = {
    children: React.ReactNode,
    message:string
};

export default function Icon(props: IconProps) {
    
    const scaleIn = keyframes({
        "0%": { opacity: 0, transform: "scale(0)" },
        "100%": { opacity: 1, transform: "scale(1)" },
    });

    const HoverCardContent = styled(HoverCard.Content, {
        transformOrigin: "var(--radix-hover-card-content-transform-origin)",
        animation: `${scaleIn} 0.5s ease-out`,
    });
    return (
        <HoverCard.Root>
            <HoverCard.Trigger>{props.children}</HoverCard.Trigger>
            <HoverCardContent>
                <TooltipIcon>{props.message}</TooltipIcon>
            </HoverCardContent>
        </HoverCard.Root>
    );
}
