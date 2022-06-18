import HeaderIllustration from "../images/illustration-working.svg"

export default function Header() {
    return (
        <header className="flex flex-col xl:flex-row overflow-hidden font-poppins font-medium xl:pl-40 xl:mt-10">
            <div className="h-[330px] xl:h-[480px] mt-6 xl:mt-0 order-1 xl:order-2">
                <img className="h-full ml-6 xl:ml-0 xl:mr-60 object-cover object-left" src={HeaderIllustration} alt="" />
            </div>
            <div className="flex flex-col items-center xl:items-start px-6 xl:px-0 xl:mt-2 order-2 xl:order-1">
                <h1 className="text-[2.65rem] xl:text-[5rem] font-bold text-center xl:text-left text-neutral-dark-blue tracking-tight mt-12 leading-[3rem] xl:leading-[5.75rem]">More than just shorter links</h1>
                <p className="text-lg xl:text-[21px] text-neutral-violet text-center xl:text-left mt-3 xl:mt-1 max-w-lg">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="font-bold mt-8 xl:mt-10 text-xl text-white bg-primary-cyan hover:bg-active-cyan transition duration-300 px-10 text-center rounded-full py-4 focus:outline-none">Get Started</button>
            </div>
        </header>
    )
}