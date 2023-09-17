import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl text-red-500">Oops!!!</h2>
        <h3 className="text-2xl text-gray-800 mt-2">Something went wrong!</h3>
        <h4 className="text-lg text-gray-600 mt-2">
          {error.status}: {error.statusText}
        </h4>
      </div>
    </div>
  );
};

export default Error;
