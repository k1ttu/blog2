import getPosts1 from "@/controllers/getPosts";
import getSinglePost1 from "@/controllers/getSinglePost";

export default async function JournalPost({ params: { id } }) {
    const post = await getPosts1();
    console.log(post);

    return (
        <>
        </>
    )
}

async function JournalPost({ params: { id } }) {
    const post = await getSinglePost1(id);
    console.log("This is the post");
    console.log(post);

    return (
        <main className=' items-center md:text-center mx-10 md:mx-16 lg:mx-32 md:my-10 lg:my-20 my-10'>
            <h1 className='text-3xl md:text-4xl md:mb-6 lg:mb-7 mb-5 lg:text-5xl text-gray-700 animate__animated animate__fadeInDown animate__delay-1s'>
                {post.title ? post.title : "title not found "}
            </h1>
            <div className={contentFont2 + "text-left animate__animated animate__fadeIn animate__delay-2s"}>
                {post.date ? post.date : "date not found"}
            </div>
            <div className="my-10">
                {post?.content?.map((item, index) => (
                    <p key={index} className={contentFont2 + "animate__animated animate__fadeIn animate__delay-2s"}>
                        {item ? item : "Content not found"}
                    </p>
                ))}
            </div>

            <hr className="bg-gray-500 animate__animated animate__fadeIn animate__delay-2s" />

            <div className="flex flex-col justify-start text-left my-10 animate__animated animate__fadeIn animate__delay-2s">
            <h1 className="text-2xl md:text-3xl md:my-4 lg:my-5 text-gray-700 my-20">
                Comments from some of you all:
            </h1>
            <ul className="">
                {
                    item.comments.map((item, index) => {
                        return (
                            <li key={index} className="bg-transparent flex flex-col my-10">
                                <p className="text-left self-start">
                                    {item.comments}
                                </p>
                                <p className="text-right self-end">
                                    ~{item.name}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
            </div>

            </main>


    )
}
