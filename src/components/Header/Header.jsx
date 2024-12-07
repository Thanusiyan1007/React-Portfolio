import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [cvType, setCvType] = useState(""); // State to track selected CV type

  // Function to handle navigation to sections
  const handleNavigation = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector(id);
    if (targetSection) {
      const headerHeight = 80; // Adjust for header height
      const sectionPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close the menu after clicking
    setMenuOpen(false);
  };

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle CV download based on selected type
  const downloadCV = () => {
    if (cvType) {
      const cvLink = cvType === "UI/UX"
        ? "/assets/data/UIUX_THANUSIYAN.pdf" // Relative path from public directory
        : "/path/to/Software_Engineering_CV.pdf";
      window.open(cvLink, "_blank"); // Open the CV link in a new tab
      toggleModal(); // Close the modal after download
    }
  };

  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center bg-white sticky top-0 z-50 transition-shadow duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              T
            </span>
            <div className="leading-[20px]">
              <h2 className="text-2xl text-smallTextColor font-[700]">Thanusiyan</h2>
              <p className="text-smallTextColor text-[18px]">Personal</p>
            </div>
          </div>

          {/* Menu */}
          <div className={`menu md:flex ${menuOpen ? "block" : "hidden"}`}>
            <ul className="flex md:flex-row flex-col gap-10 list-none">
              <li className="text-smallTextColor font-[600]">
                <a href="#about" onClick={(e) => handleNavigation(e, "#about")}>
                  About
                </a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a href="#services" onClick={(e) => handleNavigation(e, "#services")}>
                  Services
                </a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a href="#portfolio" onClick={(e) => handleNavigation(e, "#portfolio")}>
                  Portfolio
                </a>
              </li>
              <li className="text-smallTextColor font-[600]">
                <a href="#contact" onClick={(e) => handleNavigation(e, "#contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Right */}
          <div className="flex items-center gap-4">
            {/* Single CV Button */}
            <button
              onClick={toggleModal}
              className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-1.5 px-3 rounded-[8px] max-h-[30px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300"
            >
              <i className="ri-download-line"></i>Download CV
            </button>

            {/* Mobile Menu Button */}
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className={`ri-menu-line ${menuOpen ? "rotate-90" : ""} transition-all duration-300`}></i>
            </span>
          </div>
        </div>
      </div>

      {/* Modal for CV Selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-60 flex justify-center items-center z-50 transition-all duration-300">
          <div className="bg-white p-2 rounded-lg shadow-lg w-[400px] h-[160px] flex flex-col justify-center items-center space-y-3">
            <h3 className="text-lg font-semibold text-primaryColor">Choose CV Type</h3>

            <div className="flex flex-col gap-2 w-full">
              <select
                value={cvType}
                onChange={(e) => setCvType(e.target.value)}
                className="w-full p-2 text-sm border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primaryColor transition-all duration-300"
              >
                <option value="">-- Select CV Type --</option>
                <option value="UI/UX">UI/UX CV</option>
                <option value="Software Engineering">Software Engineering CV</option>
              </select>
            </div>

            <div className="w-full flex justify-between gap-3">
              <button
                onClick={downloadCV}
                className="bg-primaryColor text-white py-1.5 px-4 rounded-full w-full text-sm hover:bg-primaryColor/80 transition-all duration-300"
                disabled={!cvType} // Disable if no type is selected
              >
                Download
              </button>

              <button
                onClick={toggleModal}
                className="bg-gray-300 text-smallTextColor py-1.5 px-3 rounded-md w-full text-sm hover:bg-gray-400 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
