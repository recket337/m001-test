'use server';

import { cookies } from 'next/headers';

const users = [{ id: 1, username: 'admin', password: '123456' }];

export const login = async (formData: FormData) => {
  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: formData.get('username'),
      password: formData.get('password'),
    }),
  });

  if (res.ok) {
    cookies().set({
      name: 'token', // from res.data.token
      value: 'success',
      // maxAge: 60 * 60 * 24,
    });
    return { message: res.text(), status: res.status };
  }
  return { message: res.text(), status: res.status };
};
