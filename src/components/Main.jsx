import { useState } from "react"
import Shorten from "./Shorten"
import Shortened from "./Shortened"
import { BrandRecognitionIcon, DetailedRecordsIcon, FullyCustomizableIcon } from "../assets/Icons"

export default function Main() {
    const [shortenedUrls, setShortenedUrls] = useState([])

    function addShortenedUrl(unshortenedUrl, shortenedUrl) {
        setShortenedUrls(prevShortenedUrls => {
            return ([
                ...prevShortenedUrls,
                {
                    unshortenedUrl,
                    shortenedUrl
                }
            ])
        })
    }

    console.log(shortenedUrls);

    const shortenedUrlsElements = shortenedUrls.length ?
        shortenedUrls.map((item, i) => {
            return <Shortened key={i - shortenedUrls.length} unshortenedUrl={item.unshortenedUrl} shortenedUrl={item.shortenedUrl} />
        }) : []

    return (
        <main className="flex flex-col items-center font-poppins font-medium px-6 mt-40 pb-20 bg-neutral-gray bg-opacity-25">
            <Shorten addShortenedUrl={addShortenedUrl} />
            {
                shortenedUrlsElements.length !== 0 && <div className="flex flex-col w-full -mt-14">
                    {shortenedUrlsElements}
                </div>
            }

            <h2 className="text-[28px] font-bold text-neutral-dark-blue mt-4">Advanced Statistics</h2>
            <p className="text-neutral-violet text-center mt-5 leading-7">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className="flex flex-col gap-y-24 mt-20 relative">
                <div className="bg-primary-cyan w-2 h-full absolute top-0 left-1/2 -translate-x-1/2" />
                <article className="flex flex-col items-center relative pt-20 px-8 pb-10 bg-white rounded-md">
                    <div className="absolute top-0 -translate-y-1/2 bg-primary-violet rounded-full p-6"><BrandRecognitionIcon /></div>
                    <h3 className="text-[22px] font-bold text-neutral-dark-blue text-center">Brand Recognition</h3>
                    <p className="text-[15px] leading-6 text-neutral-violet text-center mt-4">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </article>
                <article className="flex flex-col items-center relative pt-20 px-8 pb-10 bg-white rounded-md">
                    <div className="absolute top-0 -translate-y-1/2 bg-primary-violet rounded-full p-6"><DetailedRecordsIcon /></div>
                    <h3 className="text-[22px] font-bold text-neutral-dark-blue text-center">Detailed Records</h3>
                    <p className="text-[15px] leading-6 text-neutral-violet text-center mt-4">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </article>
                <article className="flex flex-col items-center relative pt-20 px-8 pb-10 bg-white rounded-md">
                    <div className="absolute top-0 -translate-y-1/2 bg-primary-violet rounded-full p-6"><FullyCustomizableIcon /></div>
                    <h3 className="text-[22px] font-bold text-neutral-dark-blue text-center">Fully Customizable</h3>
                    <p className="text-[15px] leading-6 text-neutral-violet text-center mt-4">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </article>
            </div>
        </main>
    )
}