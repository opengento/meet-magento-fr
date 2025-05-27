import React from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  variant?: 'side' | 'center';
}

const Modal = ({ isOpen, onClose, children, variant = 'side' }: ModalProps) => {
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

  React.useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <div 
      className={`
        fixed inset-0 z-50 bg-black/50 transition-opacity
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
    >
      <div 
        className={`
          absolute bg-white h-full transition-transform duration-300
          ${variant === 'side' 
            ? 'right-0 w-full md:w-3/4 lg:w-2/3 translate-x-0' 
            : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-4/5 lg:w-3/4 h-auto max-h-[90vh] rounded-lg'
          }
          ${isOpen 
            ? variant === 'side' ? 'translate-x-0' : 'scale-100'
            : variant === 'side' ? 'translate-x-full' : 'scale-95'
          }
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-full overflow-y-auto px-6 py-14 md:px-8 bg-camel ">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded bg-purple transition hover:bg-purple-500"
          >
            <IoClose className="text-white" size={24} />
          </button>
          <div className={`pb-6 md:pb-8 ${variant === 'center' ? 'h-full' : ''}`}>{children}</div>
          <div className="fixed z-20 bottom-0 left-0 w-full h-9 bg-[url('/images/pattern_popin.svg')]"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
