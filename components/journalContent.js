
import getPosts1 from "@/controllers/getPosts";
import getPostss, { getPosts } from "@/controllers/getPosts";
import Link from "next/link";

export const JournalContent = async () => {
    {/*const [posts2, setPosts2] = useState([]);

    async function getPosts(e) {
        e.preventDefault();
        let result = await fetch("http://localhost:3000/api/topics" ,{
            cache:'no-store'
        });
    };
    try {
        var resp = await result.json();
        resp.forEach((element) => {
            posts2.push(element);
        });
        setPosts2(posts2);
    } catch (error) {
        alert("some error occurred");
    }*/}
    const postsss = await getPosts1();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    const contentFont = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    const contentFont2 = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    return (

        <ul className='list-none my-10 journal-content'>
            {/*
                posts.map((item) => {
                    return (
                        <li key={item._id} id={item._id} className={'mb-14 ' + 'relative py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'} >
                            <Link href={"#"} className='no-underline'>
                                <div className='flex justify-between  '>
                                    <h1 className='text-2xl md:text-3xl mb-2 text-gray-700'>
                                        {item.title ? item.title : "title not found"}
                                    </h1>
                                    <p className={"text-gray-500 text-md md:text-lg mb-2 relative py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"}>
                                        Read More
                                    </p>
                                </div>
                                <div className={contentFont2 + "text-left"}>
                                    {item.date ? item.date : "no date found"}
                                </div>
                                <div className={contentFont2 + "text-left"}>
                                    <p className={contentFont + "line-clamp-4"}>
                                        {item.content ? item.content : "no content was"}
                                    </p>
                                </div>
                            </Link>
                        </li>

                    )
                }
                )
            */}
            {
                postsss?.map((item) => {
                    return (
                        <li key={item._id} id={item._id} className={'mb-14 ' + 'relative py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'} >
                            <Link href={`./journal/${encodeURIComponent(item._id)}/`} className='no-underline'>
                                <div className='flex justify-between  '>
                                    <h1 className='text-2xl md:text-3xl mb-2 text-gray-700'>
                                        {item.title ? item.title : "title not found"}
                                    </h1>
                                    <p className={"text-gray-500 text-md md:text-lg mb-2 relative py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"}>
                                        Read More
                                    </p>
                                </div>
                                <div className={contentFont2 + "text-left"}>
                                    {item.datePosted ? item.datePosted : "no date found"}
                                </div>
                                <div className={contentFont2 + "text-left"}>
                                    <p className={contentFont + "line-clamp-4"}>
                                        {item.content ? item.content.at(0) : "No content found"}.....
                                    </p>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}
