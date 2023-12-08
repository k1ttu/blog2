import './globals.css';

import 'animate.css';
import Link from 'next/link';



export default function Home() {
  const contentFont = "md:text-lg text-base text-gray-700 font-light my-4 mr-8 ";
  return (
    <>
    <main className='flex flex-col mx-10 md:mx-16 md:my-40 my-36 lg:my-36 animate__animated animate__fadeInLeft'>
      <div className='mt-auto'>
      <p className='animate__animated animate__fadeInLeft md:text-lg text-base text-gray-800 text-left font-light my-0 '>
        Recent Posts
      </p>
      <div className='animate__animated animate__fadeInLeft animate__delay-1s'>
        {/* <JournalTopics /> */}
      </div>
      </div>
      
    </main>
    <hr className='mx-10 md:mx-16 '/>
      <footer className='absolute bottom-0  mx-10 md:mx-16 my-10'>
        <div>
          
        </div>
        <ul className='list-none flex'>
          
          <li>
            <Link className={contentFont + "no-underline"} href="mailto:chirag/kun@icloud.com">
            <span className='hover:no-underline no-underline'>→ </span>
              <span className='relative text-gray-700 text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>Mail</span>
            </Link>
            </li>
            <li>
            <Link className={contentFont + "no-underline"} href="https://www.linkedin.com/in/chirag-sharma-0551a1260/">
              <span className='hover:no-underline no-underline'>→ </span>
              <span className='relative text-gray-700 text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>LinkedIn</span>
            </Link>
            </li>
            <li>
            <Link className={contentFont + "no-underline "} href="https://github.com/k1ttu">
            <span className='hover:no-underline no-underline'>→ </span>
              <span className= 'relative text-gray-700 text-xl py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>GitHub</span>
            </Link>
          </li>
        </ul>
      </footer>
      </>
  )
}



// const getPosts = async () => {
//   try {
//       const res = await fetch("http://localhost:3000/api/post/",
//           {
//               cache: "no-store"
//           }
//       );
//       if (!res.ok) {
//           throw new Error("Error fetching posts");
//       }
//       return res.json();
//   } catch (e) {
//       console.log("Error fetching topics: ", e);
//   }
// }

// async function JournalTopics() {
//   const heading = "text-3xl md:text-4xl md:mb-6 lg:mb-7 mb-5 lg:text-5xl text-gray-700";
//   const { posts } = await getPosts();
//   const posts2 = posts.reverse();
//   return (
//       <p  className="text-3xl md:text-4xl lg:text-5xl text-gray-700">
//           {
//               posts.map((item , index)=>{
//                   if (index == posts.length - 1) {
//                       return (
//                               <Link className=" no-underline text-3xl md:text-4xl lg:text-3xl font-light text-gray-700" href={"./journal"} key={item._id}>
//                                   <span className="hover:underline">{item.title.at(0)}</span>
//                               </Link>
//                       )
//                   }
//                   else {
//                       return (
//                               <Link key={item._id} className={" no-underline text-3xl md:text-4xl lg:text-3xl font-light text-gray-700"} href="./journal">

//                                   <span className="hover:underline">{item.title.at(0)}</span> / {" "}
//                               </Link>
//                       )
//                   }
//               })
//           }
//       </p>
//   )
// }