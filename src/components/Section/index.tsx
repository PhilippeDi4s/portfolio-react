type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({
  children,
  className = "",
  id
}: SectionProps) {
  return (
    <section id={id} className={`w-full max-w-400 mx-auto p-4 md:px-16 ${className} lg:px-25 `}>
      {children}
    </section>
  );
}
