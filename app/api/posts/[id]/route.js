import Post from "@/models/post";
import { NextResponse } from "next/server";
import { dbConnect } from "@/libs/mongodb";

export async function GET(request, { params: { id } }) {
    try {
        await dbConnect();
        const post = await Post.findOne({ _id: id });
        return NextResponse.json(
            {
                message: "Ok",
                data: post,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to fetch Courses",
                error,
            },
            {
                status: 500,
            }
        );
    }
}


export async function PUT(request, { params: { id } }) {
    try {
        const { newTitle: title, newContent: content , newDate: date } =
            await request.json();
        const newPost = {
            title,
            content,
            date
        };

        await dbConnect();

        await Post.findByIdAndUpdate(id, newPost);
        return NextResponse.json(
            {
                message: "Course Updated successfully",
                data: newPost,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to Create a Course",
                error,
            },
            {
                status: 500,
            }
        );
    }
}