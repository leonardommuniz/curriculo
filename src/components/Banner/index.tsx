import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { styled } from "../../stitches.config";
import Button from "../Button";
import Icon from "./Icon";

export default function Banner() {
    const BannerContainer = styled("div", {
        color: "white",
        background: "rgb(30,41,59)",
    });
    const BannerButtonBox = styled("div", {
        margin: "0em 2em",
        justifyContent: "center",
        textAlign: "center",
    });

    const BannerIcons = styled("svg", {
        height: "2em",
        width: "2em",
    });

    return (
        <BannerContainer className="container mx-auto h-96 shadow-inner shadow-blue-500">
            <div className=" my-auto">
                <div>
                    <img
                        src="https://i.picasion.com/pic92/59ec3e650ab9c78dc557c5c0557efc60.gif"
                        width="150"
                        height="150"
                        alt="Leo-gif"
                        className="mx-auto"
                    />
                    <div className="flex justify-center space-x-4 mt-5">
                        <a
                            href="https://github.com/leonardommuniz/leonardommuniz"
                            target="_blank"
                        >
                            <Icon message="Veja meus projetos pessoais">
                                <BannerIcons as={GitHubLogoIcon} />
                            </Icon>
                        </a>
                        <a
                            href="https://www.instagram.com/leoo_muniz_/"
                            target="_blank"
                        >
                            <Icon message="Me acompanhe no meu dia a dia">
                                <BannerIcons as={InstagramLogoIcon} />
                            </Icon>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/leoomuniz/"
                            target="_blank"
                        >
                            <Icon message="Veja oque estou estudando no momento">
                                <BannerIcons as={LinkedInLogoIcon} />
                            </Icon>
                        </a>
                    </div>
                </div>
                <BannerButtonBox className="mt-10 flex space-x-5">
                    <div className="w-1/2">
                        <Button
                            txtColor="white"
                            type="button"
                            text="Download CV"
                        />
                    </div>
                    <div className="w-1/2">
                        <Button
                            txtColor="white"
                            type="button"
                            text="Projetos"
                        />
                    </div>
                </BannerButtonBox>
            </div>
        </BannerContainer>
    );
}
