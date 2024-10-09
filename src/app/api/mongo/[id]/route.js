import connectMongoDB from "libs/mongodb";
import Topic from "models/Topic";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({
    topic,
    message: "You See Their User Data ",
    status: 200,
  });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  const topic = await Topic.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
  return NextResponse.json(
    { topic, message: "Updated Successfully" },
    { status: 200 }
  );
}

export async function DELETE(request) {
  await connectMongoDB();
  const { id } = request.json();
  const topic_delete = await Topic.deleteOne({ _id: id });
  return NextResponse.json(
    { message: "Deleted SuccessFully", topic_delete },
    { status: 200 }
  );
}
