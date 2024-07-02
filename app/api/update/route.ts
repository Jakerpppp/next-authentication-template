import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/db/queries/usersQueries';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/db/mongodb';

export const POST = async (request: any) => {
  const {email, oldpassword, newpassword } = await request.json();

  try {
    await connectToDatabase();
    
    const existingUser = await getUserByEmail(email);

    if (existingUser === null) {
      return new NextResponse("User not logged in", { status: 409 });
    }

    const isValid = await bcrypt.compare(oldpassword, existingUser.password);

    if (!isValid) {
        return new NextResponse("Invalid password", { status: 401 });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);
   
    const updatedUser = await existingUser.updateOne({ password: hashedPassword });


    return new NextResponse("User has been updated!", { status: 201 });

  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Error creating user", { status: 500 });
  }
};
