'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UpdatePasswordForm({ email }: { email: string }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, oldpassword: oldPassword, newpassword: newPassword }),
      });

      if (!response.ok) {
        if (response.status === 409) {
          alert("Email already in use. Please use a different email.");
        } else if (response.status === 401) {
          alert("Invalid Credentials.");
        } else {
          alert("An error occurred: " + response.statusText);
        }
        return;
      }
      
      alert("Password updated successfully");
      router.push('/home');
    } catch (error) {
      alert("An error occurred while updating your password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="mx-auto max-w-sm my-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CardHeader>
          <CardTitle className="text-2xl">Update Password</CardTitle>
          <CardDescription>
            Enter your old password below to confirm change to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="oldpassword">Old Password</Label>
            <Input
              id="oldpassword"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="newpassword">New Password</Label>
            <Input
              id="newpassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Updating...' : 'Update Password'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
