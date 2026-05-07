export function Footer() {
  const year = new Date().getFullYear();

  return <footer className="text-[-(--text-color)] text-center"><a href="https://github.com/PhilippeDi4s">&copy; {year} Philipe Dias. Todos os direitos reservados</a></footer>;
}
