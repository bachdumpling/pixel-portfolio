import folderIcon from "../assets/folder-icon.svg";

const FileManager = ({ onAboutClick, onTimeCapsuleClick }) => {
  return (
    <div className="grid grid-cols-4 gap-6 p-8">
      <button
        onClick={onAboutClick}
        className="flex flex-col items-center group"
      >
        <img
          src={folderIcon}
          alt="About Me"
          className="w-16 h-16 group-hover:scale-105 transition-transform"
        />
        <span className="mt-2 text-sm text-gray-700">About Me</span>
      </button>

      <button
        onClick={onTimeCapsuleClick}
        className="flex flex-col items-center group"
      >
        <img
          src={folderIcon}
          alt="Time Capsule"
          className="w-16 h-16 group-hover:scale-105 transition-transform"
        />
        <span className="mt-2 text-sm text-gray-700">Time Capsule</span>
      </button>
    </div>
  );
};

export default FileManager;
