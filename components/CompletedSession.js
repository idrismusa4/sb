"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { FiAward } from 'react-icons/fi';

function CompletedSession() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
      <FiAward className="mx-auto text-6xl text-yellow-400 mb-4" />
      <h1 className="text-3xl font-bold mb-4 text-black">Congratulations! John</h1>
      <p className="text-xl mb-6 text-black">Study Session Completed</p>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-lg mb-4">
          Well done! You&apos;ve successfully completed your Pomodoro session. Take a moment to relax and
          reward yourself. Remember, every small step brings you closer to your goals. Keep up the great work!
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => router.push('/session-setup')}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Start a New Session
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}

export default CompletedSession;
