function FullScreeenLoading() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-200 overflow-hidden z-50">
      <div className="absolute left-0 w-1/2 h-full bg-blue-600 animate-fade-in-scale"></div>
    </div>
  );
}

export default FullScreeenLoading;
