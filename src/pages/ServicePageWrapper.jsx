import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from './Service';
import QuoteModal from '../components/QuoteModal';
import commercialImg from '../assets/commercial.jpg';
import accommodationImg from '../assets/accommodation.jpg';
import hospitalityImg from '../assets/hospitality.jpg';
import domesticImg from '../assets/domestic.jpg';

export default function ServicePageWrapper() {
    const { serviceId } = useParams();
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [quoteSuccess, setQuoteSuccess] = useState(false);
    
    return (
        <>
            <Service 
                setShowQuoteModal={setShowQuoteModal}
                selectedService={serviceId || null}
                commercialImg={commercialImg}
                accommodationImg={accommodationImg}
                hospitalityImg={hospitalityImg}
                domesticImg={domesticImg}
            />

            <QuoteModal 
                showQuoteModal={showQuoteModal}
                setShowQuoteModal={setShowQuoteModal}
                quoteSuccess={quoteSuccess}
                setQuoteSuccess={setQuoteSuccess}
            />
        </>
    );
}