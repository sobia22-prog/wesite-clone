import React from 'react';

const ExperienceNoovoSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[url('assets/images/sub-bg.webp')] bg-cover bg-center"
        style={{ backgroundSize: '2000px 1334px' }}
      ></div>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.58)]"></div> {/* Overlay element */}
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-regular mb-6 text-white">
            Experience the Noovo life for a weekend.
          </h2>
          <div className="mt-8">
            <button className="px-5 py-2 rounded-full hover:bg-gray-200 transition bg-white text-black group overflow-hidden">
              <span className="relative flex items-center">
                Try a Noovo van
                <svg className="w-5 h-5 ml-2 transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-black"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNoovoSection;