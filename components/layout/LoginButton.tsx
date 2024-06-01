'use client';

import logout from '@/app/serverActions/logout';
import { useRouter } from 'next/navigation';

export default function LoginButton({ token = '' }: { token?: string }) {
  const { push } = useRouter();
  return (
    <button
      onClick={token ? () => logout() : () => push('/login')}
      className="bg-slate-900 px-4 py-[6px] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
      type="submit"
    >
      {token ? 'Logout' : ' Login'}
    </button>
  );
}
