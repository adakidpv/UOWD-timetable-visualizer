import React from 'react';

function Notification({ message, type }) {
  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className={`fixed top-4 right-4 p-3 rounded shadow-lg z-50 ${getBackgroundColor()}`}>
      {message}
    </div>
  );
}

export default Notification;