export default function TextBlock() {
    return (
        <div className="text-white container mx-auto pl-20 py-10">
            <div className="text-5xl font-extrabold text-center text-4xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Sobre mim
                </span>
            </div>
            <p className="first-line:tracking-widest first-line:text-center first-letter:text-5xl first-line:font-bold first-letter:mr-1 ">
                Bem-vindos este é um breve resumo sobre mim. Olá, me chamo
                Leonardo e atuo como Software Developer na empresa FábricaInfo.
                Atuo na área de Desenvolvimento Web há 3 anos, estou graduando
                em Sistemas da Informação. Sou bastante esforçado e procuro
                sempre aprender com a equipe e ajudar da melhor forma que posso.
                Atualmente tenho conhecimentos no Back-end com PHP ( Laravel,
                Symfony ). Já para Front-end tenho conhecimentos em HTML, CSS (
                Bootstrap, Tailwind ), JavaScript ( VueJs, Jquery ), e utilizo
                Docker para preparação dos ambientes.
            </p>
        </div>
    );
}
