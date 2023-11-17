import { connectDB } from "@/utils/database";
import RegiseredUser from "@/models/registerSchema";
import { registerSchema } from "@/utils/types";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  await connectDB();

  const result = registerSchema.safeParse(body);
  let zodErrors = {};

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  const newUser = new RegiseredUser(body);
  await newUser.save();

  if (!newUser) {
    return NextResponse.json({ errors: "Registration Failed" });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors } && console.log("ERROR HAS OCCURRED EVERYWHERE!!")
      : { success: true }
  );
};
