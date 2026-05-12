type SwitchButtonProps = {
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SwitchButton({
  isActive,
  className,
  ...props
}: SwitchButtonProps) {
  return <button className={className} {...props} />;
}