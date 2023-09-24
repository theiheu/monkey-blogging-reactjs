import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ToastContext = createContext();

const useToast = () => {
  return useContext(ToastContext);
};

const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState("");
  console.log(`toastMessage:`, toastMessage);

  const showToast = (message) => {
    setToastMessage(message);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {/* {toastMessage && toast.success(toastMessage, { icon: "🚀" })} */}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export { ToastProvider, useToast };
