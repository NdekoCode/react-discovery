const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center">
      <div className="flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-transparent bg-transparent text-white focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
        <span
          className="animate-spin inline-block size-4 border-3 border-blue-700 border-t-transparent text-white rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
