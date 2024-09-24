export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>This is inner layout..</h1>
      {children}
    </>
  );
}
