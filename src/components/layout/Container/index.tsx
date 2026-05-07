type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <>
      <main className="w-full flex flex-col gap-20 my-12 lg:gap-30">
        {children}
      </main>
    </>
  );
}
