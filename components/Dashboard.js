"use client"

import React from 'react';
import Link from 'next/link';
import { FiPlus, FiCopy, FiFileText } from 'react-icons/fi';

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-black">Let&apos;s Start With...</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionCard icon={FiPlus} title="Study Session" href="/session-setup" />
        <ActionCard icon={FiCopy} title="Summarize Notes" href="/summarize" />
        <ActionCard icon={FiFileText} title="Generate Test" href="/generate-test" />
      </div>
    </div>
  );
}

function ActionCard({ icon: Icon, title, href }) {
  return (
    <Link href={href} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
      <div className="bg-gray-100 p-3 rounded-full mb-4">
        <Icon size={24} className="text-green-600" />
      </div>
      <h3 className="text-sm font-medium text-center text-black">{title}</h3>
    </Link>
  );
}

export default Dashboard;
