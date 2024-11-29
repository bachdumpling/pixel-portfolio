const FileIcon = ({ icon, label, onClick, isSelected }) => (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center px-1 py-4 rounded ${
        isSelected ? 'bg-win-bg text-white' : 'hover:bg-win-blue'
      }`}
    >
      <img src={icon} alt={label} className="w-12 h-12 mb-1" />
      <span className="text-center text-lg">{label}</span>
    </button>
  );
  
  export default FileIcon;