import { userdb, Gusers } from "../../models/users/userSchema.js";
import { Members } from "../../models/users/members.js";
import { USER } from "../ErrorMessages/messages.js";
import { Admin } from "../../models/Admin/Adminschema.js";
import { deviceNotifi as NotifiSubscription } from "../../models/users/deviceToken.js";
import { Image } from "../../models/users/Imagesdir.js";
import { generateSignedUrlFromLocation } from "./s3func.js";
import { Notifications } from "../../models/users/notifications.js";

export const findUserById = async (userId) => {
  let user = await userdb.findOne({ _id: userId });

  if (!user) {
    user = await Members.findOne({ _id: userId });
  }
  if (!user) {
    user = await Gusers.findOne({ _id: userId });
  }

  if (!user) {
    throw { status: 401, message: USER.USER_NOT_EXISTS };
  }
  return user;
};

export const findUserByEmail = async (email) => {
  const emailRegex = new RegExp(`^${email}$`, "i");

  let user = await userdb.findOne({ email: emailRegex });
  if (!user) {
    user = await Members.findOne({ email: email });
  }
  if (!user) {
    user = await Gusers.findOne({ email: email });
  }
  if (!user) {
    throw { status: 401, message: USER.USER_NOT_EXISTS };
  }
  return user;
};

export const returnUser = async (user) => {
  const datas = {
    _id: user._id,
    userId: user.userId,
    name: user.name,
    email: user.email,
    phonenumber: user.phonenumber,
    disabled: user.disabled,
    roles: user.roles,
    postcode: user.postcode,
    aboutme: user.aboutme,
    BMI: user.bmi,
    age: user.age,
    gender: user.gender,
    health_conditions: user.health_conditions,
    isapproved: user.isEmailValidated,
    isBlock: !user.approvedStatus,
    weight: user.weight,
    Unit: user.Unit,
    ft: user.ft,
    In: user.In,
    Unit2: user.Unit2,
    others: user.others,
    countryCode: user.countryCode,
    relationship: user.relationship,
    // profileimageurl: `/images/${image._id}`
  };

  // Conditionally include the allergies field
  if (user.allergies && user.allergies.length > 0) {
    datas.allergies = user.allergies;
  }
  if (user.profileurl != "") {
    datas.profileimageurl = user.profileurl;
  }
  return datas;
};

export const saveDeviceToken = async (userValid, deviceToken) => {
  try {
    // Find the user in the database

    // Check if the user is already subscribed
    let existingSubscription = await NotifiSubscription.findOne({
      userId: userValid._id,
    });

    if (existingSubscription) {
      // Update the regtoken only if it's not already in the array
      if (!existingSubscription.regtoken.includes(deviceToken)) {
        existingSubscription.regtoken.push(deviceToken);
        await existingSubscription.save();
      }
    } else {
      // Create a new subscription only if no existing subscription is found
      const data = new NotifiSubscription({
        userId: userValid._id,
        regtoken: [deviceToken],
      });

      await data.save();
    }

    return { success: true };
  } catch (error) {
    throw { message: error.message };
  }
};

export const removeDeviceToken = async (userId, deviceToken) => {
  try {
    const notifi = await NotifiSubscription.findOneAndUpdate(
      { userId: userId },
      { $pull: { regtoken: deviceToken } },
      { new: true }
    );
  } catch (error) {
    return { message: error.message };
  }
};

export const generatePassword = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export const getProfileUrldata = async (user) => {
  // Fetch all images associated with the user
  const Imagedata = await Image.find({
    userId: user?._id.toString(),
    type: "profile",
  });
  // Filter out images that have an associated postId
  const filteredImage = Imagedata.filter((image) => !image.postId);
  return filteredImage.length > 0 ? filteredImage[0] : null;
};

export const AddNotificationForUser = async (userId, title, postid) => {
  try {
    // Create the notification
    await Notifications.create({
      userId: userId,
      title: title,
      postId: postid,
    });

    // Return success message
    return { message: "success" };
  } catch (error) {
    // Throw the error if something goes wrong
    throw new Error(error);
  }
};
