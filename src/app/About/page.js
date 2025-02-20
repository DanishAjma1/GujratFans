'use client';

import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center relative z-10">About Gujrat Fans</h1>
        <p className="text-gray-700 text-lg text-center mb-6 relative z-10">
          Bringing You the Best in Air Circulation
        </p>
        
        <section className="mb-8 relative z-10 transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Established in <strong>[Year]</strong>, Gujrat Fans has been a pioneer in the fan industry, delivering high-quality,
            energy-efficient solutions. Based in the industrial hub of Gujrat, Pakistan, we have built a legacy of trust and innovation.
          </p>
        </section>
        
        <section className="mb-8 relative z-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">What We Offer</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
            <li className="bg-gray-100 p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-blue-100 hover:scale-105">✔ <strong>Ceiling Fans:</strong> Elegant and powerful designs for maximum airflow.</li>
            <li className="bg-gray-100 p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-blue-100 hover:scale-105">✔ <strong>Pedestal Fans:</strong> Adjustable and durable for versatile cooling.</li>
            <li className="bg-gray-100 p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-blue-100 hover:scale-105">✔ <strong>Exhaust Fans:</strong> Ensuring fresh air circulation in homes and workplaces.</li>
            <li className="bg-gray-100 p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-blue-100 hover:scale-105">✔ <strong>Wall & Bracket Fans:</strong> Space-saving and high-speed performance.</li>
            <li className="bg-gray-100 p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-blue-100 hover:scale-105">✔ <strong>Industrial Fans:</strong> Heavy-duty solutions for factories and commercial spaces.</li>
          </ul>
        </section>
        
        <section className="mb-8 relative z-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-xl shadow-lg text-gray-800 font-semibold transition-all duration-300 hover:bg-blue-200 hover:scale-105">✔ Superior Quality: Crafted with premium materials.</div>
            <div className="bg-blue-100 p-6 rounded-xl shadow-lg text-gray-800 font-semibold transition-all duration-300 hover:bg-blue-200 hover:scale-105">✔ Energy Efficiency: Designed for optimal power savings.</div>
            <div className="bg-blue-100 p-6 rounded-xl shadow-lg text-gray-800 font-semibold transition-all duration-300 hover:bg-blue-200 hover:scale-105">✔ Stylish Designs: Enhancing aesthetics with modern looks.</div>
            <div className="bg-blue-100 p-6 rounded-xl shadow-lg text-gray-800 font-semibold transition-all duration-300 hover:bg-blue-200 hover:scale-105">✔ Reliable Support: Dedicated customer service team.</div>
          </div>
        </section>
        
        <section className="mb-8 relative z-10 transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Our Vision & Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to be a globally recognized brand known for innovation, quality, and sustainability. We strive to provide
            energy-efficient fans that exceed customer expectations while embracing eco-friendly practices.
          </p>
        </section>
        
        <section className="text-center relative z-10 transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Join the Gujrat Fans Family</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Experience the power of superior airflow with Gujrat Fans. Explore our products and enjoy lasting comfort!
          </p>
          <div className="text-gray-800 text-lg bg-gray-200 p-6 rounded-xl shadow-md inline-block transition-all duration-300 hover:bg-gray-300 hover:scale-105">
            📍 <strong>Head Office:</strong> [Address] <br />
            📞 <strong>Contact:</strong> [Phone Number] <br />
            📧 <strong>Email:</strong> [Email Address] <br />
            🌍 <strong>Website:</strong> [Website URL]
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;