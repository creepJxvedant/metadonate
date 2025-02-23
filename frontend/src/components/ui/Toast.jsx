import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

const ToastContext = createContext();

const StyledToast = styled.div`
  background-color: #2d3748;
  border-radius: 0.25rem;
  color: #ffffff;
  padding: 1rem;
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 9999;
`;

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && <StyledToast>{toast}</StyledToast>}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const toast = (message) => {
  const showToast = useToast();
  showToast(message);
};

