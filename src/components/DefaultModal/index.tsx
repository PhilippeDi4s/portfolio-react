"use client";

import { XIcon } from "lucide-react";
import { createPortal } from "react-dom";

type DefaultModalProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

export function DefaultModal({
  isOpen = true,
  onClose,
  children,
}: DefaultModalProps) {
  if (!isOpen) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white cursor-pointer p-2 rounded-full hover:bg-white/10 transition"
        onClick={onClose}
      >
        <XIcon size={38} />
      </button>

      <div
        className="m-auto bg-gray-800/60 border border-white/30 rounded-2xl w-[90%] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
