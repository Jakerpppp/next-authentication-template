import { NextResponse } from 'next/server';
import { createUser } from '@/db/queries/usersQueries';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/db/mongodb';

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    const newUser = await createUser({ name, email, password: hashedPassword });
    console.log("User created");

    return new NextResponse("User has been created!", { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Error creating user", { status: 500 });
  }
};
