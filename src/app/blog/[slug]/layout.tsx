
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <div className="mx-auto min-h-screen max-w-3xl pt-24 px-6 sm:px-0">{children}</div>
    </main>
  );
}
