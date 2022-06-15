import { useEffect, useState } from "react"
import { CloseIcon, MenuIcon } from "../assets/Icons"
import { ShortlyLogo } from "../assets/Icons"

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)

    function toggleNav() {
        setShowNav(!showNav)
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1280) {
                setShowNav(true)
            } else {
                setShowNav(false)
            }
        })
    }, [])

    return (
        <nav className="flex items-center justify-between px-6 xl:px-40 pt-10 xl:py-12 font-poppins font-medium text-white xl:text-neutral-violet">
            <a className="fill-neutral-dark-blue" href="."><ShortlyLogo /></a>
            {
                showNav && <div className="w-full px-6 xl:px-0 absolute xl:static left-0 top-24">
                    <div className="flex flex-col gap-y-8 py-10 px-6 xl:p-0 xl:ml-12 w-full xl:flex-row bg-primary-violet rounded-xl xl:bg-transparent">
                        <div className="flex flex-col xl:flex-row gap-8 items-center text-lg xl:text-[15px] font-bold w-full">
                            <a href="">Features</a>
                            <a href="">Pricing</a>
                            <a href="">Resources</a>
                        </div>
                        <div className="h-px w-full bg-neutral-violet opacity-25 xl:hidden" />
                        <div className="flex flex-col xl:flex-row gap-8 items-center text-lg xl:text-[15px] font-bold w-full xl:w-auto xl:shrink-0">
                            <a href="">Login</a>
                            <a className="bg-primary-cyan xl:text-white w-full text-center rounded-full py-2 xl:px-6" href="">Sign Up</a>
                        </div>
                    </div>
                </div>
            }
            <button onClick={toggleNav} className="stroke-neutral-violet xl:hidden focus:outline-none">{showNav ? <CloseIcon /> : <MenuIcon />}</button>
        </nav>
    )
}