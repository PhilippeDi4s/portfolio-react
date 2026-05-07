import clsx from "clsx";
import React from "react";

type SwitchButtonProps = {
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ContentSwitcherProps = {
  children: React.ReactElement<SwitchButtonProps>[];
};

export function ContentSwitcher({ children }: ContentSwitcherProps) {
  return (
    <div
      className={clsx(
        "mb-6",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "gap-6",
        "lg:flex-row",
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: clsx(
              "w-full",
              "max-w-105",
              "bg-transparent",
              "outline-1",
              "outline-white/30",
              "px-6",
              "py-5",
              "rounded-lg",
              "cursor-pointer",
              "flex",
              "items-center",
              "justify-center",
              "gap-2",
              "transition",
              "ease-in-out",
              "duration-500",
              "hover:brightness-80",
              "hover:outline-offset-3",
              "hover:outline-white",
              "hover:outline-2",
              `${child.props.className || ""}`,
              child.props.isActive &&
                "bg-[radial-gradient(circle,_rgba(17,53,159,1)_0%,_rgba(13,43,156,1)_24%,_rgba(10,32,153,1)_49%,_rgba(19,0,52,1)_94%)] outline-white/70",
              child.props.className,
            ),
          });
        }
        return child;
      })}
    </div>
  );
}
