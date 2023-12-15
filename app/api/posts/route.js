import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB();
    const posts = await Post.find();
    return new NextResponse(posts);
}
export async function POST(request){
     const {title , content , datePosted } = await request.json();
     await connectMongoDB();
     await Post.create({title , content , datePosted });
     return new NextResponse({ message:"Topic Created"} , {status:201 });
 }
 export async function DELETE(request){
     const id = request.nextUrl.searchParams.get("_id");
     await connectMongoDB();
     await Post.findByIdAndDelete(id);
     return new NextResponse({message:"Post Deleted"} ,{ status : 201})
 }