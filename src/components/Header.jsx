import HeaderIllustration from "../images/illustration-working.svg"

export default function Header() {
    return (
        <header className="flex flex-col xl:flex-row overflow-hidden font-poppins font-medium xl:px-40">
            <div className="h-[330px] mt-6 order-1 xl:order-2">
                <img className="h-full ml-6 object-cover object-left" src={HeaderIllustration} alt="" />
            </div>
            <div className="flex flex-col items-center xl:items-start px-6 xl:px-0 order-2 xl:order-1">
                <h1 className="text-[2.65rem] xl:text-[5rem] font-bold text-center xl:text-left text-neutral-dark-blue tracking-tight mt-12 leading-[3rem] xl:leading-[5.75rem]">More than just shorter links</h1>
                <p className="text-lg xl:text-[21px] text-neutral-violet text-center xl:text-left mt-3 max-w-lg">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="font-bold mt-8 text-xl text-white bg-primary-cyan px-10 text-center rounded-full py-4 focus:outline-none">Get Started</button>
            </div>
        </header>
    )
}