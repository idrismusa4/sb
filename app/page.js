'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiHome, FiFileText, FiBarChart2, FiBook, FiUsers, FiLogOut, FiBell } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Dashboard from '../components/Dashboard';

export default function Home() {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [sessionData, setSessionData] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-100 border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Image src="/logo.svg" alt="StudyBug" width={32} height={32} />
            </div>
            <nav className="mt-5 flex-1 px-2 bg-gray-100 space-y-1">
              <SidebarLink icon={FiHome} text="Dashboard" href="/" />
              <SidebarLink icon={FiFileText} text="Test" href="/test" />
              <SidebarLink icon={FiBarChart2} text="Progress" href="/progress" />
              <SidebarLink icon={FiBook} text="Resources" href="/resources" />
              <SidebarLink icon={FiUsers} text="Community" href="/community" />
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <FiLogOut className="text-gray-400 group-hover:text-gray-500" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Logout</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ icon: Icon, text, href }) {
  return (
    <Link href={href} className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
      <Icon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
      {text}
    </Link>
  );
}

function Header({ user }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">StudyBug</h1>
        <div className="flex items-center">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <FiBell className="h-6 w-6" />
          </button>
          <div className="ml-3 relative">
            <div className="flex items-center">
              <Image className="h-8 w-8 rounded-full" src="/placeholder.svg" alt={user.name} width={32} height={32} />
              <span className="ml-2 text-sm font-medium text-gray-700">{user.name}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
