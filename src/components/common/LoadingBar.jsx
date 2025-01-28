const LoadingBar = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="animate-fade-in-scale fixed top-0 left-0 w-[100%] h-1 bg-blue-600 z-50 transform transition-all duration-500"></div>
    )
  );
};

export default LoadingBar;
