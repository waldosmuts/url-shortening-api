import { useState } from "react"
import ShortenBackdropMobile from "../images/bg-shorten-mobile.svg"
import ShortenBackdropDesktop from "../images/bg-shorten-desktop.svg"

export default function Shorten({ addShortenedUrl }) {
    const [urlValue, setUrlValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

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
        <form className="-translate-y-1/2 flex flex-col p-6 bg-primary-violet rounded-xl overflow-hidden relative w-full" onSubmit={handleSubmit}>
            <img className="absolute top-0 right-0 pointer-events-none" src={ShortenBackdropMobile} alt="" />
            <input
                onChange={handleChange}
                value={urlValue}
                className={`px-4 py-2 rounded-md z-10 focus:outline-none border-[3px] ${errorMessage.length ? "border-secondary-red placeholder-secondary-red placeholder-opacity-50" : "border-transparent"}`}
                type="text"
                placeholder="Shorten a link here..." />
            {errorMessage.length !== 0 && <span className="text-secondary-red text-xs italic mt-1 opacity-80 z-10">{errorMessage}</span>}
            <button className="font-bold mt-4 text-lg text-white bg-primary-cyan rounded-md py-2 z-10 focus:outline-none">Shorten It!</button>
        </form>
    )
}