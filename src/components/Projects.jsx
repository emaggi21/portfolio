import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Project</h2>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Preview Window */}
          <div className="relative w-full h-[400px] bg-gray-900 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 bg-gray-700 rounded px-2 py-0.5 text-sm text-gray-300">
                solauctionapp.com
              </div>
            </div>
            
            {/* Project Preview Frame */}
            <div className="mt-8 h-full w-full">
              <iframe 
                src="/api/placeholder/800/600"
                className="w-full h-full"
                title="Project Preview"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Solana Blockchain Marketplace</h3>
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-medium">
                Solana Blockchain
              </span>
            </div>

            <p className="text-gray-600 mb-6 text-lg">
              A decentralized marketplace powered by a DAO on the Solana network. 
              This platform enables users to participate in auctions, manage digital assets, 
              and engage in community governance.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>DAO-based governance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Decentralized auctions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Community participation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Smart contract integration</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {['Solana', 'Rust', 'Web3.js', 'React', 'Tailwind CSS'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://solauctionapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <span>Visit Site</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;