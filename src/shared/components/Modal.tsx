import type { ReactNode } from "react";
import Button from "./Button";
import { X } from "lucide-react";

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
    return (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <Button
                    className="absolute top-2 left-2"
                    onClick={onClose}
                >
                    <X className="w-5 h-5" />
                </Button>
                {children}
            </div>
        </div>
    );
}
