const IconGrid = ({ onAboutClick, onPostersClick }) => {
  return (
    <div className="grid grid-cols-4 gap-8 p-8">
      <button
        onClick={onPostersClick}
        className="flex flex-col items-center gap-2 hover:bg-gray-200 p-2"
      >
        <img src="/folder-icon.png" alt="Posters" className="w-12 h-12" />
        <span className="font-retro">Posters</span>
      </button>

      <button
        onClick={onAboutClick}
        className="flex flex-col items-center gap-2 hover:bg-gray-200 p-2"
      >
        <img src="/notepad-icon.png" alt="About Me" className="w-12 h-12" />
        <span className="">About Me</span>
      </button>
    </div>
  );
};

export default IconGrid;
