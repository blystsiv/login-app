import { toast } from 'react-toastify';

export const showToastError = (message: string, options?: object) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: 'light',
    ...options,
  });
};

export const showToastWarning = (message: string, options?: object) => {
  toast.warn(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: 'light',
    ...options,
  });
};
