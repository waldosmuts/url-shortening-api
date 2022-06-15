export default function Shortened({ unshortenedUrl, shortenedUrl }) {
    return (
        <div className="flex flex-col py-4 bg-white rounded-xl overflow-hidden relative w-full">
            <h3 className="mx-4">{unshortenedUrl}</h3>
            <div className="w-full h-px bg-neutral-gray opacity-50 my-3" />
            <a href={shortenedUrl} className="mx-4 text-primary-cyan">{shortenedUrl}</a>
            <button className="font-bold mx-4 mt-4 text-base text-white bg-primary-cyan rounded-md py-2 z-10 focus:outline-none">Copy</button>
        </div >
    )
}