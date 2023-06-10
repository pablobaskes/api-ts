import { Schema, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const ItemSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "Description",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const UserModel = model("UserModel", ItemSchema);
export { UserModel };
