import { useEffect, useState } from "react";

export function useLightbox() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = src ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [src]);

  return {
    src,
    open: (src: string) => setSrc(src),
    close: () => setSrc(null),
  };
}