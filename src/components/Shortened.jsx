import { useEffect, useState } from "react"

export default function Shortened({ unshortenedUrl, shortenedUrl }) {
    const [copy, setCopy] = useState(false)

    function copyToClipboard() {
        navigator.clipboard.writeText(shortenedUrl)
        setCopy(true)
    }

    useEffect(() => {
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }

        async function setCopyState() {
            await sleep(1000)
            setCopy(false)
        }

        if (copy) {
            setCopyState()
        }
    }, [copy])

    return (
        <div className="flex flex-col xl:flex-row xl:items-center py-4 xl:px-6 bg-white rounded-xl xl:rounded-md overflow-hidden relative w-full">
            <h3 className="mx-4 xl:mx-0 xl:mr-auto xl:text-xl">{unshortenedUrl}</h3>
            <div className="w-full h-px bg-neutral-gray opacity-50 my-3 xl:hidden" />
            <a href={shortenedUrl} className="mx-4 xl:mx-0 text-primary-cyan xl:text-xl xl:mr-6">{shortenedUrl}</a>
            <button onClick={copyToClipboard} className={`font-bold mx-4 mt-4 xl:m-0 text-base xl:text-sm xl:w-24 xl:h-10 xl:p-0 text-white ${copy ? "bg-primary-violet" : "bg-primary-cyan hover:bg-active-cyan"} transition duration-300 rounded-md py-2 z-10 focus:outline-none`}>{copy ? "Copied!" : "Copy"}</button>
        </div >
    )
}