

import getSinglePost1 from "@/controllers/getSinglePost";
import React from "react";

export default async function Post({ params: { id } }) {
    const post = await getSinglePost1(id);
    const contentFont = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    const contentFont2 = "md:text-lg text-base text-gray-700 font-light my-4 mb-3 ";
    console.log(post);
    return (
        <main className=' items-center md:text-center mx-10 md:mx-16 lg:mx-32 md:my-10 lg:my-20 my-10'>
            <h1 className='text-3xl md:text-4xl md:mb-6 lg:mb-7 mb-5 lg:text-5xl text-gray-700 animate__animated animate__fadeInDown animate__delay-1s'>
                {post?.title ? post?.title : "title not found "}
            </h1>
            <div className={contentFont2 + "text-left animate__animated animate__fadeIn animate__delay-2s"}>
                {post?.datePosted ? post?.datePosted : "date not found"}
            </div>
            <div className="my-10">
                {post?.content?.map((item, index) => (
                    <p key={index} className={contentFont2 + "animate__animated animate__fadeIn animate__delay-2s"}>
                        {item ? item : "Content not found"}
                    </p>
                ))}
            </div>

            <hr className="bg-gray-500 animate__animated animate__fadeIn animate__delay-2s" />
        </main>
    )
}