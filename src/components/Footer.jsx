import BoostBackdropMobile from "../images/bg-boost-mobile.svg"
import BoostBackdropDesktop from "../images/bg-boost-desktop.svg"
import { FacebookIcon, InstagramIcon, PinterestIcon, ShortlyLogo, TwitterIcon } from "../assets/Icons"

export default function Footer() {
    return (
        <footer className="font-poppins">
            <div className="bg-primary-violet w-full flex flex-col items-center justify-center h-[300px] overflow-hidden relative">
                <img className="absolute top-0 h-full w-full left-0" src={BoostBackdropMobile} alt="" />
                <h2 className="text-[26px] text-white font-bold z-10">Boost your links today</h2>
                <button className="font-bold mt-4 text-lg text-white bg-primary-cyan px-10 text-center rounded-full py-4 focus:outline-none z-10">Get Started</button>
            </div>
            <nav className="bg-neutral-dark-violet flex flex-col items-center px-6 py-14">
                <a className="fill-white" href="."><ShortlyLogo /></a>
                <div className="text-center mt-10">
                    <h3 className="font-bold text-white">Features</h3>
                    <ul className="text-neutral-violet mt-5 flex flex-col gap-y-2">
                        <li><a href="">Link Shortening</a></li>
                        <li><a href="">Branded Links</a></li>
                        <li><a href="">Analytics</a></li>
                    </ul>
                    <h3 className="font-bold text-white mt-10">Resources</h3>
                    <ul className="text-neutral-violet mt-5 flex flex-col gap-y-2">
                        <li><a href="">Blog</a></li>
                        <li><a href="">Developers</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                    <h3 className="font-bold text-white mt-10">Company</h3>
                    <ul className="text-neutral-violet mt-5 flex flex-col gap-y-2">
                        <li><a href="">About</a></li>
                        <li><a href="">Our Team</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-x-6 mt-12">
                    <a href=""><FacebookIcon /></a>
                    <a href=""><TwitterIcon /></a>
                    <a href=""><PinterestIcon /></a>
                    <a href=""><InstagramIcon /></a>
                </div>
            </nav>
        </footer>
    )
}