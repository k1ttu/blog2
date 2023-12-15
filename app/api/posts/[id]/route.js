import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newContent: content , newDate: date } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, content , date });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const post = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}