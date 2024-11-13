const { NextResponse } = require("next/server");
import ConnectDb from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
const fs = require("fs");

const Dbconnection = async () => {
  await ConnectDb();
};

Dbconnection();

//get all blogs
export async function GET(req) {
  const blogId = req.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});

    return NextResponse.json({
      success: true,
      // message: "api working",
      Data: blogs,
    });
  }
}

//api end point for uploading blogs
export async function POST(req) {
  const formData = await req.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorimg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);

  return NextResponse.json({
    success: true,
    msg: "Blog Added",
  });
}

//delet the blog

export async function DELETE(req) {
  try {
    const id = await req.nextUrl.searchParams.get("id");

    console.log("ID received:", id);
    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({
        success: false,
        message: "Blog not found",
      });
    }

    fs.unlink(`./public${blog.image}`, () => {});
    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
}
