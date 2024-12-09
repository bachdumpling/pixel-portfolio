import { useState, useEffect } from "react";
import MenuBar from "./components/MenuBar";
import FileIcon from "./components/FileIcon";
import AboutWindow from "./components/AboutWindow";
import TimeCapsuleWindow from "./components/TimeCapsuleWindow";
import LoadingScreen from "./components/LoadingScreen";
import folderIcon from "./assets/folder-icon.svg";
import notepadIcon from "./assets/notepad.svg";
import { inject } from "@vercel/analytics";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isTimeCapsuleOpen, setIsTimeCapsuleOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    inject();

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="font-vt323 min-h-screen bg-win-bg max-w-full overflow-hidden">
          <div className="fixed inset-0 -translate-y-20 w-[1000px] h-[700px] m-auto border-win-border">
            <div className="min-h-full min-w-full bg-win-yellow border-4 border-win-border shadow-md">
              <MenuBar />
              <div className="bg-win-white min-h-[400px] max-w-3xl border-b-4 border-r-4 border-win-border">
                <div className="bg-win-gray border-b text-xl text-center border-win-border py-1 px-2">
                  Main
                </div>

                <div className="grid grid-cols-4 gap-6 p-6">
                  <FileIcon
                    icon={folderIcon}
                    label="Time Capsule"
                    onClick={() => {
                      setIsTimeCapsuleOpen(true);
                      setSelectedIcon("timeCapsule");
                    }}
                    isSelected={selectedIcon === "timeCapsule"}
                  />
                  <FileIcon
                    icon={notepadIcon}
                    label="About Me"
                    onClick={() => {
                      setIsAboutOpen(true);
                      setSelectedIcon("about");
                    }}
                    isSelected={selectedIcon === "about"}
                  />
                </div>
              </div>
            </div>

            <AboutWindow
              isOpen={isAboutOpen}
              onClose={() => {
                setIsAboutOpen(false);
                setSelectedIcon(null);
              }}
            />

            <TimeCapsuleWindow
              isOpen={isTimeCapsuleOpen}
              onClose={() => {
                setIsTimeCapsuleOpen(false);
                setSelectedIcon(null);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
