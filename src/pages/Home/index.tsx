import "../../index.css"
import Banner from "../../components/Banner";
import TextBlock from "../../components/TextBlock";
import VerticalLine from "../../components/VerticalLine";
export default function Home() {

    return (
        <>
            <div className="mt-10 container mx-auto shadow-inner shadow-blue-500/25">
                <Banner />
            </div>
            <VerticalLine vlHeight="5em" />
            <div className="container mx-auto shadow-inner shadow-blue-500/25">
                <TextBlock />
            </div>
        </>
    );
}
