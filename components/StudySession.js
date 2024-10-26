"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { FiClock, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { pdfjs } from 'react-pdf';

const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), {
  ssr: false,
});
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), {
  ssr: false,
});

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function StudySession() {
  const router = useRouter();
  const { duration, shortBreak, longBreak, file } = router.query;

  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(true);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      router.push('/completed-session');
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, router]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndSession = () => {
    router.push('/failed-session');
  };

  return (
    <div className="h-full flex">
      <div className="w-1/4 bg-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-black">Timer</h2>
        <div className="text-4xl font-bold mb-4 text-black">{formatTime(timeLeft)}</div>
        <div className="mb-4">
          <h3 className="font-bold text-black">Short Break: {formatTime(shortBreak * 60)}</h3>
          <h3 className="font-bold text-black">Long Break: {formatTime(longBreak * 60)}</h3>
        </div>
        <button
          onClick={handleEndSession}
          className="mt-auto bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          End Session
        </button>
      </div>
      <div className="flex-1 p-6">
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
            className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 disabled:opacity-50 text-black"
          >
            <FiChevronLeft />
          </button>
          <span className="text-black">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
            disabled={pageNumber >= numPages}
            className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 disabled:opacity-50 text-black"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudySession;
