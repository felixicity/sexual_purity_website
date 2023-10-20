import { connectDB } from "@/utils/database";
import RegiseredUser from "@/models/registerSchema";

export const POST = async (req, res) => {
  const {
    name,
    email,
    phone,
    gender,
    age,
    isWatchman,
    info,
    moreInfo,
    isAgreement,
  } = await req.json();

  try {
    await connectDB();

    if (name && phone && gender && age && isWatchman && info) {
      const newUser = new RegiseredUser({
        name,
        email,
        phone,
        gender,
        age,
        info,
        moreInfo,
        isWatchman,
        isAgreement,
      });

      await newUser.save();
    }

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response("Failed to register a new user", { status: 500 });
  }
};
