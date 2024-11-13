import ConnectDb from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const Dbconnection = async () => {
  await ConnectDb();
};

Dbconnection();

//store subscription email
export async function POST(req) {
  const formdata = await req.formData();

  const emailData = {
    email: `${formdata.get("email")}`,
  };

  await EmailModel.create(emailData);

  return NextResponse.json({
    success: true,
    message: "Eamil subscribed",
  });
}

//get all subscription email
export async function GET(req) {
  const emails = await EmailModel.find({});

  return NextResponse.json({
    success: true,
    message: "All Eamil",
    Data: emails,
  });
}

export async function DELETE(req) {
  const emailId = await req.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(emailId);
  return NextResponse.json({
    success: true,
    message: "Email Deleted",
  });
}
