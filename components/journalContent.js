import Link from "next/link";

const getPosts = async ()=>{
    try{
        const res = await fetch(" http://localhost:3000/api/post",
        {
            cache:"no-store"
        });
        if(!res.ok){
            throw new Error("Error fetching posts");
        }
        return res.json();
    }catch(error){
        console.log("Error fetching posts:" , error);
    }
}

export default async function JournalContent() {
    const posts = await getPosts();
    const contentFont = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    const contentFont2 = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    return(
        <>
        <ul className='list-none my-10'>
        {
            posts.map((item) => {
                return (
                    <li key={item._id} id={item._id} className={'mb-14 ' + 'relative py-3 pb-1 px-6 after:bg-gray-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'} >
                        <Link href={"#"} className='no-underline'>
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
                                <p className={contentFont + "line-clamp-4"}>
                                    {item.content.at(0)}.....
                                </p>
                            </div>
                        </Link>
                    </li>
                )
            })
        }

    </ul>
    </>
    )
}