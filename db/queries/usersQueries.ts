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