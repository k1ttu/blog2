
import { JournalContent } from '@/components/journalContent';
import 'animate.css'

import Link from 'next/link';

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

                <ul className='list-none my-10 animate__animated animate__fadeIn animate__delay-2s'>
                <JournalContent/>
                </ul>
            </div>
        </main>
    )
}
