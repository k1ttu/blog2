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
        comments: [{
            name:"Hello saar, big fan saar",
            comments:"He right saar, me also big fan saar nalfnea nkeb kjab ekb ekabr k bakrb kaerb ke brjhabr hjrbe rjva rea"
        },
        {
            name:"Hello saar, big fan saar",
            comments:"He right saar, me also big fan saar nalfnea nkeb kjab ekb ekabr k bakrb kaerb ke brjhabr hjrbe rjva rea"
        },
        {
            name:"Hello saar, big fan saar",
            comments:"He right saar, me also big fan saar nalfnea nkeb kjab ekb ekabr k bakrb kaerb ke brjhabr hjrbe rjva rea"
        }
        ]
    }
]
export default function Page({ params }) {
    const { id } = params;
    const item = findPost(id);
    const contentFont = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    const contentFont2 = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";

    return (
        <main className=' items-center border-2 border-white md:text-center mx-10 md:mx-16 lg:mx-32 md:my-10 lg:my-20 my-10'>
            <h1 className='text-3xl md:text-4xl md:mb-6 lg:mb-7 mb-5 lg:text-5xl text-gray-700 animate__animated animate__fadeInDown animate__delay-1s'>
                My Blog
            </h1>
            <div className={contentFont2 + "text-left animate__animated animate__fadeIn animate__delay-2s"}>
                {item.date}
            </div>
            <div className="my-10">
                {item.content.map((item, index) => (
                    <p key={index} className={contentFont2 + "animate__animated animate__fadeIn animate__delay-2s"}>
                        {item}
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

                <AddCommentForm id={item.id} comment={item.comments} />
            </div>
        </main>
    )
}