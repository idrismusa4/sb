"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiClock, FiUpload } from 'react-icons/fi';

function SessionSetup() {
  const [duration, setDuration] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the data to your backend
    // For now, we'll just move to the next screen
    router.push({
      pathname: '/study-session',
      query: { duration, shortBreak, longBreak, file: file ? file.name : null }
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6 text-black">Study Session</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Choose your study cycle</label>
          <div className="mt-1 flex space-x-4">
            {[20, 25, 30].map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setDuration(time)}
                className={`px-4 py-2 rounded ${
                  duration === time ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'
                }`}
              >
                {time} min
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="shortBreak" className="block text-sm font-medium text-gray-700">Short Break</label>
            <input
              type="number"
              id="shortBreak"
              value={shortBreak}
              onChange={(e) => setShortBreak(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="longBreak" className="block text-sm font-medium text-gray-700">Long Break</label>
            <input
              type="number"
              id="longBreak"
              value={longBreak}
              onChange={(e) => setLongBreak(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Study Material</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileUpload} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF up to 10MB</p>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Start Session
          </button>
        </div>
      </form>
    </div>
  );
}

export default SessionSetup;
