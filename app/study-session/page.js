'use client';

import dynamic from 'next/dynamic'

const StudySession = dynamic(() => import('../../components/StudySession'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

export default function StudySessionPage() {
  return <StudySession />
}
