/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import TargetAudience from './components/TargetAudience';
import WhyJoin from './components/WhyJoin';
import Testimonials from './components/Testimonials';
import AboutTrainer from './components/AboutTrainer';
import ImagesSection from './components/ImagesSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { Settings } from 'lucide-react';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [images, setImages] = useState({
    trainer: '',
    session: '',
    workspace: '',
    community: ''
  });

  useEffect(() => {
    setImages({
      trainer: localStorage.getItem('img_trainer') || '',
      session: localStorage.getItem('img_session') || '',
      workspace: localStorage.getItem('img_workspace') || '',
      community: localStorage.getItem('img_community') || ''
    });
  }, []);

  const handleImageUpload = (key: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      try {
        localStorage.setItem(`img_${key}`, base64);
        setImages(prev => ({ ...prev, [key]: base64 }));
      } catch(e) {
        alert('Image too large for local storage. Please try a smaller image.');
      }
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleImageClear = (key: string) => {
    localStorage.removeItem(`img_${key}`);
    setImages(prev => ({ ...prev, [key]: '' }));
  };

  if (isAdminOpen) {
    return <AdminDashboard onClose={() => setIsAdminOpen(false)} images={images} onUpload={handleImageUpload} onClear={handleImageClear} />;
  }

  return (
    <div className="font-sans antialiased text-brand-navy min-h-screen flex flex-col justify-between overflow-x-hidden relative">
      <main className="flex-grow">
        <Hero />
        <Countdown />
        <WhatYouWillLearn />
        <TargetAudience />
        <WhyJoin />
        <Testimonials />
        <AboutTrainer />
        <ImagesSection customImages={images} />
        <FinalCTA />
      </main>
      <Footer />

      {/* Admin Dashboard Floating Button */}
      <button
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-6 right-6 bg-brand-navy text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 group flex items-center justify-center border-2 border-white/20"
        title="Admin Dashboard"
      >
        <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
}
