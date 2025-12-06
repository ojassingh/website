export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-3xl px-0 prose-headings:font-normal prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:tracking-tighter tracking-tighter">
      {children}
    </div>
  );
}
