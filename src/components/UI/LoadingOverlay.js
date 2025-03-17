import React from 'react';

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow">
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingOverlay;