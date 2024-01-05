export function Footer() {
  const date = new Date();

  return (
    <footer className="content-block max-w-screen-lg mt-7 flex justify-center text-typography w-[100%] p-3 md:py-7">
      potyoma | {date.getFullYear()}
    </footer>
  );
}
