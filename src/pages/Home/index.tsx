import "../../index.css"
import Banner from "../../components/Banner";
import TextBlock from "../../components/TextBlock";
import VerticalLine from "../../components/VerticalLine";
import TextBubble from "../../components/TextBubble";
export default function Home() {

    return (
        <>
            <div className="mt-10 container mx-auto">
                <Banner />
            </div>
            <VerticalLine vlHeight="5em" />
            <div className="container mx-auto shadow-inner shadow-blue-500">
                <TextBlock tbTitle="Sobre mim">
                    <p className="first-line:tracking-widest first-line:text-center first-letter:text-5xl first-line:font-bold first-letter:mr-1 pl-20">
                        Bem-vindos este é um breve resumo sobre mim. Olá, me
                        chamo Leonardo e atuo como Software Developer na empresa
                        FábricaInfo. Atuo na área de Desenvolvimento Web há 3
                        anos, estou graduando em Sistemas da Informação. Sou
                        bastante esforçado e procuro sempre aprender com a
                        equipe e ajudar da melhor forma que posso. Atualmente
                        tenho conhecimentos no Back-end com PHP ( Laravel,
                        Symfony ). Já para Front-end tenho conhecimentos em
                        HTML, CSS ( Bootstrap, Tailwind ), JavaScript ( VueJs,
                        Jquery ), e utilizo Docker para preparação dos
                        ambientes.
                    </p>
                </TextBlock>
            </div>
            <VerticalLine vlHeight="5em" />
            <div className="container mx-auto shadow-inner shadow-blue-500">
                <TextBlock tbTitle="Trajetoria">
                    <br />
                    <TextBubble tbSide="right">
                        <h1>FabricaInfo</h1>
                        <h1>Desenvolvedor Full Stack Junior</h1>
                    </TextBubble>
                    <VerticalLine vlHeight="5em" />
                    <TextBubble tbSide="left">
                        <h1>Just Digital</h1>
                        <h1>Desenvolvedor Full Stack Pleno</h1>
                    </TextBubble>
                </TextBlock>
            </div>
        </>
    );
}
