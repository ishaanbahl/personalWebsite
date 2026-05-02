const navLinks = [
    { label: "cv", href: "/IshaanBahl_Resume2026.pdf" },
    { label: "x", href: "https://x.com/IshaanBahll" },
    { label: "linkedin", href: "https://www.linkedin.com/in/ishaan-bahl-87140a351/" },
    { label: "github", href: "https://github.com/ishaanbahl" },
];


export default function NavLinks(){
  return (
    <nav className="flex flex-row flex-wrap justify-center gap-6">
    {navLinks.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase"
      >
        {label}
      </a>
    ))}
  </nav>
  );
}
