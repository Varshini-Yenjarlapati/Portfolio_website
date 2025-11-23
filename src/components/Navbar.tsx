import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [{ name: "HOME", id: "Homes" },
    { name: "WORK", id: "projects" },
    { name: "SKILLS", id: "skills" },
    { name: "ABOUT", id: "about" },
    { name: "CONTACT", id: "contact" },];
  const handleScroll = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  }
};

  return (
    <nav
      className="fixed z-50 flex items-center justify-between w-full p-6 border-b backdrop-blur-md bg-[#86A69D]"
      style={{ borderColor: "#FFFFFF" }}
    >
      {/* Logo */}
      <div className="text-base font-medium text-white font-roboto">
        VARSHINI <span className="text-[#ffff] font-thin opacity-50 font-roboto">/Portfolio</span>
      </div>

      {/* Desktop Links */}
      <div className="flex justify-center flex-1 p-4">
        <ul className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer text-white text-base font-medium font-roboto hover:text-[#F2C6C2] transition-colors duration-300"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center">
        <button
          className="p-2 ml-4 rounded-full md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="absolute flex flex-col font-light px-6 py-4 space-y-4 shadow-lg top-20 right-6 rounded-xl md:hidden bg-[#86A69D] border border-white"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-base font-roboto text-left text-white hover:text-[#F2C6C2] transition-colors duration-300"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
