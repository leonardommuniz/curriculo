import { styled } from "../../stitches.config";
import Button from "../Button";

export default function Banner() {
    const BannerContainer = styled("div", {
        color: "white",

    });
    const BannerContentBox = styled("div", {
        margin: "0em 2em",
    });
    return (
        <BannerContainer className="container mx-auto border-solid border-2 border-indigo-600 bg-slate-800 p-5 mt-5">
            <div className="flex flex-row">
                <BannerContentBox>
                    <h1 className="italic">ola mundo</h1>
                </BannerContentBox>
                <BannerContentBox>
                    <Button txtColor="white" type="button" text="Download CV" />
                </BannerContentBox>
            </div>
        </BannerContainer>
    );
}
