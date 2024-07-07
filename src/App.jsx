import { useState } from "react";
import Sidebar from "./Shared/Navber/Slidebar";
import Navbar from "./Shared/Navber/Navber";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>Your content goes here...</p>
        </main>
      </div>
    </div>
  );
};

export default App;
