import { styled } from "../../stitches.config";
import Button from "../Button";

export default function Banner() {
    const BannerContainer = styled("div", {
        color: "white",
        background: "rgb(30,41,59)",
        variants: {
            selected: {
                firstColum: {
                    background:
                        "linear-gradient(117deg, rgba(30,41,59,1) 33%, rgba(64,69,78,1) 57%, rgba(109,113,120,1) 100%)",
                },
                secondColum: {
                    background:
                        "linear-gradient(243deg, rgba(30,41,59,1) 33%, rgba(64,69,78,1) 57%, rgba(109,113,120,1) 100%)",
                },
            },
        },
    });
    const BannerContentBox = styled("div", {
        margin: "0em 2em",
        justifyContent: "center",
        textAlign: "center",
    });

    const BannerContentImageBox = styled(BannerContentBox, {
        transform: "skew(-20deg)",
        borderLetf: "0.2rem solid red",
    });
    
    return (
        <BannerContainer className="container mx-auto border-solid border-2 border-indigo-600 bg-slate-800 mt-5 grid grid-cols-12 h-96">
            <div className="col-span-7 my-auto" >
                <div>
                    <BannerContentBox>
                        <h1 className="italic">Redes Sociais</h1>
                        <h2>icone | icone | icone | icone</h2>
                    </BannerContentBox>
                </div>
                <BannerContentBox className="mt-8 grid grid-cols-7">
                    <div className="col-span-3">
                        <Button
                            txtColor="white"
                            type="button"
                            text="Download CV"
                        />
                    </div>
                    <span className="col-span-1"></span>
                    <div className="col-span-3">
                        <Button
                            txtColor="white"
                            type="button"
                            text="Projetos"
                        />
                    </div>
                </BannerContentBox>
            </div>
            <div className="col-span-5">
                <BannerContentImageBox>
                    <h1 className="italic">Foto</h1>
                </BannerContentImageBox>
            </div>
        </BannerContainer>
    );
}
