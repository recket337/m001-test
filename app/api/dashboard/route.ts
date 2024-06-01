import { NextRequest } from 'next/server';
import { DashboardData } from '@/app/shared/types';

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function GET(request: NextRequest) {
  const balance = randomIntFromInterval(5000, 10000);

  const data: DashboardData = {
    balance,
  };

  if (data.balance) {
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
