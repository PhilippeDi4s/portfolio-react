import { CircleAlertIcon, LucideIcon } from "lucide-react";
import { ComponentProps, forwardRef } from "react";

interface FormInputProps extends Omit<ComponentProps<"input">, "name"> {
  icon: LucideIcon;
  placeholder?: string;
  label: string;
  id: string;
  iconClassName?: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
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
    ref
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
          <input
            ref={ref}
            id={id}
            placeholder={placeholder}
            className={`${inputsStyle} ${className ?? ""}`}
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
  }
);

FormInput.displayName = "FormInput";
