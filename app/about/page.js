'use client'
import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import pic2 from './pic12.jpg';
const Maincontent = () => {
    const contentFont = "md:text-lg text-base text-gray-700 font-light my-4";
    const contentSpan = "underline-offset-2 underline";
    return (
        <main className=''>
            <div className='flex flex-col md:flex-row w-full md:justify-between justify-center my-10 align-top'>
                <Image src={pic2}
                    className=" w-2/3 md:h-2/4 md:w-2/5 md:mx-20 animate__animated animate__fadeIn animate__slow self-center md:self-auto "
                />
                <div className='justify-start flex flex-col align-top md:w-2/5 w-2/3 md:mx-10 mx-10 animate__animated animate__fadeInUp animate__delay-1s animate__fast md:my-0 my-10'>
                    <h1 className='text-3xl md:text-4xl mb-5 lg:text-5xl text-gray-700 '>Hi, I'm Chirag</h1>
                    <p className={contentFont}>
                        Currently a Sophomore pursuing <span className={contentSpan}>Bachelor's in Mathematics and Computing Engineering</span> from <span className={contentSpan}>Delhi Technological University</span>.
                    </p>
                    <p className={contentFont}>
                        I aspire to be a Full-Stack Developer and I've worked with technologies like NextJs, ReactJs, Native Android, Flutter, Firebase and MongoDB. I also have experience and interest in <span className={contentSpan}>Competetive Programming</span> and <span className={contentSpan}>Software Development</span> using <span className={contentSpan}>Java</span>.
                    </p>
                    <p className={contentFont}>
                        Apart from Computer Science, my interests include reading, poetry, philosophy , psychology and working out. I also like to write poetry and articles about my personal philosophies and past experiences and how they shaped me as a person, make sure to check them out in the <Link className={contentSpan + contentFont} href="../journal/">Journal Section</Link> of this website.
                    </p>
                    <p className={contentFont}>
                        I also have a keen interest Music and I'm a solo Guitarist presently. I'd like to try my hand in song and story writing and composing in future.
                    </p>
                </div>
            </div>


        </main>
    )
}

export default function About() {
    const [navDetect, setNavDetect] = useState(false);
    return (
        <Maincontent/>
        
    )
}

