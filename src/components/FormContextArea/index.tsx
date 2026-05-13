import { CircleAlertIcon, LucideIcon } from "lucide-react";
import { ComponentProps, forwardRef } from "react";

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
      ...rest
    },
    ref,
  ) => {
    const inputGroupStyle = "flex flex-col gap-0.5";
    const inputWrapperStyle = "relative flex flex-col gap-1";
    const inputsStyle =
      "outline-1 outline-white/30 rounded-[12px] p-[1rem] pl-[3rem] bg-[rgba(255,255,255,0.13)] w-full transition duration-300 leading-[1.5] focus:outline-offset-1 focus:outline-white";
    const iconStyle = "absolute left-[0.75rem] top-[1.2rem] text-[1rem]";

    return (
      <div className={inputGroupStyle}>
        <label htmlFor={id}>{label}</label>
        <div className={inputWrapperStyle}>
          <Icon className={`${iconStyle} ${iconClassName ?? ""}`} />
          <textarea
            ref={ref}
            id={id}
            placeholder={placeholder}
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
