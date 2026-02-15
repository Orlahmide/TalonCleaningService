import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicePageWrapper from './pages/ServicePageWrapper'

export default function App() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <div className="min-h-screen text-gray-800">
      <main className="py-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePageWrapper  />} />
          <Route path="/services/:serviceId" element={<ServicePageWrapper />} />
        </Routes>
      </main>
    </div>
  )
}