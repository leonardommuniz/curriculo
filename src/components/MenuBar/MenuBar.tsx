import { styled } from "../../stitches.config";
import { Link, Outlet } from "react-router-dom";

export default function MenuBar() {
    const Ul = styled("ul", {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        // backgroundColor: "#333",
    });

    const Li = styled("li", {
        float: "left",
        variants: {
            align: {
                right: {
                    float: "right",
                    backgroundColor: "#04AA6D",
                },
            },
        },
    });

    const StyledLink = styled("a", {
        display: "block",
        color: "white",
        textAlign: "center",
        padding: "14px 16px",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#111",
        },
    });

    return (
        <div>
            <nav>
                <Ul className="bg-slate-800">
                    <Li>
                        <StyledLink as={Link} to="/">
                            Home
                        </StyledLink>
                    </Li>

                    <Li align="right">
                        <StyledLink as={Link} to="#about">
                            About
                        </StyledLink>
                    </Li>
                </Ul>
            </nav>
            <Outlet />
        </div>
    );
}
