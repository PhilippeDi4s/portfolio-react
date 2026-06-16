import { XIcon } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

type LightboxProps = {
  src: string | null;
  onClose: () => void;
};

export function Lightbox({ src, onClose }: LightboxProps) {
  if (!src) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white cursor-pointer p-2 rounded-full hover:bg-white/10 transition"
        onClick={onClose}
      >
        <XIcon size={28} />
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt="Imagem ampliada"
          width={1200}
          height={1200}
          className="max-w-220 max-h-220 rounded-xl object-contain xl:max-w-none xl:max-h-none"
        />
      </div>
    </div>,
    document.body,
  );
}
