// utils/toast.ts
import { toast as toastifyToast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

export type ToastType = "success" | "error" | "info";

type ToastLibrary = "react-toastify" | "react-hot-toast";

let currentLibrary: ToastLibrary = "react-toastify"; // default

export const setToastLibrary = (lib: ToastLibrary) => {
    currentLibrary = lib;
};

export const showToast = (message: string, type: ToastType = "info", options?: ToastOptions) => {
    if (currentLibrary === "react-toastify") {
        switch (type) {
            case "success":
                toastifyToast.success(message, options);
                break;
            case "error":
                toastifyToast.error(message, options);
                break;
            case "info":
            default:
                toastifyToast.info(message, options);
                break;
        }
    } else {
        // placeholder for react-hot-toast later
        console.log(`[HotToast ${type}] ${message}`);
    }
};
