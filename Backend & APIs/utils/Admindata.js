import { Admin } from "../../models/Admin/Adminschema.js";
import bcrypt from "bcryptjs";
import { userdb } from "../../models/users/userSchema.js";

export const hashPassword = async (password) => {
  let salt = 12;
  return await bcrypt.hash(password, salt);
};

export const createAdminFixtures = async () => {
  // Define an array of admin user objects
  const adminUsers = [
    {
      name: "admin",
      email: "admin@safeplate.com",
      password: await hashPassword("Hello@124!"),
      roles:"admin"
    },

    // Add more admin users here
  ];

  // Check if the admin users already exist
  const existingAdminUsers = await userdb.find({ roles: "admin" ,email:"admin@safeplate.com"});
  if (existingAdminUsers.length > 0) {
    console.log("Admin users already exist");
    return;
  } else {
    // Insert admin users and get the result
    const insertedAdmins = await userdb.insertMany(adminUsers);
    console.log("Admin users created");
  }
};
