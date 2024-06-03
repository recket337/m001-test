'use server'
 
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const users = [{ id: 1, username: 'admin', password: '123456' }];
 
export async function authenticate(formData: FormData): Promise<{ok : boolean, type: string}>  {
  try {
    const user = users.find(
      (user) => user.username === formData.get('username') && user.password === formData.get('password'),
    );
    if (user) {
      cookies().set({
        name: 'session', // from res.data.token
        value: 'success',
        // maxAge: 60 * 60 * 24,
      });
      return { ok: true, type: 'authorized'}
    }
    else {
      throw new Error('Invalid credentials.')
    };
  } catch (error) {
    if (error instanceof Error) {
      return { ok: false, type: error.message };
    }
    return { ok: false, type: 'Something went wrong.' };
  }
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
  redirect('/login');
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return session;
}