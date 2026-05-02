import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <footer>
      <NavLinks/>
      <div className="w-full px-6 md:px-16 py-10 text-center">
        <p className="text-xs tracking-widest uppercase text-gray-400">
          Ishaan Bahl 2026
        </p>
      </div>
    </footer>
  );
}