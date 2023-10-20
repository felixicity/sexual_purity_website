import { Schema, models, model } from "mongoose";

const RegistrationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
    },
    age: {
      type: String,
      required: [true, "age is required"],
    },
    isWatchman: {
      type: String,
      required: [true, "This is required"],
    },
    info: {
      type: String,
      required: [true, "phone is required"],
    },
    moreInfo: {
      type: String,
    },
    isAgreement: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const RegiseredUser =
  models.RegisterUser || model("RegisterUser", RegistrationSchema);

export default RegiseredUser;
