"use client"

import FormButton from '@/components/auth/FormButton';
import { useSearchParams } from 'next/navigation';
import { authenticate } from '@/app/lib/actions'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getBaseUrl } from '../utils/getBaseUrl';

function Login() {
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get('next') || '/';
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    const formData = new FormData(event.currentTarget);
    const res = await authenticate(formData);
    if (res.ok) {
      console.log(nextUrl)
      setTimeout(() => {
        router.push(getBaseUrl() + nextUrl);
      }, 0)
      
    } else {
      setErrorMessage(res.type)
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        name="auth-form"
        onSubmit={handleSubmit}
        className="space-y-4 p-8 bg-slate-700 rounded-md"
      >
        {errorMessage && (
          <div
            className={"bg-red-600 text-center  rounded-md text-white py-2"}
          >
            {errorMessage}
          </div>
        )}
        <div>
          <input
            name="username"
            type="text"
            className="px-4 py-2 bg-slate-900 rounded-md focus-visible:outline-none"
            placeholder="User name"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="px-4 py-2 bg-slate-900 rounded-md focus-visible:outline-none"
          />
        </div>
        <div>
          <FormButton>Login</FormButton>
        </div>
      </form>
    </div>
  );
}

export default Login;