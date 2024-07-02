import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/ui/SignOutButton";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome, {session?.user?.name}!</h1>
        <p className="text-gray-600 mb-6">Email: {session?.user?.email}</p>
        <SignOutButton />
      </div>
    </div>
  );
}
