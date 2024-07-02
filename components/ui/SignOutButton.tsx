'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { doLogout } from '@/app/actions';

export default function SignOutButton() {

  return (
    <Button
      onClick={async () => {
        await doLogout();
      }}
    >
      Sign out
    </Button>
  );
}
