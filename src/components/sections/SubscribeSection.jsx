import React from 'react';

const SubSection = () => {
  return (
    <section className="m-10 rounded-xl bg-stone-100 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl font-light mb-4">Dive into the world of Noovo</h2>
        <p className="text-lg text-gray-800 mb-8">
          Wherever you go, you're home! We create modern off-grid homes on wheels to bring you to the
          outdoors. Living on the road has never been so comfortable! Welcome, to the great indoors.
        </p>
        <button className="bg-amber-400 text-black font-light py-3 px-6 rounded-full relative overflow-hidden group">
          <span className="transition-transform group-hover:translate-x-4">Subscribe to our YouTube channel</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SubSection;