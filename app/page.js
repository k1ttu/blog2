import './globals.css';
import JournalTopics from '@/components/journalHeading';

import 'animate.css';
import Link from 'next/link';

export default function Home(){
  return(
    <>
    Hello
    </>
  )
}


 {/*export default function Home() {
  const contentFont = "md:text-lg text-base text-gray-700 font-light my-4 mr-8 ";
  return (
    <>
    <main className='flex flex-col mx-10 md:mx-16 md:my-40 my-36 lg:my-36 animate__animated animate__fadeInLeft'>
      <div className='mt-auto'>
      <p className='animate__animated animate__fadeInLeft md:text-lg text-base text-gray-800 text-left font-light my-0 '>
        Recent Posts
      </p>
      <div className='animate__animated animate__fadeInLeft animate__delay-1s'>
      </div>
        <JournalTopics/>
      </div>

    </main>
    <hr className=' mt-auto mx-10 md:mx-16 w-full'/>
      <footer className='absolute bottom-0  mx-10 md:mx-16 my-10'>
        <div>

        </div>
        <ul className='list-none flex'>

          <li>
            <Link className={contentFont + "no-underline"} href="mailto:chirag/kun@icloud.com">
            <span className='hover:no-underline no-underline'>→ </span>
              <span className='relative md:after:w-0 text-gray-700 text-md md:text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-full after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>Mail</span>
            </Link>
            </li>
            <li>
            <Link className={contentFont + "no-underline"} href="https://www.linkedin.com/in/chirag-sharma-0551a1260/">
              <span className='hover:no-underline no-underline'>→ </span>
              <span className='relative text-md text-gray-700 md:text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px md:after:w-0 after:w-full after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>LinkedIn</span>
            </Link>
            </li>
            <li>
            <Link className={contentFont + "no-underline "} href="https://github.com/k1ttu">
            <span className='hover:no-underline no-underline'>→ </span>
              <span className= 'relative text-md text-gray-700 md:text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute md:after:w-0 after:h-px after:w-full after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>GitHub</span>
            </Link>
          </li>
        </ul>
      </footer>
      </>
  )
}*/}