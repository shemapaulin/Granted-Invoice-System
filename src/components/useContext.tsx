import React, { createContext, useContext, useState } from 'react';

// Define the context interface
interface InvoiceContextType {
  name: string;
  setName: (name: string) => void;
}

// Create the context
const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

// Create a custom hook to consume the context
export const useInvoiceContext = (): InvoiceContextType => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error('useInvoiceContext must be used within an InvoiceContextProvider');
  }
  return context;
};

// Create a provider component
export const InvoiceContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>('');

  const value: InvoiceContextType = {
    name,
    setName,
  };

  return <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>;
};
