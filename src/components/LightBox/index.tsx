import { X } from "lucide-react";
import Image from "next/image";

type LightboxProps = {
  src: string | null;
  onClose: () => void;
};

export function Lightbox({ src, onClose }: LightboxProps) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white cursor-pointer p-2 rounded-full hover:bg-white/10 transition"
        onClick={onClose}
      >
        <X size={28} />
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt="Imagem ampliada"
          width={1200}
          height={1200}
          className="rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
