import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

