import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicePageWrapper from "./components/ServicePageWrapper";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const handleGetQuote = () => {
    setShowQuoteModal(true);
  };

  return (
    <div className="min-h-screen text-gray-800">
      {/* Navigation - Single navbar for entire app */}
      <Navbar onGetQuote={handleGetQuote} />
       <ScrollToTop />
      <main className="py-0">
        <Routes>
          {/* Pass the quote handler to each page */}
          <Route 
            path="/" 
            element={<Home onGetQuote={handleGetQuote} />} 
          />
          <Route 
            path="/contact" 
            element={<Contact onGetQuote={handleGetQuote} />} 
          />
          <Route 
            path="/about" 
            element={<AboutUs onGetQuote={handleGetQuote} />} 
          />
          <Route 
            path="/services" 
            element={<ServicePageWrapper onGetQuote={handleGetQuote} />} 
          />
          <Route 
            path="/services/:serviceId" 
            element={<ServicePageWrapper onGetQuote={handleGetQuote} />} 
          />
          <Route 
            path="/FAQs" 
            element={<FAQ onGetQuote={handleGetQuote} />} 
          />
        </Routes>
      </main>

      {/* Footer - Single footer for entire app */}
      <Footer />

      {/* Quote Modal - Using your existing QuoteModal props structure */}
      <QuoteModal 
        showQuoteModal={showQuoteModal}
        setShowQuoteModal={setShowQuoteModal}
        quoteSuccess={quoteSuccess}
        setQuoteSuccess={setQuoteSuccess}
      />
    </div>
  );
}
