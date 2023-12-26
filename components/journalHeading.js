import getPosts1 from "@/controllers/getPosts";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
export default async function JournalTopics() {
    const heading = "text-3xl md:text-4xl md:mb-6 lg:mb-7 mb-5 lg:text-5xl text-gray-700 no-underline text-gray-600 font-mono relative text-gray-700 py-3 pb-1 px-2 after:bg-gray-700 after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer";
    const posts = await getPosts1();
    
    return (
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-700">
            {
                posts?.map((item, index) => {
                    if (index == posts.length - 1) {
                        return (
                            <Link className={"no-underline text-gray-600"} href={`./journal/${encodeURIComponent(item._id)}`} key={item._id}>
                                <span className={heading}>{item.title ? item.title : "title not found"}</span>
                            </Link>
                        )
                    }
                    else {
                        return (
                            <Link key={item._id} className={"no-underline text-gray-600"} href={`./journal/${encodeURIComponent(item._id)}/`}>
                                <span className={heading}>{item.title}</span> / {" "}
                            </Link>
                        )
                    }
                })
            }
        </p>
    )
}