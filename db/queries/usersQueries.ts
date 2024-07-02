import User from "../model/user.js";

export async function createUser({ name, email, password }: { name: string, email: string, password: string }) {

    try {
        const user = new User({ name, email, password });
        await user.save();
        return user;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export async function getUserByEmail(email: string) {
    try {
      const user = await User.findOne({ email });
      console.log("User found:", user);
      return user;
    } catch (error) {
      console.error("Error in getUserByEmail:", error);
      throw error;
    }
  }