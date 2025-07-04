import { toast, type ToastOptions } from 'react-toastify';

const options: ToastOptions = {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
};

export const showToast = {
  success: (msg: string) => toast.success(msg, options),
  error: (msg: string) => toast.error(msg, options),
  info: (msg: string) => toast.info(msg, options),
  warn: (msg: string) => toast.warn(msg, options),
};
