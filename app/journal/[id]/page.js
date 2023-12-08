import AddCommentForm from "@/components/comments";
import { comment } from "postcss";

function findPost(id) {
    var i = 0;
    while (true) {
        if (db[i].id == id) {
            return db[i];
        } else if (i == db.length) {
            break;
        } else {
            i++;
        }
    }
}

export const db = [
    {
        title: "Hello Saar",
        date: "12/10/20",
        content: [`Come to eendia saar`, `He's
        right saar, come to eendia saar`],
        id: 1234565,
        comments: [
            "Hello saar, big fan saar",
            "He right saar, me also big fan saar"
        ]
    }
]
export default function Page({ params }) {
    const { id } = params;
    const item = findPost(id);
    const contentFont = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    const contentFont2 = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";

    return (
        <main className=' items-center border-2 border-white md:text-center mx-10 md:mx-16 lg:mx-32 md:my-10 lg:my-20'>
            <h1 className='text-3xl md:text-4xl md:mb-6 lg:mb-7 mb-5 lg:text-5xl text-gray-700 animate__animated animate__fadeInDown animate__delay-1s'>
                My Blog
            </h1>
            <div className={contentFont2 + "text-left"}>
                {item.date}
            </div>
            <div className="my-10">
                {item.content.map((item, index) => (
                    <p key={index} className={contentFont2}>
                        {item}
                    </p>
                ))}
            </div>
            <div className="flex flex-col justify-start text-left my-10">
                <hr className="w-max bg-gray-500" />
                <AddCommentForm id={item.id} comment={item.comments} />
                <h1 className='text-2xl md:text-3xl mb-2 text-gray-700'>
                    Comments
                </h1>
                <ul>
                    {
                        item.comments.map((item, index) => {
                            return (
                                <li key={index} className="w-max bg-transparent">

                                    <p>
                                        <span className="text-3xl px-3">
                                            "
                                        </span>
                                        {item}
                                        <span className="text-3xl px-3">
                                            "
                                        </span>
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