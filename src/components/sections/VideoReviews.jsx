import React, { useState } from 'react';
import videoData from './videoData';

const VideoReviews = () => {
  const [selectedModel, setSelectedModel] = useState('All');
  const [visibleVideos, setVisibleVideos] = useState(4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const models = ['All', 'Lite', 'Pop', 'Plus'];

  const filteredVideos = selectedModel === 'All'
    ? videoData
    : videoData.filter(video => video.model === selectedModel);

  const displayedVideos = filteredVideos.slice(0, visibleVideos);

  const handleSeeMore = () => {
    setVisibleVideos(filteredVideos.length);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const renderModal = () => {
    if (!selectedVideo) return null;

    return (
      <div className="fixed inset-0 bg-white bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-4/5 md:w-3/4 lg:w-2/3 relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="aspect-w-16 aspect-h-9" dangerouslySetInnerHTML={{ __html: selectedVideo.embedCode }} />
          <h3 className="text-lg font-semibold mt-4">{selectedVideo.title}</h3>
          <p className="text-sm text-gray-600">{selectedVideo.channel}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-8">
          {models.map(model => (
            <button
              key={model}
              className={`px-4 py-2 rounded-full ${selectedModel === model ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}
              onClick={() => setSelectedModel(model)}
            >
              {model}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedVideos.map(video => (
            <div
              key={video.id}
              className="overflow-hidden transform scale-100 transition-transform duration-300 hover:scale-95 rounded-lg"
            >
              <a href="#" onClick={(e) => { e.preventDefault(); handleVideoClick(video); }}>
                <img src={video.thumbnail} alt={video.title} className="w-full object-cover rounded-lg" />
              </a>
              <div className="p-4">
                <a href="#" onClick={(e) => { e.preventDefault(); handleVideoClick(video); }} className="block mb-2 text-lg font-semibold hover:underline">
                  {video.title}
                </a>
                <p className="text-sm text-gray-600">
                  {video.channel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {displayedVideos.length < filteredVideos.length && (
          <div className="text-center mt-6">
            <button
              className="border bg-transparent hover:bg-gray-200 text-black font-regular py-3 px-6 rounded-full"
              onClick={handleSeeMore}
            >
              See More
            </button>
          </div>
        )}
      </div>
      {isModalOpen && renderModal()}
    </section>
  );
};

export default VideoReviews;