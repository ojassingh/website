
export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="prose dark:prose-invert prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-headings:font-normal prose-headings:tracking-tighter tracking-tighter max-w-3xl mx-auto px-0">
        {children}
      </div>
    )
  }