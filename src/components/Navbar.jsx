const Navbar = () => {
    return (
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Edoardo Maggi</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-500 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-500 transition-colors">Projects</a>
              <a href="#crypto" className="text-gray-600 hover:text-indigo-500 transition-colors">Crypto</a>
              <a href="#skills" className="text-gray-600 hover:text-indigo-500 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-500 transition-colors">Contact</a>
            </div>
  
            {/* Mobile Menu Button */}
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;