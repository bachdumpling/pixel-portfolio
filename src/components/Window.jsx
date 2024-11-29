import Draggable from "react-draggable";

const Window = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Draggable handle=".window-header">
      <div className="absolute top-24 right-5 left-1/4 border-4 border-win-border shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
        <div className="window-header bg-win-blue text-black px-2 py-1 flex justify-between items-center text-xl border-b-4 border-win-border cursor-pointer">
          <span>{title}</span>

          <div className="flex gap-4">
            <p>(drag me)</p>
            <button
              onClick={onClose}
              className="leading-none px-2 py-1 text-xl bg-win-gray hover:bg-win-gray text-black border-win-border border-2"
            >
              x
            </button>
          </div>
        </div>
        <div className="bg-white p-4">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;
