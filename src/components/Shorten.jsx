import { useEffect, useState } from "react"
import ShortenBackdropMobile from "../images/bg-shorten-mobile.svg"
import ShortenBackdropDesktop from "../images/bg-shorten-desktop.svg"

export default function Shorten({ addShortenedUrl }) {
    const [urlValue, setUrlValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        async function shortenUrl() {
            const url = "https://api.shrtco.de/v2/shorten"
            const res = await fetch(url + `?url=${urlValue}`)
            const data = await res.json()

            if (data.ok) {
                const shortenedUrl = data.result.short_link
                const unshortenedUrl = data.result.original_link
                addShortenedUrl(unshortenedUrl, shortenedUrl)
                setErrorMessage("")
            } else {
                setErrorMessage("Invalid link")
            }
        }

        if (urlValue.length) {
            const regex = /^([(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))$/
            if (regex.test(urlValue)) {
                shortenUrl()
            } else {
                setErrorMessage("Invalid link")
            }
        } else {
            setErrorMessage("Please add a link")
        }
    }

    function handleChange(e) {
        setUrlValue(e.target.value)
    }

    return (
        <form className="-translate-y-1/2 absolute top-0 left-0 w-full px-6 xl:px-40" onSubmit={handleSubmit}>
            <div className="flex flex-col xl:flex-row p-6 xl:p-[52px] bg-primary-violet rounded-xl overflow-hidden relative">
                <img className={`absolute top-0 pointer-events-none ${screenWidth > 1280 ? "left-0 w-full" : "right-0"}`} src={screenWidth > 1280 ? ShortenBackdropDesktop : ShortenBackdropMobile} alt="" />
                <input
                    onChange={handleChange}
                    value={urlValue}
                    className={`px-4 py-2 xl:px-6 xl:py-[15px] rounded-md xl:rounded-xl z-10 focus:outline-none border-[3px] xl:text-xl w-full ${errorMessage.length ? "border-secondary-red placeholder-secondary-red placeholder-opacity-50" : "border-transparent"}`}
                    type="text"
                    placeholder="Shorten a link here..." />
                {errorMessage.length !== 0 && <span className="text-secondary-red text-xs xl:text-base italic mt-1 opacity-90 z-10 xl:absolute xl:bottom-6">{errorMessage}</span>}
                <button className="font-bold mt-4 xl:mt-0 xl:ml-6 text-lg xl:text-xl text-white bg-primary-cyan hover:bg-active-cyan transition duration-300 rounded-md xl:rounded-xl py-2 xl:py-0 xl:px-10 z-10 focus:outline-none shrink-0">Shorten It!</button>
            </div>
        </form>
    )
}