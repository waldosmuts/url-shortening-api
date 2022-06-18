import { useEffect, useState } from "react"
import BoostBackdropMobile from "../images/bg-boost-mobile.svg"
import BoostBackdropDesktop from "../images/bg-boost-desktop.svg"
import { FacebookIcon, InstagramIcon, PinterestIcon, ShortlyLogo, TwitterIcon } from "../assets/Icons"

export default function Footer() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])

    return (
        <footer className="font-poppins">
            <div className="bg-primary-violet w-full flex flex-col items-center justify-center h-[300px] xl:h-[250px] overflow-hidden relative">
                <img className="absolute top-0 h-full w-full left-0" src={screenWidth > 1280 ? BoostBackdropDesktop : BoostBackdropMobile} alt="" />
                <h2 className="text-[26px] xl:text-[40px] text-white font-bold z-10">Boost your links today</h2>
                <button className="font-bold mt-4 xl:mt-6 text-lg text-white bg-primary-cyan hover:bg-active-cyan transition duration-300 px-10 text-center rounded-full py-4 focus:outline-none z-10">Get Started</button>
            </div>
            <nav className="bg-neutral-dark-violet flex flex-col xl:flex-row items-center xl:items-start px-6 xl:px-40 py-14 xl:py-20">
                <a className="fill-white xl:mr-auto" href="."><ShortlyLogo /></a>
                <div className="flex flex-col xl:flex-row xl:items-start xl:gap-x-24 xl:text-[15px] text-center xl:text-left mt-10 xl:mt-0">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white">Features</h3>
                        <ul className="text-neutral-violet mt-5 flex flex-col gap-y-2">
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Link Shortening</a></li>
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Branded Links</a></li>
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Analytics</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white mt-10 xl:mt-0">Resources</h3>
                        <ul className="text-neutral-violet mt-5 flex flex-col gap-y-2">
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Blog</a></li>
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Developers</a></li>
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Support</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-white mt-10 xl:mt-0">Company</h3>
                        <ul className="text-neutral-violet mt-5 flex flex-col gap-y-2">
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">About</a></li>
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Our Team</a></li>
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Careers</a></li>
                            <li><a className="hover:text-primary-cyan transition duration-300" href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-6 mt-12 xl:mt-0 xl:ml-28">
                    <a className="fill-white hover:fill-primary-cyan transition duration-300" href=""><FacebookIcon /></a>
                    <a className="fill-white hover:fill-primary-cyan transition duration-300" href=""><TwitterIcon /></a>
                    <a className="fill-white hover:fill-primary-cyan transition duration-300" href=""><PinterestIcon /></a>
                    <a className="fill-white hover:fill-primary-cyan transition duration-300" href=""><InstagramIcon /></a>
                </div>
            </nav>
        </footer>
    )
}