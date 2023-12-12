import JournalContent from '@/components/journalContent';
import 'animate.css'

import Link from 'next/link';


export const db = [
    {
        title: "Hello Saar",
        date: "12/10/20",
        content: ["Come to eendia saar", "He's right saar, come to eendia saar"],
        id: 1234565
    }
    ,
    {
        title: "Hello Saar",
        date: "12/10/20",
        content: ["Come to eendia saar", "He's right saar, come to eendia saar"],
        id: 1234565
    },
    {
        title: "Hello Saar",
        date: "12/10/20",
        content: ["Come to eendia saar", "He's right saar, come to eendia saar"],
        id: 1234565
    }
]

export default function Journal() {
    const contentFont = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    const contentFont2 = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";

    return (
        <main className='flex align-top flex-col items-center md:text-center mx-10 my-10 md:mx-16 lg:mx-32 md:my-10 lg:my-20'>
            <h1 className='text-3xl md:text-4xl md:mb-6 lg:mb-7 mb-5 lg:text-5xl text-gray-700 animate__animated animate__fadeInDown animate__delay-1s'>
                My Blog
            </h1>
            <p className={contentFont + "animate__animated animate__fadeIn animate__delay-2s"}>
                I'm not a professional or an experienced writer but I like to write poems, about my life or about stuff I find interesting, I also write short write-ups about my personal philosophies that I usually come up with after 4th joint (for legal reasons, that's a joke).
            </p>
            <p className={contentFont + "animate__animated animate__fadeIn animate__delay-2s"}>
                I'm also trying my hand in music, might update my progress here in the future. If you like to read, consider going through my posts and let me know what your think, you can mail me directly or just add a comment under the posts.
            </p>
            <p className={contentFont + 'animate__animated animate__fadeIn animate__delay-2s'}>
                If you like to read, consider going through my posts and let me know what your think, you can mail me directly or just add a comment under the posts.
            </p>

            <div className='w-full items-start animate__animated animate__fadeIn animate__delay-2s'>

                {/* <ul className='list-none my-10 animate__animated animate__fadeIn animate__delay-2s'>
                    <JournalContent/>
                </ul> */}
                <ul className='list-none my-10'>
                    <JournalContent/>
                </ul>
                <ul className='list-none my-10'>
                    {
                        db.map((item, index) => {

                            return (
                                <li key={index} id={`${item}`} className={'mb-14 ' + 'relative py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'} >
                                    <Link href={`./journal/${item.id}`} className='no-underline'>
                                        <div className='flex justify-between  '>
                                            <h1 className='text-2xl md:text-3xl mb-2 text-gray-700'>
                                                {item.title}
                                            </h1>
                                            <p className={"text-gray-500 text-md md:text-lg mb-2 relative py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"}>
                                                Read More
                                            </p>
                                        </div>
                                        <div className={contentFont2 + "text-left"}>
                                            {item.date}
                                        </div>
                                        <div className={contentFont2 + "text-left"}>
                                            <p className={contentFont}>
                                                {item.content.at(0)}.....
                                            </p>

                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </main>
    )
}

