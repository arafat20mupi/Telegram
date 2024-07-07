const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="sticky top-0 z-40 flex justify-between bg-gray-700 px-4 py-4">
      
      <button
        onClick={toggleSidebar}
        className="text-2xl text-white hover:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
