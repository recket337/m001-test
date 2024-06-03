import { ProfileData } from '@/app/shared/types';
import { faker } from '@faker-js/faker';

export async function GET() {
  const data: ProfileData = {
    name: faker.person.fullName(),
    phone: faker.phone.number(),
  };
  if (data.name && data.phone) {
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  }
  return new Response('Server error', {
    status: 500,
  });
}
