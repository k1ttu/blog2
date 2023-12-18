import { dbConnect } from "@/libs/mongodb";
import Post from "@/models/post";

import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        await dbConnect();
        const posts = await Post.find();
        return NextResponse.json(
            {
                message: "Ok",
                data: posts,
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


export async function POST(request) {
    try {
        const { title, content , date } = await request.json();
        const newCourse = {
            title,
            content,
            date
        };
        await dbConnect();
        await Post.create(newCourse);
        return NextResponse.json(
            {
                message: "Course created successfully",
                data: newCourse,
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

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        await dbConnect();
        await Post.findByIdAndDelete(id);
        return NextResponse.json(
            {
                message: "Post deleted Successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Failed to Delete a Course",
                error,
            },
            {
                status: 500,
            }
        );
    }
}