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
    <section id={id} className={`w-full mx-auto p-6 md:px-16 ${className} lg:px-25 xl:px-30`}>
      {children}
    </section>
  );
}
