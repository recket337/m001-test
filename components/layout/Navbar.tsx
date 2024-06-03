import Link from 'next/link';
import { cookies } from 'next/headers';
import LoginButton from './LoginButton';

export default function Navbar() {
  const session = cookies().get('session');

  return (
    <nav className="bg-slate-700">
      <ul className="flex items-center gap-2 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-800">
        <li>
          <Link
            href="/"
            className="bg-slate-900 px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className="bg-slate-900 px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Dashboard
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/about"
            className="px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600"
          >
            About us
          </Link>
        </li>

        <li>
          <LoginButton token={session?.value} />
        </li>
      </ul>
    </nav>
  );
}
