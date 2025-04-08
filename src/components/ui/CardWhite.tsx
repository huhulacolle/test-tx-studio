export default function CardWhite({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-white p-3 rounded-xl">{children}</div>;
}
