import React from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-[visibility] duration-300 ${
        isOpen ? "visible" : "invisible delay-300"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "bg-opacity-50" : "bg-opacity-0"
        }`}
        onClick={onClose}
      />
      <div className="flex items-start justify-end h-full">
        <div
          className={`w-full max-w-2xl h-full bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded bg-purple"
            >
              <IoClose className="text-white" size={24} />
            </button>
            <div className="p-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
