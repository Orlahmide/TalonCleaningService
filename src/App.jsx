import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TalonCleaningWebsite from './pages/TalonCleaningWebsite'

export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      <main className="py-o">
        <Routes>
          <Route path="/" element={<TalonCleaningWebsite />} />
        </Routes>
      </main>
    </div>
  )
}
