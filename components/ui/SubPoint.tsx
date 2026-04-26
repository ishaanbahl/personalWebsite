function Square() {
  return <span className="mt-2 shrink-0 w-1.5 h-1.5 bg-gray-400 inline-block" />;
}

export default function SubPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-gray-400 text-sm">
      <Square />
      {children}
    </li>
  );
}
