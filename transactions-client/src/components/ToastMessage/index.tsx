import React from 'react';
import './ToastMessage.css';

type Props = {
  message: string;
  success: boolean;
}

const ToastMessage: React.FC<Props> = ({ message, success }) => {
  const backgroundStyle = success ? 'successful-message' : 'error-message';

  return (
    <div className={`toast-message-container ${backgroundStyle}`}>
      <p className="toast-message">{message}</p>
    </div>
  )
};

export default ToastMessage;
