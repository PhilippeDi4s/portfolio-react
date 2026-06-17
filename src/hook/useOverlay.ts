import { useEffect, useState } from "react";

export function useOverlay() {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = content ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [content]);

  return {
    content,
    open: (content: string) => setContent(content),
    close: () => setContent(null),
  };
}
