import { NextRequest } from 'next/server';

const users = [{ id: 1, username: 'admin', password: '123456' }];

export async function POST(request: NextRequest) {
  const data = await request.json();
  const user = users.find(
    (user) => user.username === data.username && user.password === data.password,
  );
  if (user) {
    return new Response('Login successful', {
      status: 200,
    });
  }
  return new Response('Invalid username and password', {
    status: 401,
  });
}
