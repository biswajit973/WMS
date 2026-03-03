import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Placeholder Pages for now
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicePage = React.lazy(() => import('./pages/ServicePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'));
const PricePage = React.lazy(() => import('./pages/PricePage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const TestimonialPage = React.lazy(() => import('./pages/TestimonialPage'));
const ServiceDetailsPage = React.lazy(() => import('./pages/ServiceDetailsPage'));
const FaqPage = React.lazy(() => import('./pages/FaqPage'));
const InitialConsultationPage = React.lazy(() => import('./pages/InitialConsultationPage'));
const SecondConsultationPage = React.lazy(() => import('./pages/SecondConsultationPage'));
const ThirdConsultationPage = React.lazy(() => import('./pages/ThirdConsultationPage'));
const BlogDetailsPage = React.lazy(() => import('./pages/BlogDetailsPage'));
const JobPage = React.lazy(() => import('./pages/JobPage'));
const JobDetailsPage = React.lazy(() => import('./pages/JobDetailsPage'));
const ProductDetailsPage = React.lazy(() => import('./pages/ProductDetailsPage'));
const Service3Page = React.lazy(() => import('./pages/Service3Page'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegistrationPage = React.lazy(() => import('./pages/RegistrationPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
const LocationPage = React.lazy(() => import('./pages/LocationPage'));

// Wrap lazy loading with a suspense boundary
const SuspenseWrapper = ({ children }) => (
  <React.Suspense fallback={<div className="preloader">Loading...</div>}>
    {children}
  </React.Suspense>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<SuspenseWrapper><HomePage /></SuspenseWrapper>} />
          <Route path="/service-1/" element={<SuspenseWrapper><ServicePage /></SuspenseWrapper>} />
          <Route path="/about/" element={<SuspenseWrapper><AboutPage /></SuspenseWrapper>} />
          <Route path="/portfolio/" element={<SuspenseWrapper><PortfolioPage /></SuspenseWrapper>} />
          <Route path="/price/" element={<SuspenseWrapper><PricePage /></SuspenseWrapper>} />
          <Route path="/contact/" element={<SuspenseWrapper><ContactPage /></SuspenseWrapper>} />
          <Route path="/testimonial/" element={<SuspenseWrapper><TestimonialPage /></SuspenseWrapper>} />
          <Route path="/service-details/" element={<SuspenseWrapper><ServiceDetailsPage /></SuspenseWrapper>} />
          <Route path="/faq/" element={<SuspenseWrapper><FaqPage /></SuspenseWrapper>} />
          <Route path="/Initial_Consultation/" element={<SuspenseWrapper><InitialConsultationPage /></SuspenseWrapper>} />
          <Route path="/second_Consultation/" element={<SuspenseWrapper><SecondConsultationPage /></SuspenseWrapper>} />
          <Route path="/third_Consultation/" element={<SuspenseWrapper><ThirdConsultationPage /></SuspenseWrapper>} />
          <Route path="/blog-details/" element={<SuspenseWrapper><BlogDetailsPage /></SuspenseWrapper>} />
          <Route path="/job/" element={<SuspenseWrapper><JobPage /></SuspenseWrapper>} />
          <Route path="/job-details/" element={<SuspenseWrapper><JobDetailsPage /></SuspenseWrapper>} />
          <Route path="/product-details/" element={<SuspenseWrapper><ProductDetailsPage /></SuspenseWrapper>} />
          <Route path="/service-3/" element={<SuspenseWrapper><Service3Page /></SuspenseWrapper>} />
          <Route path="/login/" element={<SuspenseWrapper><LoginPage /></SuspenseWrapper>} />
          <Route path="/registration/" element={<SuspenseWrapper><RegistrationPage /></SuspenseWrapper>} />
          {/* SEO Location Pages */}
          <Route path="/web-development-:city/" element={<SuspenseWrapper><LocationPage /></SuspenseWrapper>} />
          <Route path="*" element={<SuspenseWrapper><NotFoundPage /></SuspenseWrapper>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
