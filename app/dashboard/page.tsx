'use client';

import { useEffect, useState } from 'react';

function Dashboard() {
  const [withdrawAmount, setWithdrawAmount] = useState('0');
  const [balance, setBalance] = useState('0');
  const [transactionsAmount, setTransactionsAmount] = useState(0);

  const handleWithdraw = () => {
    if (+withdrawAmount && +withdrawAmount <= +balance) {
      setBalance(String(+balance - +withdrawAmount));
      setTransactionsAmount(transactionsAmount + 1);
      alert('Withdraw successful');
    } else {
      alert('Insufficient balance');
    }
  };

  useEffect(() => {
    async function getDashboardData() {
      const res = await fetch('api/dashboard');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      setBalance(data.balance);
    }

    getDashboardData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col h-full">
      <p>
        <strong>Transactions:</strong>
        {' '}
        {transactionsAmount}
      </p>
      <p>
        <strong>Balance:</strong>
        {' '}
        {balance}
      </p>
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Withdraw Amount"
        className="mt-2 p-2 border text-black"
      />
      <button disabled={!withdrawAmount} onClick={handleWithdraw} className="mt-2 p-2 bg-blue-500 text-white">Withdraw</button>
    </div>
  );
}

export default Dashboard;
