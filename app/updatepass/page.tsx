import { auth } from "@/auth";
import { redirect } from "next/navigation";
import UpdatePasswordForm from "@/components/ui/UpdatePasswordForm";

export default async function UpdatePassword() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <UpdatePasswordForm email={session.user.email ?? ''} />
  );
}
