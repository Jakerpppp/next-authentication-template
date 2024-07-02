import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import SignOutButton from "@/components/ui/SignOutButton";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Welcome, {session?.user?.name}!</h1>
      <p>Email: {session?.user?.email}</p>
      <SignOutButton />
    </div>
  );
}
