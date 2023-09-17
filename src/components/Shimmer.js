const Shimmer = () => {
  return (
    <div className="shimmer-container bg-white p-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="shimmer-card animate-pulse bg-gradient-to-r from-green-300 via-green-200 to-green-300 rounded-lg p-4"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
