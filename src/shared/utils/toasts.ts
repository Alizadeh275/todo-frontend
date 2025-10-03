// utils/toast.ts
import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

export type ToastType = "success" | "error" | "info";

const defaultOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const showToast = (
    message: string,
    type: ToastType = "info",
    options?: ToastOptions
) => {
    const toastOptions = { ...defaultOptions, ...options };

    switch (type) {
        case "success":
            toast.success(message, toastOptions);
            break;
        case "error":
            toast.error(message, toastOptions);
            break;
        case "info":
        default:
            toast.info(message, toastOptions);
            break;
    }
};
