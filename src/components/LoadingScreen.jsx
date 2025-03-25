const LoadingScreen = () => (
  <div className="fixed inset-0 bg-win-bg flex flex-col items-center justify-center z-50">
    <div className="bg-win-gray border-4 border-win-border w-full max-w-lg p-10">
      {/* Title */}
      <h1 className="text-win-border font-vt323 text-4xl mb-8 text-center">
        <span className="animate-pulse">LOADING... </span>
      </h1>

      {/* Loading Bar Container */}
      <div className="bg-win-white border-2 border-win-border p-1 mb-4">
        <div
          className="h-6 bg-win-blue origin-left animate-loading"
          style={{
            width: "0%",
          }}
        />
      </div>

      {/* Status Text */}
      <div className="font-vt323 text-win-border text-xl text-center">
        <p className="animate-pulse">Please wait...</p>
      </div>
    </div>
  </div>
);

export default LoadingScreen;
