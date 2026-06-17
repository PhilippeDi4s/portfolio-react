import { CircleAlertIcon, LucideIcon } from "lucide-react";
import {
  ComponentProps,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";

interface FormTextAreaProps extends Omit<ComponentProps<"textarea">, "name"> {
  icon: LucideIcon;
  placeholder?: string;
  label: string;
  id: string;
  iconClassName?: string;
  error?: string;
}

export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (
    {
      icon: Icon,
      placeholder,
      label,
      id,
      iconClassName,
      error,
      className,
      onInput,
      value,
      ...rest
    },
    ref,
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const adjustHeight = useCallback(() => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }, []);

    const setRefs = useCallback(
      (node: HTMLTextAreaElement | null) => {
        textareaRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    const handleInput: ComponentProps<"textarea">["onInput"] = (event) => {
      onInput?.(event);
      adjustHeight();
    };

    useLayoutEffect(() => {
      adjustHeight();
    }, [adjustHeight, value]);

    const inputGroupStyle = "flex flex-col gap-0.5";
    const inputWrapperStyle = "relative flex flex-col gap-1";
    const inputsStyle =
      "outline-1 outline-white/30 rounded-[12px] p-[1rem] pl-[3rem] bg-[rgba(255,255,255,0.13)] w-full transition duration-300 leading-[1.5] focus:outline-offset-1 focus:outline-white resize-none overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#1e40af_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-800";
    const iconStyle = "absolute left-[0.75rem] top-[1.2rem] text-[1rem]";

    return (
      <div className={inputGroupStyle}>
        <label htmlFor={id}>{label}</label>
        <div className={inputWrapperStyle}>
          <Icon className={`${iconStyle} ${iconClassName ?? ""}`} />
          <textarea
            ref={setRefs}
            id={id}
            value={value}
            placeholder={placeholder}
            onInput={handleInput}
            className={`${inputsStyle} min-h-30 ${className ?? ""}`}
            {...rest}
          />
          {error && (
            <span className="flex items-center gap-2 text-red-600 text-[1rem]">
              <CircleAlertIcon size={20} /> {error}
            </span>
          )}
        </div>
      </div>
    );
  },
);

FormTextArea.displayName = "FormTextArea";
