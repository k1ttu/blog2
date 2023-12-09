import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB();
    const posts = Post.find();
    return new NextResponse(posts);
}
export async function POST(request){
    const {title , content , date} = await request.json();
    await connectMongoDB();
    await Post.create({title , content , date ,  });
    return new NextResponse.json({ message:"Topic Created"} , {status:201 });
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return new NextResponse.json({message:"Post Deleted"} ,{ status : 201});

}