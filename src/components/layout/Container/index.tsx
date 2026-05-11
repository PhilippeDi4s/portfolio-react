type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <>
      <main className="w-full flex flex-col my-6 md:my-12">{children}</main>
    </>
  );
}
