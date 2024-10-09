import Topic from "models/Topic";
import { NextResponse } from "next/server";
import connectMongoDB from "libs/mongodb";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  const topic = await Topic.create({ title, description });
  return NextResponse.json(
    { topic, message: "Topic Created" },
    { status: 200 }
  );
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Delete User SuccessFully" },
    { status: 200 }
  );
}
