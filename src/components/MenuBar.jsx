import { useState, useEffect } from "react";
import resume from "../assets/resume.pdf";

const MenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="">
      <div className="bg-win-blue border-b text-4xl text-center border-win-border p-4">
        <span>
          The 2025 Ogilvy Residency - My time capsule from{" "}
          <a
            href="https://www.bachle.info"
            className="underline decoration-wavy decoration-win-yellow"
          >
            Bach Le
          </a>
        </span>
      </div>
      <div className="p-2 border-t-4 border-b-4 bg-win-white border-win-border">
        <div className="text-xl flex gap-4 px-2 py-1 relative">
          <div>
            <button
              className={`hover:bg-gray-300 px-2 focus:outline-none ${
                activeMenu === "file" ? "bg-gray-300" : ""
              }`}
              onClick={() => toggleMenu("file")}
            >
              File
            </button>
            {activeMenu === "file" && (
              <div className="absolute top-full left-2 bg-win-white border-2 border-win-border shadow-md min-w-[200px]">
                <a
                  href={resume}
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-300"
                >
                  My Resume
                </a>
                <a
                  href="https://www.bachle.info"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-300"
                >
                  Portfolio
                </a>
              </div>
            )}
          </div>

          <div>
            <button
              className={`hover:bg-gray-300 px-2 focus:outline-none ${
                activeMenu === "contact" ? "bg-gray-300" : ""
              }`}
              onClick={() => toggleMenu("contact")}
            >
              Contact
            </button>
            {activeMenu === "contact" && (
              <div className="absolute top-full bg-win-white border-2 border-win-border shadow-md min-w-[200px]">
                <div className="px-4 py-2">Email: your.email@example.com</div>
                <div className="px-4 py-2">Phone: (646) 415-2281</div>
                <a
                  href="https://linkedin.com/in/bachhoangle"
                  target="_blank"
                  className="block px-4 py-2 hover:bg-gray-300"
                >
                  LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
