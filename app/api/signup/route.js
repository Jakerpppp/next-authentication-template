import { NextResponse } from 'next/server';
import { createUser, getUserByEmail } from '@/db/queries/usersQueries';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/db/mongodb';

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  try {
    await connectToDatabase();
    
    const existingUser = await getUserByEmail(email);
    if (existingUser !== null) {
      return new NextResponse("User already exists", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
   

    const newUser = await createUser({ name, email, password: hashedPassword });


    return new NextResponse("User has been created!", { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Error creating user", { status: 500 });
  }
};
